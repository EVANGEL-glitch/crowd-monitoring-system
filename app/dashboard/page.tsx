"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";

import CrowdMap from "@/components/DynamicMap";
import LiveClock from "@/components/LiveClock";
import CrowdZones from "@/components/CrowdZones";
import CrowdChart from "@/components/CrowdChart";
import StatCard from "@/components/StatCard";

import {
  Users,
  AlertTriangle,
  Activity,
  Building2,
} from "lucide-react";

export default function DashboardPage() {
  const [crowdCount, setCrowdCount] = useState(0);

  const [zoneA, setZoneA] = useState(0);
  const [zoneB, setZoneB] = useState(0);
  const [zoneC, setZoneC] = useState(0);
  const [crowdHistory, setCrowdHistory] = useState<number[]>([]);

  useEffect(() => {
    const API_URL = "http://127.0.0.1:8000";

    fetch(`${API_URL}/api/crowd`)
      .then((res) => res.json())
      .then((data) => {
        setZoneA(data.zoneA);
        setZoneB(data.zoneB);
        setZoneC(data.zoneC);

        const total = data.zoneA + data.zoneB + data.zoneC;
        setCrowdCount(total);
        setCrowdHistory([total]);
      });

    const socket = io(API_URL);

    socket.on("crowd_update", (data) => {
      setZoneA(data.zoneA);
      setZoneB(data.zoneB);
      setZoneC(data.zoneC);

      const total = data.zoneA + data.zoneB + data.zoneC;
      setCrowdCount(total);
      setCrowdHistory((prev) => {
      const updated = [...prev, total];
      return updated.slice(-10);
    });
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  const emergency = crowdCount > 220;

  let riskLevel = "Low";
  if (crowdCount > 200) riskLevel = "High";
  else if (crowdCount > 100) riskLevel = "Moderate";

  return (
    <div className="p-8">
      {emergency && (
        <div className="bg-red-600 text-white p-4 rounded-xl mb-6">
          🚨 Warning: Crowd level exceeds safe threshold.
        </div>
      )}

      <h1 className="text-4xl font-bold">
        Smart Crowd Management Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <StatCard
          title="Current Crowd"
          value={crowdCount}
          icon={<Users size={28} />}
        />

        <StatCard
          title="Risk Level"
          value={riskLevel}
          icon={<Activity size={28} />}
        />

        <StatCard
          title="Alert Status"
          value={emergency ? "⚠️ ALERT" : "✅ SAFE"}
          icon={<AlertTriangle size={28} />}
        />

        <StatCard
          title="Peak Capacity"
          value="500"
          icon={<Building2 size={28} />}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <StatCard title="Zone A" value={zoneA} />
          <StatCard title="Zone B" value={zoneB} />
          <StatCard title="Zone C" value={zoneC} />
      </div>

      <CrowdChart crowdHistory={crowdHistory} />
      <CrowdZones
       zoneA={zoneA}
       zoneB={zoneB}
       zoneC={zoneC}/>
      <LiveClock />
      <CrowdMap
        zoneA={zoneA}
        zoneB={zoneB}
        zoneC={zoneC}/>
    </div>
  );
}

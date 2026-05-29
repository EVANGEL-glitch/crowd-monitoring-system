"use client";

import { useEffect, useState } from "react";
import {
  AlertTriangle,
  ShieldCheck,
  Users,
  Siren,
} from "lucide-react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  const [crowdCount, setCrowdCount] = useState(120);
  const [risk, setRisk] = useState("Safe");
  const [prediction, setPrediction] = useState(140);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomCrowd = Math.floor(Math.random() * 300);
      setCrowdCount(randomCrowd);

      if (randomCrowd > 220) {
        setRisk("High Risk");
      } else if (randomCrowd > 150) {
        setRisk("Moderate");
      } else {
        setRisk("Safe");
      }

      setPrediction(randomCrowd + 20);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const chartData = {
    labels: ["10AM", "11AM", "12PM", "1PM", "2PM", "3PM"],
    datasets: [
      {
        label: "Crowd Density",
        data: [50, 90, 120, 180, 240, crowdCount],
        borderColor: "rgb(59,130,246)",
        backgroundColor: "rgba(59,130,246,0.5)",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        Smart Crowd Monitoring System
      </h1>

      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <Users className="mb-3 text-blue-500" size={40} />
          <h2 className="text-xl font-semibold">Live Crowd</h2>
          <p className="text-3xl font-bold mt-2">{crowdCount}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <AlertTriangle className="mb-3 text-yellow-500" size={40} />
          <h2 className="text-xl font-semibold">Risk Level</h2>
          <p className="text-2xl font-bold mt-2">{risk}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <ShieldCheck className="mb-3 text-green-500" size={40} />
          <h2 className="text-xl font-semibold">Safety Status</h2>

          <p className="text-2xl font-bold mt-2">
            {risk === "High Risk" ? "Unsafe" : "Stable"}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <Siren className="mb-3 text-red-500" size={40} />
          <h2 className="text-xl font-semibold">Predicted Crowd</h2>
          <p className="text-2xl font-bold mt-2">{prediction}</p>
        </div>

      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Crowd Analytics
        </h2>

        <Line data={chartData} />
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-red-100 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-3">
            Emergency Alert
          </h2>

          <p>
            If crowd exceeds safe threshold,
            emergency alerts will be sent automatically.
          </p>
        </div>

        <div className="bg-green-100 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-green-600 mb-3">
            Smart Route Suggestion
          </h2>

          <p>
            Suggested Route: Use Gate C due to lower crowd density.
          </p>
        </div>

      </div>
    </div>
  );
}
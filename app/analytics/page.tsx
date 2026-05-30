"use client";

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

export default function AnalyticsPage() {
  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Crowd Count",
        data: [120, 180, 150, 220, 300, 450, 380],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        Crowd Analytics
      </h1>

      <div className="border rounded-xl p-6 shadow">
        <Line data={data} />
      </div>
    </div>
  );
}
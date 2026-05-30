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

type CrowdChartProps = {
  crowdHistory: number[];
};

export default function CrowdChart({
  crowdHistory,
}: CrowdChartProps) {
  const data = {
  labels: crowdHistory.map((_, index) => `T${index + 1}`),
  datasets: [
    {
      label: "Total Crowd",
      data: crowdHistory,
      borderWidth: 3,
    },
  ],
};

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-4">
        Crowd Trend Analysis
      </h2>

      <Line data={data} />
    </div>
  );
}
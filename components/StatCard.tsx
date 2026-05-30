import { ReactNode } from "react";

type StatCardProps = {
  title: string;
  value: string | number;
  icon?: ReactNode;
};

export default function StatCard({
  title,
  value,
  icon,
}: StatCardProps) {
  return (
    <div className="border rounded-xl p-6 shadow-lg bg-white hover:shadow-xl transition">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-600">
          {title}
        </h2>

        <div className="text-blue-600">
          {icon}
        </div>
      </div>

      <p className="text-3xl font-bold mt-4">
        {value}
      </p>
    </div>
  );
}
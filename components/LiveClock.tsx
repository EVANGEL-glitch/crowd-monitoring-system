"use client";

import { useEffect, useState } from "react";

export default function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white shadow rounded-xl p-4">
      <h3 className="font-semibold">
        Last Updated
      </h3>

      <p>{time}</p>
    </div>
  );
}
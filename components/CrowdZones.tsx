type CrowdZonesProps = {
  zoneA: number;
  zoneB: number;
  zoneC: number;
};

export default function CrowdZones({
  zoneA,
  zoneB,
  zoneC,
}: CrowdZonesProps) {
  const zones = [
    {
      name: "Zone A",
      crowd: zoneA,
      status: zoneA > 150 ? "High" : zoneA > 80 ? "Moderate" : "Safe",
      color:
        zoneA > 150
          ? "bg-red-500"
          : zoneA > 80
          ? "bg-yellow-500"
          : "bg-green-500",
    },
    {
      name: "Zone B",
      crowd: zoneB,
      status: zoneB > 150 ? "High" : zoneB > 80 ? "Moderate" : "Safe",
      color:
        zoneB > 150
          ? "bg-red-500"
          : zoneB > 80
          ? "bg-yellow-500"
          : "bg-green-500",
    },
    {
      name: "Zone C",
      crowd: zoneC,
      status: zoneC > 150 ? "High" : zoneC > 80 ? "Moderate" : "Safe",
      color:
        zoneC > 150
          ? "bg-red-500"
          : zoneC > 80
          ? "bg-yellow-500"
          : "bg-green-500",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-4">
        Crowd Zones
      </h2>

      <div className="space-y-4">
        {zones.map((zone) => (
          <div
            key={zone.name}
            className="flex justify-between items-center border p-4 rounded-lg"
          >
            <div>
              <h3 className="font-semibold">
                {zone.name}
              </h3>

              <p className="text-gray-500">
                Visitors: {zone.crowd}
              </p>
            </div>

            <span
              className={`${zone.color} text-white px-4 py-2 rounded-full`}
            >
              {zone.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
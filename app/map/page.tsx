import CrowdMap from "@/components/DynamicMap";

export default function MapPage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">
        Crowd Heat Map
      </h1>

      <CrowdMap
        zoneA={120}
        zoneB={80}
        zoneC={60}
      />
    </div>
  );
}
export default function AlertsPage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">
        Crowd Alerts
      </h1>

      <div className="space-y-4">

        <div className="bg-red-100 border border-red-400 p-4 rounded">
          High Crowd Density Detected
        </div>

        <div className="bg-yellow-100 border border-yellow-400 p-4 rounded">
          Moderate Crowd Near Entrance
        </div>

        <div className="bg-green-100 border border-green-400 p-4 rounded">
          Emergency Exits Clear
        </div>

      </div>
    </div>
  );
}
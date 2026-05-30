export default function VisitorStats() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-4">
        Daily Statistics
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <h3 className="font-bold text-2xl">2450</h3>
          <p>Total Visitors</p>
        </div>

        <div>
          <h3 className="font-bold text-2xl">580</h3>
          <p>Peak Hour Visitors</p>
        </div>

        <div>
          <h3 className="font-bold text-2xl">92%</h3>
          <p>Safety Score</p>
        </div>

        <div>
          <h3 className="font-bold text-2xl">18</h3>
          <p>Alerts Generated</p>
        </div>
      </div>
    </div>
  );
}
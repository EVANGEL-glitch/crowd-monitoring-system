import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/analytics">Analytics</Link>
        <Link href="/map">Map</Link>
        <Link href="/alerts">Alerts</Link>
      </div>
    </nav>
  );
}
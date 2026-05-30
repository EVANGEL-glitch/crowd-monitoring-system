"use client";

import { useEffect } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type CrowdMapProps = {
  zoneA: number;
  zoneB: number;
  zoneC: number;
};

export default function CrowdMap({
  zoneA,
  zoneB,
  zoneC,
}: CrowdMapProps) {

  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 mt-8">
      <h2 className="text-2xl font-semibold mb-4">
        Tourist Area Monitoring
      </h2>

      <MapContainer
        center={[13.0827, 80.2707]}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          attribution="OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[13.0827, 80.2707]}>
  <Popup>
    Zone A <br />
    Visitors: {zoneA}
  </Popup>
</Marker>

<Marker position={[13.087, 80.275]}>
  <Popup>
    Zone B <br />
    Visitors: {zoneB}
  </Popup>
</Marker>

<Marker position={[13.0905, 80.2805]}>
  <Popup>
    Zone C <br />
    Visitors: {zoneC}
  </Popup>
</Marker>
      </MapContainer>
    </div>
  );
}
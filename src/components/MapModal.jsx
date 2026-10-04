import React, { useEffect, useRef } from "react";
import { X, Navigation, Download, MapPin, Mountain } from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { FIVE_LAKES_COORDINATES, VIHREN_PEAK_COORDINATES, MAP_LOCATIONS, downloadGpxFile } from "../data/gpxData";

// Fix standard Leaflet icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function MapModal({ isOpen, onClose, activeTrailId }) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      if (!mapContainerRef.current) return;

      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }

      // Initial center around Vihren Hut
      const map = L.map(mapContainerRef.current, {
        center: [41.7558, 23.4158],
        zoom: 14,
        zoomControl: true
      });
      mapInstanceRef.current = map;

      // OpenTopoMap tile layer (offline-friendly cached tiles, topographic contours)
      L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
        maxZoom: 17,
        attribution: "Map data: &copy; OpenStreetMap, SRTM | Map style: &copy; OpenTopoMap"
      }).addTo(map);

      // Polylines and Waypoints
      if (activeTrailId === "five-lakes" || !activeTrailId) {
        const polyCoords = FIVE_LAKES_COORDINATES.map(pt => [pt.lat, pt.lng]);
        const polyline = L.polyline(polyCoords, {
          color: "#059669",
          weight: 4,
          opacity: 0.85,
          dashArray: "2, 8"
        }).addTo(map);

        FIVE_LAKES_COORDINATES.filter((_, i) => i % 2 === 0).forEach(pt => {
          L.circleMarker([pt.lat, pt.lng], {
            radius: 5,
            fillColor: "#10b981",
            color: "#ffffff",
            weight: 2,
            opacity: 1,
            fillOpacity: 0.9
          })
            .bindPopup(`<b>${pt.name}</b><br/>גובה: ${pt.ele} מטר`)
            .addTo(map);
        });

        if (activeTrailId === "five-lakes") {
          map.fitBounds(polyline.getBounds(), { padding: [30, 30] });
        }
      }

      if (activeTrailId === "vihren-peak" || !activeTrailId) {
        const polyCoords = VIHREN_PEAK_COORDINATES.map(pt => [pt.lat, pt.lng]);
        const polyline = L.polyline(polyCoords, {
          color: "#dc2626",
          weight: 4,
          opacity: 0.9
        }).addTo(map);

        VIHREN_PEAK_COORDINATES.filter((_, i) => i % 2 === 0).forEach(pt => {
          L.circleMarker([pt.lat, pt.lng], {
            radius: 5,
            fillColor: "#ef4444",
            color: "#ffffff",
            weight: 2,
            opacity: 1,
            fillOpacity: 0.9
          })
            .bindPopup(`<b>${pt.name}</b><br/>גובה: ${pt.ele} מטר`)
            .addTo(map);
        });

        if (activeTrailId === "vihren-peak") {
          map.fitBounds(polyline.getBounds(), { padding: [30, 30] });
        }
      }

      // Add main locations markers
      MAP_LOCATIONS.forEach(loc => {
        let markerColor = "#3b82f6";
        if (loc.type === "peak") markerColor = "#9333ea";
        if (loc.type === "hut") markerColor = "#047857";
        if (loc.type === "hotel") markerColor = "#d97706";

        L.circleMarker([loc.lat, loc.lng], {
          radius: 7,
          fillColor: markerColor,
          color: "#ffffff",
          weight: 2,
          opacity: 1,
          fillOpacity: 1
        })
          .bindPopup(`<b>${loc.name}</b><br/>${loc.desc}`)
          .addTo(map);
      });

    }, 200);

    return () => {
      clearTimeout(timer);
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [isOpen, activeTrailId]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[92vh] flex flex-col overflow-hidden border border-emerald-500 shadow-2xl text-right">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-slate-50">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200 text-slate-500 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2">
            <h3 className="font-black text-slate-900 text-base">
              מפת מסלולי הרי פירין (GPX טופוגרפי)
            </h3>
            <Mountain className="w-5 h-5 text-emerald-700" />
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-between px-4 py-2 bg-emerald-50 border-b border-emerald-100 text-[11px] text-slate-700">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-bold text-emerald-800">
              <span className="w-3 h-3 rounded-full bg-emerald-600 inline-block"></span>
              חמשת האגמים (מעגלי)
            </span>
            <span className="flex items-center gap-1 font-bold text-rose-800">
              <span className="w-3 h-3 rounded-full bg-rose-600 inline-block"></span>
              פסגת ויחרן דרך קאזאנה
            </span>
          </div>
          <span className="text-slate-500">קנ״מ טופוגרפי</span>
        </div>

        {/* Leaflet Container */}
        <div className="flex-1 w-full min-h-[360px] relative bg-slate-100">
          <div ref={mapContainerRef} className="absolute inset-0 w-full h-full" />
        </div>

        {/* Action Buttons Footer */}
        <div className="p-3 bg-white border-t flex items-center justify-between gap-2">
          <div className="flex gap-2">
            <button
              onClick={() => downloadGpxFile("Five_Lakes_Loop_Vihren.gpx", "Five Lakes Loop", FIVE_LAKES_COORDINATES)}
              className="flex items-center gap-1 bg-emerald-700 hover:bg-emerald-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>הורד GPX אגמים</span>
            </button>
            <button
              onClick={() => downloadGpxFile("Vihren_Peak_Loop_Kazana.gpx", "Vihren Peak Loop", VIHREN_PEAK_COORDINATES)}
              className="flex items-center gap-1 bg-rose-700 hover:bg-rose-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>הורד GPX פסגה</span>
            </button>
          </div>
          <a
            href="https://maps.google.com/?q=41.7558,23.4158"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-slate-700 hover:text-emerald-700 text-xs font-bold"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>פתח ב-Google Maps</span>
          </a>
        </div>
      </div>
    </div>
  );
}

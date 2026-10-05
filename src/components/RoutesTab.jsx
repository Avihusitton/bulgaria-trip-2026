import React from "react";
import { 
  Mountain, MapPin, Download, ExternalLink, AlertTriangle, 
  CheckCircle, Navigation, Phone, Compass, Map, 
  ArrowUpRight, Clock, Activity, Bike
} from "lucide-react";
import { TRAILS_LIST, STATUS_TYPES } from "../data/tripData";
import { FIVE_LAKES_COORDINATES, VIHREN_PEAK_COORDINATES, SEVEN_RILA_LAKES_COORDINATES, downloadGpxFile } from "../data/gpxData";

export default function RoutesTab({ 
  onOpenMapModal, 
  offlineTrails, 
  onToggleOfflineTrail, 
  onOpenSos,
  onOpenPlanB
}) {
  const trailImages = {
    "rila-lakes": "./images/rila-lakes.jpg",
    "five-lakes": "./images/five-lakes.jpg",
    "vihren-peak": "./images/vihren-peak.jpg",
    "ebike-valley": "./images/ebike-bansko.jpg",
    "plan-b-melnik": "./images/plan-b-melnik.jpg"
  };

  return (
    <div className="space-y-5 pb-24 animate-fade-in text-right">
      
      {/* Top Header */}
      <div className="flex items-baseline justify-between px-1 pt-1">
        <button
          onClick={() => onOpenMapModal(null)}
          className="flex items-center gap-1.5 bg-[#204234] hover:bg-[#183328] text-white font-medium py-1.5 px-3 rounded-xl text-xs shadow-xs transition active:scale-95"
        >
          <Map className="w-3.5 h-3.5" />
          <span>מפה טופוגרפית 🗺️</span>
        </button>
        <div>
          <span className="text-[10px] font-magazine font-black tracking-widest text-[#9e4624] block uppercase">EXPEDITION TRAILS · PIRIN & RILA</span>
          <h2 className="text-2xl font-black font-editorial text-[#162c21]">
            מסלולי הטיול בהרי רילה ופירין
          </h2>
        </div>
      </div>

      {/* Offline Notice */}
      <div className="bg-[#f7f4ee] border border-[#e5dfd5] rounded-2xl p-3.5 text-xs text-[#52493d] flex items-start gap-2.5">
        <Compass className="w-4 h-4 text-[#204234] shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <b>סנכרון שטח ו-Offline:</b> כל המסלולים מבוססים על הקלטות שטח מאומתות. קובצי ה-GPX נשמרים ומיוצאים ישירות מהמכשיר עבור אפליקציות שטח (Garmin / OsmAnd / Wikiloc) ללא צורך בקליטה בהר.
        </div>
      </div>

      {/* TRAILS LIST */}
      <div className="space-y-4">
        {TRAILS_LIST.map((trail) => {
          const isOfflineSaved = !!offlineTrails[trail.id];
          const isRilaLakes = trail.id === "rila-lakes";
          const isFiveLakes = trail.id === "five-lakes";
          const isVihrenPeak = trail.id === "vihren-peak";
          const isEbike = trail.id === "ebike-valley";
          const imgUrl = trailImages[trail.id] || "./images/hero-pirin.jpg";

          return (
            <div
              key={trail.id}
              className={`rounded-3xl border overflow-hidden bg-white shadow-xs transition-all ${
                isRilaLakes
                  ? "border-[#1d4ed8]"
                  : isVihrenPeak
                  ? "border-[#b85c39]"
                  : isFiveLakes
                  ? "border-[#204234]"
                  : "border-[#ded8ce]"
              }`}
            >
              {/* Route Image Banner */}
              <div className="relative min-h-[130px] flex flex-col justify-end p-4 text-white overflow-hidden">
                <img
                  src={imgUrl}
                  alt={trail.name}
                  className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.70]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>

                <div className="relative z-10 flex items-end justify-between">
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border backdrop-blur-xs ${
                    isRilaLakes
                      ? "bg-blue-950/80 border-blue-400 text-blue-200"
                      : isVihrenPeak
                      ? "bg-rose-950/80 border-rose-400 text-rose-200"
                      : "bg-[#162c21]/80 border-emerald-400 text-emerald-200"
                  }`}>
                    {STATUS_TYPES[trail.status]?.label || trail.status}
                  </span>

                  <div className="text-right">
                    {trail.dayAssigned && (
                      <span className="text-[10px] font-mono text-[#e8ded1] block">
                        יום {trail.dayAssigned} · {trail.datePlanned}
                      </span>
                    )}
                    <h3 className="text-lg font-black font-editorial text-white drop-shadow-sm">
                      {trail.name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Trail Specs Grid */}
              <div className="p-4 space-y-3.5 bg-[#fcfaf7]">
                <div className="grid grid-cols-3 gap-2 text-center text-xs bg-white p-2.5 rounded-2xl border border-[#ded8ce] font-mono">
                  <div>
                    <span className="block text-slate-400 text-[10px] font-sans">מרחק</span>
                    <span className="font-bold text-[#1c2722]">{trail.distanceKm} ק״מ</span>
                  </div>
                  <div>
                    <span className="block text-slate-400 text-[10px] font-sans">טיפוס אנכי</span>
                    <span className="font-bold text-[#1c2722]">
                      {trail.elevationGainM ? `+${trail.elevationGainM} מ'` : trail.elevationGain}
                    </span>
                  </div>
                  <div>
                    <span className="block text-slate-400 text-[10px] font-sans">זמן משוער</span>
                    <span className="font-bold text-[#1c2722]">{trail.durationHours}</span>
                  </div>
                </div>

                {/* Trail Details */}
                <div className="space-y-1 text-xs text-[#52493d]">
                  <div className="flex justify-between border-b border-[#ece6db] pb-1">
                    <span className="font-bold text-[#1c2722]">{trail.difficulty}</span>
                    <span className="text-slate-500">דרגת קושי:</span>
                  </div>
                  <div className="flex justify-between border-b border-[#ece6db] pb-1">
                    <span className="font-bold text-[#1c2722] font-mono ltr">
                      {trail.maxAltitudeM ? `${trail.maxAltitudeM} m` : trail.maxAltitude}
                    </span>
                    <span className="text-slate-500">גובה שיא:</span>
                  </div>
                  <div className="flex justify-between border-b border-[#ece6db] pb-1">
                    <span className="font-bold text-[#1c2722]">{trail.trailType}</span>
                    <span className="text-slate-500">מבנה המסלול:</span>
                  </div>
                  {trail.startPoint && (
                    <div className="flex justify-between border-b border-[#ece6db] pb-1">
                      <span className="font-bold text-[#1c2722]">{trail.startPoint}</span>
                      <span className="text-slate-500">נקודת יציאה:</span>
                    </div>
                  )}
                </div>

                {/* Lake List / Waypoints */}
                {trail.lakes && (
                  <div className="bg-[#f0f6f2] p-3 rounded-2xl border border-[#d2e2d7] text-xs space-y-1">
                    <span className="font-bold text-[#204234] block mb-1">
                      {isRilaLakes ? "שבעת האגמים במסלול:" : "האגמים בלולאה:"}
                    </span>
                    <ul className="list-disc list-inside space-y-0.5 text-[#2c5342]">
                      {trail.lakes.map((lake, lIdx) => (
                        <li key={lIdx}>{lake}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {trail.keyWaypoints && (
                  <div className="bg-[#fdf3f0] p-3 rounded-2xl border border-[#f3d4cb] text-xs space-y-1">
                    <span className="font-bold text-[#8a2a16] block mb-1">נקודות ציון מרכזיות:</span>
                    <ul className="list-disc list-inside space-y-0.5 text-[#732616]">
                      {trail.keyWaypoints.map((wp, wpIdx) => (
                        <li key={wpIdx}>{wp}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Field Insights */}
                {trail.hazards && (
                  <div className="bg-[#fff9eb] p-3 rounded-2xl border border-[#f5e4bd] text-xs space-y-1 text-[#7a5814]">
                    <div className="flex items-center gap-1 font-bold">
                      <span className="text-sm">💡</span>
                      <span>דגשי שטח חשובים:</span>
                    </div>
                    <ul className="list-disc list-inside space-y-0.5 text-[11px]">
                      {trail.hazards.map((h, hIdx) => (
                        <li key={hIdx}>{h}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Actions & Offline Checkbox */}
                <div className="pt-1 space-y-2">
                  <label className="flex items-center justify-between p-2 rounded-xl bg-white hover:bg-[#f7f4ee] border border-[#ded8ce] cursor-pointer text-xs transition">
                    <input
                      type="checkbox"
                      checked={isOfflineSaved}
                      onChange={() => onToggleOfflineTrail(trail.id)}
                      className="w-4 h-4 rounded text-[#204234] focus:ring-[#204234]"
                    />
                    <div className="flex items-center gap-1.5 font-bold text-slate-700">
                      <span>הורדתי ושמרתי מסלול זה Offline בטלפון</span>
                      {isOfflineSaved ? (
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Download className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                  </label>

                  <div className="grid grid-cols-2 gap-2">
                    {(isRilaLakes || isFiveLakes || isVihrenPeak) && (
                      <button
                        onClick={() => onOpenMapModal(trail.id)}
                        className="flex items-center justify-center gap-1 bg-[#204234] hover:bg-[#183328] text-white font-medium py-2 rounded-xl text-xs transition shadow-xs"
                      >
                        <Map className="w-3.5 h-3.5" />
                        <span>צפה במפת GPX</span>
                      </button>
                    )}

                    {isRilaLakes && (
                      <button
                        onClick={() => downloadGpxFile("Seven_Rila_Lakes_Loop.gpx", "Seven Rila Lakes Loop", SEVEN_RILA_LAKES_COORDINATES)}
                        className="flex items-center justify-center gap-1 bg-[#1e3a8a] hover:bg-[#172554] text-white font-medium py-2 rounded-xl text-xs transition"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>הורד GPX מקומי</span>
                      </button>
                    )}

                    {isFiveLakes && (
                      <button
                        onClick={() => downloadGpxFile("Five_Lakes_Loop_Vihren.gpx", "Five Lakes Loop", FIVE_LAKES_COORDINATES)}
                        className="flex items-center justify-center gap-1 bg-[#1a2b23] hover:bg-black text-white font-medium py-2 rounded-xl text-xs transition"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>הורד GPX מקומי</span>
                      </button>
                    )}

                    {isVihrenPeak && (
                      <button
                        onClick={() => downloadGpxFile("Vihren_Peak_Loop_Kazana.gpx", "Vihren Peak Loop", VIHREN_PEAK_COORDINATES)}
                        className="flex items-center justify-center gap-1 bg-[#8a2a16] hover:bg-[#6e1e0f] text-white font-medium py-2 rounded-xl text-xs transition"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>הורד GPX מקומי</span>
                      </button>
                    )}

                    {/* Navigation Endpoint */}
                    <a
                      href={trail.externalLinks?.googleMaps || "https://www.google.com/maps/dir/?api=1&destination=41.7558,23.4158"}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-1 bg-white hover:bg-[#f4efe8] text-[#204234] font-medium py-2 rounded-xl text-xs border border-[#ded8ce] transition"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>נווט לתחילת המסלול</span>
                    </a>

                    {trail.externalLinks?.wikiloc && (
                      <a
                        href={trail.externalLinks.wikiloc}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-1 bg-white hover:bg-[#f4efe8] text-slate-700 font-medium py-2 rounded-xl text-xs border border-[#ded8ce] transition"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                        <span>פתח ב-Wikiloc</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

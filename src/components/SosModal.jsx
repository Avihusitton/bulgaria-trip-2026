import React, { useState, useEffect } from "react";
import { Phone, MapPin, Copy, Check, AlertTriangle, ShieldAlert, X } from "lucide-react";
import { EMERGENCY_CONTACTS } from "../data/tripData";

export default function SosModal({ isOpen, onClose }) {
  const [coords, setCoords] = useState(null);
  const [gpsLoading, setGpsLoading] = useState(false);
  const [gpsError, setGpsError] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      getLocation();
    }
  }, [isOpen]);

  const getLocation = () => {
    setGpsLoading(true);
    setGpsError(null);
    if (!navigator.geolocation) {
      setGpsError("הדפדפן אינו תומך ב-GPS.");
      setGpsLoading(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude.toFixed(5),
          lng: position.coords.longitude.toFixed(5),
          altitude: position.coords.altitude ? Math.round(position.coords.altitude) : "לא זמין",
          accuracy: Math.round(position.coords.accuracy)
        });
        setGpsLoading(false);
      },
      (error) => {
        setGpsError("לא ניתן לקרוא מיקום. ודא ששירותי המיקום מאופשרים בהגדרות הטלפון.");
        setGpsLoading(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  const copyLocationText = () => {
    const text = coords
      ? `🚨 חילוץ / עזרה דחופה - הרי פירין בולגריה!\nמיקום מדויק: ${coords.lat}, ${coords.lng}\nגובה: ${coords.altitude} מטר (דיוק: ${coords.accuracy} מטר)\nאביהו וגיל`
      : `🚨 חילוץ / עזרה דחופה - הרי פירין בולגריה! (באיזור בנסקו/ויחרן). אביהו וגיל`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl w-full max-w-lg max-h-[92vh] overflow-y-auto border-2 border-rose-500 shadow-2xl p-5 text-right">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-3 mb-4">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
            aria-label="סגור"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2 text-rose-600">
            <h2 className="text-xl font-black">אני בהר ויש בעיה (SOS)</h2>
            <ShieldAlert className="w-7 h-7 animate-pulse text-rose-600" />
          </div>
        </div>

        {/* Live GPS Card */}
        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={getLocation}
              className="text-xs bg-rose-200 hover:bg-rose-300 text-rose-900 px-2.5 py-1 rounded-lg font-medium transition"
            >
              {gpsLoading ? "מאתר..." : "רענן מיקום 🔄"}
            </button>
            <div className="flex items-center gap-1.5 text-rose-800 font-bold text-sm">
              <span>המיקום שלך כרגע ב-GPS</span>
              <MapPin className="w-4 h-4 text-rose-600" />
            </div>
          </div>

          {coords ? (
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between bg-white/80 p-2 rounded-xl border border-rose-100 font-mono">
                <span className="text-rose-900 font-bold ltr">{coords.lat}, {coords.lng}</span>
                <span className="text-slate-600">קואורדינטות:</span>
              </div>
              <div className="flex justify-between text-xs text-slate-600 px-1">
                <span>גובה משוער: <b>{coords.altitude} מטר</b></span>
                <span>דיוק GPS: <b>±{coords.accuracy} מטר</b></span>
              </div>
            </div>
          ) : gpsLoading ? (
            <p className="text-sm text-rose-700 animate-pulse text-center py-2">
              דוגם נתוני לווין GPS מהטלפון...
            </p>
          ) : (
            <p className="text-xs text-rose-600 bg-white/70 p-2 rounded-xl">
              {gpsError || "לחץ 'רענן מיקום' לקבלת נ״צ מדויק"}
            </p>
          )}

          <button
            onClick={copyLocationText}
            className="w-full mt-3 flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-bold py-2.5 px-4 rounded-xl shadow-md transition active:scale-98"
          >
            {copied ? (
              <>
                <span>הועתק ללוח! שלח בוואטסאפ</span>
                <Check className="w-5 h-5 text-emerald-300" />
              </>
            ) : (
              <>
                <span>העתק מיקום מדויק לשליחה בוואטסאפ / SMS</span>
                <Copy className="w-5 h-5" />
              </>
            )}
          </button>
        </div>

        {/* Big Emergency Call Buttons */}
        <div className="space-y-2.5 mb-5">
          <p className="font-bold text-slate-800 text-sm">חיוג חירום מיידי (לחיצה אחת):</p>
          
          <a
            href="tel:112"
            className="flex items-center justify-between bg-rose-600 hover:bg-rose-700 text-white p-3.5 rounded-2xl shadow-lg transition active:scale-98"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-6 h-6 animate-bounce" />
              <span className="text-2xl font-black font-mono ltr">112</span>
            </div>
            <div className="text-right">
              <div className="font-bold">מוקד חירום אירופה (SOS)</div>
              <div className="text-xs text-rose-100">משטרה / אמבולנס / חילוץ כללי</div>
            </div>
          </a>

          <a
            href="tel:+359887100241"
            className="flex items-center justify-between bg-amber-600 hover:bg-amber-700 text-white p-3.5 rounded-2xl shadow-lg transition active:scale-98"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-6 h-6" />
              <span className="text-base font-bold font-mono ltr">+359 887 100 241</span>
            </div>
            <div className="text-right">
              <div className="font-bold">חילוץ הרים PSS בנסקו (ראשי)</div>
              <div className="text-xs text-amber-100">יחידת החילוץ ההררית בפירין</div>
            </div>
          </a>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <a
              href="tel:074988132"
              className="flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-900 text-white p-2.5 rounded-xl font-mono font-bold ltr"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>0749 8 81 32</span>
            </a>
            <a
              href="tel:074988134"
              className="flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-900 text-white p-2.5 rounded-xl font-mono font-bold ltr"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>0749 8 81 34</span>
            </a>
          </div>
        </div>

        {/* Guidance Checklist */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 text-xs text-slate-700 space-y-2">
          <div className="flex items-center gap-1.5 font-bold text-slate-900">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>מה לומר לצוות החילוץ:</span>
          </div>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>מי אתם (אביהו וגיל, מטיילים מישראל)</li>
            <li>מה קרה ומה מצב הנפגע (אם יש פציעה/תשישות/חבלה)</li>
            <li>מיקום מדויק מקו השביל או הקואורדינטות הנ"ל</li>
            <li>צבע ביגוד ומעילים לצורך זיהוי מהיר מהאוויר/קרקע</li>
            <li>תנאי מזג אוויר וראות במקומכם (רוח, ערפל, קרח)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

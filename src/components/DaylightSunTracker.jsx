import React from "react";
import { Sunrise, Sunset, Sun, ShieldAlert, Clock } from "lucide-react";

export default function DaylightSunTracker() {
  return (
    <div className="bg-[#f5efe6] border border-[#e2d5c3] rounded-3xl p-4 shadow-xs text-right space-y-2.5">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold bg-[#e8ded1] text-[#5c4f41] px-2 py-0.5 rounded-full font-mono ltr">
          Pirin · Oct 2026
        </span>
        <div className="flex items-center gap-1.5 text-[#355243] font-bold text-xs">
          <span>שעות אור ושקיעה באוקטובר</span>
          <Sun className="w-4 h-4 text-amber-600" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        <div className="bg-white/80 p-2 rounded-2xl border border-[#ded2c1]">
          <div className="flex items-center justify-center gap-1 text-amber-700 font-bold mb-0.5">
            <Sunrise className="w-3.5 h-3.5" />
            <span>זריחה</span>
          </div>
          <span className="font-mono font-bold text-slate-800 text-sm ltr">~07:31</span>
        </div>

        <div className="bg-white/80 p-2 rounded-2xl border border-[#ded2c1]">
          <div className="flex items-center justify-center gap-1 text-orange-600 font-bold mb-0.5">
            <Sunset className="w-3.5 h-3.5" />
            <span>שקיעה</span>
          </div>
          <span className="font-mono font-bold text-slate-800 text-sm ltr">~18:56</span>
        </div>

        <div className="bg-white/80 p-2 rounded-2xl border border-[#ded2c1]">
          <div className="flex items-center justify-center gap-1 text-indigo-700 font-bold mb-0.5">
            <Clock className="w-3.5 h-3.5" />
            <span>דמדומים</span>
          </div>
          <span className="font-mono font-bold text-slate-800 text-sm ltr">~19:24</span>
        </div>
      </div>

      <div className="bg-[#fbf4eb] border border-amber-200/90 rounded-2xl p-2.5 text-[11px] text-amber-900 flex items-start gap-2">
        <ShieldAlert className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <b>כלל בטיחות אלפיני לאוקטובר:</b> ההרים מוטלים בצל עמוק וטמפרטורת האוויר צונחת במהירות לפני השקיעה הרשמית. חובה לתכנן סיום מסלול והגעה לרכב ב-<b>18:15 לכל המאוחר</b> (פנס ראש חובה בתיק בכל מקרה).
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { ShieldCheck, CheckCircle2, XCircle, AlertCircle, ChevronLeft } from "lucide-react";
import { DECISION_GATES } from "../data/tripData";

export default function DecisionGatesBar({ gatesState, onOpenGatesModal }) {
  const yesCount = Object.values(gatesState).filter(g => g?.status === "YES").length;
  const noCount = Object.values(gatesState).filter(g => g?.status === "NO").length;

  return (
    <div
      onClick={onOpenGatesModal}
      className="bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-2xl p-3.5 shadow-sm hover:border-emerald-300 transition cursor-pointer active:scale-99 mb-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs text-[#204234] font-bold">
          <span>פתח מצפן שטח והחלטות</span>
          <ChevronLeft className="w-4 h-4 text-[#204234]" />
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-800 text-xs">מצפן שטח והחלטות:</span>
          <ShieldCheck className="w-4 h-4 text-[#204234]" />
        </div>
      </div>

      <div className="flex items-center justify-between gap-1.5 mt-2.5 pt-2 border-t border-slate-100">
        {DECISION_GATES.map((gate) => {
          const status = gatesState[gate.id]?.status || "UNCHECKED";
          let badgeColor = "bg-[#f2ece2] text-slate-600 border-[#ded5c5]";
          let icon = null;

          if (status === "YES") {
            badgeColor = "bg-emerald-100 text-emerald-800 border-emerald-300";
            icon = <CheckCircle2 className="w-3 h-3 text-emerald-600 inline ml-0.5" />;
          } else if (status === "NO") {
            badgeColor = "bg-rose-100 text-rose-800 border-rose-300";
            icon = <XCircle className="w-3 h-3 text-rose-600 inline ml-0.5" />;
          }

          return (
            <div
              key={gate.id}
              className={`flex-1 text-center py-1 px-1 rounded-lg border text-[11px] font-mono font-bold ${badgeColor}`}
              title={gate.title}
            >
              <span>{gate.code.replace("GATE ", "G")}</span>
              {icon}
            </div>
          );
        })}
      </div>

      {noCount > 0 && (
        <div className="mt-2 text-[11px] text-[#9e4624] bg-[#fbf0eb] px-3 py-1.5 rounded-xl border border-[#f2d6cb] font-medium text-right flex items-center justify-end gap-1.5">
          <span>🌿 מומלץ לבדוק את מסלולי Plan B והספא להיום לטובת יום רגוע ונעים</span>
          <AlertCircle className="w-3.5 h-3.5 text-[#b85c39] shrink-0" />
        </div>
      )}
    </div>
  );
}

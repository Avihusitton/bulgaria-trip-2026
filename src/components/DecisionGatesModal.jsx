import React from "react";
import { X, CheckCircle, XCircle, HelpCircle, ShieldCheck, AlertCircle } from "lucide-react";
import { DECISION_GATES } from "../data/tripData";

export default function DecisionGatesModal({ isOpen, onClose, gatesState, onUpdateGate }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl w-full max-w-lg max-h-[92vh] overflow-y-auto border border-emerald-500 shadow-2xl p-5 text-right">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-3 mb-4">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2 text-[#162c21]">
            <h2 className="text-xl font-black font-editorial">מצפן החלטות שטח · FIELD COMPASS</h2>
            <ShieldCheck className="w-6 h-6 text-[#204234]" />
          </div>
        </div>

        <p className="text-xs text-[#52493d] mb-4 bg-[#f4efe8] p-3 rounded-2xl border border-[#ded5c5] leading-relaxed">
          מצפן זה נועד לתת לנו שקט וביטחון בהר — בדיקות פשוטות של תנאי שטח ומזג אוויר שמאפשרות ליהנות מכל רגע בראש שקט ולדעת מתי לפנות ל-Plan B המפנק.
        </p>

        {/* Gates List */}
        <div className="space-y-4">
          {DECISION_GATES.map((gate) => {
            const current = gatesState[gate.id] || { status: "UNCHECKED", lastChecked: null };
            const isYes = current.status === "YES";
            const isNo = current.status === "NO";

            return (
              <div
                key={gate.id}
                className={`p-4 rounded-2xl border transition-all ${
                  isYes
                    ? "bg-[#edf5f0] border-emerald-300"
                    : isNo
                    ? "bg-[#fdf4f2] border-rose-300"
                    : "bg-[#fdfbf7] border-[#ded8ce]"
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-white border text-slate-700 shadow-xs">
                    {gate.code}
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm">{gate.title}</h3>
                </div>

                <p className="text-xs text-slate-700 font-medium mb-1.5">{gate.question}</p>
                <div className="text-[11px] text-amber-900 bg-[#fff9eb] p-2.5 rounded-xl border border-[#f5e4bd] mb-3 leading-relaxed flex items-start gap-1.5">
                  <span className="text-sm select-none">💡</span>
                  <div>
                    <span className="font-bold">טיפ שטח מהלב: </span>
                    <span>{gate.alertContext}</span>
                  </div>
                </div>

                {/* Yes / No buttons */}
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <button
                    onClick={() => onUpdateGate(gate.id, isYes ? "UNCHECKED" : "YES")}
                    className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs transition active:scale-98 ${
                      isYes
                        ? "bg-[#204234] text-white shadow-md ring-2 ring-emerald-300"
                        : "bg-white text-slate-700 border border-slate-300 hover:bg-[#edf5f0]"
                    }`}
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-300" />
                    <span>כן (הכל תקין ופתוח)</span>
                  </button>

                  <button
                    onClick={() => onUpdateGate(gate.id, isNo ? "UNCHECKED" : "NO")}
                    className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs transition active:scale-98 ${
                      isNo
                        ? "bg-rose-700 text-white shadow-md ring-2 ring-rose-300"
                        : "bg-white text-slate-700 border border-slate-300 hover:bg-rose-50"
                    }`}
                  >
                    <XCircle className="w-4 h-4 text-rose-200" />
                    <span>לא (מעבר ל-Plan B)</span>
                  </button>
                </div>

                {/* Directive output */}
                {isYes && (
                  <div className="text-xs text-emerald-900 bg-emerald-100/70 p-2.5 rounded-xl font-medium leading-relaxed">
                    ✅ <b>כיוון מומלץ:</b> {gate.yesAction}
                  </div>
                )}
                {isNo && (
                  <div className="text-xs text-rose-900 bg-rose-100/70 p-2.5 rounded-xl font-medium leading-relaxed">
                    🌿 <b>כיוון מומלץ (Plan B):</b> {gate.noAction}
                  </div>
                )}

                {current.lastChecked && (
                  <div className="text-[10px] text-slate-500 mt-2 text-left font-mono">
                    נבדק לאחרונה: {current.lastChecked}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

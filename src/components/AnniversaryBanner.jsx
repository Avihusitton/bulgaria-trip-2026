import React, { useState } from "react";
import { Sparkles, Heart, Wine, Moon, Sun, ChevronDown, ChevronUp } from "lucide-react";
import confetti from "canvas-confetti";

export default function AnniversaryBanner() {
  const [isExpanded, setIsExpanded] = useState(false);

  const triggerRomanticConfetti = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.25 },
      colors: ["#d4af37", "#e8b4b8", "#a3b18a", "#ffffff"]
    });
  };

  const romanticMoments = [
    {
      title: "טבילה לילית תרמית פרטית בווילה",
      desc: "הבריכה התרמית הפרטית ב-Three Peaks (37–38°C) מחוממת במי מעיינות טבעיים תחת שמי הפירין המכוכבים.",
      icon: Moon
    },
    {
      title: "רגע שקיעה שקט באגם מוראטובו",
      desc: "השתקפות הפסגות המשוננות במים הצלולים של אגם מוראטובו באוויר הררי צלול ושלכת סתווית זהובה.",
      icon: Sun
    },
    {
      title: "בוקר קפה זוגי נינוח בבנסקו",
      desc: "קפה משובח ב-DABOV ברחוב פירין, הליכה שלווה בסמטאות האבן הכפריות בלי למהר לשום מקום.",
      icon: Wine
    },
    {
      title: "זמן התרגעות זוגי ב-Pulse Therme",
      desc: "ערב סאונות, בריכות מינרלים חמות וזמן איכות זוגי שקט אחרי יום הטרק באגמים.",
      icon: Sparkles
    }
  ];

  return (
    <div className="bg-[#f5efe6] border border-[#e2d5c3] rounded-3xl p-4 shadow-xs text-right relative overflow-hidden mb-4 transition-all">
      {/* Subtle organic floral/warm corner gradient */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#e8d5b5]/30 rounded-full blur-xl pointer-events-none"></div>

      <div className="flex items-center justify-between gap-2">
        <button
          onClick={triggerRomanticConfetti}
          className="flex items-center gap-1.5 bg-[#4a6b5d] hover:bg-[#3d594d] active:scale-95 text-white font-bold px-3 py-1.5 rounded-2xl text-xs shadow-xs transition"
          title="לחיי 10 השנים הבאות!"
        >
          <Heart className="w-3.5 h-3.5 text-rose-300 fill-rose-300" />
          <span>לחיי העשור הבא 🥂</span>
        </button>

        <div className="text-right">
          <div className="flex items-center justify-end gap-1.5 text-[#3a5245] font-black text-sm">
            <span>חוגגים עשור יחד · 10 שנות נישואין</span>
            <span className="text-xs">💍</span>
          </div>
          <p className="text-[11px] text-[#786c5e] font-medium font-sans">
            אביהו & גיל · 2016–2026 · הרים, מים תרמיים וזמן שלנו
          </p>
        </div>
      </div>

      {/* Expand toggle */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full mt-2.5 pt-2 border-t border-[#e5d8c6] flex items-center justify-between text-[11px] font-bold text-[#5c4f41] hover:text-[#2d3a33] transition"
      >
        <div className="flex items-center gap-1">
          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          <span>{isExpanded ? "סגור רגעי חגיגה" : "4 רגעים זוגיים מיוחדים בטיול"}</span>
        </div>
        <span className="text-[10px] text-[#8c7e6f]">רעיונות לחופשה הזוגית 🌿</span>
      </button>

      {/* Expanded Romantic Moments */}
      {isExpanded && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 pt-1 animate-fade-in">
          {romanticMoments.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="bg-white/80 border border-[#e8ded1] rounded-2xl p-3 space-y-1 shadow-2xs">
                <div className="flex items-center justify-end gap-1.5 font-bold text-[#3a5245] text-xs">
                  <span>{m.title}</span>
                  <Icon className="w-3.5 h-3.5 text-[#b07d58]" />
                </div>
                <p className="text-[11px] text-[#6d6254] leading-relaxed">{m.desc}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

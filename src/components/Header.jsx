import React, { useState, useEffect } from "react";
import { ShieldAlert, Compass, Wifi, WifiOff, Calendar, Coins, Wallet, Heart } from "lucide-react";
import { TRIP_INFO } from "../data/tripData";

export default function Header({ 
  selectedDate, 
  onSelectDate, 
  onOpenSos, 
  onOpenPlanB,
  onOpenCurrency,
  onOpenBudget
}) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const dateOptions = [
    { date: "2026-10-04", day: "04.10", chapter: "00", label: "ערב הטיול", sub: "הכנות בבית" },
    { date: "2026-10-05", day: "05.10", chapter: "01", label: "נחיתה ווילה", sub: "באניה" },
    { date: "2026-10-06", day: "06.10", chapter: "02", label: "5 אגמים & ספא", sub: "פירין" },
    { date: "2026-10-07", day: "07.10", chapter: "03", label: "פסגת ויחרן", sub: "2,914 מ'" },
    { date: "2026-10-08", day: "08.10", chapter: "04", label: "e-MTB & יער", sub: "בנסקו" },
    { date: "2026-10-09", day: "09.10", chapter: "05", label: "חזרה לארץ", sub: "טיסה 05:45" }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#f7f5f0]/95 backdrop-blur-xl border-b border-[#e5dec9] transition-all">
      {/* Top Bar — Mobile-First Compact Architecture */}
      <div className="max-w-2xl mx-auto px-3.5 py-2 flex items-center justify-between">
        
        {/* Right: Modern Brand & Anniversary Badge */}
        <div className="flex items-center gap-2">
          <h1 className="text-xl sm:text-2xl font-black tracking-tight text-[#111915]">
            בולגריה
          </h1>
          <span className="inline-flex items-center gap-1 bg-[#162c21] text-[#f4efe8] px-2.5 py-0.5 rounded-full text-[10px] font-bold">
            <Heart className="w-3 h-3 text-[#d4af37] fill-[#d4af37]" />
            <span>עשור יחד</span>
          </span>
          <span className="hidden sm:inline-block font-mono text-xs text-[#786c5f] ltr">
            5–9.10.2026
          </span>
        </div>

        {/* Left: Quick Actions (Plan B, SOS, Currency & Online Dot) */}
        <div className="flex items-center gap-1.5">
          {/* Quick Currency Converter Button */}
          <button
            onClick={onOpenCurrency}
            className="flex items-center gap-1 bg-[#eee7d8] hover:bg-[#e4dcce] text-[#44382c] px-2.5 py-1 rounded-full text-[11px] font-bold transition active:scale-95 cursor-pointer border border-[#ded4c3]"
            title="מחשבון המרת BGN ⇄ ₪"
          >
            <Coins className="w-3 h-3 text-[#b85c39]" />
            <span className="hidden xs:inline">BGN</span>
          </button>

          {/* Quick Expense Tracker Button */}
          <button
            onClick={onOpenBudget}
            className="flex items-center gap-1 bg-[#eee7d8] hover:bg-[#e4dcce] text-[#44382c] px-2.5 py-1 rounded-full text-[11px] font-bold transition active:scale-95 cursor-pointer border border-[#ded4c3]"
            title="ריכוז הוצאות"
          >
            <Wallet className="w-3 h-3 text-[#204234]" />
            <span className="hidden xs:inline">הוצאות</span>
          </button>

          {/* Plan B Jewel Pill */}
          <button
            onClick={onOpenPlanB}
            className="flex items-center gap-1 bg-[#1a3024] hover:bg-[#122219] text-[#f4efe8] font-bold px-2.5 py-1 rounded-full text-xs transition active:scale-95 cursor-pointer shadow-xs"
            title="חלופות מזג אוויר וספא"
          >
            <Compass className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-[11px]">Plan B</span>
          </button>

          {/* SOS Jewel Pill */}
          <button
            onClick={onOpenSos}
            className="flex items-center gap-1 bg-rose-700 hover:bg-rose-800 text-white font-bold px-2.5 py-1 rounded-full text-xs shadow-xs transition active:scale-95 cursor-pointer"
            title="חילוץ הררי ומספרי חירום"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-rose-200" />
            <span className="text-[11px]">SOS</span>
          </button>

          {/* Online/Offline indicator dot */}
          <div 
            className={`w-2 h-2 rounded-full shrink-0 ${isOnline ? "bg-emerald-500 ring-2 ring-emerald-200" : "bg-amber-500 ring-2 ring-amber-200 animate-pulse"}`}
            title={isOnline ? "מחובר לרשת" : "מצב אופליין"}
          />
        </div>
      </div>

      {/* Sidetracked Expedition Day Ribbon (Horizontal Swipeable) */}
      <div className="max-w-2xl mx-auto px-3 pb-2 pt-0.5">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          {dateOptions.map((opt) => {
            const isSelected = selectedDate === opt.date;
            return (
              <button
                key={opt.date}
                onClick={() => onSelectDate(opt.date)}
                className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all duration-200 select-none cursor-pointer active:scale-95 text-right ${
                  isSelected
                    ? "bg-[#111915] text-white shadow-md ring-1 ring-[#c5a371]"
                    : "bg-white/80 hover:bg-white text-[#52493d] border border-[#e5dec9]"
                }`}
              >
                <span className={`text-[10px] font-mono font-bold ${isSelected ? "text-[#d4af37]" : "text-[#8c8071]"}`}>
                  {opt.chapter}
                </span>
                <span className={`text-xs font-bold ${isSelected ? "text-white" : "text-[#2a241e]"}`}>
                  {opt.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}

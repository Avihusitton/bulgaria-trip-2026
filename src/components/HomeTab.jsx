import React from "react";
import { 
  Navigation, Phone, MessageSquare, AlertTriangle, Compass, CheckSquare, 
  MapPin, Car, Home, Bike, Waves, ShoppingCart, ChevronLeft, CreditCard, 
  Sparkles, ExternalLink, Calendar, Heart, ShieldAlert
} from "lucide-react";
import { 
  DAYS_PLAN, FLIGHTS, ACCOMMODATION, CAR_RENTAL, BIKES_INFO, 
  SPA_PULSE_THERME 
} from "../data/tripData";
import DaylightSunTracker from "./DaylightSunTracker";

export default function HomeTab({ 
  selectedDate, 
  gatesState, 
  onOpenGatesModal, 
  onOpenPlanB, 
  onOpenSos, 
  onOpenBudget,
  onNavigateToTab, 
  checkedTasks, 
  onToggleTask,
  onOpenTrail
}) {
  // Current active day object
  const currentDay = DAYS_PLAN.find(d => d.date === selectedDate) || DAYS_PLAN[0];
  const isDay1 = currentDay.dayNumber === 1;
  const isDay2 = currentDay.dayNumber === 2; // Five Lakes
  const isDay3 = currentDay.dayNumber === 3; // Vihren Peak
  const isDay4 = currentDay.dayNumber === 4; // e-MTB
  const isDay5 = currentDay.dayNumber === 5; // Return

  // Check if any decision gate has an active alert
  const hasGateAlert = Object.values(gatesState).some(g => g?.status === "NO");

  return (
    <div className="space-y-6 pb-28 animate-fade-in text-right">
      
      {/* 1. SIDETRACKED MAGAZINE COVER STORY — PIRIN EXPEDITION & 10TH ANNIVERSARY */}
      <div className="bezel-outer">
        <div className="relative rounded-[calc(1.5rem-0.25rem)] sm:rounded-[calc(1.75rem-0.375rem)] overflow-hidden min-h-[230px] sm:min-h-[300px] flex flex-col justify-end p-4 sm:p-6 text-white shadow-xl">
          {/* Atmospheric Mountain Photography */}
          <img 
            src="./images/hero-pirin.jpg" 
            alt="Pirin National Park, Bulgaria" 
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.10] transition duration-700 hover:scale-102"
          />
          {/* Subtle Alpine Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#09130d] via-[#09130d]/60 to-black/25"></div>

          {/* Sidetracked Masthead Elements */}
          <div className="relative z-10 space-y-2 sm:space-y-3">
            {/* Top Magazine Badges */}
            <div className="flex items-center justify-between text-xs">
              <span className="font-magazine text-[9px] sm:text-[10px] tracking-widest text-[#d4af37] font-black bg-black/60 border border-[#d4af37]/40 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full backdrop-blur-md">
                EXPEDITION JOURNAL · VOL 10
              </span>
              <span className="inline-flex items-center gap-1 bg-[#162c21]/90 border border-[#3b5e4d]/70 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] text-[#f2ede4] font-medium backdrop-blur-md shadow-xs">
                <Heart className="w-3 h-3 text-[#d4af37] fill-[#d4af37]" />
                <span className="font-bold">עשור יחד · 2016–2026</span>
              </span>
            </div>

            {/* Main Cover Title */}
            <div className="space-y-0.5">
              <span className="font-magazine text-[10px] sm:text-[11px] tracking-widest text-[#d6c9ba] block uppercase">
                PIRIN RANGE · BANSKO & BANYA
              </span>
              <h1 className="text-2xl sm:text-4xl font-black font-editorial tracking-tight text-[#fdfbf7] drop-shadow-lg leading-tight">
                בולגריה שלנו
              </h1>
            </div>

            {/* Magazine Quote */}
            <p className="text-[11px] sm:text-xs text-[#e8ded1] leading-relaxed max-w-md font-sans">
              ארבעה ימים של פסגות דרמטיות, אגמים צלולים, מעיינות תרמיים חמים וזמן שהוא רק שלנו.
            </p>

            {/* Sidetracked Expedition Telemetry Strip */}
            <div className="pt-2 border-t border-white/15 grid grid-cols-3 gap-1.5 sm:gap-2 text-center text-xs font-mono">
              <div className="bg-black/35 rounded-xl py-1 px-1.5 sm:py-1.5 sm:px-2 border border-white/10 backdrop-blur-xs">
                <span className="text-[8px] sm:text-[9px] text-[#c5a371] block font-magazine tracking-wider">SUMMIT</span>
                <span className="font-bold text-white text-[11px] sm:text-xs">2,914 מ'</span>
              </div>
              <div className="bg-black/35 rounded-xl py-1 px-1.5 sm:py-1.5 sm:px-2 border border-white/10 backdrop-blur-xs">
                <span className="text-[8px] sm:text-[9px] text-[#c5a371] block font-magazine tracking-wider">THERMAL</span>
                <span className="font-bold text-white text-[11px] sm:text-xs">38°C וילה</span>
              </div>
              <div className="bg-black/35 rounded-xl py-1 px-1.5 sm:py-1.5 sm:px-2 border border-white/10 backdrop-blur-xs">
                <span className="text-[8px] sm:text-[9px] text-[#c5a371] block font-magazine tracking-wider">EXPEDITION</span>
                <span className="font-bold text-white text-[11px] sm:text-xs">5 ימים</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. IMPORTANT PRE-TRIP ESSENTIALS — דברים חשובים להסדרה */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full border border-amber-200 font-mono">
            לפני ההמראה · דברים חשובים
          </span>
          <h3 className="font-editorial font-bold text-sm text-[#261f19]">משימות פתוחות להסדרה</h3>
        </div>

        {/* 2A. URGENT ALERT: MORIAH TRAVEL INSURANCE (UNDER 24) */}
        <div className="p-1 rounded-[1.75rem] bg-[#fbf0ea] ring-1 ring-[#eecbc0] shadow-xs">
          <div className="rounded-[calc(1.75rem-0.25rem)] bg-white p-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] space-y-3">
            <div className="flex items-start justify-between gap-2">
              <span className="text-[10px] font-bold bg-[#8a2a16] text-white px-2.5 py-1 rounded-full shrink-0">
                ⏳ טרם הוסדר · דחוף
              </span>
              <div className="flex items-center gap-2 font-bold text-base text-[#261f19]">
                <span>ביטוח נסיעות לחו״ל — מוריה</span>
                <div className="w-7 h-7 rounded-full bg-[#fcedea] text-[#cf482c] flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="bg-[#fff8f5] border border-[#f7dcd3] rounded-2xl p-3 text-xs text-[#8a2a16] space-y-1.5 leading-relaxed">
              <div className="font-bold flex items-center gap-1.5">
                <span>⚠️ שימו לב: מוריה מתחת לגיל 24</span>
              </div>
              <p className="text-[#642b1d]">
                כרגע עוד לא הסדרנו את הביטוח למוריה כי היא מתחת לגיל 24 (מדרג גיל צעיר הדורש חיתום מותאם). 
                חובה לוודא שהפוליסה כוללת הרחבה מלאה ל<b>ספורט אתגרי</b> ו<b>איתור וחילוץ הררי</b> לקראת הטרקים ורכיבת ה-e-MTB בפירין!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-0.5">
              <a
                href="https://www.passportcard.co.il/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between bg-[#1f3f31] hover:bg-[#162e24] text-white font-bold py-2.5 px-3.5 rounded-full text-xs shadow-xs transition-all duration-200 active:scale-[0.98]"
              >
                <span>הסדרת פוליסה אונליין</span>
                <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <ExternalLink className="w-3 h-3 text-white" />
                </div>
              </a>
              <a
                href="tel:*9912"
                className="group flex items-center justify-between bg-white hover:bg-[#f7f2ea] text-[#332b24] font-bold py-2.5 px-3.5 rounded-full text-xs border border-[#ddd3c4] transition-all duration-200 active:scale-[0.98]"
              >
                <span>מוקד PassportCard (*9912)</span>
                <div className="w-6 h-6 rounded-full bg-[#f2ece2] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Phone className="w-3 h-3 text-[#706456]" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* 2B. BOUTIQUE COUPLES CONCIERGE — MASSAGE & SPA RESERVATION */}
        <div className="p-1 rounded-[1.75rem] bg-[#f2e5dc]/80 ring-1 ring-[#dec4b4]/70 shadow-xs">
          <div className="rounded-[calc(1.75rem-0.25rem)] bg-[#fffaf6] p-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-[#b85c39]/12 text-[#9e4624] px-2.5 py-1 rounded-full border border-[#b85c39]/20 font-mono">
                פינוק שמשריינים מראש
              </span>
              <div className="flex items-center gap-2 font-bold text-base text-[#261f19]">
                <span>עיסוי זוגי וספא Pulse Therme</span>
                <div className="w-7 h-7 rounded-full bg-[#faeee8] text-[#b85c39] flex items-center justify-center">
                  <Waves className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            <p className="text-xs text-[#52463b] leading-relaxed">
              נשאר להזמין תור לעיסוי זוגי כדי להבטיח מטפלים זמינים בשעה שנוחה לנו. מומלץ לחייג ישירות לספא ולשריין תור לערב ה-6.10, ישר אחרי הטרק הנפלא של 5 האגמים!
            </p>

            <div className="grid grid-cols-2 gap-2.5 pt-0.5">
              {/* Button-in-button primary call */}
              <a
                href="tel:+359898989898"
                className="group flex items-center justify-between bg-[#1f3f31] hover:bg-[#162e24] text-white font-bold py-2.5 px-3.5 rounded-full text-xs shadow-xs transition-all duration-200 active:scale-[0.98]"
              >
                <span>חייג להזמנת עיסוי</span>
                <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Phone className="w-3 h-3 text-white" />
                </div>
              </a>

              {/* Button-in-button secondary site */}
              <a
                href="https://pulsetherme.bg/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between bg-white hover:bg-[#f7f2ea] text-[#332b24] font-bold py-2.5 px-3.5 rounded-full text-xs border border-[#ddd3c4] transition-all duration-200 active:scale-[0.98]"
              >
                <span>אתר הספא Pulse</span>
                <div className="w-6 h-6 rounded-full bg-[#f2ece2] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <ExternalLink className="w-3 h-3 text-[#706456]" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. TODAY OPERATIONAL CHAPTER (Double-Bezel Architecture) */}
      <div className="bezel-outer">
        <div className="bezel-inner space-y-4">
          
          {/* Chapter Header */}
          <div className="flex items-center justify-between border-b border-[#eee7dc] pb-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-magazine font-black tracking-widest text-[#9e4624] bg-[#fbf0eb] px-3 py-1 rounded-full border border-[#f2d6cb]">
                CHAPTER 0{currentDay.dayNumber}
              </span>
              <span className="text-xs font-mono text-[#8a8073] ltr">
                {currentDay.date.split("-").reverse().join(".")}
              </span>
            </div>

            <span className="text-xs font-bold text-[#8a7f72]">
              {currentDay.dayOfWeek} · היום במסע
            </span>
          </div>

          {/* Title & Core Activity */}
          <div className="space-y-1">
            <h2 className="text-2xl font-black font-editorial text-[#162c21] leading-snug">
              {currentDay.title}
            </h2>
            <p className="text-xs text-[#52645a] leading-relaxed">
              {currentDay.subtitle}
            </p>
          </div>

          {/* Trail / Activity Key Specs */}
          {currentDay.trailDetails && (
            <div className="bg-[#f6f2ea] border border-[#e8dfd2] rounded-2xl p-3.5 flex items-center justify-around text-center text-xs font-mono">
              <div>
                <span className="text-[10px] text-[#8c8071] block font-sans">מרחק כולל</span>
                <span className="font-bold text-[#1c2722] text-sm">{currentDay.trailDetails.distance}</span>
              </div>
              <div className="h-7 w-px bg-[#ded5c5]"></div>
              <div>
                <span className="text-[10px] text-[#8c8071] block font-sans">זמן משוער</span>
                <span className="font-bold text-[#1c2722] text-sm">{currentDay.trailDetails.duration}</span>
              </div>
              <div className="h-7 w-px bg-[#ded5c5]"></div>
              <div>
                <span className="text-[10px] text-[#8c8071] block font-sans">טיפוס מצטבר</span>
                <span className="font-bold text-[#1c2722] text-sm">{currentDay.trailDetails.elevationGain.split("/")[0]}</span>
              </div>
            </div>
          )}

          {/* Field Insight Alert (Human, warm, caring tone) */}
          {currentDay.keyAlert && (
            <div className="bg-[#fff8f5] border border-[#f7dcd3] rounded-2xl p-3.5 text-xs text-[#8a2a16] flex items-start gap-2.5">
              <span className="text-base select-none shrink-0 mt-0.5">💡</span>
              <div className="leading-relaxed">
                <span className="font-bold">טיפ שטח מהלב: </span>
                <span>{currentDay.keyAlert}</span>
              </div>
            </div>
          )}

          {/* Direct Action Buttons for Today (Button-in-Button Pattern) */}
          <div className="space-y-2.5 pt-1">
            {/* Day 1: Car pickup & fitting */}
            {isDay1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Top+Rent+A+Car+Sofia+Airport"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between bg-[#1a382b] hover:bg-[#12281e] text-white font-medium py-3 px-4 rounded-full text-xs shadow-xs transition-all active:scale-[0.98]"
                >
                  <span className="font-editorial font-bold">נווט לשאטל Top Rent</span>
                  <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Navigation className="w-3.5 h-3.5 text-white" />
                  </div>
                </a>
                <a
                  href={`https://wa.me/${BIKES_INFO.primary.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between bg-white hover:bg-[#f6f1e8] text-[#1a382b] font-medium py-3 px-4 rounded-full text-xs border border-[#ddd3c4] transition-all active:scale-[0.98]"
                >
                  <span className="font-editorial">WhatsApp ל-Fitting בבנסקו</span>
                  <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
                  </div>
                </a>
              </div>
            )}

            {/* Day 2: Five Lakes */}
            {isDay2 && (
              <div className="space-y-2">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=41.7558,23.4158"
                  target="_blank"
                  rel="noreferrer"
                  className="group w-full flex items-center justify-between bg-[#1a382b] hover:bg-[#12281e] text-white font-medium py-3.5 px-5 rounded-full text-xs shadow-sm transition-all active:scale-[0.98]"
                >
                  <span className="font-editorial font-bold text-sm">נווט לחניית בקתת ויחרן (Vihren Hut)</span>
                  <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Navigation className="w-4 h-4 text-white" />
                  </div>
                </a>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onOpenTrail("five-lakes")}
                    className="flex items-center justify-center gap-1.5 bg-white hover:bg-[#f6f1e8] text-[#1a382b] font-medium py-2.5 px-3 rounded-full text-xs border border-[#ded5c5] transition active:scale-95"
                  >
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    <span>מפת מסלול אופליין</span>
                  </button>
                  <button
                    onClick={onOpenGatesModal}
                    className="flex items-center justify-center gap-1.5 bg-white hover:bg-[#f6f1e8] text-[#8a2a16] font-medium py-2.5 px-3 rounded-full text-xs border border-[#eed0c8] transition active:scale-95"
                  >
                    <AlertTriangle className="w-3.5 h-3.5 text-[#cf482c]" />
                    <span>בדיקת כביש ורולר-סקי</span>
                  </button>
                </div>
              </div>
            )}

            {/* Day 3: Vihren Peak */}
            {isDay3 && (
              <div className="space-y-2">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=41.7558,23.4158"
                  target="_blank"
                  rel="noreferrer"
                  className="group w-full flex items-center justify-between bg-[#1a382b] hover:bg-[#12281e] text-white font-medium py-3.5 px-5 rounded-full text-xs shadow-sm transition-all active:scale-[0.98]"
                >
                  <span className="font-editorial font-bold text-sm">נווט לתחילת הטרק (בקתת ויחרן)</span>
                  <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Navigation className="w-4 h-4 text-white" />
                  </div>
                </a>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onOpenTrail("vihren-peak")}
                    className="flex items-center justify-center gap-1.5 bg-white hover:bg-[#f6f1e8] text-[#1a382b] font-medium py-2.5 px-3 rounded-full text-xs border border-[#ded5c5] transition active:scale-95"
                  >
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    <span>מפת פסגה (10.4 ק״מ)</span>
                  </button>
                  <button
                    onClick={onOpenGatesModal}
                    className="flex items-center justify-center gap-1.5 bg-white hover:bg-[#f6f1e8] text-[#8a2a16] font-medium py-2.5 px-3 rounded-full text-xs border border-[#eed0c8] transition active:scale-95"
                  >
                    <AlertTriangle className="w-3.5 h-3.5 text-[#cf482c]" />
                    <span>תנאי הר ומזג אוויר</span>
                  </button>
                </div>
              </div>
            )}

            {/* Day 4: e-MTB */}
            {isDay4 && (
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`https://wa.me/${BIKES_INFO.primary.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hi! We are ready for bike delivery/pickup in Bansko today.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between bg-[#1a382b] hover:bg-[#12281e] text-white font-medium py-3 px-4 rounded-full text-xs shadow-xs transition-all active:scale-[0.98]"
                >
                  <span className="font-editorial font-bold">WhatsApp לאופניים</span>
                  <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-3.5 h-3.5 text-white" />
                  </div>
                </a>
                <button
                  onClick={() => onOpenTrail("ebike-valley")}
                  className="group flex items-center justify-between bg-white hover:bg-[#f6f1e8] text-[#1a382b] font-medium py-3 px-4 rounded-full text-xs border border-[#ded5c5] transition-all active:scale-[0.98]"
                >
                  <span className="font-editorial">מסלולי רכיבה וקפה</span>
                  <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Bike className="w-3.5 h-3.5 text-emerald-700" />
                  </div>
                </button>
              </div>
            )}

            {/* Day 5: Return to Sofia */}
            {isDay5 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Top+Rent+A+Car+Sofia+Airport"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between bg-[#1a382b] hover:bg-[#12281e] text-white font-medium py-3 px-4 rounded-full text-xs shadow-xs transition-all active:scale-[0.98]"
                >
                  <span className="font-editorial font-bold">נווט להחזרת רכב ב-04:00</span>
                  <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Navigation className="w-3.5 h-3.5 text-white" />
                  </div>
                </a>
                <a
                  href={`tel:${CAR_RENTAL.phone}`}
                  className="group flex items-center justify-between bg-white hover:bg-[#f6f1e8] text-[#1a382b] font-medium py-3 px-4 rounded-full text-xs border border-[#ded5c5] transition-all active:scale-[0.98]"
                >
                  <span className="font-editorial">מוקד שדה התעופה</span>
                  <div className="w-7 h-7 rounded-full bg-[#f2ece2] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Phone className="w-3.5 h-3.5 text-[#544b40]" />
                  </div>
                </a>
              </div>
            )}

            {/* Subtle Plan B trigger */}
            <button
              onClick={onOpenPlanB}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-[#63574a] hover:bg-[#f2ece2] transition cursor-pointer"
            >
              <div className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#b85c39]" />
                <span>לא מתאים היום או שמזג האוויר גבולי?</span>
              </div>
              <span className="font-bold text-[#b85c39] flex items-center gap-0.5 font-editorial">
                <span>פתח חלופות ו-Plan B</span>
                <ChevronLeft className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 4. TODAY ESSENTIAL TASKS CHECKLIST (Double-Bezel) */}
      <div className="bezel-outer">
        <div className="bezel-inner space-y-3">
          <div className="flex items-center justify-between border-b border-[#eee7dc] pb-2">
            <span className="text-[11px] font-mono text-[#786c5f]">
              {currentDay.checklist.filter(item => checkedTasks[`${selectedDate}-${item}`]).length} / {currentDay.checklist.length} בוצעו
            </span>
            <div className="flex items-center gap-2 font-editorial font-bold text-base text-[#162c21]">
              <span>משימות וצ'קליסט להיום</span>
              <CheckSquare className="w-4 h-4 text-[#204234]" />
            </div>
          </div>

          <div className="space-y-1.5">
            {currentDay.checklist.map((taskText, idx) => {
              const taskId = `${selectedDate}-${taskText}`;
              const isChecked = !!checkedTasks[taskId];

              return (
                <label
                  key={idx}
                  className={`flex items-start gap-2.5 p-2 rounded-xl transition cursor-pointer text-xs ${
                    isChecked ? "bg-[#f2ece2]/60 text-slate-400 line-through" : "hover:bg-white text-[#2d251d]"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onToggleTask(taskId)}
                    className="mt-0.5 w-4 h-4 rounded text-[#204234] focus:ring-[#204234] cursor-pointer"
                  />
                  <span className="leading-relaxed flex-1">{taskText}</span>
                </label>
              );
            })}
          </div>
        </div>
      </div>

      {/* 5. DIRECT OPERATIONS — 4 TACTILE HARDWARE TILES */}
      <div className="space-y-2">
        <h3 className="text-xs font-editorial font-bold text-[#716556] px-1">
          גישה תפעולית ישירה:
        </h3>
        <div className="grid grid-cols-4 gap-2 text-center text-xs">
          {/* Three Peaks Villa */}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=41.87588,23.5273"
            target="_blank"
            rel="noreferrer"
            className="bg-[#fdfbf7] border border-[#e5ded1] hover:border-[#b85c39] rounded-2xl p-2.5 shadow-2xs flex flex-col items-center justify-center gap-1.5 transition duration-200 active:scale-95"
          >
            <div className="w-8 h-8 rounded-full bg-[#edf3ef] text-[#204234] flex items-center justify-center">
              <Home className="w-4 h-4" />
            </div>
            <span className="font-bold text-[11px] text-[#2c241c]">הווילה</span>
          </a>

          {/* Car Rental */}
          <button
            onClick={() => onNavigateToTab("more")}
            className="bg-[#fdfbf7] border border-[#e5ded1] hover:border-[#b85c39] rounded-2xl p-2.5 shadow-2xs flex flex-col items-center justify-center gap-1.5 transition duration-200 active:scale-95 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-[#f4f0e8] text-[#544b40] flex items-center justify-center">
              <Car className="w-4 h-4" />
            </div>
            <span className="font-bold text-[11px] text-[#2c241c]">רכב Top</span>
          </button>

          {/* e-Bike */}
          <a
            href={`https://wa.me/${BIKES_INFO.primary.phone.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="bg-[#fdfbf7] border border-[#e5ded1] hover:border-[#b85c39] rounded-2xl p-2.5 shadow-2xs flex flex-col items-center justify-center gap-1.5 transition duration-200 active:scale-95"
          >
            <div className="w-8 h-8 rounded-full bg-[#ecf7ed] text-emerald-700 flex items-center justify-center">
              <Bike className="w-4 h-4" />
            </div>
            <span className="font-bold text-[11px] text-[#2c241c]">אופניים</span>
          </a>

          {/* Budget & Card Expense Tracker */}
          <button
            onClick={onOpenBudget}
            className="bg-[#fdfbf7] border border-[#e5ded1] hover:border-[#b85c39] rounded-2xl p-2.5 shadow-2xs flex flex-col items-center justify-center gap-1.5 transition duration-200 active:scale-95 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-[#f7eedf] text-[#a06828] flex items-center justify-center">
              <CreditCard className="w-4 h-4" />
            </div>
            <span className="font-bold text-[11px] text-[#2c241c]">הוצאות</span>
          </button>
        </div>
      </div>

      {/* 6. DAYLIGHT & MOUNTAIN SUN TRACKER */}
      <DaylightSunTracker />

    </div>
  );
}

import React, { useState } from "react";
import { 
  Plane, Home, Car, Bike, Waves, Phone, FileText, CheckSquare, 
  Copy, Check, AlertTriangle, ExternalLink, MessageSquare, 
  Navigation, ShieldAlert, Sparkles, Clock, MapPin, Upload, Mail, ShieldCheck,
  CreditCard, Wallet
} from "lucide-react";
import { 
  FLIGHTS, ACCOMMODATION, CAR_RENTAL, BIKES_INFO, SPA_PULSE_THERME, 
  EMERGENCY_CONTACTS, INITIAL_PACKING_LIST, STATUS_TYPES 
} from "../data/tripData";

export default function MoreTab({ 
  checkedTasks, 
  onToggleTask, 
  timestamps,
  onOpenSos,
  onOpenBudget
}) {
  const [activeSection, setActiveSection] = useState("flights");
  const [copiedCode, setCopiedCode] = useState(false);

  const copyBookingCode = () => {
    navigator.clipboard.writeText(FLIGHTS.bookingCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const sections = [
    { id: "flights", label: "✈️ טיסות", icon: Plane },
    { id: "stay", label: "🏡 לינה", icon: Home },
    { id: "car", label: "🚙 רכב", icon: Car },
    { id: "budget", label: "💳 הוצאות ואשראי", icon: CreditCard },
    { id: "bikes", label: "🚲 אופניים", icon: Bike },
    { id: "spa", label: "♨ ספא", icon: Waves },
    { id: "emergency", label: "🚨 חירום", icon: Phone },
    { id: "docs", label: "📄 מסמכים ו-PDF", icon: FileText },
    { id: "packing", label: "🎒 ציוד מהארץ", icon: CheckSquare },
    { id: "links", label: "🌐 מקורות ואימות", icon: ExternalLink }
  ];

  return (
    <div className="space-y-4 pb-20 animate-fade-in text-right">
      {/* Top Header */}
      <div className="flex items-baseline justify-between px-1 pt-1">
        <span className="text-[10px] font-magazine font-black tracking-widest text-[#9e4624] block uppercase">FIELD DIRECTORY · COMPENDIUM</span>
        <h2 className="text-2xl font-black font-editorial text-[#162c21]">ניהול תפעולי והזמנות</h2>
      </div>

      {/* Horizontal Nav Chips */}
      <div className="flex gap-1.5 overflow-x-auto pb-1.5 scrollbar-none text-xs font-bold">
        {sections.map((sec) => (
          <button
            key={sec.id}
            onClick={() => setActiveSection(sec.id)}
            className={`py-2 px-3 rounded-2xl whitespace-nowrap transition active:scale-95 flex items-center gap-1.5 ${
              activeSection === sec.id
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-white border border-slate-200/90 text-slate-700 hover:bg-slate-50"
            }`}
          >
            <span>{sec.label}</span>
          </button>
        ))}
      </div>

      {/* 1. FLIGHTS SECTION */}
      {activeSection === "flights" && (
        <div className="space-y-4">
          {/* Booking Code Card */}
          <div className="bg-[#162c21] text-white p-5 rounded-3xl shadow-md border border-[#2e5341] flex items-center justify-between">
            <button
              onClick={copyBookingCode}
              className="flex items-center gap-1.5 bg-[#254637] hover:bg-[#315846] text-[#e3ded6] px-3.5 py-2 rounded-xl font-bold text-xs shadow-xs transition active:scale-95 border border-[#39624f] cursor-pointer"
            >
              {copiedCode ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span>הועתק!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#c5a371]" />
                  <span>העתק קוד</span>
                </>
              )}
            </button>
            <div className="text-right">
              <span className="text-[11px] text-[#c5a371] block font-editorial">Wizz Air Booking Code</span>
              <span className="text-2xl font-black font-mono tracking-wider ltr text-[#fbf9f5]">
                {FLIGHTS.bookingCode}
              </span>
            </div>
          </div>

          {/* Outbound Flight */}
          <div className="bg-white rounded-3xl border border-emerald-300 p-4 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-300">
                טיסת הלוך ✅ מאושרת
              </span>
              <h3 className="font-editorial font-bold text-slate-900 text-base">{FLIGHTS.outbound.dateFormatted}</h3>
            </div>

            <div className="bg-emerald-50/70 p-3 rounded-2xl border border-emerald-100 flex items-center justify-between text-xs">
              <div className="text-left font-mono">
                <span className="text-base font-black text-emerald-950 block ltr">
                  {FLIGHTS.outbound.departureTime} → {FLIGHTS.outbound.arrivalTime}
                </span>
                <span className="text-emerald-700 text-[11px] ltr font-bold">{FLIGHTS.outbound.flightNumber}</span>
              </div>
              <div className="text-right">
                <span className="font-bold text-slate-900 block">{FLIGHTS.outbound.origin}</span>
                <span className="text-slate-600 text-[11px]">אל: {FLIGHTS.outbound.destination}</span>
              </div>
            </div>

            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex justify-between border-b pb-1">
                <span className="font-bold text-[#162c21] font-mono ltr">{FLIGHTS.outbound.seats}</span>
                <span className="text-slate-500">מושבים שמורים:</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span className="font-bold text-slate-800">{FLIGHTS.outbound.terminal}</span>
                <span className="text-slate-500">טרמינל נתב״ג:</span>
              </div>
              <div className="text-[11px] text-slate-600 bg-slate-50 p-2 rounded-xl">
                ⚠️ <b>דלפקי הפקדת מזוודות:</b> {FLIGHTS.outbound.bagDropNotes}
              </div>
              <div className="text-[11px] text-slate-600 bg-slate-50 p-2 rounded-xl">
                🧳 <b>כבודה:</b> {FLIGHTS.outbound.luggage}
              </div>
            </div>
          </div>

          {/* Inbound Flight */}
          <div className="bg-white rounded-3xl border border-rose-300 p-4 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold bg-rose-100 text-rose-800 px-2.5 py-0.5 rounded-full border border-rose-300">
                טיסת חזור ✅ מוקדמת מאוד
              </span>
              <h3 className="font-editorial font-bold text-slate-900 text-base">{FLIGHTS.inbound.dateFormatted}</h3>
            </div>

            <div className="bg-rose-50/70 p-3 rounded-2xl border border-rose-100 flex items-center justify-between text-xs">
              <div className="text-left font-mono">
                <span className="text-base font-black text-rose-950 block ltr">
                  {FLIGHTS.inbound.departureTime} → {FLIGHTS.inbound.arrivalTime}
                </span>
                <span className="text-rose-700 text-[11px] ltr font-bold">{FLIGHTS.inbound.flightNumber}</span>
              </div>
              <div className="text-right">
                <span className="font-bold text-slate-900 block">{FLIGHTS.inbound.origin}</span>
                <span className="text-slate-600 text-[11px]">אל: {FLIGHTS.inbound.destination}</span>
              </div>
            </div>

            <div className="bg-[#fff8f5] border border-[#f7dcd3] p-3 rounded-2xl text-xs text-[#8a2a16] flex items-start gap-2">
              <span className="text-base select-none shrink-0 mt-0.5">💡</span>
              <div className="leading-relaxed">
                <span className="font-bold">טיפ שטח מהלב: </span>
                {FLIGHTS.inbound.alert}
              </div>
            </div>

            <div className="space-y-1 text-xs text-slate-700">
              <div className="flex justify-between border-b pb-1">
                <span className="font-bold text-[#162c21] font-mono ltr">{FLIGHTS.inbound.seats}</span>
                <span className="text-slate-500">מושבים שמורים:</span>
              </div>
              <div className="text-[11px] text-amber-900 bg-[#fff9eb] p-2.5 rounded-xl border border-[#f5e4bd]">
                ⭐ <b>תזכורת לשקט נפשי ב-7.10:</b> {FLIGHTS.inbound.offlineChecklistDate}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. ACCOMMODATION SECTION */}
      {activeSection === "stay" && (
        <div className="space-y-4 animate-fade-in">
          <div className="rounded-3xl border border-[#ded8ce] overflow-hidden bg-white shadow-xs">
            {/* Visual Header */}
            <div className="relative min-h-[140px] flex flex-col justify-end p-4 text-white overflow-hidden">
              <img
                src="/images/thermal-villa.jpg"
                alt="Three Peaks Thermal Villas"
                className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.70]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>

              <div className="relative z-10 flex items-end justify-between">
                <span className="text-[10px] font-bold bg-[#162c21]/80 border border-emerald-400 text-emerald-200 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                  Booking ref: {ACCOMMODATION.bookingRef}
                </span>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-[#e8ded1] block">
                    בריכה תרמית פרטית 37–38°C
                  </span>
                  <h3 className="text-xl font-editorial font-bold text-white drop-shadow-sm">
                    {ACCOMMODATION.name}
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-4 space-y-3 bg-[#fcfaf7]">
              {/* Paid alert */}
              <div className="bg-[#edf5f0] p-3 rounded-2xl border border-[#cfe2d4] text-xs text-[#1c4731] font-bold flex items-center justify-between">
                <span>{ACCOMMODATION.bookingStatus}</span>
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </div>

              <div className="bg-white p-3 rounded-2xl border border-[#ded8ce] space-y-1.5 text-xs text-[#52493d]">
                <div className="flex justify-between">
                  <span className="font-bold font-mono ltr">{ACCOMMODATION.address}</span>
                  <span className="text-slate-500">כתובת הווילה:</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">{ACCOMMODATION.dates}</span>
                  <span className="text-slate-500">תאריכים:</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold font-mono ltr">{ACCOMMODATION.checkinTime}</span>
                  <span className="text-slate-500">שעות צ'ק-אין:</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-[#1c2722] ltr">{ACCOMMODATION.email}</span>
                  <span className="text-slate-500">דוא״ל המארח:</span>
                </div>
              </div>

              {/* Amenities & Dishwasher warning */}
              <div className="bg-white p-3 rounded-2xl border border-[#ded8ce] text-xs space-y-1.5 text-[#52493d]">
                <span className="font-bold text-[#1c2722] block">אבזור הווילה:</span>
                <p className="text-[11px] leading-relaxed text-slate-600">{ACCOMMODATION.amenities.has}</p>
                <div className="text-[11px] font-bold text-amber-800 bg-[#fff9eb] p-2 rounded-xl border border-[#f5e4bd]">
                  ⚠️ {ACCOMMODATION.amenities.noDishwasher}
                </div>
              </div>

              {/* Late Stay Agreement Card */}
              <div className="bg-[#f0f6f2] border border-[#d2e2d7] rounded-2xl p-3.5 space-y-2 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-[#204234]">
                  <Sparkles className="w-4 h-4 text-[#c5a371]" />
                  <span>הסדר Late Stay ב-8.10 (סוכם ישירות מול המארח):</span>
                </div>
                <p className="text-[#2c5342] leading-relaxed">{ACCOMMODATION.lateStay.description}</p>
                <div className="bg-white p-2.5 rounded-xl border border-[#d2e2d7] font-bold text-[#204234] flex justify-between">
                  <span>תשלום סוכם: <b>{ACCOMMODATION.lateStay.payment}</b></span>
                  <span className="text-amber-800 text-[11px]">קבלה: VERIFY</span>
                </div>
                <div className="text-[11px] text-amber-800 bg-amber-50 p-2 rounded-lg border border-amber-200">
                  ⚠️ {ACCOMMODATION.lateStay.reminder}
                </div>
              </div>

              {/* Action buttons with exact directions endpoint */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${ACCOMMODATION.phone}`}
                  className="flex items-center justify-center gap-1 bg-[#204234] hover:bg-[#183328] text-white font-medium py-2.5 rounded-xl text-xs transition shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>חייג למארח</span>
                </a>
                <a
                  href={`mailto:${ACCOMMODATION.email}`}
                  className="flex items-center justify-center gap-1 bg-white hover:bg-[#f4efe8] text-[#204234] font-medium py-2.5 rounded-xl text-xs transition border border-[#ded8ce]"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>דוא״ל למארח</span>
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=41.87588,23.5273"
                  target="_blank"
                  rel="noreferrer"
                  className="col-span-2 flex items-center justify-center gap-1.5 bg-[#f2eee7] hover:bg-[#e8e2d8] text-[#204234] font-bold py-2.5 rounded-xl text-xs transition border border-[#d6cec0]"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>נווט ישירות לחניית הווילה (Three Peaks Thermal Villas)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. CAR RENTAL SECTION */}
      {activeSection === "car" && (
        <div className="space-y-4">
          <div className="bg-white rounded-3xl border border-blue-300 p-4 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full border border-blue-300">
                Top Rent A Car
              </span>
              <div className="text-right">
                <h3 className="font-black text-slate-900 text-base">{CAR_RENTAL.carModel}</h3>
                <span className="text-[11px] text-slate-500 font-mono ltr">Booking: {CAR_RENTAL.bookingRef}</span>
              </div>
            </div>

            {/* Payment Summary */}
            <div className="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl text-xs text-emerald-900 font-bold flex justify-between">
              <span>{CAR_RENTAL.pricePaid}</span>
              <span className="text-[11px] font-mono ltr">ref: {CAR_RENTAL.rentalCoverRef}</span>
            </div>

            {/* Deposit Alert */}
            <div className="bg-amber-50 border border-amber-300 p-3 rounded-2xl text-xs text-amber-900 space-y-1">
              <div className="flex items-center gap-1.5 font-bold">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                <span>מסגרת אשראי לפיקדון (Deposit/Excess):</span>
              </div>
              <p className="text-[11px] leading-relaxed text-amber-800">{CAR_RENTAL.depositAlert}</p>
            </div>

            {/* Offroad warning */}
            <div className="bg-rose-50 border border-rose-200 p-2.5 rounded-xl text-xs text-rose-800 font-medium">
              ⚠️ {CAR_RENTAL.offroadWarning}
            </div>

            {/* Times */}
            <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-3 rounded-2xl border border-slate-100">
              <div>
                <span className="text-slate-400 block text-[10px]">החזרה (04:00)</span>
                <span className="font-bold text-rose-700 font-mono ltr">9.10 · 04:00 AM</span>
              </div>
              <div className="text-right">
                <span className="text-slate-400 block text-[10px]">איסוף</span>
                <span className="font-bold text-emerald-800 font-mono ltr">5.10 · 12:00 PM</span>
              </div>
            </div>

            {/* Shuttle Instructions */}
            <div className="bg-blue-50/80 p-3 rounded-2xl border border-blue-200 text-xs text-blue-900 space-y-1">
              <span className="font-bold block">הוראות שאטל איסוף Top Rent (עדיפות עליונה):</span>
              <p className="text-[11px] leading-relaxed text-blue-800">{CAR_RENTAL.pickup.instructions}</p>
            </div>

            {/* Contract Verifications at desk */}
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-xs space-y-1 text-slate-700">
              <span className="font-bold text-slate-900 block mb-1">לאמת בחוזה בעת קבלת הרכב:</span>
              <ul className="list-disc list-inside space-y-0.5 text-slate-600 text-[11px]">
                {CAR_RENTAL.contractVerification.map((v, vIdx) => (
                  <li key={vIdx}>{v}</li>
                ))}
              </ul>
            </div>

            {/* 360 Pickup Inspection Checklist */}
            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 space-y-2">
              <span className="font-bold text-slate-900 text-xs block">
                📸 צ'קליסט בדיקת רכב 360° בעת האיסוף:
              </span>
              <div className="space-y-1">
                {CAR_RENTAL.pickupChecklist.map((item, cIdx) => {
                  const taskId = `car-check-${cIdx}`;
                  const isChecked = !!checkedTasks[taskId];

                  return (
                    <label
                      key={cIdx}
                      className={`flex items-start gap-2 p-1.5 rounded-lg text-xs cursor-pointer transition ${
                        isChecked ? "text-slate-400 line-through" : "text-slate-800 hover:bg-white"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => onToggleTask(taskId)}
                        className="mt-0.5 w-3.5 h-3.5 rounded text-blue-600"
                      />
                      <span className="leading-relaxed">{item}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${CAR_RENTAL.phone}`}
                className="flex items-center justify-center gap-1.5 bg-[#204234] hover:bg-[#183328] text-white font-medium py-2.5 rounded-xl text-xs transition shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>מוקד Top Rent (+359 700 89050)</span>
              </a>
              <a
                href="https://toprentacar.bg/en/rental-offices/sofia-airport"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 bg-white hover:bg-[#f4efe8] text-[#204234] font-medium py-2.5 rounded-xl text-xs border border-[#ded8ce] transition"
              >
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                <span>הוראות שאטל טרמינל 1</span>
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Top+Rent+A+Car+Sofia+Airport"
                target="_blank"
                rel="noreferrer"
                className="col-span-2 flex items-center justify-center gap-1.5 bg-[#f2eee7] hover:bg-[#e8e2d8] text-[#204234] font-bold py-2.5 rounded-xl text-xs border border-[#d6cec0] transition"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>נווט להחזרת רכב בנמל התעופה סופיה (04:00 לפנות בוקר)</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 4. BUDGET & EXPENSES SECTION */}
      {activeSection === "budget" && (
        <div className="space-y-4 animate-fade-in">
          <div className="bg-white rounded-3xl border border-[#ded8ce] p-4 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold bg-[#e8eee9] text-[#2d5945] px-2.5 py-0.5 rounded-full border border-[#cad9cf]">
                ניהול עלויות ואשראי
              </span>
              <h3 className="font-black text-slate-900 text-base">תקציב והוצאות החופשה</h3>
            </div>

            <p className="text-xs text-[#5c5448] leading-relaxed">
              כל התשלומים בחופשה מבוצעים בכרטיסי אשראי. בולגריה מקובעת בשער רשמי של <b className="font-mono">1€ = 1.95583 BGN</b>.
              אין צורך בהמרת מזומן מראש בארץ.
            </p>

            {/* Launch Modal Button */}
            <button
              onClick={onOpenBudget}
              className="w-full bg-[#204234] hover:bg-[#183328] active:scale-98 text-white font-bold py-3 rounded-2xl text-xs transition shadow-xs flex items-center justify-center gap-2"
            >
              <CreditCard className="w-4 h-4" />
              <span>פתח מחשבון הוצאות מלא (הזנה + התפלגות + סיכום)</span>
            </button>

            {/* Pre-Trip Breakdown Summary */}
            <div className="bg-[#f7f5f0] p-3.5 rounded-2xl border border-[#e5dfd5] text-xs space-y-2">
              <span className="font-bold text-[#1b2621] block">
                💳 עלויות קבועות שכבר שולמו בארץ:
              </span>
              <ul className="space-y-1.5 text-slate-700">
                <li className="flex justify-between items-center border-b border-[#ece6db] pb-1">
                  <span className="font-mono font-bold ltr">€474.48 (~₪1,922)</span>
                  <span>וילה Three Peaks (Booking) — שולם במלואו</span>
                </li>
                <li className="flex justify-between items-center border-b border-[#ece6db] pb-1">
                  <span className="font-mono font-bold ltr">₪662.00</span>
                  <span>השכרת רכב VW T-Roc (Booking) — שולם</span>
                </li>
                <li className="flex justify-between items-center border-b border-[#ece6db] pb-1">
                  <span className="font-mono font-bold ltr">₪271.00</span>
                  <span>ביטוח ביטול השתתפות RentalCover — שולם</span>
                </li>
                <li className="flex justify-between items-center pt-1 font-bold text-[#1b2621]">
                  <span className="font-mono ltr">~₪2,855</span>
                  <span>סה״כ שולם מראש:</span>
                </li>
              </ul>
            </div>

            {/* Notes for credit card in Bulgaria */}
            <div className="bg-amber-50/80 p-3 rounded-2xl border border-amber-200 text-xs text-amber-900 space-y-1 leading-relaxed">
              <span className="font-bold block">💡 דגשים לתשלומי אשראי בבולגריה:</span>
              <div>• <b>מסגרת אשראי לפיקדון:</b> בדלפק Top Rent יחזיקו פיקדון מוערך של כ-€1,200 (VERIFY). ודאו מסגרת פנויה בכרטיס האשראי של הנהג הראשי.</div>
              <div>• <b>תשלום במטבע מקומי:</b> במסופוני אשראי בסופר ובמסעדות, בחרו תמיד חיוב ב-<b>BGN</b> (ולא המרה דינמית לשקלים בדלפק שגובה עמלות גבוהות).</div>
            </div>
          </div>
        </div>
      )}

      {/* 5. BIKES SECTION */}
      {activeSection === "bikes" && (
        <div className="space-y-4">
          {/* Primary */}
          <div className="bg-white rounded-3xl border border-emerald-300 p-4 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-300">
                e-Bike Bansko · ספק ראשי
              </span>
              <h3 className="font-black text-slate-900 text-base">{BIKES_INFO.primary.provider}</h3>
            </div>

            <div className="bg-emerald-50/70 p-3 rounded-2xl border border-emerald-100 text-xs space-y-1.5 text-slate-700">
              <div>דגם אופניים: <b>{BIKES_INFO.primary.bikes}</b></div>
              <div>מחיר: <b>{BIKES_INFO.primary.price}</b></div>
              <div>זמנים: {BIKES_INFO.primary.operatingHours}</div>
              <div>איסוף והחזרה: {BIKES_INFO.primary.terms}</div>
            </div>

            {/* Critical reservation warning */}
            <div className="bg-rose-50 border border-rose-200 rounded-2xl p-3 text-xs text-rose-900 space-y-1">
              <div className="flex items-center gap-1 font-bold">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <span>דגש קריטי על הזמנת יום הרכיבה (8.10):</span>
              </div>
              <p className="text-[11px] leading-relaxed text-rose-800">{BIKES_INFO.primary.reservationWarning}</p>
            </div>

            {/* Fit check reminder for Gil */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3 text-xs text-amber-900 space-y-1">
              <div className="flex items-center gap-1 font-bold">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                <span>התאמה לגיל (158 ס״מ):</span>
              </div>
              <p className="text-[11px] leading-relaxed text-amber-800">{BIKES_INFO.primary.fitVerification}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`https://wa.me/${BIKES_INFO.primary.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hi! We are Avihu and Gil from Israel. Looking forward to our e-bike fitting on Oct 5 and full day tour on Oct 8.")}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 bg-[#204234] hover:bg-[#183328] text-white font-medium py-2.5 rounded-xl text-xs transition shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp לבעלים</span>
              </a>
              <a
                href={`tel:${BIKES_INFO.primary.phone}`}
                className="flex items-center justify-center gap-1.5 bg-white hover:bg-[#f4efe8] text-[#204234] font-medium py-2.5 rounded-xl text-xs border border-[#ded8ce] transition"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>חייג ל-e-Bike Bansko</span>
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=41.8383,23.4885"
                target="_blank"
                rel="noreferrer"
                className="col-span-2 flex items-center justify-center gap-1.5 bg-[#f2eee7] hover:bg-[#e8e2d8] text-[#204234] font-bold py-2.5 rounded-xl text-xs border border-[#d6cec0] transition"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>נווט לנקודת המפגש וה-Fitting בבנסקו</span>
              </a>
            </div>
          </div>

          {/* Backup */}
          <div className="bg-white rounded-3xl border border-[#ded8ce] p-4 shadow-xs space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold bg-slate-100 text-slate-800 px-2.5 py-0.5 rounded-full border border-slate-200">
                {BIKES_INFO.backup.status}
              </span>
              <h4 className="font-bold text-[#1c2722] text-sm">{BIKES_INFO.backup.provider}</h4>
            </div>
            <p className="text-slate-600">{BIKES_INFO.backup.terms}</p>
            <p className="text-[11px] text-amber-800 bg-[#fff9eb] p-2 rounded-xl border border-[#f5e4bd]">
              ⚠️ {BIKES_INFO.backup.warning}
            </p>
          </div>

          {/* Rejected */}
          <div className="bg-slate-100 rounded-3xl border border-slate-200 p-4 shadow-xs space-y-1 text-xs opacity-75">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold bg-slate-200 text-slate-700 px-2.5 py-0.5 rounded-full line-through">
                לא רלוונטי
              </span>
              <h4 className="font-bold text-slate-700 text-sm line-through">{BIKES_INFO.rejected.provider}</h4>
            </div>
            <p className="text-slate-500 text-[11px]">{BIKES_INFO.rejected.reason}</p>
          </div>
        </div>
      )}

      {/* 6. SPA SECTION */}
      {activeSection === "spa" && (
        <div className="space-y-4 animate-fade-in">
          <div className="rounded-3xl border border-[#ded8ce] overflow-hidden bg-white shadow-xs">
            {/* Visual Header */}
            <div className="relative min-h-[140px] flex flex-col justify-end p-4 text-white overflow-hidden">
              <img
                src="/images/pulse-therme.jpg"
                alt="Pulse Therme Banya"
                className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.70]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>

              <div className="relative z-10 flex items-end justify-between">
                <span className="text-[10px] font-bold bg-[#b85c39] text-white px-2.5 py-0.5 rounded-full">
                  דחוף לתאם מראש
                </span>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-[#e8ded1] block">
                    מתחם מעיינות וספא יוקרתי
                  </span>
                  <h3 className="text-xl font-editorial font-bold text-white drop-shadow-sm">
                    {SPA_PULSE_THERME.name}
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-4 space-y-3 bg-[#fcfaf7]">
              {/* Urgent Booking Callout */}
              <div className="bg-[#fff7f5] border-r-4 border-r-[#b85c39] border border-[#f8d7ce] rounded-2xl p-3.5 text-xs text-[#8a2a16] space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-sm">
                  <AlertTriangle className="w-4 h-4 text-[#cf482c]" />
                  <span>עדיפות עליונה: להזמין תור לעיסוי זוגי בהקדם!</span>
                </div>
                <p className="leading-relaxed">
                  הכניסה לספא מתוכננת לערב 6.10 לאחר טרק חמשת האגמים. כדי להבטיח זמינות מטפלים לעיסוי זוגי באותו הערב, חובה לתאם טלפונית מראש.
                </p>
              </div>

              {/* Spa Details */}
              <div className="bg-white p-3 rounded-2xl border border-[#ded8ce] space-y-1.5 text-xs text-[#52493d]">
                <div className="flex justify-between">
                  <span className="font-bold">{SPA_PULSE_THERME.location}</span>
                  <span className="text-slate-500">מיקום:</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold font-mono ltr">{SPA_PULSE_THERME.hours}</span>
                  <span className="text-slate-500">שעות פעילות:</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">{SPA_PULSE_THERME.pricing}</span>
                  <span className="text-slate-500">כרטיס ספא:</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-[#1c2722] ltr">{SPA_PULSE_THERME.email}</span>
                  <span className="text-slate-500">דוא״ל:</span>
                </div>
              </div>

              {/* Kosher food rule */}
              <div className="bg-[#fff9eb] border border-[#f5e4bd] rounded-2xl p-3 text-xs text-[#7a5814] space-y-1">
                <div className="flex items-center gap-1 font-bold">
                  <AlertTriangle className="w-3.5 h-3.5 text-[#b07d1a]" />
                  <span>דגש כשרות קריטי בספא:</span>
                </div>
                <p className="text-[11px] leading-relaxed">{SPA_PULSE_THERME.kosherRules}</p>
              </div>

              {/* What to pack */}
              <div className="bg-white p-3 rounded-2xl border border-[#ded8ce] text-xs space-y-1 text-[#52493d]">
                <span className="font-bold text-[#1c2722] block">ציוד לקחת איתנו:</span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {SPA_PULSE_THERME.packList.map((item, idx) => (
                    <span key={idx} className="bg-[#f2eee7] border border-[#e2dcd1] px-2.5 py-0.5 rounded-lg text-[11px]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${SPA_PULSE_THERME.phone}`}
                  className="flex items-center justify-center gap-1.5 bg-[#204234] hover:bg-[#183328] text-white font-medium py-2.5 rounded-xl text-xs transition shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>חייג להזמנת עיסוי</span>
                </a>
                <a
                  href="https://pulsetherme.bg/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-white hover:bg-[#f4efe8] text-[#204234] font-medium py-2.5 rounded-xl text-xs border border-[#ded8ce] transition"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  <span>אתר Pulse Therme</span>
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Pulse+Therme+Banya"
                  target="_blank"
                  rel="noreferrer"
                  className="col-span-2 flex items-center justify-center gap-1.5 bg-[#f2eee7] hover:bg-[#e8e2d8] text-[#204234] font-bold py-2.5 rounded-xl text-xs border border-[#d6cec0] transition"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>נווט ל-Pulse Therme Banya</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. EMERGENCY SECTION */}
      {activeSection === "emergency" && (
        <div className="space-y-3">
          <button
            onClick={onOpenSos}
            className="w-full bg-rose-600 hover:bg-rose-700 text-white p-3.5 rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-md transition animate-pulse"
          >
            <ShieldAlert className="w-5 h-5" />
            <span>פתח מסך חירום הררי (SOS עם GPS)</span>
          </button>

          <div className="space-y-2">
            {EMERGENCY_CONTACTS.map((contact, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-3 shadow-xs flex items-center justify-between text-xs"
              >
                <a
                  href={`tel:${contact.phone}`}
                  className="bg-rose-50 hover:bg-rose-100 text-rose-700 font-mono font-bold px-3 py-2 rounded-xl flex items-center gap-1.5 ltr"
                >
                  <Phone className="w-3.5 h-3.5 text-rose-600" />
                  <span>{contact.displayPhone}</span>
                </a>
                <div className="text-right">
                  <h4 className="font-black text-slate-900">{contact.name}</h4>
                  <span className="text-[11px] text-slate-500">{contact.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 7. DOCUMENTS & OFFLINE FILES SECTION */}
      {activeSection === "docs" && (
        <div className="space-y-3">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-3 text-xs text-blue-900 leading-relaxed">
            📁 <b>קובצי נסיעה Offline:</b> רשימת מסמכי הנסיעה הנדרשים. ודא שכל הקבצים שמורים בזיכרון הטלפון לקריאה ללא צורך ברשת.
          </div>

          <div className="space-y-2 text-xs">
            {/* Wizz Boarding pass 1 */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-3 shadow-xs flex items-center justify-between">
              <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md">
                כרטיס קיים
              </span>
              <div className="text-right">
                <span className="font-bold text-slate-900 block font-mono ltr">AVIHU TVUYA_SITTON.pdf</span>
                <span className="text-[11px] text-slate-500">כרטיס עלייה למטוס Wizz Air - הלוך TLV</span>
              </div>
            </div>

            {/* Wizz Boarding pass 2 */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-3 shadow-xs flex items-center justify-between">
              <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md">
                כרטיס קיים
              </span>
              <div className="text-right">
                <span className="font-bold text-slate-900 block font-mono ltr">GIL_SITTON.pdf</span>
                <span className="text-[11px] text-slate-500">כרטיס עלייה למטוס Wizz Air - הלוך TLV</span>
              </div>
            </div>

            {/* Official Car Voucher */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-3 shadow-xs flex items-center justify-between">
              <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-md">
                חובה בדלפק
              </span>
              <div className="text-right">
                <span className="font-bold text-slate-900 block font-mono ltr">Official Booking Car Voucher (Top Rent)</span>
                <span className="text-[11px] text-slate-500">שובר ההשכרה הרשמי עם הוראות השאטל (ref: 722769120)</span>
              </div>
            </div>

            {/* Car rental print */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-3 shadow-xs flex items-center justify-between">
              <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                תקציר בלבד
              </span>
              <div className="text-right">
                <span className="font-bold text-slate-900 block font-mono ltr">Booking_car_rental_print.pdf</span>
                <span className="text-[11px] text-slate-500">תקציר הזמנה (אינו תחליף לשובר הרשמי!)</span>
              </div>
            </div>

            {/* RentalCover Policy */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-3 shadow-xs flex items-center justify-between">
              <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md font-mono ltr">
                SEHP-P4E8-INS
              </span>
              <div className="text-right">
                <span className="font-bold text-slate-900 block font-mono ltr">RentalCover Policy & Confirmation</span>
                <span className="text-[11px] text-slate-500">אישור כיסוי מלא להחזר ביטוחי (לא כולל נסיעות שטח)</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 8. PACKING CHECKLIST SECTION */}
      {activeSection === "packing" && (
        <div className="space-y-3">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3 text-xs text-emerald-900">
            רשימת ציוד מלאה לקראת יציאה מישראל. סימון פריטים נשמר בטלפון ב-Offline.
          </div>

          <div className="bg-white rounded-3xl border border-slate-200/90 p-4 shadow-xs space-y-2">
            {INITIAL_PACKING_LIST.map((item) => {
              const isChecked = !!checkedTasks[item.id];

              return (
                <label
                  key={item.id}
                  className={`flex items-start gap-2.5 p-2 rounded-xl text-xs cursor-pointer transition ${
                    isChecked ? "text-slate-400 line-through bg-slate-50" : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onToggleTask(item.id)}
                    className="mt-0.5 w-4 h-4 rounded text-emerald-600"
                  />
                  <div className="flex-1">
                    <span className="leading-relaxed">{item.text}</span>
                    <span className="block text-[10px] text-slate-400">{item.category}</span>
                  </div>
                </label>
              );
            })}
          </div>
        </div>
      )}

      {/* 9. VERIFIED LINKS & SOURCES */}
      {activeSection === "links" && (
        <div className="space-y-3 text-xs">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 text-slate-700 leading-relaxed">
            <b>מדרג מקורות ותאריכי אימות:</b><br />
            גרסה קובעת מעודכנת: <b>04.10.2026</b>.<br />
            הנחיות ישירות מהמשתמש והספקים קודמות לכל מידע אינטרנטי גנרי.
          </div>

          <div className="space-y-2">
            <a
              href="https://bansko.bg"
              target="_blank"
              rel="noreferrer"
              className="bg-white border rounded-2xl p-3 flex items-center justify-between shadow-xs hover:border-emerald-300"
            >
              <ExternalLink className="w-4 h-4 text-slate-400" />
              <div className="text-right">
                <span className="font-bold text-slate-900 block">עיריית בנסקו (Bansko.bg)</span>
                <span className="text-[11px] text-slate-500">סטטוס דרכים וצווי חסימות רולר-סקי</span>
              </div>
            </a>

            <a
              href="https://kosher.global/zekasher"
              target="_blank"
              rel="noreferrer"
              className="bg-white border rounded-2xl p-3 flex items-center justify-between shadow-xs hover:border-emerald-300"
            >
              <ExternalLink className="w-4 h-4 text-slate-400" />
              <div className="text-right">
                <span className="font-bold text-slate-900 block">ZeKasher — מאגר הברקודים הרשמי</span>
                <span className="text-[11px] text-slate-500">kosher.global/zekasher (GOK)</span>
              </div>
            </a>

            <a
              href="https://toprentacar.bg"
              target="_blank"
              rel="noreferrer"
              className="bg-white border rounded-2xl p-3 flex items-center justify-between shadow-xs hover:border-emerald-300"
            >
              <ExternalLink className="w-4 h-4 text-slate-400" />
              <div className="text-right">
                <span className="font-bold text-slate-900 block">Top Rent A Car בולגריה</span>
                <span className="text-[11px] text-slate-500">נהלי השכרה ושירות שאטל בסופיה</span>
              </div>
            </a>

            <a
              href="https://pulsetherme.bg"
              target="_blank"
              rel="noreferrer"
              className="bg-white border rounded-2xl p-3 flex items-center justify-between shadow-xs hover:border-emerald-300"
            >
              <ExternalLink className="w-4 h-4 text-slate-400" />
              <div className="text-right">
                <span className="font-bold text-slate-900 block">Pulse Therme באניה</span>
                <span className="text-[11px] text-slate-500">pulsetherme.bg (Weekday pass €30)</span>
              </div>
            </a>

            <a
              href="https://www.wikiloc.com/hiking-trails/okoto-lake-lago-dalgoto-and-muratovo-ezero-from-vihren-hut-270168580"
              target="_blank"
              rel="noreferrer"
              className="bg-white border rounded-2xl p-3 flex items-center justify-between shadow-xs hover:border-emerald-300"
            >
              <ExternalLink className="w-4 h-4 text-slate-400" />
              <div className="text-right">
                <span className="font-bold text-slate-900 block">Five Lakes Loop — Wikiloc</span>
                <span className="text-[11px] text-slate-500">הקלטת שטח עדכנית (8.27 ק״מ / +468 מ')</span>
              </div>
            </a>

            <a
              href="https://www.wikiloc.com/hiking-trails/kazana-shelter-premkata-und-vihren-von-vihren-hut-284315810"
              target="_blank"
              rel="noreferrer"
              className="bg-white border rounded-2xl p-3 flex items-center justify-between shadow-xs hover:border-emerald-300"
            >
              <ExternalLink className="w-4 h-4 text-slate-400" />
              <div className="text-right">
                <span className="font-bold text-slate-900 block">Vihren Peak via Kazana — Wikiloc</span>
                <span className="text-[11px] text-slate-500">הקלטת שטח מספטמבר 2026 (10.4 ק״מ / +990 מ')</span>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

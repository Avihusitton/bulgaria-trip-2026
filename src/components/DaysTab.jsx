import React, { useState } from "react";
import { 
  Calendar, Clock, AlertTriangle, CheckSquare, Navigation, Phone, 
  MessageSquare, ChevronDown, ChevronUp, Compass, MapPin, ExternalLink,
  Waves, Bike, Car, Heart, ArrowUpRight
} from "lucide-react";
import { DAYS_PLAN, CAR_RENTAL, BIKES_INFO, SPA_PULSE_THERME } from "../data/tripData";

export default function DaysTab({ 
  selectedDate, 
  onSelectDate, 
  onOpenPlanB, 
  onOpenTrail, 
  checkedTasks, 
  onToggleTask,
  timestamps
}) {
  const [expandedDay, setExpandedDay] = useState(
    DAYS_PLAN.find(d => d.date === selectedDate)?.dayNumber || 1
  );

  const toggleDay = (dayNum) => {
    setExpandedDay(expandedDay === dayNum ? null : dayNum);
  };

  // Day specific image backgrounds and evocative vibes
  const dayVibes = {
    1: {
      image: "./images/thermal-villa.jpg",
      tag: "הגעה ומעיינות תרמיים",
      sentence: "נחיתה בסופיה, איסוף הרכב, התמקמות בווילה בבאניה והתארגנות לטיול.",
      accentBg: "bg-[#204234]"
    },
    2: {
      image: "./images/five-lakes.jpg",
      tag: "אגמים אלפיניים וספא",
      sentence: "הליכה שלווה בין חמשת אגמי בנדריצה הצלולים והשתקפויות שלכת זהובה.",
      accentBg: "bg-[#1d3d4d]"
    },
    3: {
      image: "./images/vihren-peak.jpg",
      tag: "רכס שיש אלפיני דרמטי",
      sentence: "העפלה דרך עמק הקאזאנה אל פסגת ויחרן (2,914 מ') — הגג השישי בגובהו באירופה.",
      accentBg: "bg-[#2c3338]"
    },
    4: {
      image: "./images/ebike-bansko.jpg",
      tag: "שבילי יער, אופניים וקפה",
      sentence: "רכיבת e-MTB זורמת ביערות עמק פירין, קפה מעולה בבנסקו וטבילה לילית בווילה.",
      accentBg: "bg-[#33462f]"
    },
    5: {
      image: "./images/hero-pirin.jpg",
      tag: "החזרת רכב וטיסת בוקר",
      sentence: "יציאה מוקדמת מסופיה, החזרת הרכב ב-04:00 והמראה ב-05:45 הביתה.",
      accentBg: "bg-[#1f2924]"
    }
  };

  return (
    <div className="space-y-6 pb-28 animate-fade-in text-right">
      
      {/* Editorial Header */}
      <div className="flex items-baseline justify-between px-1 pt-1">
        <span className="text-xs font-mono text-[#8a8073]">5 ימי מסלול ומסע</span>
        <h2 className="text-2xl font-black font-editorial text-[#162c21]">
          יומן המסע · EXPEDITION LOG
        </h2>
      </div>

      <div className="space-y-5">
        {DAYS_PLAN.map((day) => {
          const isExpanded = expandedDay === day.dayNumber;
          const isSelected = selectedDate === day.date;
          const vibe = dayVibes[day.dayNumber] || dayVibes[1];

          return (
            <div
              key={day.dayNumber}
              className={`p-1.5 rounded-[2rem] transition-all duration-300 ${
                isSelected
                  ? "bg-[#1f3f31]/20 ring-2 ring-[#1f3f31]/40 shadow-sm"
                  : "bg-stone-200/50 ring-1 ring-black/[0.03]"
              }`}
            >
              <div className="rounded-[calc(2rem-0.375rem)] overflow-hidden bg-[#fdfbf7] shadow-xs">
                {/* Day Visual Header Card (Clickable accordion banner) */}
                <div
                  onClick={() => toggleDay(day.dayNumber)}
                  className="relative min-h-[155px] flex flex-col justify-end p-5 text-white cursor-pointer select-none overflow-hidden group"
                >
                  {/* Background image */}
                  <img
                    src={vibe.image}
                    alt={day.title}
                    className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.70] group-hover:scale-102 transition duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

                  {/* Content */}
                  <div className="relative z-10 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-medium border border-white/25">
                          {vibe.tag}
                        </span>
                        {isSelected && (
                          <span className="bg-[#c5a371] text-slate-900 font-bold px-2.5 py-0.5 rounded-full text-[10px] shadow-xs">
                            יום פעיל כעת
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-xs text-[#e8ded1] bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-xs ltr">
                        {day.date.split("-").reverse().join(".")}
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between pt-1">
                      <div className="flex items-center gap-1.5 text-white/80">
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                      <div className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <span className="text-[10px] font-magazine font-black tracking-widest text-[#d4af37]">
                            CHAPTER 0{day.dayNumber}
                          </span>
                          <span className="text-xs text-[#e8ded1] font-mono">
                            · {day.dayOfWeek}
                          </span>
                        </div>
                        <h3 className="text-xl font-black font-editorial text-white drop-shadow-sm">
                          {day.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Day Details */}
                {isExpanded && (
                  <div className="p-5 space-y-4 bg-[#fdfbf7] border-t border-[#ece6db] animate-fade-in">
                  
                  {/* Select this day trigger */}
                  {!isSelected && (
                    <button
                      onClick={() => onSelectDate(day.date)}
                      className="w-full py-2 px-3 bg-[#f2eee7] hover:bg-[#e8e2d8] text-[#204234] rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5"
                    >
                      <span>הגדר יום זה כפעיל כעת במסך הבית</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {/* Evocative summary sentence */}
                  <p className="text-xs text-[#52493d] font-sans text-right leading-relaxed border-b border-[#ece6db] pb-3">
                    ״{vibe.sentence}״
                  </p>

                  {/* Primary Stats if trail */}
                  {day.trailDetails && (
                    <div className="bg-white border border-[#ded8ce] rounded-2xl p-3 flex items-center justify-around text-center text-xs font-mono">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-sans">מרחק</span>
                        <span className="font-bold text-[#1c2722]">{day.trailDetails.distance}</span>
                      </div>
                      <div className="h-6 w-px bg-slate-200"></div>
                      <div>
                        <span className="text-[10px] text-slate-400 block font-sans">משך זמן</span>
                        <span className="font-bold text-[#1c2722]">{day.trailDetails.duration}</span>
                      </div>
                      <div className="h-6 w-px bg-slate-200"></div>
                      <div>
                        <span className="text-[10px] text-slate-400 block font-sans">טיפוס</span>
                        <span className="font-bold text-[#1c2722]">{day.trailDetails.elevationGain.split("/")[0]}</span>
                      </div>
                    </div>
                  )}

                  {/* Key Alert (Warm, humanized advice) */}
                  {day.keyAlert && (
                    <div className="bg-[#fff7f5] border border-[#f8d7ce] rounded-2xl p-3 text-xs text-[#8a2a16] flex items-start gap-2">
                      <span className="text-base select-none shrink-0 mt-0.5">💡</span>
                      <div className="leading-relaxed">
                        <span className="font-bold">טיפ שטח מהלב: </span>
                        {day.keyAlert}
                      </div>
                    </div>
                  )}

                  {/* Direct Actions Bar for this specific day */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-[#62594d] block">
                      פעולות מיידיות ליום זה:
                    </span>

                    {/* Day 1 Actions */}
                    {day.dayNumber === 1 && (
                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href="https://www.google.com/maps/dir/?api=1&destination=Top+Rent+A+Car+Sofia+Airport"
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-1.5 bg-[#204234] hover:bg-[#183328] text-white font-medium py-2.5 px-3 rounded-xl text-xs transition active:scale-98"
                        >
                          <Navigation className="w-3.5 h-3.5" />
                          <span>נווט לשאטל Top Rent</span>
                        </a>
                        <a
                          href={`tel:${CAR_RENTAL.phone}`}
                          className="flex items-center justify-center gap-1.5 bg-white hover:bg-[#f4efe8] text-[#204234] font-medium py-2.5 px-3 rounded-xl text-xs border border-[#d6cec0] transition active:scale-98"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>חייג ל-Top Rent</span>
                        </a>
                        <a
                          href="https://www.google.com/maps/dir/?api=1&destination=41.87588,23.5273"
                          target="_blank"
                          rel="noreferrer"
                          className="col-span-2 flex items-center justify-center gap-1.5 bg-white hover:bg-[#f4efe8] text-[#204234] font-medium py-2.5 px-3 rounded-xl text-xs border border-[#d6cec0] transition active:scale-98"
                        >
                          <Navigation className="w-3.5 h-3.5" />
                          <span>נווט לחניית הווילה בבאניה (Three Peaks)</span>
                        </a>
                      </div>
                    )}

                    {/* Day 2 Actions */}
                    {day.dayNumber === 2 && (
                      <div className="space-y-2">
                        <a
                          href="https://www.google.com/maps/dir/?api=1&destination=41.7558,23.4158"
                          target="_blank"
                          rel="noreferrer"
                          className="w-full flex items-center justify-center gap-1.5 bg-[#204234] hover:bg-[#183328] text-white font-medium py-2.5 px-3 rounded-xl text-xs transition active:scale-98"
                        >
                          <Navigation className="w-3.5 h-3.5" />
                          <span>נווט לבקתת ויחרן (Vihren Hut)</span>
                        </a>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => onOpenTrail("five-lakes")}
                            className="flex items-center justify-center gap-1.5 bg-white hover:bg-[#f4efe8] text-[#204234] font-medium py-2 px-3 rounded-xl text-xs border border-[#d6cec0] transition active:scale-98"
                          >
                            <MapPin className="w-3.5 h-3.5 text-blue-600" />
                            <span>פתח מפת מסלול</span>
                          </button>
                          <a
                            href="tel:+359898989898"
                            className="flex items-center justify-center gap-1.5 bg-[#f5eee4] hover:bg-[#ece2d4] text-[#9e4624] font-medium py-2 px-3 rounded-xl text-xs border border-[#e5d5c0] transition active:scale-98"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            <span>חייג לספא להזמנת עיסוי</span>
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Day 3 Actions */}
                    {day.dayNumber === 3 && (
                      <div className="space-y-2">
                        <a
                          href="https://www.google.com/maps/dir/?api=1&destination=41.7558,23.4158"
                          target="_blank"
                          rel="noreferrer"
                          className="w-full flex items-center justify-center gap-1.5 bg-[#204234] hover:bg-[#183328] text-white font-medium py-2.5 px-3 rounded-xl text-xs transition active:scale-98"
                        >
                          <Navigation className="w-3.5 h-3.5" />
                          <span>נווט לבקתת ויחרן לתחילת ההעפלה</span>
                        </a>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => onOpenTrail("vihren-peak")}
                            className="flex items-center justify-center gap-1.5 bg-white hover:bg-[#f4efe8] text-[#204234] font-medium py-2 px-3 rounded-xl text-xs border border-[#d6cec0] transition active:scale-98"
                          >
                            <MapPin className="w-3.5 h-3.5 text-blue-600" />
                            <span>מפת מסלול ויחרן (10.4 ק״מ)</span>
                          </button>
                          <a
                            href="https://www.wikiloc.com/hiking-trails/kazana-shelter-premkata-und-vihren-von-vihren-hut-284315810"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-1.5 bg-white hover:bg-[#f4efe8] text-[#204234] font-medium py-2 px-3 rounded-xl text-xs border border-[#d6cec0] transition active:scale-98"
                          >
                            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                            <span>הקלטת שטח ב-Wikiloc</span>
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Day 4 Actions */}
                    {day.dayNumber === 4 && (
                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href={`https://wa.me/${BIKES_INFO.primary.phone.replace(/[^0-9]/g, "")}`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-1.5 bg-[#204234] hover:bg-[#183328] text-white font-medium py-2.5 px-3 rounded-xl text-xs transition active:scale-98"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>WhatsApp לאופניים</span>
                        </a>
                        <button
                          onClick={() => onOpenTrail("ebike-valley")}
                          className="flex items-center justify-center gap-1.5 bg-white hover:bg-[#f4efe8] text-[#204234] font-medium py-2.5 px-3 rounded-xl text-xs border border-[#d6cec0] transition active:scale-98"
                        >
                          <Bike className="w-3.5 h-3.5 text-emerald-600" />
                          <span>מסלול רכיבה וקפה</span>
                        </button>
                      </div>
                    )}

                    {/* Day 5 Actions */}
                    {day.dayNumber === 5 && (
                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href="https://www.google.com/maps/dir/?api=1&destination=Top+Rent+A+Car+Sofia+Airport"
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-1.5 bg-[#204234] hover:bg-[#183328] text-white font-medium py-2.5 px-3 rounded-xl text-xs transition active:scale-98"
                        >
                          <Navigation className="w-3.5 h-3.5" />
                          <span>נווט להחזרת רכב (04:00)</span>
                        </a>
                        <a
                          href={`tel:${CAR_RENTAL.phone}`}
                          className="flex items-center justify-center gap-1.5 bg-white hover:bg-[#f4efe8] text-[#204234] font-medium py-2.5 px-3 rounded-xl text-xs border border-[#d6cec0] transition active:scale-98"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>מוקד Top Rent שדה״ת</span>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Daily Tasks Checklist */}
                  <div className="bg-white border border-[#ded8ce] rounded-2xl p-3.5 space-y-2">
                    <span className="text-xs font-bold text-[#1c2722] block">
                      משימות תפעוליות ליום זה:
                    </span>
                    <div className="space-y-1">
                      {day.checklist.map((taskText, idx) => {
                        const taskId = `${day.date}-${taskText}`;
                        const isChecked = !!checkedTasks[taskId];

                        return (
                          <label
                            key={idx}
                            className={`flex items-start gap-2 p-1.5 rounded-lg text-xs cursor-pointer transition ${
                              isChecked ? "text-slate-400 line-through bg-slate-50" : "text-slate-800 hover:bg-[#fcfaf7]"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => onToggleTask(taskId)}
                              className="mt-0.5 w-3.5 h-3.5 rounded text-[#204234] focus:ring-[#204234]"
                            />
                            <span className="leading-relaxed flex-1">{taskText}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Plan B Trigger for this day */}
                  <button
                    onClick={onOpenPlanB}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl text-xs text-[#52645a] hover:bg-[#f2eee7] border border-[#e2dcd1] transition"
                  >
                    <div className="flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-[#b85c39]" />
                      <span>לא מתאים או מזג אוויר סגור?</span>
                    </div>
                    <span className="font-bold text-[#b85c39]">חלופות ו-Plan B 🌿</span>
                  </button>

                </div>
              )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

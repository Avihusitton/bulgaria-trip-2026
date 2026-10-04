import React from "react";
import { X, Compass, Mountain, Trees, Waves, Coffee, Car, Navigation, ChevronLeft } from "lucide-react";

export default function PlanBModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const planBOptions = [
    {
      category: "חלופת הר מתונה (אם הפסגה מעורפלת, קפואה או סגורה)",
      icon: Mountain,
      color: "bg-[#edf5f0] border-[#cfe2d4] text-[#163a28]",
      items: [
        {
          title: "קיצור לאגם מוראטובו בלבד (Muratovo Lake)",
          desc: "עלייה מתונה של כ-280 מטר בלבד מבקתת ויחרן (שעתיים וחצי הלוך-חזור). אגם מרהיב למרגלות מצוק מוראטוב, ללא טיפוס חשוף.",
          navUrl: "https://www.google.com/maps/dir/?api=1&destination=41.7558,23.4158"
        },
        {
          title: "שביל היער ומפלי בנדריצה (Banderitsa Falls)",
          desc: "מסלול הליכה נמוך ונעים בתוך יער האורנים והשלכת, מוגן מרוחות הפסגה, ללא צורך בהעפלה לאזורים האלפיניים.",
          navUrl: "https://www.google.com/maps/dir/?api=1&destination=Banderitsa+Hut+Bulgaria"
        }
      ]
    },
    {
      category: "חלופה למזג אוויר סוער או חסימת כביש בבנסקו",
      icon: Car,
      color: "bg-[#fcf5eb] border-[#f2debe] text-[#6d4d19]",
      items: [
        {
          title: "נסיעה דרומה למלניק ופירמידות החול (Melnik Sand Pyramids)",
          desc: "כשבהרי פירין יש עננות וקור, עמק סנדנסקי ומלניק (כשעה ורבע נסיעה דרומה) נמוכים וחמימים בהרבה. עיירה היסטורית שמורה, תצורות חול דרמטיות והליכה קלה של 3 ק״מ.",
          navUrl: "https://www.google.com/maps/dir/?api=1&destination=Melnik+Bulgaria"
        },
        {
          title: "סיבוב נופי באזור דוברינישטה (Dobrinishte)",
          desc: "נסיעה קצרה של 10 דקות מבאניה. כפר הררי מסורתי, אווירה מקומית שלווה ושלכת סתווית נפלאה.",
          navUrl: "https://www.google.com/maps/dir/?api=1&destination=Dobrinishte+Bulgaria"
        }
      ]
    },
    {
      category: "חלופת רוגע, ספא וזמן זוגי (אם האופניים לא מתאימים)",
      icon: Waves,
      color: "bg-[#f2f6f5] border-[#d4e2df] text-[#224842]",
      items: [
        {
          title: "הרחבת זמן ב-Pulse Therme בבאניה",
          desc: "מעבר ליום פינוק מלא במרחצאות התרמיים, בריכות המינרלים החמות, מתחמי הסאונה והזמנת עיסוי זוגי מפנק.",
          navUrl: "https://www.google.com/maps/dir/?api=1&destination=Pulse+Therme+Banya"
        },
        {
          title: "קפה משובח ב-DABOV ושיטוט בעיר העתיקה של בנסקו",
          desc: "עצירה בבית הקלייה האיכותי DABOV ברחוב פירין 84, קפה מעולה וזמן איכות זוגי נינוח ללא לחץ.",
          navUrl: "https://www.google.com/maps/dir/?api=1&destination=84+Pirin+Street+Bansko"
        },
        {
          title: "מנוחה וזמן בריכה בווילה הפרטית (Three Peaks)",
          desc: "ליהנות מהמים התרמיים החמים (37–38°C) בבריכה הפרטית של הווילה, ספר טוב, ארוחה ביתית כשרה ושקט מושלם.",
          navUrl: "https://www.google.com/maps/dir/?api=1&destination=41.87588,23.5273"
        }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-[#102018]/80 backdrop-blur-xs animate-fade-in">
      <div className="bg-[#fbf9f5] rounded-3xl w-full max-w-xl max-h-[92vh] flex flex-col border border-[#ded8ce] shadow-2xl text-right overflow-hidden">
        
        {/* Visual Header */}
        <div className="relative min-h-[120px] flex flex-col justify-end p-4 text-white overflow-hidden shrink-0">
          <img
            src="./images/plan-b-melnik.jpg"
            alt="Plan B Autumn Retreat"
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.65]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

          <div className="relative z-10 flex items-center justify-between">
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-xs transition"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-right">
              <span className="text-[10px] font-mono text-[#e8ded1] block">
                תוכניות חלופיות וגמישות
              </span>
              <h2 className="text-xl font-editorial font-bold text-white drop-shadow-sm">
                מאגר חלופות ו-Plan B
              </h2>
            </div>
          </div>
        </div>

        {/* Philosophy Note */}
        <div className="p-3 bg-[#f2eee7] border-b border-[#dfd8cc] text-xs text-[#52493d] leading-relaxed">
          🌿 <b>עיקרון ברור:</b> לא ״מצילים בכוח״ מסלול בגובה אם יש רוח, ערפל, קרח או חסימת כביש. עוברים בנינוחות לחלופה ונהנים מחופשה זוגית מושלמת.
        </div>

        {/* Options Body */}
        <div className="p-4 space-y-4 overflow-y-auto flex-1">
          {planBOptions.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div key={idx} className={`p-4 rounded-2xl border ${group.color} space-y-2.5`}>
                <div className="flex items-center justify-end gap-2 font-bold text-xs">
                  <span>{group.category}</span>
                  <Icon className="w-4 h-4 shrink-0" />
                </div>

                <div className="space-y-2">
                  {group.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="bg-white p-3 rounded-xl border border-[#ded8ce] shadow-2xs space-y-1.5">
                      <div className="flex items-start justify-between gap-2">
                        <a
                          href={item.navUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="shrink-0 flex items-center gap-1 bg-[#204234] hover:bg-[#183328] text-white font-medium py-1 px-2.5 rounded-lg text-[11px] transition shadow-xs"
                        >
                          <Navigation className="w-3 h-3" />
                          <span>נווט</span>
                        </a>
                        <h4 className="font-editorial font-bold text-xs text-[#1c2722] text-right">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-[11px] text-[#5c5448] leading-relaxed text-right">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

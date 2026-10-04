import React, { useState, useEffect } from "react";
import { 
  X, CreditCard, Plus, Trash2, Check, Share2, Sparkles, 
  PieChart, Tag, ArrowRight, Wallet, ShoppingBag, Fuel, Coffee, 
  Bike, Waves, Building2, HelpCircle 
} from "lucide-react";

export default function TripBudgetModal({ isOpen, onClose }) {
  const STORAGE_KEY = "bulgaria_trip_expenses_v2";

  // Pre-seeded verified expenses already paid or contracted
  const initialExpenses = [
    { id: "pre-1", title: "וילה Three Peaks (Booking.com)", amount: 474.48, currency: "EUR", timing: "pre", cat: "לינה", method: "אשראי (שולם בארץ)" },
    { id: "pre-2", title: "השכרת רכב VW T-Roc (Booking.com)", amount: 662, currency: "ILS", timing: "pre", cat: "רכב", method: "אשראי (שולם בארץ)" },
    { id: "pre-3", title: "ביטוח RentalCover מלא", amount: 271, currency: "ILS", timing: "pre", cat: "רכב", method: "אשראי (שולם בארץ)" },
    { id: "pre-4", title: "Late Stay בווילה (סוכם ישירות מול המארח)", amount: 130, currency: "EUR", timing: "trip", cat: "לינה", method: "אשראי / מזומן" },
    { id: "pre-5", title: "השכרת e-Bike Bansko לזוג (Tuwan/Yamka)", amount: 76, currency: "EUR", timing: "trip", cat: "אטרקציות", method: "אשראי בדלפק" },
    { id: "pre-6", title: "נהג נוסף Top Rent בולגריה", amount: 16.80, currency: "EUR", timing: "trip", cat: "רכב", method: "אשראי באיסוף" }
  ];

  const [expenses, setExpenses] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return initialExpenses;
  });

  const [amountInput, setAmountInput] = useState("");
  const [currency, setCurrency] = useState("BGN");
  const [titleInput, setTitleInput] = useState("");
  const [category, setCategory] = useState("אוכל וסופר");
  const [activeFilter, setActiveFilter] = useState("all"); // "all" | "trip" | "pre"
  const [copiedSummary, setCopiedSummary] = useState(false);

  // Quick preset buttons for ultra-fast 1-tap logging
  const quickPresets = [
    { label: "סופר BILLA", cat: "אוכל וסופר", cur: "BGN", icon: ShoppingBag },
    { label: "סופר T MARKET", cat: "אוכל וסופר", cur: "BGN", icon: ShoppingBag },
    { label: "דלק לרכב", cat: "רכב", cur: "BGN", icon: Fuel },
    { label: "קפה ומאפה DABOV", cat: "אוכל וסופר", cur: "BGN", icon: Coffee },
    { label: "ספא Pulse Therme", cat: "אטרקציות", cur: "EUR", icon: Waves },
    { label: "מסעדה / ערב", cat: "אוכל וסופר", cur: "BGN", icon: Coffee },
    { label: "ציוד / מזכרות", cat: "שונות", cur: "BGN", icon: Tag },
  ];

  // Quick amount increments
  const quickAmounts = [10, 20, 50, 100];

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
    } catch (e) {}
  }, [expenses]);

  if (!isOpen) return null;

  // Bulgarian Lev official currency board peg: 1 EUR = 1.95583 BGN
  // Estimated exchange to ILS: 1 EUR ≈ 4.05 ₪, 1 BGN ≈ 2.07 ₪
  const toIls = (amount, cur) => {
    const num = parseFloat(amount) || 0;
    if (cur === "ILS") return num;
    if (cur === "EUR") return num * 4.05;
    if (cur === "BGN") return num * 2.0707;
    return num;
  };

  const toEur = (amount, cur) => {
    const num = parseFloat(amount) || 0;
    if (cur === "EUR") return num;
    if (cur === "BGN") return num / 1.95583;
    if (cur === "ILS") return num / 4.05;
    return num;
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    const val = parseFloat(amountInput);
    if (isNaN(val) || val <= 0) return;

    const newExp = {
      id: "exp-" + Date.now(),
      title: titleInput.trim() || category,
      amount: val,
      currency: currency,
      timing: "trip",
      cat: category,
      method: "אשראי",
      date: new Date().toLocaleDateString("he-IL", { day: "2-digit", month: "2-digit" })
    };

    setExpenses([newExp, ...expenses]);
    setAmountInput("");
    setTitleInput("");
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter(x => x.id !== id));
  };

  const handlePresetClick = (preset) => {
    setTitleInput(preset.label);
    setCategory(preset.cat);
    setCurrency(preset.cur);
  };

  const handleQuickAddAmount = (addVal) => {
    const current = parseFloat(amountInput) || 0;
    setAmountInput(String(current + addVal));
  };

  // Calculations
  const preTripExpenses = expenses.filter(x => x.timing === "pre");
  const onTripExpenses = expenses.filter(x => x.timing === "trip");

  const preTripTotalIls = preTripExpenses.reduce((sum, x) => sum + toIls(x.amount, x.currency), 0);
  const onTripTotalIls = onTripExpenses.reduce((sum, x) => sum + toIls(x.amount, x.currency), 0);
  const grandTotalIls = preTripTotalIls + onTripTotalIls;
  const grandTotalEur = grandTotalIls / 4.05;

  // Breakdown by category in ILS
  const categoriesList = ["לינה", "רכב", "אוכל וסופר", "אטרקציות", "שונות"];
  const catTotals = categoriesList.map(cat => {
    const total = expenses
      .filter(x => x.cat === cat || (cat === "אוכל וסופר" && x.cat === "קפה ומסעדות"))
      .reduce((sum, x) => sum + toIls(x.amount, x.currency), 0);
    return { cat, total, pct: grandTotalIls > 0 ? (total / grandTotalIls) * 100 : 0 };
  }).filter(c => c.total > 0);

  // Filtered list
  const displayExpenses = expenses.filter(x => {
    if (activeFilter === "trip") return x.timing === "trip";
    if (activeFilter === "pre") return x.timing === "pre";
    return true;
  });

  // Current live conversion of typing amount
  const livePreviewAmount = parseFloat(amountInput) || 0;
  const livePreviewIls = toIls(livePreviewAmount, currency);
  const livePreviewEur = toEur(livePreviewAmount, currency);

  const copyTripSummary = () => {
    const catLines = catTotals.map(c => `  • ${c.cat}: ₪${Math.round(c.total).toLocaleString()} (${Math.round(c.pct)}%)`).join("\n");
    const lines = [
      `📊 סיכום הוצאות חופשת בולגריה — אביהו & גיל (10 שנות נישואין 💍)`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `💳 שולם מראש בארץ (טיסות/וילה/רכב): ₪${Math.round(preTripTotalIls).toLocaleString()}`,
      `💳 הוצאות באשראי בטיול בשטח: ₪${Math.round(onTripTotalIls).toLocaleString()}`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `💰 סה״כ כל עלות החופשה: ₪${Math.round(grandTotalIls).toLocaleString()} (כ-€${Math.round(grandTotalEur).toLocaleString()})`,
      ``,
      `חלוקה לפי תחומים:`,
      catLines,
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `שערים: 1€ = 1.95583 BGN (קבוע) | 1€ ≈ 4.05 ₪ | 1 BGN ≈ 2.07 ₪`
    ];
    navigator.clipboard.writeText(lines.join("\n"));
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-[#121c17]/80 backdrop-blur-xs animate-fade-in">
      <div className="bg-[#fbf9f5] rounded-3xl w-full max-w-lg max-h-[92vh] flex flex-col border border-[#ded8ce] shadow-2xl text-right overflow-hidden">
        
        {/* Header - Rustic, High Contrast */}
        <div className="flex items-center justify-between p-4 border-b border-[#e8e2d8] bg-white">
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="text-right">
            <div className="flex items-center justify-end gap-1.5">
              <h2 className="text-base font-black text-[#1b2621]">ריכוז הוצאות החופשה באשראי</h2>
              <CreditCard className="w-4 h-4 text-[#2d5945]" />
            </div>
            <span className="text-[11px] text-[#6d7770]">כל העלויות (בארץ ובשטח) מרוכזות במקום אחד</span>
          </div>
        </div>

        {/* Grand Total Hero Card - Honest Alpine Look, Zero Slop */}
        <div className="p-4 bg-[#f3efe8] border-b border-[#e2dcce] relative">
          <div className="flex items-baseline justify-between mb-1">
            <span className="text-xs font-mono font-bold text-[#62594e] ltr">
              ~€{Math.round(grandTotalEur).toLocaleString()}
            </span>
            <span className="text-xs font-bold text-[#443c32]">סה״כ כל עלות החופשה:</span>
          </div>
          
          <div className="text-3xl font-black font-mono text-[#1b2621] ltr text-left mb-2.5">
            ₪{Math.round(grandTotalIls).toLocaleString()}
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-white p-2.5 rounded-xl border border-[#ded8ce] text-right">
              <span className="text-[10px] text-slate-500 block">שולם מראש בארץ</span>
              <span className="font-bold text-[#1b2621] font-mono ltr text-sm">
                ₪{Math.round(preTripTotalIls).toLocaleString()}
              </span>
            </div>
            <div className="bg-white p-2.5 rounded-xl border border-[#ded8ce] text-right">
              <span className="text-[10px] text-slate-500 block">הוצאות באשראי בטיול</span>
              <span className="font-bold text-[#2d5945] font-mono ltr text-sm">
                ₪{Math.round(onTripTotalIls).toLocaleString()}
              </span>
            </div>
          </div>

          {/* Category mini breakdown bars */}
          <div className="mt-3 pt-2.5 border-t border-[#dfd8ca]">
            <div className="flex items-center justify-between text-[10px] text-[#6b6255] font-bold mb-1.5">
              <span>התפלגות עלויות:</span>
              <span className="font-mono">100% אשראי</span>
            </div>
            <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-none">
              {catTotals.map((c, i) => (
                <div key={i} className="bg-white/80 border border-[#dfd8ca] px-2 py-0.5 rounded-lg text-[10px] whitespace-nowrap text-[#3e382f]">
                  <span className="font-bold">{c.cat}: </span>
                  <span className="font-mono font-bold ltr">₪{Math.round(c.total).toLocaleString()}</span>
                  <span className="text-[9px] text-slate-400 mr-1">({Math.round(c.pct)}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ultra-Fast Expense Add Form */}
        <form onSubmit={handleAddExpense} className="p-3.5 bg-white border-b border-[#e8e2d8] space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-[#718277]">1-Tap: לחץ על ספק להזנה מהירה</span>
            <span className="text-xs font-bold text-[#1b2621]">רישום תשלום אשראי בשטח:</span>
          </div>

          {/* Quick Presets Chips */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {quickPresets.map((p, idx) => {
              const Icon = p.icon;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handlePresetClick(p)}
                  className={`py-1 px-2.5 rounded-lg text-xs whitespace-nowrap border transition flex items-center gap-1 active:scale-95 ${
                    titleInput === p.label
                      ? "bg-[#204234] text-white border-[#204234] font-bold shadow-xs"
                      : "bg-[#f7f5f0] text-slate-700 border-[#e5dfd5] hover:bg-[#ede7dc]"
                  }`}
                >
                  <Icon className="w-3 h-3 text-slate-400" />
                  <span>{p.label}</span>
                </button>
              );
            })}
          </div>

          {/* Input Row */}
          <div className="space-y-1.5">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="תיאור (למשל: סופר, דלק, קפה)"
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
                className="flex-1 bg-[#fbf9f5] border border-[#d8d2c6] rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#2d5945]"
              />
              <input
                type="number"
                step="any"
                required
                placeholder="0.00"
                value={amountInput}
                onChange={(e) => setAmountInput(e.target.value)}
                className="w-28 bg-[#fbf9f5] border border-[#d8d2c6] rounded-xl px-3 py-2 text-sm font-mono font-bold ltr text-left focus:outline-none focus:border-[#2d5945]"
              />
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-[#f7f5f0] border border-[#d8d2c6] rounded-xl px-2 py-2 text-xs font-bold text-slate-800"
              >
                <option value="BGN">BGN (לב)</option>
                <option value="EUR">EUR (€)</option>
                <option value="ILS">ILS (₪)</option>
              </select>
            </div>

            {/* Quick Increment Buttons & Live Conversion Preview */}
            <div className="flex items-center justify-between pt-0.5 text-xs">
              <div className="flex items-center gap-1">
                {quickAmounts.map(val => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => handleQuickAddAmount(val)}
                    className="px-2 py-0.5 rounded-md bg-[#f2eee7] border border-[#ded8ce] text-[10px] font-mono font-bold text-[#4a4237] hover:bg-[#e6e0d5] active:scale-95 transition"
                  >
                    +{val}
                  </button>
                ))}
              </div>

              {/* Real-time live conversion */}
              {livePreviewAmount > 0 && (
                <div className="text-[11px] font-mono text-[#2d5945] font-bold ltr">
                  ≈ ₪{Math.round(livePreviewIls).toLocaleString()} {currency === "BGN" ? `(~€${livePreviewEur.toFixed(1)})` : ""}
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#204234] hover:bg-[#183328] active:scale-98 text-white font-bold py-2.5 rounded-xl text-xs transition shadow-xs flex items-center justify-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>הוסף לתחשיב הוצאות הטיול</span>
          </button>
        </form>

        {/* Expenses List & Filter Tabs */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-[#fbf9f5]">
          <div className="flex items-center justify-between text-xs pb-1 px-1 border-b border-[#e8e2d8]">
            <button
              onClick={copyTripSummary}
              className="text-[#204234] hover:text-[#183328] font-bold flex items-center gap-1 active:scale-95 transition"
            >
              {copiedSummary ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedSummary ? "הסיכום הועתק ללוח!" : "העתק סיכום לוואטסאפ"}</span>
            </button>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 bg-[#ede8de] p-0.5 rounded-xl text-[10px] font-bold">
              <button
                type="button"
                onClick={() => setActiveFilter("all")}
                className={`px-2 py-1 rounded-lg transition ${activeFilter === "all" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600"}`}
              >
                הכל ({expenses.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter("trip")}
                className={`px-2 py-1 rounded-lg transition ${activeFilter === "trip" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600"}`}
              >
                בשטח ({onTripExpenses.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter("pre")}
                className={`px-2 py-1 rounded-lg transition ${activeFilter === "pre" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600"}`}
              >
                מראש ({preTripExpenses.length})
              </button>
            </div>
          </div>

          {displayExpenses.map((item) => {
            const ilsVal = toIls(item.amount, item.currency);

            return (
              <div
                key={item.id}
                className="bg-white border border-[#e8e2d8] rounded-xl p-2.5 flex items-center justify-between text-xs shadow-2xs hover:border-[#cfc6b6] transition"
              >
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-slate-300 hover:text-rose-600 p-1 transition"
                  title="מחק הוצאה"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-3">
                  <div className="text-left font-mono">
                    <span className="font-bold text-[#1b2621] block ltr text-sm">
                      {item.amount.toLocaleString()} {item.currency === "EUR" ? "€" : item.currency === "ILS" ? "₪" : "BGN"}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {item.currency !== "ILS" ? `~₪${Math.round(ilsVal).toLocaleString()}` : ""}
                    </span>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <span className="font-bold text-slate-900">{item.title}</span>
                      {item.timing === "pre" ? (
                        <span className="text-[9px] bg-[#e8eee9] text-[#2d5945] px-1.5 py-0.5 rounded-md font-bold">
                          מראש
                        </span>
                      ) : (
                        <span className="text-[9px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-md">
                          בטיול
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-500">{item.cat} · {item.method}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

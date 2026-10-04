import React, { useState } from "react";
import { X, ArrowRightLeft, Coins, Calculator } from "lucide-react";

export default function CurrencyConverterModal({ isOpen, onClose }) {
  // Exchange rates
  const EUR_TO_BGN = 1.95583; // Exact official Bulgarian currency board peg
  const EUR_TO_ILS = 4.05;    // Approximate current rate
  const BGN_TO_ILS = EUR_TO_ILS / EUR_TO_BGN; // ~2.07 ILS per BGN

  const [bgnVal, setBgnVal] = useState("10");
  const [eurVal, setEurVal] = useState((10 / EUR_TO_BGN).toFixed(2));
  const [ilsVal, setIlsVal] = useState((10 * BGN_TO_ILS).toFixed(1));

  if (!isOpen) return null;

  const handleBgnChange = (val) => {
    setBgnVal(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num >= 0) {
      setEurVal((num / EUR_TO_BGN).toFixed(2));
      setIlsVal((num * BGN_TO_ILS).toFixed(1));
    } else {
      setEurVal("");
      setIlsVal("");
    }
  };

  const handleEurChange = (val) => {
    setEurVal(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num >= 0) {
      setBgnVal((num * EUR_TO_BGN).toFixed(2));
      setIlsVal((num * EUR_TO_ILS).toFixed(1));
    } else {
      setBgnVal("");
      setIlsVal("");
    }
  };

  const handleIlsChange = (val) => {
    setIlsVal(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num >= 0) {
      setEurVal((num / EUR_TO_ILS).toFixed(2));
      setBgnVal((num / BGN_TO_ILS).toFixed(2));
    } else {
      setEurVal("");
      setBgnVal("");
    }
  };

  const setPreset = (bgnAmount) => {
    handleBgnChange(bgnAmount.toString());
  };

  const setEurPreset = (eurAmount) => {
    handleEurChange(eurAmount.toString());
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#faf8f5] rounded-3xl w-full max-w-md border border-[#e2d5c3] shadow-2xl p-5 text-right">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e5d8c6] pb-3 mb-4">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200/70 text-slate-500 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2 text-[#355243]">
            <h2 className="text-xl font-black">מחשבון המרת מטבע לשטח</h2>
            <Coins className="w-6 h-6 text-[#b07d58]" />
          </div>
        </div>

        <p className="text-xs text-[#6d6254] mb-4 bg-[#f2eae0] p-2.5 rounded-2xl border border-[#e2d5c3]">
          בבולגריה התשלום בסופר ובחנויות הוא בלב בולגרי (BGN). המטבע מוצמד רשמית ליורו: <b>1€ = 1.9558 BGN</b> (בערך 1 לב = 2.07 ₪).
        </p>

        {/* Inputs */}
        <div className="space-y-3 mb-4">
          {/* BGN */}
          <div className="bg-white p-3 rounded-2xl border border-[#ded2c1] shadow-2xs">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[11px] font-bold text-[#b07d58]">לב בולגרי (מטבע מקומי בחנויות)</span>
              <label className="text-xs font-bold text-slate-700">🇧🇬 BGN (לֶבָה)</label>
            </div>
            <input
              type="number"
              inputMode="decimal"
              value={bgnVal}
              onChange={(e) => handleBgnChange(e.target.value)}
              className="w-full text-2xl font-mono font-bold text-[#2d3a33] ltr text-left focus:outline-none bg-transparent"
              placeholder="0"
            />
          </div>

          {/* EUR */}
          <div className="bg-white p-3 rounded-2xl border border-[#ded2c1] shadow-2xs">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[11px] font-bold text-blue-700">יורו (וילה / אופניים / ספא)</span>
              <label className="text-xs font-bold text-slate-700">🇪🇺 EUR (€)</label>
            </div>
            <input
              type="number"
              inputMode="decimal"
              value={eurVal}
              onChange={(e) => handleEurChange(e.target.value)}
              className="w-full text-2xl font-mono font-bold text-[#2d3a33] ltr text-left focus:outline-none bg-transparent"
              placeholder="0"
            />
          </div>

          {/* ILS */}
          <div className="bg-white p-3 rounded-2xl border border-[#ded2c1] shadow-2xs">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[11px] font-bold text-emerald-700">שקלים לחישוב מהיר בראש</span>
              <label className="text-xs font-bold text-slate-700">🇮🇱 ILS (₪)</label>
            </div>
            <input
              type="number"
              inputMode="decimal"
              value={ilsVal}
              onChange={(e) => handleIlsChange(e.target.value)}
              className="w-full text-2xl font-mono font-bold text-[#2d3a33] ltr text-left focus:outline-none bg-transparent"
              placeholder="0"
            />
          </div>
        </div>

        {/* Quick Presets */}
        <div>
          <span className="text-xs font-bold text-[#5c4f41] block mb-2">סכומים נפוצים בטיול לבדיקה בלחיצה:</span>
          <div className="grid grid-cols-3 gap-1.5 text-xs">
            <button
              onClick={() => setPreset(10)}
              className="bg-white hover:bg-[#eae0d2] border border-[#d8caba] py-1.5 px-2 rounded-xl text-slate-700 font-bold transition"
            >
              10 BGN (~21 ₪)
            </button>
            <button
              onClick={() => setPreset(20)}
              className="bg-white hover:bg-[#eae0d2] border border-[#d8caba] py-1.5 px-2 rounded-xl text-slate-700 font-bold transition"
            >
              20 BGN (~41 ₪)
            </button>
            <button
              onClick={() => setPreset(50)}
              className="bg-white hover:bg-[#eae0d2] border border-[#d8caba] py-1.5 px-2 rounded-xl text-slate-700 font-bold transition"
            >
              50 BGN (~103 ₪)
            </button>

            <button
              onClick={() => setEurPreset(30)}
              className="bg-white hover:bg-[#eae0d2] border border-[#d8caba] py-1.5 px-2 rounded-xl text-blue-800 font-bold transition"
            >
              30€ ספא פולס
            </button>
            <button
              onClick={() => setEurPreset(76)}
              className="bg-white hover:bg-[#eae0d2] border border-[#d8caba] py-1.5 px-2 rounded-xl text-emerald-800 font-bold transition"
            >
              76€ זוג אופניים
            </button>
            <button
              onClick={() => setEurPreset(130)}
              className="bg-white hover:bg-[#eae0d2] border border-[#d8caba] py-1.5 px-2 rounded-xl text-rose-800 font-bold transition"
            >
              130€ Late Stay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

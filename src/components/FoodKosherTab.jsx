import React, { useState } from "react";
import { 
  ShoppingCart, Barcode, CheckCircle2, Coffee, ExternalLink, 
  MessageSquare, Camera, Search, Navigation, Phone, AlertTriangle,
  Plus, Trash2, ShieldCheck, MapPin
} from "lucide-react";
import { SUPERMARKETS, CAFES, KOSHER_GUIDE } from "../data/tripData";
import BarcodeScannerModal from "./BarcodeScannerModal";

export default function FoodKosherTab({ 
  verifiedProducts, 
  onAddProduct, 
  onDeleteProduct 
}) {
  const [activeSubTab, setActiveSubTab] = useState("stores"); // 'stores' | 'zekasher' | 'my-products' | 'coffee'
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = verifiedProducts.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.barcode.includes(searchQuery) ||
    p.store.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4 pb-20 animate-fade-in text-right">
      {/* Top Header */}
      <div className="flex items-baseline justify-between px-1 pt-1">
        <button
          onClick={() => setIsScannerOpen(true)}
          className="flex items-center gap-1.5 bg-[#204234] hover:bg-[#183328] text-white font-medium py-1.5 px-3 rounded-xl text-xs shadow-xs transition active:scale-95"
        >
          <Camera className="w-4 h-4" />
          <span>סריקת ברקוד 📷</span>
        </button>
        <div>
          <span className="text-xs font-mono text-[#8a8073] block">סופרים ובדיקת ברקוד</span>
          <h2 className="text-xl font-editorial font-bold text-[#162c21]">
            אוכל וכשרות בטיול
          </h2>
        </div>
      </div>

      {/* Quick Launch Action Ribbon */}
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={() => setIsScannerOpen(true)}
          className="flex flex-col items-center justify-center gap-1 bg-white border border-[#ded8ce] hover:border-[#b85c39] rounded-2xl p-2.5 shadow-2xs transition active:scale-95"
        >
          <Barcode className="w-5 h-5 text-[#204234]" />
          <span className="font-bold text-xs text-[#1c2722]">סורק ברקוד</span>
        </button>

        <a
          href="https://kosher.global/zekasher"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center gap-1 bg-white border border-[#ded8ce] hover:border-[#b85c39] rounded-2xl p-2.5 shadow-2xs transition active:scale-95"
        >
          <ExternalLink className="w-5 h-5 text-slate-500" />
          <span className="font-bold text-xs text-[#1c2722]">אתר ZeKasher</span>
        </a>

        <a
          href="https://wa.me/972559943899"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center gap-1 bg-white border border-[#ded8ce] hover:border-[#b85c39] rounded-2xl p-2.5 shadow-2xs transition active:scale-95"
        >
          <MessageSquare className="w-5 h-5 text-emerald-600" />
          <span className="font-bold text-xs text-[#1c2722]">WhatsApp GOK</span>
        </a>
      </div>

      {/* Sub Tabs Pills */}
      <div className="flex bg-slate-200/80 p-1 rounded-2xl text-xs font-bold text-slate-600 gap-1">
        <button
          onClick={() => setActiveSubTab("stores")}
          className={`flex-1 py-2 rounded-xl transition ${
            activeSubTab === "stores" ? "bg-white text-slate-900 shadow-xs" : "hover:text-slate-900"
          }`}
        >
          סופרים
        </button>
        <button
          onClick={() => setActiveSubTab("zekasher")}
          className={`flex-1 py-2 rounded-xl transition ${
            activeSubTab === "zekasher" ? "bg-white text-slate-900 shadow-xs" : "hover:text-slate-900"
          }`}
        >
          מדריך ZeKasher
        </button>
        <button
          onClick={() => setActiveSubTab("my-products")}
          className={`flex-1 py-2 rounded-xl transition ${
            activeSubTab === "my-products" ? "bg-white text-slate-900 shadow-xs" : "hover:text-slate-900"
          }`}
        >
          מוצרים שאישרנו ({verifiedProducts.length})
        </button>
        <button
          onClick={() => setActiveSubTab("coffee")}
          className={`flex-1 py-2 rounded-xl transition ${
            activeSubTab === "coffee" ? "bg-white text-slate-900 shadow-xs" : "hover:text-slate-900"
          }`}
        >
          קפה
        </button>
      </div>

      {/* 1. SUPERMARKETS SUB-TAB */}
      {activeSubTab === "stores" && (
        <div className="space-y-3">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3 text-xs text-amber-900 leading-relaxed">
            💡 <b>עיקרון חשוב:</b> אין "אישור כשרות לרשת סופרים". הדירוג להלן הוא תפעולי ומבוסס על נוחות וסיכוי למצוא מוצרים מוכרים. בודקים כל מוצר ספציפית ברמת הברקוד!
          </div>

          {SUPERMARKETS.map((store) => (
            <div
              key={store.id}
              className={`bg-white rounded-3xl border p-4 shadow-xs space-y-2 transition-all ${
                store.id === "billa-bansko"
                  ? "border-emerald-300 ring-1 ring-emerald-100"
                  : store.id === "tmarket-bansko"
                  ? "border-blue-300 ring-1 ring-blue-100"
                  : "border-slate-200"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border">
                  {store.role}
                </span>
                <div className="text-right">
                  <h3 className="font-black text-slate-900 text-base">{store.name}</h3>
                  <div className="text-xs text-slate-500 font-mono ltr">{store.address}</div>
                </div>
              </div>

              <div className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                {store.notes}
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-slate-500">שעות פתיחה: <b className="ltr font-mono">{store.hours}</b></span>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(store.address + ', Bansko, Bulgaria')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 bg-[#204234] hover:bg-[#183328] text-white font-medium px-3 py-1.5 rounded-xl text-xs transition shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>נווט לסופר</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 2. ZEKASHER GUIDE SUB-TAB */}
      {activeSubTab === "zekasher" && (
        <div className="space-y-4">
          <div className="bg-purple-50 border border-purple-200 rounded-3xl p-4 text-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono bg-purple-200 text-purple-900 px-2 py-0.5 rounded-md font-bold ltr">
                07:00–22:00 IL
              </span>
              <h3 className="font-black text-purple-900 text-sm flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-purple-700" />
                <span>מערכת ZeKasher — GOK (הרב אורן דובדבני)</span>
              </h3>
            </div>

            <p className="text-purple-800 leading-relaxed">
              מערכת כשרות דיגיטלית של ארגון GOK למטיילים. עובדת בדיוק לפי ספרות הברקוד כדי למנוע טעויות בין מפעלים ומדינות ייצור שונות.
            </p>

            <div className="space-y-1.5 bg-white/80 p-3 rounded-2xl border border-purple-100">
              <span className="font-bold text-slate-900 block mb-1">כללי מפתח:</span>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                {KOSHER_GUIDE.rules.map((rule, rIdx) => (
                  <li key={rIdx}>{rule}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-2 bg-white/80 p-3 rounded-2xl border border-purple-100">
              <span className="font-bold text-slate-900 block">
                המוצר לא נמצא ב-ZeKasher? 6 השלבים לשליחה לקבוצת GOK:
              </span>
              <ol className="list-decimal list-inside space-y-1 text-slate-700 font-medium">
                {KOSHER_GUIDE.notFoundSteps.map((step, sIdx) => (
                  <li key={sIdx}>{step}</li>
                ))}
              </ol>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://wa.me/972559943899"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl transition text-xs shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>פתיחת קבוצת WhatsApp GOK מזרח אירופה ↗</span>
              </a>
              <div className="text-[11px] text-slate-500 text-center font-mono">
                טלפון שירות ZeKasher: 055-994-3899
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. MY VERIFIED PRODUCTS SUB-TAB */}
      {activeSubTab === "my-products" && (
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <button
              onClick={() => setIsScannerOpen(true)}
              className="flex items-center gap-1 bg-purple-700 hover:bg-purple-800 text-white font-bold px-3 py-1.5 rounded-xl text-xs transition"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>הוסף מוצר</span>
            </button>
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="חפש מוצר או ברקוד..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-slate-300 rounded-xl py-1.5 px-3 pr-8 text-xs focus:outline-none"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute top-2.5 right-2.5" />
            </div>
          </div>

          <p className="text-[11px] text-slate-500 bg-slate-50 p-2 rounded-xl">
            מוצרים שנבדקו ונמצאו מתאימים נשמרים ישירות בטלפון (Offline) כדי שלא תצטרכו לבדוק אותם מחדש בכל בוקר.
          </p>

          <div className="space-y-2">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white border border-slate-200/90 rounded-2xl p-3 shadow-xs space-y-1.5 text-xs"
              >
                <div className="flex items-start justify-between gap-2">
                  <button
                    onClick={() => onDeleteProduct(prod.id)}
                    className="text-slate-400 hover:text-rose-600 p-1"
                    title="מחק מוצר מהרשימה"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                  <div className="text-right flex-1">
                    <h4 className="font-black text-slate-900 text-sm">{prod.name}</h4>
                    <div className="font-mono text-[11px] text-purple-700 font-bold ltr inline-block">
                      ברקוד: {prod.barcode}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-slate-600 bg-slate-50 p-2 rounded-xl text-[11px]">
                  <span>נמצא ב: <b>{prod.store}</b></span>
                  <span className="font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                    {prod.status}
                  </span>
                </div>

                {prod.notes && (
                  <p className="text-[11px] text-slate-500 italic pr-1">
                    {prod.notes}
                  </p>
                )}
              </div>
            ))}

            {filteredProducts.length === 0 && (
              <div className="text-center py-6 text-slate-500 text-xs">
                לא נמצאו מוצרים תואמים לחיפוש.
              </div>
            )}
          </div>
        </div>
      )}

      {/* 4. COFFEE & STOPS SUB-TAB */}
      {activeSubTab === "coffee" && (
        <div className="space-y-3">
          {CAFES.map((cafe, idx) => {
            const isDabov = cafe.name.includes("DABOV");
            const isCoconut = cafe.name.includes("Coconut");

            return (
              <div
                key={idx}
                className={`bg-white rounded-3xl border p-4 shadow-xs space-y-2 ${
                  isDabov ? "border-amber-300 ring-1 ring-amber-100" : "border-slate-200"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                      isDabov
                        ? "bg-emerald-100 text-emerald-800 border-emerald-300"
                        : "bg-amber-100 text-amber-800 border-amber-300"
                    }`}
                  >
                    {isDabov ? "מועמד פעיל / מומלץ" : "דורש אימות פתיחה"}
                  </span>
                  <div className="text-right">
                    <h3 className="font-black text-slate-900 text-base">{cafe.name}</h3>
                    <div className="text-xs text-slate-500 font-mono ltr">{cafe.address}</div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  {cafe.notes}
                </p>

                {cafe.hours && (
                  <div className="text-xs text-slate-500">
                    שעות פעילות: <b className="ltr font-mono">{cafe.hours}</b>
                  </div>
                )}

                <div className="flex gap-2 pt-1">
                  {cafe.phone && (
                    <a
                      href={`tel:${cafe.phone}`}
                      className="flex-1 flex items-center justify-center gap-1 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2 rounded-xl text-xs transition"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>התקשר</span>
                    </a>
                  )}
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(cafe.address)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 rounded-xl text-xs transition"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>נווט למקום</span>
                  </a>
                </div>
              </div>
            );
          })}

          <div className="bg-slate-100 p-3 rounded-2xl text-[11px] text-slate-600 leading-relaxed">
            ⚠️ <b>הערת כשרות:</b> בתי קפה ושייקים אינם מחזיקים תעודת כשרות. ניתן להזמין קפה שחור / אספרסו פשוט בכוס חד-פעמית ללא תוספות, מים מינרליים סגורים או פירות שלמים.
          </div>
        </div>
      )}

      {/* Barcode Scanner Modal */}
      <BarcodeScannerModal
        isOpen={isScannerOpen}
        onClose={() => setIsScannerOpen(false)}
        onAddProduct={onAddProduct}
        existingProducts={verifiedProducts}
      />
    </div>
  );
}

import React, { useState, useRef, useEffect } from "react";
import { X, Camera, Barcode, Check, Search, AlertCircle, Plus } from "lucide-react";

export default function BarcodeScannerModal({ isOpen, onClose, onAddProduct, existingProducts }) {
  const [barcodeInput, setBarcodeInput] = useState("");
  const [scanResult, setScanResult] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  // New product form state
  const [newProductName, setNewProductName] = useState("");
  const [newProductStore, setNewProductStore] = useState("BILLA Bansko");
  const [newProductStatus, setNewProductStatus] = useState("מאושר ZeKasher");
  const [newProductNotes, setNewProductNotes] = useState("");
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      stopCamera();
      setScanResult(null);
      setBarcodeInput("");
      setSavedSuccess(false);
    }
  }, [isOpen]);

  const startCamera = async () => {
    setCameraError(null);
    setCameraActive(true);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" }
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }

      // Check if BarcodeDetector is supported in browser
      if ("BarcodeDetector" in window) {
        // @ts-ignore
        const barcodeDetector = new window.BarcodeDetector({
          formats: ["ean_13", "ean_8", "upc_a", "upc_e", "code_128", "qr_code"]
        });

        const detectLoop = async () => {
          if (!videoRef.current || !streamRef.current) return;
          try {
            const barcodes = await barcodeDetector.detect(videoRef.current);
            if (barcodes.length > 0) {
              const code = barcodes[0].rawValue;
              handleCodeFound(code);
              return;
            }
          } catch (e) {
            // frame detect error
          }
          requestAnimationFrame(detectLoop);
        };
        requestAnimationFrame(detectLoop);
      } else {
        setCameraError("זיהוי ברקוד אוטומטי במצלמה נתמך בעיקר ב-Chrome/Android. ניתן להקליד ברקוד ידנית או לחפש.");
      }
    } catch (err) {
      setCameraError("לא ניתן לפתוח מצלמה. ודא הרשאות מצלמה בדפדפן.");
      setCameraActive(false);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setCameraActive(false);
  };

  const handleCodeFound = (code) => {
    stopCamera();
    setBarcodeInput(code);
    const existing = existingProducts.find(p => p.barcode === code);
    setScanResult(existing || { notFound: true, barcode: code });
    if (!existing) {
      setNewProductName("");
    }
  };

  const handleManualSearch = (e) => {
    e.preventDefault();
    if (!barcodeInput.trim()) return;
    const existing = existingProducts.find(p => p.barcode === barcodeInput.trim());
    setScanResult(existing || { notFound: true, barcode: barcodeInput.trim() });
  };

  const handleSaveProduct = (e) => {
    e.preventDefault();
    if (!newProductName.trim() || !barcodeInput.trim()) return;

    const newProd = {
      id: "prod-" + Date.now(),
      name: newProductName.trim(),
      barcode: barcodeInput.trim(),
      store: newProductStore,
      status: newProductStatus,
      dateAdded: new Date().toLocaleDateString("he-IL"),
      notes: newProductNotes.trim()
    };

    onAddProduct(newProd);
    setSavedSuccess(true);
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl w-full max-w-lg max-h-[92vh] overflow-y-auto border border-purple-400 shadow-2xl p-5 text-right">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-3 mb-4">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2 text-purple-800">
            <h2 className="text-xl font-black">בודק וסורק ברקוד כשרות</h2>
            <Barcode className="w-6 h-6 text-purple-600" />
          </div>
        </div>

        {/* Camera Scanner View */}
        <div className="mb-4">
          {cameraActive ? (
            <div className="relative rounded-2xl overflow-hidden bg-black aspect-video flex items-center justify-center border-2 border-purple-500">
              <video ref={videoRef} className="w-full h-full object-cover" playsInline />
              <div className="absolute inset-0 border-2 border-dashed border-purple-400/80 m-8 rounded-xl pointer-events-none animate-pulse"></div>
              <button
                onClick={stopCamera}
                className="absolute top-2 right-2 bg-black/60 text-white p-1.5 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={startCamera}
              className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-2xl shadow-md transition active:scale-98 text-sm"
            >
              <Camera className="w-5 h-5" />
              <span>הפעל מצלמה לסריקת ברקוד 📷</span>
            </button>
          )}

          {cameraError && (
            <p className="text-[11px] text-amber-700 bg-amber-50 p-2 rounded-xl mt-2 border border-amber-200">
              {cameraError}
            </p>
          )}
        </div>

        {/* Manual Barcode Input Form */}
        <form onSubmit={handleManualSearch} className="mb-4 space-y-2">
          <label className="block text-xs font-bold text-slate-700">
            או הקלד את כל ספרות הברקוד מהאריזה:
          </label>
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-purple-800 hover:bg-purple-900 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1 shadow-xs"
            >
              <Search className="w-3.5 h-3.5" />
              <span>בדוק</span>
            </button>
            <input
              type="text"
              pattern="[0-9]*"
              inputMode="numeric"
              placeholder="למשל: 8076800195057"
              value={barcodeInput}
              onChange={(e) => setBarcodeInput(e.target.value)}
              className="flex-1 border border-slate-300 rounded-xl px-3 py-2 text-sm font-mono ltr text-left focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>
        </form>

        {/* Result & Add to My Verified Products */}
        {scanResult && (
          <div className="border border-purple-200 bg-purple-50/70 rounded-2xl p-4 mb-4 text-xs space-y-3">
            {scanResult.name ? (
              <div className="space-y-1">
                <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                  נמצא ברשימת המוצרים המאומתים שלך!
                </span>
                <h4 className="font-black text-slate-900 text-sm mt-1">{scanResult.name}</h4>
                <div className="text-slate-600">סטטוס: <b>{scanResult.status}</b></div>
                <div className="text-slate-600">נרכש ב: <b>{scanResult.store}</b></div>
                {scanResult.notes && <div className="text-slate-500 italic">הערות: {scanResult.notes}</div>}
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center gap-1.5 text-amber-900 font-bold">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>ברקוד חדש (לא קיים ברשימה המקומית):</span>
                </div>
                <div className="font-mono text-purple-900 font-bold bg-white p-2 rounded-lg ltr">
                  {scanResult.barcode}
                </div>

                <div className="flex gap-2">
                  <a
                    href="https://kosher.global/zekasher"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-purple-700 hover:bg-purple-800 text-white text-center py-2 rounded-xl font-bold transition text-xs"
                  >
                    חפש ב-ZeKasher הרשמי ↗
                  </a>
                  <a
                    href="https://wa.me/972559943899"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-center py-2 rounded-xl font-bold transition text-xs"
                  >
                    פתח WhatsApp GOK ↗
                  </a>
                </div>

                {/* Quick Add Form */}
                <form onSubmit={handleSaveProduct} className="pt-2 border-t border-purple-200 space-y-2">
                  <span className="font-bold text-slate-800 block text-xs">
                    אושר? הוסף אותו לרשימת 'המוצרים שאישרנו' בטיול:
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="שם המוצר (למשל: יוגורט דנונה בולגרי)"
                    value={newProductName}
                    onChange={(e) => setNewProductName(e.target.value)}
                    className="w-full border border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-none"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <select
                      value={newProductStore}
                      onChange={(e) => setNewProductStore(e.target.value)}
                      className="border border-slate-300 rounded-xl px-2 py-1.5 text-xs bg-white"
                    >
                      <option value="BILLA Bansko">BILLA Bansko</option>
                      <option value="T MARKET Bansko">T MARKET Bansko</option>
                      <option value="Lidl Razlog">Lidl Razlog</option>
                      <option value="אחר">אחר</option>
                    </select>
                    <select
                      value={newProductStatus}
                      onChange={(e) => setNewProductStatus(e.target.value)}
                      className="border border-slate-300 rounded-xl px-2 py-1.5 text-xs bg-white"
                    >
                      <option value="מאושר ZeKasher">מאושר ZeKasher</option>
                      <option value="אושר ע״י GOK בווטסאפ">אושר ע״י GOK בווטסאפ</option>
                      <option value="סימון כשרות מוכר (OU וכו')">סימון כשרות מוכר (OU)</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    placeholder="הערות קצרות (רכיבים / טעם)"
                    value={newProductNotes}
                    onChange={(e) => setNewProductNotes(e.target.value)}
                    className="w-full border border-slate-300 rounded-xl px-3 py-1.5 text-xs focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-xl text-xs transition"
                  >
                    שמור מוצר מאומת ל-Offline 💾
                  </button>
                </form>

                {savedSuccess && (
                  <div className="bg-emerald-100 text-emerald-800 p-2 rounded-xl text-center font-bold text-xs">
                    המוצר נוסף בהצלחה לרשימת הטיול! 🎉
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

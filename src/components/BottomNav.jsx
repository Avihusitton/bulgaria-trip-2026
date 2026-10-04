import React from "react";
import { Compass, Calendar, Mountain, ShoppingCart, MoreHorizontal, Home } from "lucide-react";

export default function BottomNav({ activeTab, onSelectTab, alertsCount }) {
  const navItems = [
    { id: "home", label: "היום", icon: Home },
    { id: "days", label: "ימים", icon: Calendar },
    { id: "routes", label: "מסלולים", icon: Mountain },
    { id: "food", label: "אוכל וכשרות", icon: ShoppingCart },
    { id: "more", label: "עוד", icon: MoreHorizontal, hasBadge: alertsCount > 0 }
  ];

  return (
    <nav 
      style={{ bottom: "calc(0.6rem + env(safe-area-inset-bottom, 0px))" }}
      className="fixed inset-x-3 max-w-md mx-auto z-40 bg-[#12231a]/94 backdrop-blur-xl border border-white/15 shadow-[0_14px_38px_rgba(10,20,15,0.45)] rounded-full px-2 py-1.5 transition-all"
    >
      <div className="flex items-center justify-between">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-full transition-all duration-200 select-none cursor-pointer active:scale-90 ${
                isActive
                  ? "bg-white/15 text-[#fdfbf7] shadow-inner font-bold"
                  : "text-[#8ea598] hover:text-[#e4ded5] font-medium"
              }`}
            >
              <div className="relative">
                <Icon className={`w-4.5 h-4.5 ${isActive ? "stroke-[2.4] text-[#d4af37]" : "stroke-[1.8]"}`} />
                {item.hasBadge && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-[#12231a] animate-ping"></span>
                )}
              </div>
              <span className={`text-[10px] tracking-tight mt-0.5 ${isActive ? "text-[#fdfbf7] font-bold" : "text-[#8ea598]"}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

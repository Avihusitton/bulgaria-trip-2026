import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import HomeTab from "./components/HomeTab";
import DaysTab from "./components/DaysTab";
import RoutesTab from "./components/RoutesTab";
import FoodKosherTab from "./components/FoodKosherTab";
import MoreTab from "./components/MoreTab";
import SosModal from "./components/SosModal";
import PlanBModal from "./components/PlanBModal";
import DecisionGatesModal from "./components/DecisionGatesModal";
import MapModal from "./components/MapModal";
import CurrencyConverterModal from "./components/CurrencyConverterModal";
import TripBudgetModal from "./components/TripBudgetModal";

import { 
  getStoredGates, saveStoredGates,
  getStoredTasks, saveStoredTasks,
  getStoredProducts, saveStoredProducts,
  getStoredOfflineTrails, saveStoredOfflineTrails,
  getStoredTimestamps, saveStoredTimestamps,
  getSimulatedDate, saveSimulatedDate
} from "./utils/storage";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedDate, setSelectedDate] = useState(getSimulatedDate());
  const [gatesState, setGatesState] = useState(getStoredGates());
  const [checkedTasks, setCheckedTasks] = useState(getStoredTasks());
  const [verifiedProducts, setVerifiedProducts] = useState(getStoredProducts());
  const [offlineTrails, setOfflineTrails] = useState(getStoredOfflineTrails());
  const [timestamps, setTimestamps] = useState(getStoredTimestamps());

  // Modals state
  const [isSosOpen, setIsSosOpen] = useState(false);
  const [isPlanBOpen, setIsPlanBOpen] = useState(false);
  const [isGatesModalOpen, setIsGatesModalOpen] = useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [activeMapTrailId, setActiveMapTrailId] = useState(null);

  // New Utility Modals
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);

  // Date selection handler
  const handleSelectDate = (dateStr) => {
    setSelectedDate(dateStr);
    saveSimulatedDate(dateStr);
  };

  // Gates update handler
  const handleUpdateGate = (gateId, newStatus) => {
    const updated = {
      ...gatesState,
      [gateId]: {
        status: newStatus,
        lastChecked: new Date().toLocaleString("he-IL", { 
          day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" 
        })
      }
    };
    setGatesState(updated);
    saveStoredGates(updated);
  };

  // Task check toggle handler
  const handleToggleTask = (taskId) => {
    const updated = {
      ...checkedTasks,
      [taskId]: !checkedTasks[taskId]
    };
    setCheckedTasks(updated);
    saveStoredTasks(updated);
  };

  // Verified products handlers
  const handleAddProduct = (newProd) => {
    const updated = [newProd, ...verifiedProducts];
    setVerifiedProducts(updated);
    saveStoredProducts(updated);
  };

  const handleDeleteProduct = (prodId) => {
    const updated = verifiedProducts.filter(p => p.id !== prodId);
    setVerifiedProducts(updated);
    saveStoredProducts(updated);
  };

  // Offline trails toggle handler
  const handleToggleOfflineTrail = (trailId) => {
    const updated = {
      ...offlineTrails,
      [trailId]: !offlineTrails[trailId]
    };
    setOfflineTrails(updated);
    saveStoredOfflineTrails(updated);
  };

  // Open trail map
  const handleOpenTrailMap = (trailId) => {
    setActiveMapTrailId(trailId);
    setIsMapModalOpen(true);
  };

  // Quick navigation helper
  const handleNavigateToTab = (tabId, subSection) => {
    setActiveTab(tabId);
  };

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#1a1e1b] flex flex-col font-sans select-none antialiased overflow-x-hidden">
      {/* Fixed Sticky Header with Utilities */}
      <Header
        selectedDate={selectedDate}
        onSelectDate={handleSelectDate}
        onOpenSos={() => setIsSosOpen(true)}
        onOpenPlanB={() => setIsPlanBOpen(true)}
        onOpenCurrency={() => setIsCurrencyOpen(true)}
        onOpenBudget={() => setIsBudgetOpen(true)}
      />

      {/* Main Container — Optimized for mobile with zero side-overflow */}
      <main className="flex-1 max-w-2xl w-full mx-auto px-3 sm:px-4 pt-2.5">
        {activeTab === "home" && (
          <HomeTab
            selectedDate={selectedDate}
            gatesState={gatesState}
            onOpenGatesModal={() => setIsGatesModalOpen(true)}
            onOpenPlanB={() => setIsPlanBOpen(true)}
            onOpenSos={() => setIsSosOpen(true)}
            onOpenBudget={() => setIsBudgetOpen(true)}
            onNavigateToTab={handleNavigateToTab}
            checkedTasks={checkedTasks}
            onToggleTask={handleToggleTask}
            onOpenTrail={handleOpenTrailMap}
          />
        )}

        {activeTab === "days" && (
          <DaysTab
            selectedDate={selectedDate}
            onSelectDate={handleSelectDate}
            onOpenPlanB={() => setIsPlanBOpen(true)}
            onOpenTrail={handleOpenTrailMap}
            checkedTasks={checkedTasks}
            onToggleTask={handleToggleTask}
            timestamps={timestamps}
          />
        )}

        {activeTab === "routes" && (
          <RoutesTab
            onOpenMapModal={handleOpenTrailMap}
            offlineTrails={offlineTrails}
            onToggleOfflineTrail={handleToggleOfflineTrail}
            onOpenSos={() => setIsSosOpen(true)}
            onOpenPlanB={() => setIsPlanBOpen(true)}
          />
        )}

        {activeTab === "food" && (
          <FoodKosherTab
            verifiedProducts={verifiedProducts}
            onAddProduct={handleAddProduct}
            onDeleteProduct={handleDeleteProduct}
          />
        )}

        {activeTab === "more" && (
          <MoreTab
            checkedTasks={checkedTasks}
            onToggleTask={handleToggleTask}
            timestamps={timestamps}
            onOpenSos={() => setIsSosOpen(true)}
            onOpenBudget={() => setIsBudgetOpen(true)}
          />
        )}
      </main>

      {/* Bottom Navigation */}
      <BottomNav
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        alertsCount={Object.values(gatesState).filter(g => g?.status === "NO").length}
      />

      {/* Modals & Overlays */}
      <SosModal
        isOpen={isSosOpen}
        onClose={() => setIsSosOpen(false)}
      />

      <PlanBModal
        isOpen={isPlanBOpen}
        onClose={() => setIsPlanBOpen(false)}
      />

      <DecisionGatesModal
        isOpen={isGatesModalOpen}
        onClose={() => setIsGatesModalOpen(false)}
        gatesState={gatesState}
        onUpdateGate={handleUpdateGate}
      />

      <MapModal
        isOpen={isMapModalOpen}
        onClose={() => setIsMapModalOpen(false)}
        activeTrailId={activeMapTrailId}
      />

      <CurrencyConverterModal
        isOpen={isCurrencyOpen}
        onClose={() => setIsCurrencyOpen(false)}
      />

      <TripBudgetModal
        isOpen={isBudgetOpen}
        onClose={() => setIsBudgetOpen(false)}
      />
    </div>
  );
}

// Storage utility for offline persistence in localStorage

import { INITIAL_PACKING_LIST, INITIAL_VERIFIED_PRODUCTS } from "../data/tripData";

const STORAGE_KEYS = {
  GATES: "bulgaria_gates_v1",
  TASKS: "bulgaria_tasks_v1",
  VERIFIED_PRODUCTS: "bulgaria_kosher_products_v1",
  OFFLINE_TRAILS: "bulgaria_offline_trails_v1",
  VERIFIED_TIMESTAMPS: "bulgaria_timestamps_v1",
  SELECTED_DATE: "bulgaria_simulated_date_v1",
  NOTES: "bulgaria_trip_notes_v1"
};

export function getStoredGates() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.GATES);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to read gates from storage", e);
  }
  return {
    "gate-1-road": { status: "UNCHECKED", lastChecked: null },
    "gate-2-mountain": { status: "UNCHECKED", lastChecked: null },
    "gate-3-bike-fit": { status: "UNCHECKED", lastChecked: null },
    "gate-4-kosher": { status: "UNCHECKED", lastChecked: null },
    "gate-5-return": { status: "UNCHECKED", lastChecked: null }
  };
}

export function saveStoredGates(gates) {
  try {
    localStorage.setItem(STORAGE_KEYS.GATES, JSON.stringify(gates));
  } catch (e) {
    console.error("Failed to save gates", e);
  }
}

export function getStoredTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.TASKS);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to read tasks", e);
  }
  const defaultTasks = {};
  INITIAL_PACKING_LIST.forEach(item => {
    defaultTasks[item.id] = false;
  });
  return defaultTasks;
}

export function saveStoredTasks(tasks) {
  try {
    localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
  } catch (e) {
    console.error("Failed to save tasks", e);
  }
}

export function getStoredProducts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.VERIFIED_PRODUCTS);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to read verified products", e);
  }
  return INITIAL_VERIFIED_PRODUCTS;
}

export function saveStoredProducts(products) {
  try {
    localStorage.setItem(STORAGE_KEYS.VERIFIED_PRODUCTS, JSON.stringify(products));
  } catch (e) {
    console.error("Failed to save products", e);
  }
}

export function getStoredOfflineTrails() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.OFFLINE_TRAILS);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to read offline trails", e);
  }
  return {
    "five-lakes": true,
    "vihren-peak": true
  };
}

export function saveStoredOfflineTrails(trails) {
  try {
    localStorage.setItem(STORAGE_KEYS.OFFLINE_TRAILS, JSON.stringify(trails));
  } catch (e) {
    console.error("Failed to save offline trails", e);
  }
}

export function getStoredTimestamps() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.VERIFIED_TIMESTAMPS);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to read timestamps", e);
  }
  return {
    "road_vihren": "04.10.2026 11:30 (עביר, אך צו Roller-ski קיים)",
    "weather_high": "04.10.2026 12:00 (נבדק לקראת יציאה)",
    "terminal_wizz": "04.10.2026 (טרמינל 1 נתב״ג מאומת)",
    "coconut_cafe": "04.10.2026 (סגור זמנית)",
    "bike_booking": "04.10.2026 (e-Bike Bansko מאושר למפגש)",
    "villa_late_stay": "04.10.2026 (סוכם ישירות עם המארח - 130€)"
  };
}

export function saveStoredTimestamps(timestamps) {
  try {
    localStorage.setItem(STORAGE_KEYS.VERIFIED_TIMESTAMPS, JSON.stringify(timestamps));
  } catch (e) {
    console.error("Failed to save timestamps", e);
  }
}

export function getSimulatedDate() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.SELECTED_DATE);
    if (saved) return saved;
  } catch (e) {
    console.error(e);
  }
  // Auto detect current date or default to 2026-10-05 if within range
  const nowStr = new Date().toISOString().split("T")[0];
  if (nowStr >= "2026-10-05" && nowStr <= "2026-10-09") {
    return nowStr;
  }
  return "2026-10-05"; // Default to day 1 for immediate operational preview
}

export function saveSimulatedDate(dateStr) {
  try {
    localStorage.setItem(STORAGE_KEYS.SELECTED_DATE, dateStr);
  } catch (e) {
    console.error(e);
  }
}

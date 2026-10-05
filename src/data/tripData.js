// MASTER BRIEF DATA - אתר פנימי לחופשת בולגריה | אביהו + גיל | 5–9.10.2026
// גרסה קובעת מעודכנת: 04.10.2026 (כולל עדכוני ספק, כבודה, לינה, רכב ומסלולים)

export const TRIP_INFO = {
  title: "בולגריה שלנו",
  subtitle: "אביהו וגיל | חופשה זוגית בהרי פירין",
  startDate: "2026-10-05",
  endDate: "2026-10-09",
  currentBriefDate: "2026-10-04",
  baseLocation: "Banya / Bansko / Pirin",
  participants: [
    { name: "אביהו", height: "166 ס״מ", bag: "פריט אישי (40×30×20) + מזוודה 26 ק״ג", seats: "14A (הלוך) / 14E (חזור)" },
    { name: "גיל", height: "158 ס״מ", bag: "פריט אישי (40×30×20)", seats: "14B (הלוך) / 14F (חזור)" },
    { name: "מוריה", note: "גיל מתחת ל-24 · ביטוח נסיעות לחו״ל הוסדר במלואו! ✅" }
  ]
};

export const STATUS_TYPES = {
  CONFIRMED: { label: "מאושר", color: "bg-emerald-100 text-emerald-800 border-emerald-300", icon: "✅" },
  PLANNED: { label: "מתוכנן / לא מוזמן", color: "bg-teal-100 text-teal-800 border-teal-300", icon: "🟢" },
  VERIFY: { label: "דורש אימות", color: "bg-amber-100 text-amber-800 border-amber-300", icon: "🟡" },
  BACKUP: { label: "גיבוי (Plan B)", color: "bg-blue-100 text-blue-800 border-blue-300", icon: "🔵" },
  ALERT: { label: "אזהרה", color: "bg-rose-100 text-rose-800 border-rose-300", icon: "🔴" },
  REJECTED: { label: "לא רלוונטי", color: "bg-slate-200 text-slate-700 border-slate-400 line-through", icon: "⚫" }
};

export const EMERGENCY_CONTACTS = [
  {
    name: "חירום אירופה (SOS כללי)",
    phone: "112",
    displayPhone: "112",
    role: "משטרה / אמבולנס / חילוץ כללי",
    priority: "HIGH"
  },
  {
    name: "מוקד חירום רפואי וביטוח נסיעות (PassportCard)",
    phone: "+97298920930",
    displayPhone: "+972 9 892 0930 (*9912)",
    role: "סיוע רפואי דחוף והפעלת כיסוי ביטוחי בחו״ל",
    priority: "HIGH"
  },
  {
    name: "חילוץ הרים PSS בנסקו (מוקד ראשי)",
    phone: "+359887100241",
    displayPhone: "+359 887 100 241",
    altPhone: "0749 8 81 32",
    altPhone2: "0749 8 81 34",
    role: "יחידת החילוץ ההררית בפירין",
    priority: "HIGH"
  },
  {
    name: "מוקד חילוץ PSS ארצי (סופיה)",
    phone: "+35929632000",
    displayPhone: "02 963 2000",
    role: "מרכז מבצעים ארצי",
    priority: "NORMAL"
  },
  {
    name: "הנהלת הפארק הלאומי פירין — גזרת ויחרן",
    phone: "+359899866402",
    displayPhone: "+359 899 866 402",
    address: "Pirin 108, Bansko",
    role: "מידע שבילים ומצב מעברים",
    priority: "NORMAL"
  },
  {
    name: "הנהלת פארק פירין (מרכז)",
    phone: "+359898779942",
    displayPhone: "+359 898 779 942",
    altPhone: "0749 88204",
    role: "משרדי הפארק",
    priority: "NORMAL"
  },
  {
    name: "מרכז רפואת חירום בנסקו",
    phone: "+35974988270",
    displayPhone: "0749 88270",
    address: "Tsar Simeon 72, Bansko",
    role: "מרפאת חירום מקומית",
    priority: "NORMAL"
  },
  {
    name: "מוקד עיריית בנסקו (24/7)",
    phone: "+35974988622",
    displayPhone: "+359 749 88622",
    role: "מידע חסימות כבישים ואירועים",
    priority: "NORMAL"
  },
  {
    name: "מרכז מידע למבקרים בנסקו",
    phone: "+359884323245",
    displayPhone: "+359 884 323 245",
    address: "Pirin 104, Bansko",
    role: "מודיעין תיירות",
    priority: "LOW"
  }
];

export const FLIGHTS = {
  airline: "Wizz Air",
  bookingCode: "CSZI3H",
  status: "CONFIRMED",
  outbound: {
    date: "2026-10-05",
    dateFormatted: "שני, 5 באוקטובר 2026",
    flightNumber: "W6 4428",
    origin: "TLV (נתב״ג טרמינל 1)",
    destination: "SOF (סופיה)",
    departureTime: "09:10",
    arrivalTime: "12:00",
    terminal: "טרמינל 1 (כל טיסות W6/W4 בנתב״ג)",
    seats: "אביהו 14A · גיל 14B",
    bagDropNotes: "דלפקי הפקדת מזוודות נפתחים 3 שעות לפני (06:10) ונסגרים שעה ו-10 דק' לפני (08:00)",
    autoCheckin: "נרכש (כרטיסי עלייה למטוס כבר התקבלו)",
    luggage: "לכל אחד Personal Item (40×30×20 ס״מ). לאביהו בנוסף מזוודה 26 ק״ג שנרכשה."
  },
  inbound: {
    date: "2026-10-09",
    dateFormatted: "שישי, 9 באוקטובר 2026",
    flightNumber: "W6 4427",
    origin: "SOF (סופיה)",
    destination: "TLV (נתב״ג)",
    departureTime: "05:45",
    arrivalTime: "08:15",
    seats: "אביהו 14E · גיל 14F",
    alert: "יוצאים מוקדם בנחת: הטיסה ממריאה ב-05:45, ולכן נגיע ל-Top Rent סביב 04:00. אורזים בכיף לילה קודם בווילה, מורידים את כרטיסי העלייה מראש למכשיר ועושים את זה רגוע ובלי שום לחץ.",
    offlineChecklistDate: "7.10: לוודא שכרטיסי העלייה לחזור כבר שמורים בטלפון Offline"
  }
};

export const ACCOMMODATION = {
  name: "Three Peaks Thermal Villas",
  status: "CONFIRMED",
  bookingRef: "5158618016",
  type: "וילה פרטית עם בריכה ומים תרמיים טבעיים (37–38°C)",
  address: "1901 42, 2778 Banya, Bulgaria",
  phone: "+359887426447",
  displayPhone: "+359 887 426 447",
  email: "3peaks.thermalvillas@gmail.com",
  coordinates: { lat: 41.8752, lng: 23.5265 },
  dates: "5.10.2026 → 8.10.2026 (כולל Late Stay בלילה שבין 8 ל-9)",
  bookingStatus: "שולם מראש €474.48 (לא לשלם שוב!)",
  checkinTime: "15:00 – 23:00",
  amenities: {
    has: "מטבח מאובזר, תנור, כיריים, מקרר, קומקום, מכונת קפה, מכונת כביסה",
    noDishwasher: "שים לב: אין מדיח כלים בווילה."
  },
  lateStay: {
    status: "CONFIRMED_DIRECT",
    description: "סוכם ישירות מול המארח: הישארות בווילה ב-8.10 עד חצות (00:00) ואף מאוחר יותר עד היציאה לטיסה.",
    payment: "130€ ישירות למארח.",
    invoiceStatus: "סטטוס קבלה/תשלום 130€: VERIFY (לתאם מול המארח).",
    reminder: "תזכורת: בערב ה-8.10 לוודא הסדרת תשלום 130€ למארח."
  }
};

export const CAR_RENTAL = {
  provider: "Top Rent A Car (דרך Booking.com)",
  bookingRef: "722769120",
  status: "CONFIRMED",
  carModel: "Volkswagen T-Roc Cabrio (או דומה, אוטומט)",
  pricePaid: "שולם מראש: ₪662 השכרה + ₪271 ביטוח RentalCover",
  rentalCoverRef: "SEHP-P4E8-INS",
  depositAlert: "טיפ להשכרה: RentalCover עובד בשיטת החזר ואינו מבטל את הצורך בפיקדון של החברה בדלפק (כ-€1,200). שמרו מסגרת אשראי פנויה בכרטיס הראשי ויוצאים לדרך בראש שקט!",
  offroadWarning: "נוסעים בכיף בכבישים סלולים בלבד — הרכב אינו מיועד לנסיעות שטח.",
  pickup: {
    dateTime: "2026-10-05 12:00",
    location: "נמל התעופה סופיה (SOF)",
    instructions: "איסוף באמצעות שאטל של Top Rent A Car (כל 10–15 דק'). טרמינל 1: מול Departures. טרמינל 2: מתחת ל-3 הדגלים ביציאה מ-Arrivals. (הערה: יש גם דלפקים באולם Arrivals, אך הוראות הוואוצ'ר של השאטל גוברות. אם יש ספק, מתקשרים)."
  },
  return: {
    dateTime: "2026-10-09 04:00",
    location: "נמל התעופה סופיה (SOF)",
    alert: "סגירת מעגל בנחת: מחזירים את הרכב ב-04:00 לפנות בוקר. ב-8.10 בערב מאמתים בשיחה קצרה איפה משאירים את המפתח והרכב ואיפה מחכה השאטל לטרמינל."
  },
  phone: "+35970089050",
  displayPhone: "+359 700 89050",
  extraDriver: "16.80€ משולם באיסוף. שני הנהגים חייבים להירשם בחוזה!",
  contractVerification: [
    "אימות קילומטראז' ללא הגבלה (Unlimited mileage)",
    "אימות מדבקת כביש Vignette / אגרות כלולות",
    "אימות מדיניות דלק מדויקת (Fuel policy VERIFY)"
  ],
  requiredDocs: [
    "Voucher ההזמנה הרשמי (לא להסתפק ב-Summary)",
    "רישיונות נהיגה של אביהו ושל גיל",
    "דרכונים",
    "כרטיס אשראי בינלאומי על שם הנהג הראשי עם מסגרת מספקת לפיקדון"
  ],
  pickupChecklist: [
    "שני הנהגים רשומים בחוזה במפורש",
    "מצב הדלק מסומן במדויק בטופס (Fuel policy VERIFY)",
    "אימות קילומטראז' ללא הגבלה ומדבקת Vignette",
    "מדיניות החזרה ברורה (מיקום ושעת 04:00)",
    "צילום וידאו רציף 360° סביב כל הרכב",
    "צילום פגושים, דלתות, ג'נטים וצמיגים מקרוב",
    "צילום שמשות, מראות וכל שריטה או לחיצה קיימת",
    "בדיקת פתיחה וסגירה תקינה של גג הקבריולה",
    "צילום פנים הרכב, לוח שעונים, מד קילומטרים ומד דלק"
  ]
};

export const SUPERMARKETS = [
  {
    id: "billa-bansko",
    name: "BILLA בנסקו",
    status: "PLANNED",
    role: "קנייה ראשית ראשונה (First practical stop)",
    address: "Tsar Simeon 28, Bansko",
    city: "Bansko",
    hours: "08:00 – 22:00",
    coordinates: { lat: 41.8384, lng: 23.4862 },
    notes: "סופרמרקט מרכזי בבנסקו, נוח לשילוב עם ה-Bike Fitting. אין הוכחת כשרות לרשת — בודקים כל מוצר ספציפית ב-ZeKasher."
  },
  {
    id: "tmarket-bansko",
    name: "T MARKET בנסקו (חדש ממש!)",
    status: "BACKUP",
    role: "סניף חדש שנפתח ב-1.10.2026",
    address: "Pirin 92 V-G, Bansko",
    city: "Bansko",
    hours: "08:00 – 21:30",
    coordinates: { lat: 41.8321, lng: 23.4815 },
    notes: "סניף חדש שנפתח ב-1.10.2026 ברחוב פירין 92 V-G! שטח של כ-750 מ״ר עם חניה מסודרת. אלטרנטיבה מעולה בתוך בנסקו."
  },
  {
    id: "lidl-razlog",
    name: "Lidl רזלוג",
    status: "BACKUP",
    role: "גיבוי למבחר נוסף ברזלוג",
    address: "Gotze Delchev 24, Razlog",
    city: "Razlog",
    hours: "08:00 – 21:00",
    coordinates: { lat: 41.8845, lng: 23.4712 },
    notes: "סניף גדול ברזלוג הסמוכה. גיבוי אם חסרים מוצרים מסוימים בבנסקו. לא לנסוע במיוחד אם מצאנו הכל ב-BILLA."
  }
];

export const CAFES = [
  {
    name: "DABOV Specialty Coffee Bansko",
    status: "PLANNED",
    address: "84 Pirin St., Bansko",
    phone: "+359882477000",
    displayPhone: "+359 882 477 000",
    hours: "09:00 – 18:00 (VERIFY ביום עצמו)",
    coordinates: { lat: 41.8315, lng: 23.4820 },
    notes: "קפה גל שלישי איכותי ופעיל. מועמד מועדף לעצירת קפה ביום הרכיבה או בהתארגנות בבנסקו."
  },
  {
    name: "Coconut Coffee & Smoothies",
    status: "VERIFY",
    address: "Gotse Delchev 1, Bansko",
    notes: "אזהרה: המקום מסומן כסגור זמנית (Temporarily Closed). לא להציג כעצירה בטוחה אלא אם אומת שנפתח מחדש!"
  }
];

export const SPA_PULSE_THERME = {
  name: "Pulse Therme / Grand Hotel Therme",
  status: "PLANNED",
  bookingStatus: "PLANNED / NOT BOOKED (עדיין לא מוזמן)",
  datePlanned: "ערב יום שלישי 6.10 (אחרי חמשת האגמים)",
  location: "Banya, Bulgaria",
  phone: "+359898989898",
  displayPhone: "+359 898 98 98 98",
  email: "info@pulsetherme.bg",
  hours: "09:00 – 22:00",
  pricing: "כרגע באתר הרשמי: כרטיס יום חול ל-4 שעות ב-€30 (במקום €36). מחיר עיסוי: VERIFY.",
  kosherRules: "חשוב ביותר: אין הכנסת אוכל ושתייה מבחוץ ואין יציאה וכניסה מחדש (No re-entry)! מסעדת הספא אינה כשרה. חובה לאכול לפני או לתכנן ארוחה אחרי בווילה.",
  packList: ["בגדי ים", "מגבות", "חלוקים (אם יש)", "כפכפים"]
};

export const BIKES_INFO = {
  primary: {
    provider: "E-bike Bansko",
    address: "12 Bulgaria Street, Bansko 2770",
    status: "CONFIRMED",
    contact: "בעלים מקומי (E-bike Bansko)",
    phone: "+359898915999",
    displayPhone: "+359 898 915 999",
    bikes: "Apache Yamka / Tuwan (גודל M, גלגלי 27.5\" - הקטן ביותר שיש)",
    price: "76€ לזוג אופניים ליום שלם",
    operatingHours: "התחלה אחרי ~08:30, החזרה לפני רדת החשיכה",
    terms: "הבעלים יכול למסור ולאסוף את האופניים בווילה בבאניה (pickup/dropoff), או שמתחילים בעסק בבנסקו (12 Bulgaria St). יש לוודא מולם מראש האם נקודת ההתחלה בפועל היא העסק בבנסקו או מסירה/איסוף בבאניה.",
    fitVerification: "התאמה קלה לגיל (158 ס״מ): גודל M, בדיקת גובה מושב, מרחק בלמים ועצירה בטוחה.",
    reservationWarning: "איסוף/מסירה בבאניה או בבנסקו — לוודא מולם בוואטסאפ (+359 898 915 999) בערב רביעי או בוקר חמישי.",
    routeRule: "המטרה היא רכיבה רגועה ומהנה של כ-30–50 ק״מ על אספלט, כורכר ושבילי יער קלים — ללא סינגלים טכניים וללא אנדורו."
  },
  backup: {
    provider: "Sport Box Bansko",
    status: "BACKUP",
    terms: "€150 לזוג. 10:00–19:00. גודל M, טווח 50–60 ק״מ. כולל קסדה ומולטי-טול. ללא פיקדון/תשלום מראש. איסוף בבנסקו בלבד.",
    warning: "ספק גיבוי אם יש צורך."
  },
  rejected: {
    provider: "Traventuria",
    status: "REJECTED",
    reason: "אישרו במייל רשמי ב-2.10.2026 שהשכרת האופניים בבנסקו מושבתת לצורך עבודות תחזוקה עד האביב הבא. לא רלוונטי!"
  }
};

export const DECISION_GATES = [
  {
    id: "gate-1-road",
    code: "GATE 1",
    title: "בדיקת פתיחת הכביש לבקתת ויחרן",
    question: "האם הכביש מבנסקו לבקתת ויחרן פתוח לרכבים הבוקר?",
    alertContext: "יש לפעמים אימוני סקי-גלגיליות של נבחרת בולגריה בעלייה. פשוט מוודאים שהציר פתוח וחלק למעבר.",
    yesAction: "הכביש פתוח ונוח למעבר — עולים ברכב ישר לחניית הבקתה.",
    noAction: "אם יש עיכוב זמני, לא נלחצים: בוחרים במסלול יער שליו בגובה נמוך או קופצים למלניק ולספא."
  },
  {
    id: "gate-2-mountain",
    code: "GATE 2",
    title: "תנאי מזג אוויר ורוחות בהר הגבוה",
    question: "האם הרוחות, הראות ומשטחי הסלע בהירים ובטוחים להליכה?",
    alertContext: "בגובה 2,900 מ' ההר דורש כבוד. אם יש ערפל סמיך או רוח עזה — שומרים על הבטיחות ובוחרים במסלול רגוע.",
    yesAction: "שמיים צלולים וראות פנטסטית — יוצאים לטרוף את ההר!",
    noAction: "רוחות מקפיאות או ערפל כבד — בוחרים בחוכמה במסלול האגמים המוגן או ביום רוגע חמים."
  },
  {
    id: "gate-3-bike-fit",
    code: "GATE 3",
    title: "התאמת אופניים קלה ובטוחה לגיל",
    question: "האם האופניים מרגישים נוחים, יציבים וקלים לשליטה ב-fitting?",
    alertContext: "מוודאים בנחת שהכידון קרוב, המושב בגובה בטוח והעצירה מרגישה טבעית לחלוטין.",
    yesAction: "האופניים יושבים בול ומרגישים נפלא — מוכנים ליום רכיבה חלומי ביער!",
    noAction: "אם משהו מרגיש מגושם או גבוה מדי, מוותרים בכיף — נהנים מטיול רגלי, קפה מעולה ופינוקים."
  },
  {
    id: "gate-4-kosher",
    code: "GATE 4",
    title: "בדיקת כשרות מהירה (ZeKasher)",
    question: "האם המוצר נסרק ואושר במאגר או בקבוצת GOK?",
    alertContext: "רואים משהו שנראה טעים בסופר? סורקים את הברקוד ברגע ובודקים בראש שקט.",
    yesAction: "מאושר במערכת — מוסיפים לרשימת המצרכים של החופשה.",
    noAction: "לא בטוח? מצלמים בקבוצת GOK או בוחרים מוצר מוכר אחר ללא חשש."
  },
  {
    id: "gate-5-return",
    code: "GATE 5",
    title: "סגירת פרטי החזרת הרכב לפנות בוקר",
    question: "האם אומתו נקודת החזרת המפתח והשאטל לטרמינל ב-04:00?",
    alertContext: "מוודאים בערב ה-8.10 בשיחה קצרה ל-Top Rent איפה מחכים השאטל והנציג לפנות בוקר.",
    yesAction: "הכל ברור וסגור — יוצאים בזמן ומגיעים לשדה בנוחות מקסימלית.",
    noAction: "מרימים שיחה מהירה ל-Top Rent (+359 700 89050) ומאמתים בדיוק את המיקום."
  }
];

export const DAYS_PLAN = [
  {
    dayNumber: 1,
    date: "2026-10-05",
    dayOfWeek: "שני",
    title: "הנחיתה, הרוד-טריפ בקבריולה וההגעה לווילה",
    status: "CONFIRMED",
    subtitle: "סופיה → נסיעה נופית דרומה → הצטיידות בבנסקו → התמקמות בווילה עם מים תרמיים",
    keyAlert: "💡 טיפ לדרך: יש לפעמים אירוע תנועה קצר בבנסקו בין 17:30 ל-18:30 — נוסעים בכיף, ואם עמוס קופצים קודם לווילה בבאניה להתרווח בבריכה החמה.",
    timeline: [
      { time: "06:10", action: "התייצבות רגועה בנתב״ג טרמינל 1 (דלפקי המזוודות נפתחים 3 שעות לפני הטיסה)" },
      { time: "09:10", action: "המראה לסופיה בטיסת Wizz Air W6 4428 (מושבים: אביהו 14A, גיל 14B)" },
      { time: "12:00", action: "נחיתה בסופיה, איסוף המזוודה ועולים לשאטל של Top Rent A Car" },
      { time: "12:45", action: "קבלת ה-VW T-Roc Cabriolet: צילום וידאו קצר מסביב, בדיקת פתיחת גג ויוצאים לדרך!" },
      { time: "13:30", action: "רוד-טריפ יפהפה דרומה לעמק פירין (כשעתיים נסיעה נופית בכבישים A3 ו-19)" },
      { time: "15:30", action: "עצירת קניות כיפית ב-BILLA בנסקו (מצרכים, פירות ונשנושים לווילה)" },
      { time: "16:45", action: "כניסה לווילה Three Peaks Thermal Villas בבאניה — טבילה ראשונה במים החמים (38°C)!" },
      { time: "17:45", action: "התאמת אופניים ב-e-Bike Bansko: לא הספקנו היום, נדחה למחר (שלישי בערב) או לרביעי" },
      { time: "19:30", action: "ערב שקט ואינטימי בווילה: ארוחה טעימה, מים תרמיים חמים והכנות ליום המחרת" }
    ],
    checklist: [
      "איסוף רכב: צילום וידאו קצר 360° סביב הרכב כולל בדיקת גג קבריולה",
      "שני הנהגים רשומים בחוזה Top Rent",
      "אימות מדבקת כבישים (Vignette) ומדיניות דלק",
      "קניות מצרכים ראשונות ב-BILLA / T MARKET עם סריקת ברקודים ב-ZeKasher",
      "התאמת אופניים ב-e-Bike Bansko (נדחה למחר בערב או לרביעי)",
      "טבילה חלומית ראשונה בבריכה התרמית הפרטית של הווילה (38°C)"
    ],
    planB: "אם יש עייפות מהטיסה או עיכוב קל בכביש, נוסעים ישר לווילה בבאניה, נהנים מהבריכה החמה ומשלימים את הקניות והאופניים בנחת."
  },
  {
    dayNumber: 2,
    date: "2026-10-06",
    dayOfWeek: "שלישי",
    title: "העפלה לפירמידת השיש — פסגת ויחרן (2,914 מ')",
    status: "PLANNED",
    subtitle: "הטרק הגדול בפירין: נסיעה ברכב ל-Vihren Hut (41.75666, 23.41659) → לופ דרך Kazanite/Premkata בעלייה ו-Kabata בירידה",
    keyAlert: "🚗 לוגיסטיקה ושער החלטה: נוסעים ברכב מהווילה ישירות עד Vihren Hut / хижа Вихрен (נקודת ניווט מדויקת: 41.75666, 23.41659). אין רכבל או רכבת. בודקים בבוקר שהכביש פתוח ושאין עיכוב בגלל אימוני רולר-סקי. קצב טיול נינוח, שומרים על חוויה יפה ומהנה ולא יום עבודה!",
    trailDetails: {
      name: "Vihren Peak Loop via Kazanite & Premkata",
      referenceUrl: "https://www.wikiloc.com/hiking-trails/kazana-shelter-premkata-und-vihren-von-vihren-hut-284315810",
      distance: "10.4 ק״מ",
      elevationGain: "+990 מטר / -990 מטר",
      duration: "~6–7.5 שעות (קצב נינוח ומתון)",
      maxAltitude: "2,914 מטר",
      difficulty: "אתגרי אלפיני (הטרק הגדול בפירין) — ללא רכבל, שביל סלעים מסומן, נוף פנורמי מרהיב",
      routePoints: "Vihren Hut (41.75666, 23.41659) → Kazanite / Kazana Shelter → Premkata Saddle → Vihren Peak (2914m) → Kabata → Vihren Hut"
    },
    timeline: [
      { time: "07:30", action: "קפה וארוחת בוקר בווילה בבאניה, בדיקת מזג אוויר וסטטוס פתיחת כביש ויחרן (אימוני רולר-סקי)" },
      { time: "08:30", action: "נסיעה רגועה ברכב (VW T-Roc) במעלה הרי פירין ישירות לחניית Vihren Hut (כ-35 דק')" },
      { time: "09:15", action: "הגעה לחניית בקתת ויחרן (41.75666, 23.41659), התארגנות עם מקלות הליכה, מעילי רוח ומים" },
      { time: "09:30", action: "תחילת ההעפלה דרך עמק הקאזאנה (Kazanite) המרשים אל עבר אוכף הפרמקטה" },
      { time: "12:45", action: "עומדים על פסגת ויחרן (2,914 מ')! חגיגת עשור יחד, תמונות מרהיבות ונשנוש בראש ההר" },
      { time: "13:30", action: "ירידה מתונה ובטוחה דרך אוכף הקבאטה (Kabata) לכיוון הבקתה" },
      { time: "16:15", action: "סיום הטרק בבקתת ויחרן — תה חם, חיוך ענק ונסיעה רגועה חזרה לווילה" },
      { time: "17:30", action: "טבילה חלומית מרגיעה בבריכה התרמית החמה בווילה (38°C) לשחרור מלא של השרירים" },
      { time: "19:30", action: "ארוחת ערב חמה, יין ומנוחה מושלמת לקראת יום האגמים הנינוח מחר" }
    ],
    checklist: [
      "בדיקת פתיחת הכביש מבנסקו לבקתת ויחרן (אימוני רולר-סקי)",
      "אימות שמיים בהירים ורוחות בטוחות בפסגה (2,914 מ')",
      "מעיל רוח/גשם, שכבה טרמית חמה וכובע בתיק",
      "נעלי טרקים איכותיות, מקלות הליכה ולפחות 2 ליטר מים לאדם",
      "קובץ GPX שמור במכשיר ב-Wikiloc / Garmin",
      "טבילה בבריכה התרמית הפרטית של הווילה (38°C)"
    ],
    planB: "אם הפסגה מכוסה ענני סערה, רוחות חזקות או קרח: לא מסתכנים! עוברים למסלול עמקים מוגן, טיול מפלים, או מקדימים את חמשת האגמים הנמוכים יותר."
  },
  {
    dayNumber: 3,
    date: "2026-10-07",
    dayOfWeek: "רביעי",
    title: "חמשת אגמי בנדריצה הצלולים (Five Lakes Loop)",
    status: "PLANNED",
    subtitle: "יום אלפיני קל ונינוח: נסיעה ברכב ל-Vihren Hut (41.75666, 23.41659) → טרק האגמים ב-Garmin → ספא וטבילה",
    keyAlert: "🌊 יום קל ונינוח: אחרי הפסגה של אתמול, היום מטיילים ברוגע מלא בין 5 אגמי הקרחונים המרהיבים. המסלול כבר טעון ב-Garmin (8.35 ק״מ, 474 מ' טיפוס) ומאפשר עצירות פיקניק וצילום בלי לחץ. שומרים על חופשה נעימה ולא יום עבודה!",
    trailDetails: {
      name: "Five Lakes Loop (Banderishki Lakes)",
      referenceUrl: "https://www.wikiloc.com/hiking-trails/okoto-lake-lago-dalgoto-and-muratovo-ezero-from-vihren-hut-270168580",
      distance: "8.35 ק״מ",
      elevationGain: "+474 מטר / -474 מטר",
      duration: "~4–5 שעות (קצב צילום ורוגע מלא)",
      maxAltitude: "2,326 מטר",
      difficulty: "בינוני ונינוח (הוטמע ב-Garmin) — שבילים יפהפיים, אגמים צלולים",
      routePoints: "Vihren Hut (41.75666, 23.41659) → Okoto → Ribno → Zhabeshko → Dalgoto → Muratovo → Vihren Hut"
    },
    timeline: [
      { time: "08:30", action: "השכמה נעימה, קפה וארוחת בוקר שקטה בווילה" },
      { time: "09:30", action: "נסיעה ברכב ל-Vihren Hut / хижа Вихрен (נקודת חניה: 41.75666, 23.41659)" },
      { time: "10:15", action: "תחילת המסלול הנינוח בין האגמים (מעקב עם ה-Garmin)" },
      { time: "11:15", action: "הגעה לאגם ריבנו ואגם ז'אבשקו — השתקפויות מרהיבות של הרי פירין במים" },
      { time: "12:30", action: "פיקניק צהריים שליו לצד אגם מוראטובו עם נוף לפסגת מוראטוב" },
      { time: "14:45", action: "סיום המסלול בבקתת ויחרן, קפה או תה חם ונסיעה חזרה לווילה" },
      { time: "16:30", action: "טבילה בבריכה התרמית הפרטית של הווילה (38°C) או פינוק בספא Pulse Therme" },
      { time: "18:30", action: "תיאום קצר בוואטסאפ מול E-bike Bansko (+359 898 915 999) לגבי נקודת האיסוף/מסירה של האופניים ליום חמישי (בנסקו מול באניה)" }
    ],
    checklist: [
      "הפעלת המסלול הטעון ב-Garmin (8.35 ק״מ, 474 מ' טיפוס)",
      "נשנושי פיקניק ומים לעצירה רגועה ליד האגמים",
      "נעלי טרקים ומעיל רוח קל",
      "תיאום בוואטסאפ מול E-bike Bansko לקראת יום חמישי",
      "טבילה במים התרמיים החמים להרפיית שרירים"
    ],
    planB: "אם מזג האוויר באגמים סגרירי או רוצים מסלול קצר עוד יותר: עולים רק עד אגם מוראטובו היפהפה (4.2 ק״מ הלוך-חזור) וחוזרים ליום ספא ורוגע."
  },
  {
    dayNumber: 4,
    date: "2026-10-08",
    dayOfWeek: "חמישי",
    title: "שבילי יער, אופני e-MTB, קפה איכותי וטבילה לילית",
    status: "PLANNED",
    subtitle: "רכיבה זורמת וקלה בעמק פירין (30–50 ק״מ) → E-bike Bansko (רח' בולגריה 12 / מסירה בבאניה) → Late Stay בווילה",
    keyAlert: "🚲 רכיבה כיפית וקלילה: 30–50 ק״מ על אספלט, כורכר ושבילי יער נוחים (בלי אנדורו ובלי סינגלים טכניים). ספק האופניים: E-bike Bansko ברחוב 12 Bulgaria Street בבנסקו (טל' +359 898 915 999). בודקים מולם מראש האם הם מביאים את האופניים לווילה בבאניה או שאוספים מהעסק. נשארים בווילה עד חצות!",
    trailDetails: {
      name: "Scenic e-MTB Valley & Forest Route",
      distance: "30–50 ק״מ",
      elevationGain: "מתון (דרכי עפר כבושות, אספלט ויער קל)",
      duration: "יום רגוע עם עצירות קפה (start after ~08:30, return before dark)",
      difficulty: "קל עד בינוני (Non-Technical, ללא אנדורו)",
      routePoints: "Bansko (12 Bulgaria St) / Banya Villa → Valley Trails → Pine Forest → DABOV Coffee → Villa"
    },
    timeline: [
      { time: "08:30", action: "בוקר רגוע בווילה, ארוחה מפנקת וטבילת בוקר במים החמים" },
      { time: "09:30", action: "קבלת אופני ה-e-MTB מ-E-bike Bansko (מסירה בווילה או איסוף ברחוב בולגריה 12)" },
      { time: "10:30", action: "יציאה לרכיבה שלווה וזורמת בשבילי היער והעמק (30–50 ק״מ, קל וללא מקטעים טכניים)" },
      { time: "13:30", action: "עצירת קפה מעולה ואיכותי ב-DABOV Specialty Coffee בבנסקו (רח' פירין 84)" },
      { time: "15:30", action: "סיום הרכיבה, החזרת האופניים (איסוף מהווילה או החזרה בעסק) ונסיעה לווילה" },
      { time: "17:00", action: "לילה קסום בווילה (Late Stay מאושר עד חצות!): ארוחה חגיגית, בריכה תרמית ורוגע" },
      { time: "23:00", action: "מנוחה, אריזה רגועה ויציאה מאוחרת בלילה לכיוון נמל התעופה סופיה" }
    ],
    checklist: [
      "וידוא מול E-bike Bansko היכן מתחילים (מסירה בבאניה או איסוף ב-12 Bulgaria St)",
      "קסדות, בקבוקי מים ומשקפי שמש לרכיבה",
      "טלפון טעון לניווט ולתמונות בשבילי היער",
      "עצירת אספרסו ב-DABOV בבנסקו",
      "Late Stay בווילה: אריזת התיקים בנחת לפני שיוצאים בלילה",
      "אימות טלפוני קצר מול Top Rent לגבי החזרת הרכב ב-04:00"
    ],
    planB: "אם מזג האוויר גשום או קר מדי לרכיבה: יום ספא רגוע בבאניה, טיול רגלי קל בעיירות הציוריות, וזמן זוגי מפנק בווילה הפרטית."
  },
  {
    dayNumber: 5,
    date: "2026-10-09",
    dayOfWeek: "שישי",
    title: "נסיעת לפנות בוקר, החזרת הרכב והמראה הביתה",
    status: "CONFIRMED",
    subtitle: "באניה / סופיה → החזרת רכב ב-04:00 → טיסת בוקר 05:45 → נחיתה בישראל ב-08:15",
    keyAlert: "✈️ מתקתקים את הבוקר ברוגע: מגיעים להחזיר את הרכב ב-04:00 בשדה, עולים לשאטל של הטרמינל, קפה קטן בדיוטי פרי וחוזרים הביתה מאוהבים ומלאי חוויות!",
    timeline: [
      { time: "01:30", action: "יציאה שקטה מהווילה בבאניה ונסיעה לסופיה בכביש הראשי והריק (כשעתיים)" },
      { time: "03:45", action: "הגעה לאזור שדה התעופה סופיה ותדלוק מלא של הרכב לפני ההחזרה" },
      { time: "04:00", action: "החזרת ה-VW T-Roc ל-Top Rent A Car (מסירת מפתח, בדיקה קצרה ושאטל לטרמינל)" },
      { time: "04:30", action: "מעבר בידוק ביטחוני ודרכונים בנמל התעופה סופיה" },
      { time: "05:15", action: "התייצבות בשער העלייה למטוס (Boarding) עם הכרטיסים שהורדו Offline" },
      { time: "05:45", action: "המראה מסופיה בטיסת Wizz Air W6 4427 (מושבים: אביהו 14E, גיל 14F)" },
      { time: "08:15", action: "נחיתה בנתב״ג — חזרנו הביתה מחופשת עשור בלתי נשכחת! ❤️" }
    ],
    checklist: [
      "תדלוק מלא של הרכב לפני ההחזרה (שמירת קבלה)",
      "איסוף כל החפצים, המטענים והציוד מתוך הרכב",
      "מסירת מפתח לנציג Top Rent והגעה לשאטל הטרמינל",
      "מעבר בידוק ועלייה למטוס ברוגע"
    ],
    planB: "אם רוצים לישון קרוב יותר לשדה בלילה שבין 8 ל-9: אפשר לצאת מבאניה כבר סביב 22:00, לישון 4 שעות במלון צמוד לשדה בסופיה ולהתעורר ישר לטרמינל."
  }
];

export const TRAILS_LIST = [
  {
    id: "vihren-peak",
    name: "פסגת ויחרן (Vihren Peak Loop)",
    wikilocTitle: "Kazana shelter, Premkata und Vihren von Vihren hut (Recorded Sep 2026)",
    referenceUrl: "https://www.wikiloc.com/hiking-trails/kazana-shelter-premkata-und-vihren-von-vihren-hut-284315810",
    status: "PLANNED",
    dayAssigned: 2,
    datePlanned: "6.10.2026",
    distanceKm: 10.4,
    elevationGainM: 990,
    elevationLossM: 990,
    durationHours: "~6:00 – 7:30 שעות (קצב נינוח ומתון)",
    maxAltitudeM: 2914,
    difficulty: "אתגרי אלפיני (הטרק הגדול בפירין)",
    trailType: "מעגלי (Loop)",
    startPoint: "חניית בקתת ויחרן / хижа Вихрен (41.75666, 23.41659)",
    direction: "עלייה דרך עמק הקאזאנה ואוכף הפרמקטה, ירידה מתונה ובטוחה דרך אוכף הקבאטה (Kabata) חזרה לבקתה",
    keyWaypoints: [
      "חניית בקתת ויחרן (41.75666, 23.41659 - גובה 1,950 מ')",
      "עמק הקאזאנה ומחסה Kazana Shelter (2,445 מ')",
      "אוכף הפרמקטה (Premkata Saddle - 2,660 מ')",
      "פסגת ויחרן - הגג של הרי פירין (2,914 מ')",
      "אוכף הקבאטה (Kabata Saddle - 2,600 מ')",
      "ירידה מתונה בשביל הדרומי חזרה לרכב בבקתת ויחרן"
    ],
    hazards: [
      "נסיעה ברכב ישירות לבקתה (ללא רכבל/רכבת) — לבדוק בבוקר שהכביש פתוח מרולר-סקי",
      "מדרונות שיש וסלעים — הליכה בטוחה עם נעלי טרקים ומקלות",
      "רוחות וקרירות בפסגה (2,914 מ') — שכבות פליז ומעיל רוח בתיק",
      "שומרים על יום טיול מהנה ולא יום עבודה!"
    ],
    gpxFilename: "Vihren_Peak_Loop_Kazana.gpx",
    externalLinks: {
      wikiloc: "https://www.wikiloc.com/hiking-trails/kazana-shelter-premkata-und-vihren-von-vihren-hut-284315810",
      googleMaps: "https://maps.google.com/?q=41.75666,23.41659",
      waze: "https://waze.com/ul?ll=41.75666,23.41659&navigate=yes"
    }
  },
  {
    id: "five-lakes",
    name: "חמשת אגמי בנדריצה (Five Lakes Loop)",
    wikilocTitle: "Okoto lake, Lago Dalgoto and Muratovo ezero from Vihren hut",
    referenceUrl: "https://www.wikiloc.com/hiking-trails/okoto-lake-lago-dalgoto-and-muratovo-ezero-from-vihren-hut-270168580",
    status: "PLANNED",
    dayAssigned: 3,
    datePlanned: "7.10.2026",
    distanceKm: 8.35,
    elevationGainM: 474,
    elevationLossM: 474,
    durationHours: "~4–5 שעות (קצב צילום ורוגע מלא)",
    maxAltitudeM: 2326,
    difficulty: "בינוני ונינוח (הוטמע ב-Garmin)",
    trailType: "מעגלי (Loop)",
    startPoint: "חניית בקתת ויחרן / хижа Вихрен (41.75666, 23.41659)",
    lakes: [
      "אגם אוקוטו / העין (Okoto / The Eye - 2,026 מ')",
      "אגם ז'אבשקו / הצפרדע (Zhabeshko / Frog Lake - 2,326 מ')",
      "אגם דאלגוטו / הארוך (Dalgoto / Long Lake - 2,310 מ')",
      "אגם ריבנו / הדגים (Ribno Banderishko Lake - 2,190 מ')",
      "אגם מוראטובו (Muratovo Lake - 2,230 מ')"
    ],
    hazards: [
      "יום קל ונינוח בהרבה מיום הפסגה",
      "מעבר בולדרים קל בעלייה לאגם ז'אבשקו",
      "המסלול טעון ומוכן מראש בשעון ה-Garmin"
    ],
    gpxFilename: "Five_Lakes_Loop_Vihren.gpx",
    externalLinks: {
      wikiloc: "https://www.wikiloc.com/hiking-trails/okoto-lake-lago-dalgoto-and-muratovo-ezero-from-vihren-hut-270168580",
      googleMaps: "https://maps.google.com/?q=41.75666,23.41659",
      waze: "https://waze.com/ul?ll=41.75666,23.41659&navigate=yes"
    }
  },
  {
    id: "ebike-valley",
    name: "רכיבת e-MTB קלילה בעמק ובשבילי היער",
    status: "PLANNED",
    dayAssigned: 4,
    datePlanned: "8.10.2026",
    distanceKm: "30–50 ק״מ",
    elevationGainM: "מתון וזורם (אספלט ושבילי יער כבושים)",
    durationHours: "יום רגוע (יציאה אחרי ~08:30, סיום לפני חשיכה)",
    maxAltitudeM: 1100,
    difficulty: "קל וזורם (Non-Technical, ללא סינגלים/אנדורו)",
    trailType: "נופי / אספלט ודרכי יער נוחות",
    startPoint: "E-bike Bansko (רחוב 12 Bulgaria St) או מסירה בווילה בבאניה",
    notes: "אופניים דרך E-bike Bansko (טל' +359 898 915 999). בודקים מולם מראש האם מתחילים בעסק בבנסקו או שהם מביאים לווילה בבאניה. עצירת קפה ב-DABOV (רח' פירין 84).",
    externalLinks: {
      googleMaps: "https://maps.google.com/?q=41.8383,23.4885",
      whatsapp: "https://wa.me/359898915999"
    }
  },
  {
    id: "rila-lakes",
    name: "שבעת אגמי רילה (Seven Rila Lakes) — ירד מהתוכנית",
    status: "CANCELLED",
    dayAssigned: null,
    datePlanned: "בוטל (רכבל סגור לתחזוקה)",
    distanceKm: 9.2,
    elevationGainM: 510,
    elevationLossM: 510,
    durationHours: "בוטל",
    maxAltitudeM: 2535,
    difficulty: "לא רלוונטי",
    trailType: "מעגלי",
    startPoint: "בקתת פיונרסקה (רכבל סגור עד 31.10)",
    notes: "התקבלה הודעה רשמית ממפעיל הרכבל שהרכבל סגור לתחזוקה שנתית עד 31.10.2026, ואין דרך ממונעת חלופית חוקית לעלות מלבד הליכה מפרכת ומיותרת מהחלק התחתון. התוכנית מתמקדת בטרקים המעולים של פירין ישירות מבקתת ויחרן ברכב."
  },
  {
    id: "plan-b-muratovo",
    name: "Plan B: אגם מוראטובו בלבד (הלוך-חזור)",
    status: "BACKUP",
    distanceKm: 4.2,
    elevationGainM: 280,
    durationHours: "2:00 – 2:30",
    maxAltitudeM: 2230,
    difficulty: "קל-בינוני",
    trailType: "הלוך-חזור",
    notes: "פתרון מושלם לקיצור ביום חמשת האגמים אם תנאי הגובה מקשים או רוצים לסיים מוקדם לספא."
  },
  {
    id: "plan-b-melnik",
    name: "Plan B: נסיעה למלניק ופירמידות החול",
    status: "BACKUP",
    distanceKm: "נסיעה נופית + הליכה קלה של 3 ק״מ",
    durationHours: "חצי יום עד יום שלם",
    difficulty: "קל ביותר",
    trailType: "עיירה היסטורית ותצורות סלע",
    notes: "אם מזג האוויר בהרי פירין סוער או קפוא, בעמק סנדנסקי ומלניק (נמוך וחם בהרבה) בדרך כלל שמש נפלאה."
  }
];

export const KOSHER_GUIDE = {
  system: "ZeKasher (GOK / הרב אורן דובדבני)",
  website: "https://kosher.global/zekasher",
  phone: "055-994-3899",
  whatsappGroup: "מזרח אירופה והמדינות הבלטיות",
  operatingHours: "07:00 – 22:00 שעון ישראל",
  rules: [
    "מסד הנתונים מתחיל ריק: אין כרגע אפילו מוצר בולגרי אחד שאושר מראש. מוסיפים רק מוצר שנסרק ואושר בפועל!",
    "המערכת מבוססת ברקוד ספציפי בלבד. אין אישור גורף לרשתות (BILLA או T MARKET) ואין אישור לשם מותג כללי.",
    "אותו מותג בדיוק עשוי להיות מיוצר במפעלים שונים במדינות שונות עם רכיבים שונים לחלוטין.",
    "מוצר טבעוני אינו בהכרח כשר (חומרי טעם, תמציות, קווי ייצור ויינות).",
    "בסריקה חובה להזין את כל ספרות הברקוד ולוודא שהמספר תואם לחלוטין את המוצר שבידכם."
  ],
  notFoundSteps: [
    "שם המוצר המדויק + תיאור קצר",
    "צילום ברור של חזית המוצר",
    "צילום רשימת הרכיבים (Ingredients)",
    "צילום ברור של הברקוד ומספרו",
    "צילום ארץ הייצור (Country of manufacture)",
    "ציון ארץ הקנייה = בולגריה (Bulgaria)"
  ]
};

// Initial verified products starts EMPTY as mandated:
// "אין כרגע אפילו מוצר בולגרי אחד עם barcode שאושר בפועל בשיחה. לכן מסד 'מוצרים מאושרים' צריך להתחיל ריק."
export const INITIAL_VERIFIED_PRODUCTS = [];

export const INITIAL_PACKING_LIST = [
  { id: "pack-insurance-moriah", category: "מסמכים וכספים", text: "ביטוח נסיעות לחו״ל למוריה (מתחת לגיל 24) — הוסדר ומאושר במלואו! ✅", checked: true },
  { id: "pack-insurance-general", category: "מסמכים וכספים", text: "פוליסות ביטוח נסיעות לחו״ל שמורות בטלפון ב-Offline (כולל ספורט אתגרי וחילוץ)", checked: false },
  { id: "pack-1", category: "מסמכים וכספים", text: "דרכונים (בתוקף לפחות 6 חודשים)", checked: false },
  { id: "pack-2", category: "מסמכים וכספים", text: "רישיונות נהיגה בתוקף (אביהו + גיל)", checked: false },
  { id: "pack-3", category: "מסמכים וכספים", text: "כרטיס אשראי בינלאומי על שם הנהג הראשי עם מסגרת מספקת לפיקדון (כ-€1,200 VERIFY)", checked: false },
  { id: "pack-4", category: "מסמכים וכספים", text: "שובר השכרת רכב רשמי של Top Rent + מסמך ביטוח RentalCover (ref: SEHP-P4E8-INS)", checked: false },
  { id: "pack-5", category: "מסמכים וכספים", text: "כרטיסי עלייה למטוס Wizz Air שמורים בטלפון ב-Offline", checked: false },
  { id: "pack-6", category: "מסמכים וכספים", text: "130€ מזומן להסדרת ה-Late Stay מול מארח הווילה (בדיקת קבלה)", checked: false },
  { id: "pack-7", category: "ביגוד וציוד טרקים", text: "נעלי הליכה/טרקים איכותיות ומשופשפות", checked: false },
  { id: "pack-8", category: "ביגוד וציוד טרקים", text: "מעיל Shell חסין רוח וגשם", checked: false },
  { id: "pack-9", category: "ביגוד וציוד טרקים", text: "שכבות ביגוד טרמיות (פליז/מיקרו-פליז)", checked: false },
  { id: "pack-10", category: "ביגוד וציוד טרקים", text: "כובע חם, כפפות קלות וכובע שמש", checked: false },
  { id: "pack-11", category: "ביגוד וציוד טרקים", text: "פנס ראש (Headlamp) טעון עם סוללות רזרבה", checked: false },
  { id: "pack-12", category: "ביגוד וציוד טרקים", text: "בקבוקי מים או שלוקר (לפחות 2 ליטר לאדם)", checked: false },
  { id: "pack-13", category: "ספא ומים תרמיים", text: "בגדי ים נוחים", checked: false },
  { id: "pack-14", category: "ספא ומים תרמיים", text: "כפכפי ספא/בריכה אישיים", checked: false },
  { id: "pack-15", category: "אלקטרוניקה וטעינה", text: "מטענים ניידים (Power Banks) 10,000mAh ומעלה", checked: false },
  { id: "pack-16", category: "אלקטרוניקה וטעינה", text: "כבלי טעינה לטלפונים ומתאמים לרכב", checked: false },
  { id: "pack-17", category: "אלקטרוניקה וטעינה", text: "מעמד לטלפון לרכב (לניווט בטוח בכבישים סלולים)", checked: false },
  { id: "pack-18", category: "אוכל ובריאות", text: "ערכת עזרה ראשונה בסיסית, פלסטרים ותרסיס לכאבי שרירים", checked: false },
  { id: "pack-19", category: "אוכל ובריאות", text: "אוכל כשר יבש מהארץ: חטיפי אנרגיה, מנות חמות, טונה, קרקרים", checked: false },
  { id: "pack-20", category: "אוכל ובריאות", text: "סכו״ם חד-פעמי / כלי אוכל קלים להר (בווילה אין מדיח)", checked: false }
];

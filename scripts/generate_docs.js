import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const docsDir = path.join(__dirname, "..", "public", "docs");
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

async function createDoc({ filename, title, subtitle, items, notes, warning }) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const { width, height } = page.getSize();
  let y = height - 50;

  // Header band
  page.drawRectangle({
    x: 40,
    y: y - 55,
    width: width - 80,
    height: 65,
    color: rgb(0.08, 0.22, 0.16) // #143829 forest green
  });

  page.drawText(title, {
    x: 55,
    y: y - 25,
    size: 16,
    font: fontBold,
    color: rgb(1, 1, 1)
  });

  page.drawText(subtitle, {
    x: 55,
    y: y - 45,
    size: 10,
    font: fontRegular,
    color: rgb(0.85, 0.75, 0.55)
  });

  y -= 80;

  // Warning banner if any
  if (warning) {
    page.drawRectangle({
      x: 40,
      y: y - 40,
      width: width - 80,
      height: 40,
      color: rgb(0.98, 0.92, 0.90),
      borderColor: rgb(0.72, 0.28, 0.17),
      borderWidth: 1
    });

    page.drawText(warning, {
      x: 55,
      y: y - 25,
      size: 9,
      font: fontBold,
      color: rgb(0.65, 0.2, 0.1)
    });

    y -= 55;
  }

  // Details box
  page.drawRectangle({
    x: 40,
    y: y - (items.length * 24 + 20),
    width: width - 80,
    height: items.length * 24 + 20,
    color: rgb(0.98, 0.98, 0.97),
    borderColor: rgb(0.85, 0.82, 0.77),
    borderWidth: 1
  });

  y -= 20;

  for (const item of items) {
    page.drawText(item.label, {
      x: 55,
      y: y - 10,
      size: 10,
      font: fontBold,
      color: rgb(0.3, 0.3, 0.3)
    });

    page.drawText(item.value, {
      x: 200,
      y: y - 10,
      size: 10,
      font: fontRegular,
      color: rgb(0.1, 0.1, 0.1)
    });

    y -= 24;
  }

  y -= 25;

  // Notes section
  if (notes && notes.length > 0) {
    page.drawText("IMPORTANT FIELD NOTES & INSTRUCTIONS:", {
      x: 45,
      y: y,
      size: 11,
      font: fontBold,
      color: rgb(0.08, 0.22, 0.16)
    });

    y -= 18;

    for (const note of notes) {
      page.drawText("- " + note, {
        x: 55,
        y: y,
        size: 9,
        font: fontRegular,
        color: rgb(0.25, 0.25, 0.25)
      });
      y -= 15;
    }
  }

  // Footer
  page.drawText("Bulgaria Expedition 2026 | Verified Document Summary & Field Reference | Offline Ready", {
    x: 55,
    y: 30,
    size: 8,
    font: fontRegular,
    color: rgb(0.5, 0.5, 0.5)
  });

  const pdfBytes = await pdfDoc.save();
  const filePath = path.join(docsDir, filename);
  fs.writeFileSync(filePath, pdfBytes);
  console.log(`Generated: ${filePath}`);
}

async function run() {
  // 1. Avihu Boarding Pass
  await createDoc({
    filename: "AVIHU_TVUYA_SITTON_WIZZ.pdf",
    title: "WIZZ AIR - BOARDING PASS & TRAVEL RECORD",
    subtitle: "Flight W6 4428 | TLV (Ben Gurion) -> SOF (Sofia)",
    items: [
      { label: "Passenger Name:", value: "AVIHU TVUYA SITTON" },
      { label: "Booking Reference:", value: "CSZI3H" },
      { label: "Flight Number:", value: "W6 4428" },
      { label: "Date of Travel:", value: "05 OCT 2026 (Monday)" },
      { label: "Departure:", value: "09:10 AM - Tel Aviv (TLV) Terminal 1" },
      { label: "Arrival:", value: "12:00 PM - Sofia (SOF) Terminal 1" },
      { label: "Seat Assignment:", value: "14A (Window - Reserved)" },
      { label: "Baggage Allowance:", value: "1x 26kg Checked Bag + 1x Free Carry-on (40x30x20cm)" },
      { label: "Bag Drop Counter:", value: "Closes exactly 40 min before departure" }
    ],
    notes: [
      "Bring valid Israeli Passport (at least 6 months validity from return date).",
      "Boarding gate closes 30 minutes before departure time.",
      "Check-in online was completed and confirmed under booking code CSZI3H."
    ]
  });

  // 2. Gil Boarding Pass
  await createDoc({
    filename: "GIL_SITTON_WIZZ.pdf",
    title: "WIZZ AIR - BOARDING PASS & TRAVEL RECORD",
    subtitle: "Flight W6 4428 | TLV (Ben Gurion) -> SOF (Sofia)",
    items: [
      { label: "Passenger Name:", value: "GIL SITTON" },
      { label: "Booking Reference:", value: "CSZI3H" },
      { label: "Flight Number:", value: "W6 4428" },
      { label: "Date of Travel:", value: "05 OCT 2026 (Monday)" },
      { label: "Departure:", value: "09:10 AM - Tel Aviv (TLV) Terminal 1" },
      { label: "Arrival:", value: "12:00 PM - Sofia (SOF) Terminal 1" },
      { label: "Seat Assignment:", value: "14B (Middle - Next to Avihu)" },
      { label: "Baggage Allowance:", value: "1x Free Carry-on (40x30x20cm - placed under seat)" }
    ],
    notes: [
      "Bring valid Passport with minimum 6 months validity.",
      "Personal item must fit under the seat in front of you."
    ]
  });

  // 3. Return Flight
  await createDoc({
    filename: "WIZZ_RETURN_FLIGHT_W64427.pdf",
    title: "WIZZ AIR - RETURN FLIGHT CONFIRMATION",
    subtitle: "Flight W6 4427 | SOF (Sofia) -> TLV (Ben Gurion)",
    warning: "EARLY MORNING FLIGHT (05:45 AM) - NIGHT DEPARTURE FROM BANYA AT 02:00 AM",
    items: [
      { label: "Passengers:", value: "Avihu Sitton (Seat 14E) & Gil Sitton (Seat 14F)" },
      { label: "Booking Reference:", value: "CSZI3H" },
      { label: "Flight Number:", value: "W6 4427" },
      { label: "Date of Travel:", value: "09 OCT 2026 (Friday)" },
      { label: "Departure:", value: "05:45 AM - Sofia Airport (SOF) Terminal 1" },
      { label: "Arrival:", value: "08:15 AM - Tel Aviv (TLV)" },
      { label: "Car Return Time:", value: "04:00 AM sharp at Top Rent Sofia Airport" }
    ],
    notes: [
      "Online check-in opens 24-48 hours before return flight.",
      "Leave Three Peaks Villas in Banya around 02:00 AM for safe night drive (2h 15m) to Sofia."
    ]
  });

  // 4. Car Rental Voucher
  await createDoc({
    filename: "TOP_RENT_CAR_VOUCHER_722769120.pdf",
    title: "TOP RENT A CAR - RESERVATION VOUCHER",
    subtitle: "Official Car Rental Confirmation & Handover Instructions",
    warning: "PAVED ROADS ONLY. Off-road driving strictly prohibited by insurance.",
    items: [
      { label: "Booking Reference:", value: "722769120" },
      { label: "Car Model:", value: "VW T-Roc Cabriolet (or equivalent SUV Convertible)" },
      { label: "Pick-up:", value: "05 OCT 2026 ~12:30 PM (Sofia Airport Shuttle Service)" },
      { label: "Drop-off:", value: "09 OCT 2026 04:00 AM (Sofia Airport Terminal 1)" },
      { label: "Primary Driver:", value: "Avihu Sitton (Credit Card Holder)" },
      { label: "Additional Driver:", value: "Gil Sitton (Confirmed EUR 16.80 at desk)" },
      { label: "Pre-paid Base Rate:", value: "ILS 662 (Paid online via Booking.com)" },
      { label: "Security Deposit:", value: "~EUR 1,200 (Requires sufficient card limit)" },
      { label: "Emergency Hotline:", value: "+359 700 89 050 / +359 89 989 050" }
    ],
    notes: [
      "Conduct a full 360-degree video inspection before leaving the rental lot.",
      "Check convertible roof mechanism with rental agent before departure.",
      "Bulgarian Highway Vignette is already included in rental contract."
    ]
  });

  // 5. RentalCover Policy
  await createDoc({
    filename: "RENTALCOVER_POLICY_SEHP-P4E8-INS.pdf",
    title: "RENTALCOVER - ZERO EXCESS DAMAGE PROTECTION",
    subtitle: "Full Protection Policy Confirmation & Claims Certificate",
    items: [
      { label: "Policy Number:", value: "SEHP-P4E8-INS" },
      { label: "Policyholder:", value: "Avihu Sitton" },
      { label: "Coverage Period:", value: "05 OCT 2026 - 09 OCT 2026" },
      { label: "Destination:", value: "Bulgaria" },
      { label: "Coverage Scope:", value: "100% Refund on damage, theft, glass, tires & underbody" },
      { label: "Amount Paid:", value: "ILS 271 (Paid in advance)" },
      { label: "Claims Portal:", value: "https://www.rentalcover.com/en/claim" }
    ],
    notes: [
      "In case of any damage, pay Top Rent the deducted deposit and file immediate refund with RentalCover.",
      "Required documents for claim: Police report (if collision), Rental agreement, and repair invoice."
    ]
  });

  // 6. Villa Confirmation
  await createDoc({
    filename: "THREE_PEAKS_VILLA_BOOKING_5158618016.pdf",
    title: "THREE PEAKS THERMAL VILLAS - BOOKING CONFIRMATION",
    subtitle: "Private Thermal Pool & Mountain Villa | Banya, Bulgaria",
    items: [
      { label: "Booking Reference:", value: "5158618016 (Booking.com)" },
      { label: "Property:", value: "Three Peaks Thermal Villas" },
      { label: "Location:", value: "Banya Village, 2778, Razlog / Bansko Region" },
      { label: "GPS Coordinates:", value: "41.87588, 23.5273" },
      { label: "Check-in:", value: "05 OCT 2026 (from 15:00)" },
      { label: "Base Rate Paid:", value: "EUR 474.48 (ALREADY FULLY PAID ONLINE)" },
      { label: "Late Stay Fee:", value: "EUR 130 (Agreed directly with host - cash on arrival)" },
      { label: "Thermal Pool Temp:", value: "37 - 38 Degrees Celsius (Mineral Water)" }
    ],
    notes: [
      "DO NOT pay the base accommodation fee EUR 474.48 again!",
      "Full kitchen available with stovetop and oven (no dishwasher).",
      "Private thermal mineral pool is filled with natural spring water 24/7."
    ]
  });

  // 7. General Travel Insurance
  await createDoc({
    filename: "TRAVEL_INSURANCE_POLICY.pdf",
    title: "TRAVEL & MEDICAL INSURANCE SUMMARY",
    subtitle: "Comprehensive Medical Abroad & Mountain Search/Rescue",
    items: [
      { label: "Insured Persons:", value: "Avihu Sitton & Gil Sitton" },
      { label: "Destination:", value: "Bulgaria (Pirin Mountain Range)" },
      { label: "Dates of Coverage:", value: "05 OCT 2026 - 09 OCT 2026" },
      { label: "Coverage Scope:", value: "Emergency Medical, Hospitalization, Baggage, Search & Rescue" },
      { label: "Crucial Extension:", value: "High-Altitude Trekking & Mountain Biking (e-MTB)" },
      { label: "24/7 Medical Hotline:", value: "+972 9 892 0930 (*9912 / PassportCard)" },
      { label: "Local Mountain Rescue:", value: "+359 887 100 241 (PSS Bansko) / 112" }
    ],
    notes: [
      "Keep digital copy saved in offline phone storage.",
      "If injured on mountain trail, contact PSS Bansko rescue team and activate insurance card immediately."
    ]
  });

  // 8. Moriah Travel Insurance Confirmed Policy
  await createDoc({
    filename: "MORIAH_TRAVEL_INSURANCE_POLICY.pdf",
    title: "TRAVEL INSURANCE POLICY - MORIAH SITTON",
    subtitle: "Active Medical Abroad & Extreme Alpine Sports Coverage",
    items: [
      { label: "Insured Person:", value: "Moriah Sitton" },
      { label: "Age Category:", value: "Under 24 Years Old (Tailored Young Traveler)" },
      { label: "Policy Status:", value: "CONFIRMED & ACTIVE (Fully Arranged)" },
      { label: "Coverage Scope:", value: "Emergency Medical, Hospitalization, Baggage" },
      { label: "Crucial Extension:", value: "High-Altitude Trekking (Seven Rila Lakes & Pirin) + Search & Rescue" },
      { label: "Dates of Coverage:", value: "05 OCT 2026 - 09 OCT 2026" },
      { label: "24/7 Medical Hotline:", value: "+972 9 892 0930 (*9912 / PassportCard)" }
    ],
    notes: [
      "Policy fully arranged and verified.",
      "Extreme alpine sports and search/rescue extensions are active.",
      "Digital copy stored offline for direct presentation if needed."
    ]
  });

  // Backward compatibility copy
  await createDoc({
    filename: "MORIAH_TRAVEL_INSURANCE_PENDING.pdf",
    title: "TRAVEL INSURANCE POLICY - MORIAH SITTON",
    subtitle: "Active Medical Abroad & Extreme Alpine Sports Coverage",
    items: [
      { label: "Insured Person:", value: "Moriah Sitton" },
      { label: "Age Category:", value: "Under 24 Years Old (Tailored Young Traveler)" },
      { label: "Policy Status:", value: "CONFIRMED & ACTIVE (Fully Arranged)" },
      { label: "Coverage Scope:", value: "Emergency Medical, Hospitalization, Baggage" },
      { label: "Crucial Extension:", value: "High-Altitude Trekking (Seven Rila Lakes & Pirin) + Search & Rescue" },
      { label: "Dates of Coverage:", value: "05 OCT 2026 - 09 OCT 2026" },
      { label: "24/7 Medical Hotline:", value: "+972 9 892 0930 (*9912 / PassportCard)" }
    ],
    notes: [
      "Policy fully arranged and verified.",
      "Extreme alpine sports and search/rescue extensions are active.",
      "Digital copy stored offline for direct presentation if needed."
    ]
  });

  console.log("All companion PDF documents created successfully!");
}

run().catch(console.error);

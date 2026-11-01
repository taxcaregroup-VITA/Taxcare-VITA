// Site-wide settings.

// Calendly link for the 30-minute virtual appointment (Zoom or Google Meet), for example
// "https://calendly.com/taxcaregroup/appointment". While it's empty, the "Book" buttons are hidden and the
// confirmation says a volunteer will contact the taxpayer to schedule.
// On the Calendly event, make the FIRST custom question "TaxCare reference number": the site fills it in
// automatically (Calendly's a1 field). Only the reference number goes in the link; no name or contact details.
export const BOOKING_URL = "https://calendly.com/taxcaregroup-info/30min";

// The Calendly link with the reference number pre-filled ("" when no link is set).
export function bookingUrl(reference) {
  if (!BOOKING_URL) return "";
  const u = new URL(BOOKING_URL);
  if (reference) u.searchParams.set("a1", reference);
  return u.toString();
}

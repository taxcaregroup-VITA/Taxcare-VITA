// Site-wide switches.

// "Quick ID appointment, then online" option (TaxSlayer Customer Portal, 100% virtual process).
// The IRS SPEC territory manager must approve the site's virtual process (Forms 15272 and 13715).
// If it is not approved, set this to false: the choice disappears and every intake is treated as
// an appointment request. Nothing else needs to change.
export const PORTAL_OPTION = true;

// Calendly booking links (paste each event's link, e.g. "https://calendly.com/taxcaregroup/full-appointment").
// While a link is empty, its "Book" button is hidden and the confirmation says a volunteer will contact the taxpayer.
// On each Calendly event, make the FIRST custom question "TaxCare reference number": the site fills it in
// automatically (Calendly's a1 field). Only the reference number is passed; no name or contact details go in the link.
export const CALENDLY = {
  full: "", // Full appointment with a volunteer
  quickId: "", // Quick ID appointment (short Zoom or Google Meet call)
};

// Build a Calendly link with the reference number pre-filled.
export function bookingUrl(kind, reference) {
  const base = CALENDLY[kind];
  if (!base) return "";
  const u = new URL(base);
  if (reference) u.searchParams.set("a1", reference);
  return u.toString();
}

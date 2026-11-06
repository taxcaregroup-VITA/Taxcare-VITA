// Facts used on several pages. Update here once a year.

// IRS guidance on who VITA sites generally serve (irs.gov "Free tax return preparation for
// qualifying taxpayers", reviewed 19-Oct-2026). The IRS sets no hard limit; sites may set their own.
export const INCOME_GUIDELINE = "$70,244";

export const SITE_LOCATOR = "https://freetaxassistance.for.irs.gov/s/sitelocator";
export const VOLTAX_EMAIL = "ts.voltax@irs.gov"; // as printed on Form 13614-C (Rev. 10-2026)
export const CIVIL_RIGHTS = {
  office: "Internal Revenue Service, Civil Rights Unit",
  email: "edi.civil.rights.division@irs.gov",
  address: "Room 2413, 1111 Constitution Ave., NW, Washington, DC 20224",
};

// Site details printed on Form 14446 (Virtual VITA/TCE Taxpayer Consent), page 1.
// Fill in the blanks once they're final; anything left "" stays blank on the form.
export const SITE_14446 = {
  name: "The TaxCare Group",
  address: "100% virtual site (no public location)\nUnion City, GA 30291", // street, city, state, ZIP
  sidn: "S15010003", // Site Identification Number from the SPEC territory office
  coordinator: "Djoko Ebama",
  contactName: "Djoko Ebama",
  contactPhone: "",
};

// Fills Form 14446 (Virtual VITA/TCE Taxpayer Consent) for the taxpayer: site details, the site's
// virtual process (Part II), and the taxpayer's printed name, date of birth, phone and email.
// The consent choices (Yes/No), dates and signatures are left blank for the taxpayer.
import { PDFDocument, StandardFonts } from "pdf-lib";
import { SITE_14446 } from "../data/site";

export const FORM_14446_URL = "/pdfs/Form-14446-fillable.pdf";
const P1 = "form1[0].page1[0].";
const P2 = "form1[0].page2[0].";
const P3 = "form1[0].page3[0].";

// Part II: how this site runs its 100% virtual process. Keep in step with the SOP and Form 15272.
export const PROCESS = {
  schedulingTheAppointment:
    "The taxpayer completes the online intake (Form 13614-C) at taxcaregroup.org and receives a reference number, then books a 30-minute video appointment (Zoom or Google Meet) through our online scheduler. If the taxpayer can't book online, a volunteer contacts them by phone or email to schedule.",
  securingTaxpayerConsent:
    "The taxpayer can download this form, pre-filled, when the intake is submitted. A volunteer explains it at the video appointment. After the appointment, the taxpayer is invited to our TaxSlayer Pro Online customer portal and signs Form 14446 electronically there before uploading documents. The signed form is stored in TaxSlayer.",
  performaingIntakeProcess:
    "Intake answers are sent from our website over an encrypted connection to private, access-restricted storage. After the appointment, the taxpayer uploads photos or scans of their documents in the TaxSlayer customer portal. We do not accept documents by email or text.",
  validatingTaxpayersAuthentication:
    "During the live video appointment, the volunteer views the photo ID and Social Security cards or ITIN letters of the taxpayer (and spouse, if filing jointly; both must attend) on camera and confirms they match the intake. Video calls are not recorded.",
  performingTheInterview:
    "By live video (Zoom or Google Meet) at the 30-minute appointment, where the volunteer reviews every Form 13614-C answer with the taxpayer. Follow-up questions are handled by phone, video call, or portal message.",
  prearingTaxReturn:
    "A certified volunteer prepares the return in TaxSlayer Pro Online, viewing the documents the taxpayer uploaded to the customer portal. Documents are accessed only through TaxSlayer.",
  siteWillCommunicate:
    "Phone, email (no personal or tax information in emails), video call, and secure messages in the TaxSlayer customer portal.",
  performingQualityReview:
    "A second certified volunteer performs the quality review in TaxSlayer Pro Online using the uploaded documents and Form 13614-C, and contacts the taxpayer by phone or video call to confirm items as needed.",
  sharingCompletedReturn:
    "The completed return is shared with the taxpayer in the TaxSlayer customer portal. A volunteer goes over it by phone or video call before the taxpayer signs.",
  signingTheReturn:
    "Electronically. The taxpayer (and spouse, if filing jointly) signs Form 8879 in the TaxSlayer customer portal.",
  efilingTaxReturn:
    "Promptly after the quality review is complete and the signed Form 8879 is received.",
};

function usDate(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return d ? `${m}/${d}/${y}` : iso;
}

export async function fill14446(formData, { templateBytes } = {}) {
  const bytes =
    templateBytes ||
    (await fetch(FORM_14446_URL).then((r) => {
      if (!r.ok) throw new Error("Could not load Form 14446");
      return r.arrayBuffer();
    }));
  const pdf = await PDFDocument.load(bytes);
  const form = pdf.getForm();
  form.deleteXFA();
  form.getFields().forEach((f) => form.markFieldAsClean(f.ref));
  const helv = await pdf.embedFont(StandardFonts.Helvetica);

  const text = (name, value, { size, multiline } = {}) => {
    if (!value) return;
    try {
      const f = form.getTextField(name);
      if (multiline) f.enableMultiline();
      if (size) f.setFontSize(size);
      f.setText(String(value));
      f.updateAppearances(helv);
      form.markFieldAsClean(f.ref);
    } catch (e) {
      console.warn("14446 text field not filled:", name, e.message);
    }
  };

  // Page 1: site information, and E. 100% Virtual VITA/TCE Process.
  const s = SITE_14446;
  text(P1 + "siteName[0]", s.name);
  text(P1 + "siteAddress[0]", s.address, { multiline: true });
  text(P1 + "sidn[0]", s.sidn);
  text(P1 + "siteCoordinator[0]", s.coordinator);
  text(P1 + "siteContactName[0]", s.contactName);
  text(P1 + "siteContactTelephone[0]", s.contactPhone);
  try {
    const box = form.getCheckBox(P1 + "virtualProcess[0]");
    box.check();
    form.markFieldAsClean(box.ref);
  } catch (e) {
    console.warn("14446 checkbox not filled:", e.message);
  }

  // Page 2: the site's process.
  for (const [field, value] of Object.entries(PROCESS)) text(P2 + field + "[0]", value, { size: 8, multiline: true });

  // Page 3: taxpayer (and spouse, if married) identity lines. Consents, dates and signatures stay blank.
  const p = formData.personal || {};
  const fullName = (first, mi, last) => [first, mi, last].filter(Boolean).join(" ");
  const you = P3 + "signature1[0].";
  text(you + "printedName[0]", fullName(p.firstName, p.middleInitial, p.lastName));
  text(you + "dateOfBirth[0]", usDate(p.dob));
  text(you + "telephoneNumber[0]", p.phone);
  text(you + "emailAddress[0]", p.email);
  if (p.maritalStatus === "married" && p.spouseFirstName) {
    const sp = P3 + "signature2[0].";
    text(sp + "printedName[0]", fullName(p.spouseFirstName, p.spouseMiddleInitial, p.spouseLastName));
    text(sp + "dateOfBirth[0]", usDate(p.spouseDob));
    text(sp + "telephoneNumber[0]", p.spousePhone || p.phone);
  }

  return pdf.save({ updateFieldAppearances: false });
}

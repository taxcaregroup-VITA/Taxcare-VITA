import { PDFDocument } from "pdf-lib";

export async function generate14446(formData) {
  const existingPdfBytes = await fetch(
    "/pdfs/Form-14446-fillable.pdf"
  ).then(res => res.arrayBuffer());

  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const form = pdfDoc.getForm();

  if (formData.consent14446.virtualConsent === "yes") {
    form.getCheckBox("VirtualConsent_Yes").check();
  }

  if (formData.consent14446.eSignature === "yes") {
    form.getCheckBox("ESignature_Yes").check();
  }

  const pdfBytes = await pdfDoc.save();
  return new Blob([pdfBytes], { type: "application/pdf" });
}

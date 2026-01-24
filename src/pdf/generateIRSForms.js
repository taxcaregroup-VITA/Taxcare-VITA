import { PDFDocument } from "pdf-lib";

async function fetchPDF(path) {
  const res = await fetch(path);
  return await res.arrayBuffer();
}

export async function generateIRSForms(formData) {
  /* ------------------ 13614-C ------------------ */
  const pdf13614Bytes = await fetchPDF("/pdfs/IRS-13614-C.pdf");
  const pdf13614 = await PDFDocument.load(pdf13614Bytes);
  const form13614 = pdf13614.getForm();

  // Example mappings (real field names below)
  form13614.getTextField("FirstName").setText(formData.personal.firstName);
  form13614.getTextField("LastName").setText(formData.personal.lastName);
  form13614.getTextField("Phone").setText(formData.personal.phone);

  if (formData.personal.crypto === "yes") {
    form13614.getCheckBox("DigitalAssetsYes").check();
  }

  const filled13614 = await pdf13614.save();

  /* ------------------ 14446 ------------------ */
  const pdf14446Bytes = await fetchPDF("/pdfs/IRS-14446.pdf");
  const pdf14446 = await PDFDocument.load(pdf14446Bytes);
  const form14446 = pdf14446.getForm();

  if (formData.consent14446.virtualConsent === "yes") {
    form14446.getCheckBox("ConsentVirtual").check();
  }

  const filled14446 = await pdf14446.save();

  return {
    pdf13614: new Blob([filled13614], { type: "application/pdf" }),
    pdf14446: new Blob([filled14446], { type: "application/pdf" }),
  };
}

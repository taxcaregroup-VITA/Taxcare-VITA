import { PDFDocument } from "pdf-lib";

export async function generate13614C(formData) {
  // 1. Load the PDF
  const existingPdfBytes = await fetch(
    "/pdfs/Form-13614-C-fillable.pdf"
  ).then(res => res.arrayBuffer());

  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const form = pdfDoc.getForm();

  // 2. Map YOUR data → IRS FIELD NAMES
  // (field names must match the actual PDF field names)
  form.getTextField("Taxpayer_FirstName").setText(
    formData.personal.firstName || ""
  );

  form.getTextField("Taxpayer_LastName").setText(
    formData.personal.lastName || ""
  );

  form.getTextField("Taxpayer_Address").setText(
    formData.personal.address || ""
  );

  form.getTextField("Taxpayer_City").setText(
    formData.personal.city || ""
  );

  form.getTextField("Taxpayer_State").setText(
    formData.personal.state || ""
  );

  form.getTextField("Taxpayer_Zip").setText(
    formData.personal.zip || ""
  );

  form.getTextField("Taxpayer_Phone").setText(
    formData.personal.phone || ""
  );

  form.getTextField("Taxpayer_Email").setText(
    formData.personal.email || ""
  );

  // Example checkbox
  if (formData.personal.crypto === "yes") {
    form.getCheckBox("DigitalAssets_Yes").check();
  } else {
    form.getCheckBox("DigitalAssets_No").check();
  }

  // 3. Save PDF
  const pdfBytes = await pdfDoc.save();
  return new Blob([pdfBytes], { type: "application/pdf" });
}

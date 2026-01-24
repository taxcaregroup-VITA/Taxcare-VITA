import { PDFDocument } from "pdf-lib";

export async function listPdfFields(pdfPath) {
  const bytes = await fetch(pdfPath).then(res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(bytes);
  const form = pdfDoc.getForm();

  const fields = form.getFields();

  console.log("FIELDS IN PDF:");
  fields.forEach(field => {
    console.log(field.getName(), "-", field.constructor.name);
  });
}

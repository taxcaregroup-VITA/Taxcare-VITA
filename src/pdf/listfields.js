import { PDFDocument } from "pdf-lib";

export async function listPdfFields(pdfPath) {
  const res = await fetch(pdfPath);
  const bytes = await res.arrayBuffer();

  const pdfDoc = await PDFDocument.load(bytes);
  const form = pdfDoc.getForm();
  const fields = form.getFields();

  console.group(`📄 Fields in ${pdfPath}`);
  fields.forEach((field) => {
    console.log(field.getName(), "-", field.constructor.name);
  });
  console.groupEnd();
}

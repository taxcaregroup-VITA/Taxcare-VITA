import { pdf } from "@react-pdf/renderer";
import Form13614C from "./forms/Form13614C";
import Form14446 from "./forms/Form14446";

export async function generatePDFs(formData) {
  const pdf13614Blob = await pdf(
    <Form13614C data={formData} />
  ).toBlob();

  const pdf14446Blob = await pdf(
    <Form14446 data={formData} />
  ).toBlob();

  return {
    pdf13614Blob,
    pdf14446Blob,
  };
}

import { pdf } from "@react-pdf/renderer";
import Form13614C from "./Form13614C";
import Form14446 from "./Form14446";

const downloadBlob = (blob, filename) => {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
};

export const generatePDFs = async (formData) => {
  const pdf13614 = await pdf(<Form13614C data={formData} />).toBlob();
  const pdf14446 = await pdf(<Form14446 data={formData} />).toBlob();

  downloadBlob(pdf13614, "Form-13614-C.pdf");
  downloadBlob(pdf14446, "Form-14446.pdf");
};

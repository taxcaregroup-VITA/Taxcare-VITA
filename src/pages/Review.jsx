import { generateIRSForms } from "../pdf/generateIRSForms";
import { listPdfFields } from "../pdf/listFields";

useEffect(() => {
  listPdfFields("/pdfs/Form-13614-C-fillable.pdf");
}, []);

const downloadPDFs = async () => {
  const { pdf13614, pdf14446 } = await generateIRSForms(formData);

  const download = (blob, name) => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = name;
    a.click();
  };

  download(pdf13614, "Form-13614-C.pdf");
  download(pdf14446, "Form-14446.pdf");
};

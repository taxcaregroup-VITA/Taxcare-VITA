import { useLocation, useNavigate } from "react-router-dom";
import { generatePDFs } from "../pdf/generatePDFs";

export default function Review() {
  const { state: formData } = useLocation();
  const navigate = useNavigate();
  const downloadPDFs = async () => {
  const { pdf13614Blob, pdf14446Blob } = await generatePDFs(formData);

  const download = (blob, name) => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = name;
    link.click();
  };

  download(pdf13614Blob, "Form-13614-C.pdf");
  download(pdf14446Blob, "Form-14446.pdf");
};


  if (!formData) {
    return (
      <div className="max-w-3xl mx-auto py-20 text-center">
        <p>No intake data found.</p>
        <button
          onClick={() => navigate("/intake")}
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded"
        >
          Go to Intake
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-8">
      <h1 className="text-3xl font-bold">Review Your Information</h1>

      <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
        {JSON.stringify(formData, null, 2)}
      </pre>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/intake")}
          className="px-6 py-3 border rounded"
        >
          Edit Intake
        </button>

        <button
  onClick={downloadPDFs}
  className="px-6 py-3 bg-green-600 text-white rounded"
>
  Download IRS Forms
</button>

      </div>
    </div>
  );
}

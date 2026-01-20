import { useLocation } from "react-router-dom";
import { generatePDF } from "../pdf/generatePDF";

export default function Review() {
  const { state: formData } = useLocation();

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-6">
      <h1 className="text-2xl font-bold">Review Your Intake</h1>

      <pre className="bg-gray-100 p-4 rounded text-xs overflow-auto">
        {JSON.stringify(formData, null, 2)}
      </pre>

      <button
        onClick={() => generatePDFs(formData)}
        className="bg-green-600 text-white px-6 py-3 rounded"
      >
        Generate IRS Forms (PDF)
      </button>
    </div>
  );
}

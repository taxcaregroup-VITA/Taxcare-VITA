import React from "react";

export default function NotesStep({ formData, setFormData }) {
  const notes = formData.notes || "";

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Additional Notes</h2>
      <textarea
        value={notes}
        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        rows={6}
        placeholder="Enter any additional information here..."
        className="w-full border p-2 rounded"
      />
    </div>
  );
}

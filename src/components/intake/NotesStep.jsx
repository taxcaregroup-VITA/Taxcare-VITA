import React from "react";

export default function NotesStep({ formData, setFormData }) {
  const notes = formData.notes || "";

  const updateNotes = (value) => {
    setFormData({
      ...formData,
      notes: value,
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Additional Notes</h2>

      <div className="bg-gray-50 p-4 rounded-lg border">
        <label htmlFor="additionalNotes" className="block mb-2 font-semibold">
          Any additional notes, concerns, or information you'd like us to know
        </label>
        <textarea
          id="additionalNotes"
          value={notes}
          onChange={(e) => updateNotes(e.target.value)}
          rows={6}
          className="w-full border rounded p-3"
          placeholder="Enter any additional notes about your tax situation..."
        />
      </div>
    </div>
  );
}

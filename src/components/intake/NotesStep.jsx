export default function NotesStep({ formData, setFormData }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Anything else?</h2>
      <p className="text-gray-600">Add anything you'd like our volunteers to know before your appointment. This is optional.</p>
      <label className="block">
        <span className="sr-only">Additional notes</span>
        <textarea
          value={formData.notes || ""}
          onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
          rows={6}
          maxLength={2000}
          placeholder="For example: best times to reach you, questions about documents to bring…"
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </label>
    </div>
  );
}

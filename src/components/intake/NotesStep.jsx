export default function NotesStep({ formData, setFormData }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Additional Notes</h2>

      <p className="text-gray-600 max-w-2xl">
        Use this section to tell the tax preparer anything important about your
        tax situation that wasn’t covered elsewhere.
      </p>

      <textarea
        rows={6}
        className="w-full border rounded-lg px-4 py-3"
        placeholder="Example: recent move, name change, disaster loss, IRS letters received, etc."
        value={formData.notes || ""}
        onChange={(e) =>
          setFormData({ ...formData, notes: e.target.value })
        }
      />
    </div>
  );
}

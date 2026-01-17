export default function DependentsStep({ formData, setFormData }) {
  const dependents = formData.dependents || [];

  const updateDependent = (index, field, value) => {
    const updated = [...dependents];
    updated[index][field] = value;
    setFormData({ ...formData, dependents: updated });
  };

  const addDependent = () => {
    setFormData({
      ...formData,
      dependents: [...dependents, { name: "", dob: "", relationship: "" }],
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dependents</h2>

      {dependents.map((dep, index) => (
        <div
          key={index}
          className="grid md:grid-cols-3 gap-4 border p-4 rounded-lg"
        >
          <input
            type="text"
            placeholder="Dependent Name"
            className="border rounded-lg px-4 py-3"
            value={dep.name}
            onChange={(e) =>
              updateDependent(index, "name", e.target.value)
            }
          />

          <input
            type="date"
            className="border rounded-lg px-4 py-3"
            value={dep.dob}
            onChange={(e) =>
              updateDependent(index, "dob", e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Relationship"
            className="border rounded-lg px-4 py-3"
            value={dep.relationship}
            onChange={(e) =>
              updateDependent(index, "relationship", e.target.value)
            }
          />
        </div>
      ))}

      <button
        type="button"
        onClick={addDependent}
        className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700"
      >
        + Add Dependent
      </button>
    </div>
  );
}

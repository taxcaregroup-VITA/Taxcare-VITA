import React from "react";

export default function DependentsStep({ formData, setFormData }) {
  const dependents = formData.dependents || [];

  const updateDependent = (index, field, value) => {
    const newDeps = [...dependents];
    newDeps[index] = { ...newDeps[index], [field]: value };
    setFormData({ ...formData, dependents: newDeps });
  };

  const addDependent = () => {
    setFormData({
      ...formData,
      dependents: [...dependents, { name: "", dob: "", ssn: "" }],
    });
  };

  const removeDependent = (index) => {
    const newDeps = dependents.filter((_, i) => i !== index);
    setFormData({ ...formData, dependents: newDeps });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Dependents</h2>

      {dependents.map((dep, index) => (
        <div key={index} className="border p-4 rounded space-y-2">
          <div>
            <label>Name</label>
            <input
              type="text"
              value={dep.name}
              onChange={(e) => updateDependent(index, "name", e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label>Date of Birth</label>
            <input
              type="date"
              value={dep.dob}
              onChange={(e) => updateDependent(index, "dob", e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label>SSN</label>
            <input
              type="text"
              value={dep.ssn}
              onChange={(e) => updateDependent(index, "ssn", e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>

          <button
            type="button"
            onClick={() => removeDependent(index)}
            className="bg-red-500 text-white px-4 py-2 rounded mt-2 hover:bg-red-600"
          >
            Remove Dependent
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addDependent}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Dependent
      </button>
    </div>
  );
}

import React from "react";

export default function DependentsStep({ formData, setFormData }) {
  const dependents = formData.dependents || [];

  const updateDependent = (index, field, value) => {
    const newDependents = [...dependents];
    newDependents[index] = { ...newDependents[index], [field]: value };
    setFormData({ ...formData, dependents: newDependents });
  };

  const addDependent = () => {
    setFormData({
      ...formData,
      dependents: [...dependents, { firstName: "", lastName: "", dob: "", ssn: "", relationship: "" }],
    });
  };

  const removeDependent = (index) => {
    const newDependents = dependents.filter((_, i) => i !== index);
    setFormData({ ...formData, dependents: newDependents });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Dependents</h2>

      {dependents.map((dep, index) => (
        <div key={index} className="border rounded p-4 space-y-3 bg-gray-50 relative">
          <button
            type="button"
            onClick={() => removeDependent(index)}
            className="absolute top-2 right-2 text-red-600 font-bold"
          >
            ×
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">First Name</label>
              <input
                type="text"
                value={dep.firstName || ""}
                onChange={(e) => updateDependent(index, "firstName", e.target.value)}
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Last Name</label>
              <input
                type="text"
                value={dep.lastName || ""}
                onChange={(e) => updateDependent(index, "lastName", e.target.value)}
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Date of Birth</label>
              <input
                type="date"
                value={dep.dob || ""}
                onChange={(e) => updateDependent(index, "dob", e.target.value)}
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">SSN or ITIN</label>
              <input
                type="text"
                value={dep.ssn || ""}
                onChange={(e) => updateDependent(index, "ssn", e.target.value)}
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Relationship</label>
              <input
                type="text"
                value={dep.relationship || ""}
                onChange={(e) => updateDependent(index, "relationship", e.target.value)}
                className="w-full border rounded p-2"
              />
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addDependent}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Add Dependent
      </button>
    </div>
  );
}

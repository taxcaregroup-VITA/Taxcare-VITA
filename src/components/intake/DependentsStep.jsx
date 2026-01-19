export default function DependentsStep({ formData, setFormData }) {
  const dependents = formData.dependents || [];

  const updateDependent = (index, field, value) => {
    const updated = [...dependents];
    updated[index] = { ...updated[index], [field]: value };
    setFormData({ ...formData, dependents: updated });
  };

  const addDependent = () => {
    setFormData({
      ...formData,
      dependents: [
        ...dependents,
        {
          name: "",
          dob: "",
          relationship: "",
          monthsLivedWithYou: "",
          maritalStatus: "",
          citizenResident: "",
          student: "no",
          disabled: "no",
          providedSupport: "",
          
        },
      ],
    });
  };

  const removeDependent = (index) => {
    setFormData({
      ...formData,
      dependents: dependents.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Dependents</h2>

      {dependents.map((dep, index) => (
        <div key={index} className="border rounded-lg p-4 space-y-3">
          <h3 className="font-semibold">Dependent #{index + 1}</h3>

          <input
            placeholder="Full Name"
            className="border p-2 rounded w-full"
            value={dep.name}
            onChange={(e) => updateDependent(index, "name", e.target.value)}
          />

          <input
            type="date"
            className="border p-2 rounded w-full"
            value={dep.dob}
            onChange={(e) => updateDependent(index, "dob", e.target.value)}
          />

          <input
            placeholder="Relationship to you (child, parent, none, etc.)"
            className="border p-2 rounded w-full"
            value={dep.relationship}
            onChange={(e) =>
              updateDependent(index, "relationship", e.target.value)
            }
          />

          <input
            type="number"
            placeholder="Months lived with you (0–12)"
            className="border p-2 rounded w-full"
            value={dep.monthsLivedWithYou}
            onChange={(e) =>
              updateDependent(index, "monthsLivedWithYou", e.target.value)
            }
          />

           <input
            type="number"
            placeholder="Single or Married as of 12/31/2025"
            className="border p-2 rounded w-full"
            value={dep.maritalStatus}
            onChange={(e) =>
              updateDependent(index, "maritalStatus", e.target.value)
            }
          />

          {[
            ["student", "Full-time student?"],
            ["disabled", "Permanently disabled?"],
            ["providedSupport", "Did you provide over 50% support?"],
            ["citizenStatus", "U.S. citizen?"],
            ["citizenResidence", "Resident of U.S., Mexico, or Canada?"],
            ["ipPIN", "Issued IP PIN?"],
          ].map(([field, label]) => (
            <div key={field}>
              <label className="block font-medium">{label}</label>
              <select
                className="border p-2 rounded w-full"
                value={dep[field]}
                onChange={(e) =>
                  updateDependent(index, field, e.target.value)
                }
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          ))}

          <button
            type="button"
            onClick={() => removeDependent(index)}
            className="text-red-600 text-sm"
          >
            Remove dependent
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addDependent}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Dependent
      </button>
    </div>
  );
}

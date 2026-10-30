// Form 13614-C (Rev. 10-2026), page 1: everyone who lived with you, and anyone you supported.
import { TextField, Choice, YesNo } from "./fields";

const blank = {
  name: "", dob: "", relationship: "", months: "", maritalStatus: "",
  citizen: "", resident: "", student: "", disabled: "", ipPin: "",
};

export default function DependentsStep({ formData, setFormData }) {
  const people = formData.dependents || [];

  const setPeople = (fn) => setFormData((prev) => ({ ...prev, dependents: fn(prev.dependents || []) }));
  const update = (i, field, value) =>
    setPeople((list) => list.map((p, idx) => (idx === i ? { ...p, [field]: value } : p)));

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold">Household</h2>
        <p className="text-gray-600 mt-1">
          List everyone who lived with you in 2026 (except your spouse), and anyone you supported who did not live with you.
          If no one, you can skip this step.
        </p>
      </div>

      {people.map((d, i) => (
        <fieldset key={i} className="border rounded-lg p-4 space-y-4">
          <legend className="font-semibold px-1">Person {i + 1}</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField label="Name (first, last)" value={d.name} onChange={(v) => update(i, "name", v)} />
            <TextField label="Date of birth" type="date" value={d.dob} onChange={(v) => update(i, "dob", v)} />
            <TextField label="Relationship to you" placeholder="child, parent, none, etc." value={d.relationship} onChange={(v) => update(i, "relationship", v)} />
            <TextField label="Months lived in your home in 2026" type="number" value={d.months} onChange={(v) => update(i, "months", v)} hint="0 to 12" />
          </div>
          <Choice name={`ms-${i}`} label="Single or married as of 12/31/2026" value={d.maritalStatus} onChange={(v) => update(i, "maritalStatus", v)} options={[["S", "Single"], ["M", "Married"]]} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <YesNo name={`cit-${i}`} label="U.S. citizen?" value={d.citizen} onChange={(v) => update(i, "citizen", v)} />
            <YesNo name={`res-${i}`} label="Resident of the U.S., Canada or Mexico?" value={d.resident} onChange={(v) => update(i, "resident", v)} />
            <YesNo name={`stu-${i}`} label="Full-time student?" value={d.student} onChange={(v) => update(i, "student", v)} />
            <YesNo name={`dis-${i}`} label="Totally and permanently disabled?" value={d.disabled} onChange={(v) => update(i, "disabled", v)} />
            <YesNo name={`ip-${i}`} label="Issued an IP PIN?" value={d.ipPin} onChange={(v) => update(i, "ipPin", v)} />
          </div>
          <button type="button" onClick={() => setPeople((list) => list.filter((_, idx) => idx !== i))} className="text-red-700 text-sm underline">
            Remove person {i + 1}
          </button>
        </fieldset>
      ))}

      <button type="button" onClick={() => setPeople((list) => [...list, { ...blank }])} className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700">
        Add a person
      </button>
      {people.length > 4 && (
        <p className="text-sm text-gray-600">The IRS form has room for four people. The others will be listed on the notes page of your form.</p>
      )}
    </div>
  );
}

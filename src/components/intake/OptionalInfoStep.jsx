// Form 13614-C (Rev. 10-2026), page 4: optional statistical questions.
import { Choice, Section } from "./fields";
import { RACES } from "../../data/races";

const ability = [["veryWell", "Very well"], ["well", "Well"], ["notWell", "Not well"], ["notAtAll", "Not at all"], ["noAnswer", "Prefer not to answer"]];
const ynp = [["yes", "Yes"], ["no", "No"], ["noAnswer", "Prefer not to answer"]];


export default function OptionalInfoStep({ formData, setFormData }) {
  const o = formData.optional || {};
  const married = formData.personal?.maritalStatus === "married";
  const set = (field, value) =>
    setFormData((prev) => ({ ...prev, optional: { ...prev.optional, [field]: value } }));
  const toggleRace = (field, key) => {
    const list = o[field] || [];
    set(field, list.includes(key) ? list.filter((k) => k !== key) : [...list, key]);
  };

  const raceGroup = (field, label) => (
    <fieldset>
      <legend className="text-sm font-medium text-gray-800 mb-2">{label} (select all that apply)</legend>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {RACES.map(([key, l]) => (
          <label key={key} className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 accent-emerald-600" checked={(o[field] || []).includes(key)} onChange={() => toggleRace(field, key)} />
            {l}
          </label>
        ))}
      </div>
    </fieldset>
  );

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold">Optional Information</h2>
        <p className="text-gray-600 mt-1">
          These questions are for statistics only. They are not part of your tax return and are not sent to the IRS. You can skip any of them.
        </p>
      </div>
      <Section title="Language and household">
        <Choice name="conversation" label="Would you say you can carry on a conversation in English?" value={o.conversation} onChange={(v) => set("conversation", v)} options={ability} />
        <Choice name="read" label="Would you say you can read a newspaper in English?" value={o.read} onChange={(v) => set("read", v)} options={ability} />
        <Choice name="householdDisability" label="Do you or any member of your household have a disability?" value={o.householdDisability} onChange={(v) => set("householdDisability", v)} options={ynp} />
        <Choice name="veteran" label="Are you or your spouse a Veteran of the U.S. Armed Forces?" value={o.veteran} onChange={(v) => set("veteran", v)} options={ynp} />
      </Section>
      <Section title="Race and ethnicity">
        {raceGroup("race", "Your race and/or ethnicity")}
        {married && raceGroup("spouseRace", "Your spouse's race and/or ethnicity")}
      </Section>
    </div>
  );
}

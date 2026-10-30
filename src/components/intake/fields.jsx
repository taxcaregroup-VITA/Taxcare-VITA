// Small, accessible form controls shared by the intake steps.
import { warningFor } from "../../data/scope";

export function TextField({ label, value, onChange, type = "text", maxLength, placeholder, hint }) {
  return (
    <label className="block">
      <span className="block mb-1 text-sm font-medium text-gray-800">{label}</span>
      <input
        type={type}
        value={value || ""}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
      {hint && <span className="block mt-1 text-xs text-gray-500">{hint}</span>}
    </label>
  );
}

// Radio group with arbitrary options: [[value, label], ...]
export function Choice({ name, label, value, onChange, options }) {
  return (
    <fieldset className="space-y-2">
      <legend className="text-sm font-medium text-gray-800 mb-1">{label}</legend>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {options.map(([v, l]) => (
          <label key={v} className="flex items-center gap-2 min-h-[44px] sm:min-h-0">
            <input
              type="radio"
              name={name}
              checked={value === v}
              onChange={() => onChange(v)}
              className="h-4 w-4 accent-emerald-600"
            />
            {l}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function YesNo({ name, label, value, onChange, unsure }) {
  const options = [["yes", "Yes"], ["no", "No"]];
  if (unsure) options.push(["unsure", "Not sure"]);
  return <Choice name={name} label={label} value={value} onChange={onChange} options={options} />;
}

// "You / Spouse / No" checkboxes, as on page 1 of Form 13614-C.
// Value shape: { you: bool, spouse: bool, no: bool }. "No" clears You/Spouse and vice versa.
export function YouSpouse({ label, value = {}, onChange, married }) {
  const set = (k, v) => {
    if (k === "no") onChange(v ? { you: false, spouse: false, no: true } : { ...value, no: false });
    else onChange({ ...value, [k]: v, no: false });
  };
  const box = (k, text) => (
    <label className="flex items-center gap-2">
      <input type="checkbox" checked={!!value[k]} onChange={(e) => set(k, e.target.checked)} className="h-4 w-4 accent-emerald-600" />
      {text}
    </label>
  );
  return (
    <fieldset className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-2 border-b border-gray-100">
      <legend className="sr-only">{label}</legend>
      <span className="text-gray-800" aria-hidden="true">{label}</span>
      <div className="flex gap-6">
        {box("you", "You")}
        {married && box("spouse", "Spouse")}
        {box("no", "No")}
      </div>
    </fieldset>
  );
}

export function Check({ label, checked, onChange, children }) {
  return (
    <div className="py-2 border-b border-gray-100">
      <label className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={!!checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-1 h-4 w-4 accent-emerald-600 shrink-0"
        />
        <span className="text-gray-800">{label}</span>
      </label>
      {checked && children && <div className="ml-7 mt-3 space-y-3">{children}</div>}
    </div>
  );
}

// Amber note shown under a question when an answer may be outside our site's scope.
export function ScopeNote({ formData, ids }) {
  const hits = warningFor(formData, ids);
  if (!hits.length) return null;
  const out = hits.some((h) => h.level === "out");
  return (
    <p
      role="status"
      className={`mt-2 text-sm rounded px-3 py-2 ${out ? "bg-amber-50 text-amber-900 border border-amber-200" : "bg-sky-50 text-sky-900 border border-sky-200"}`}
    >
      {out
        ? "This may be outside what our volunteers are certified to prepare. You can keep going — we'll explain your options at the end."
        : "A volunteer may need to confirm this with you. Please keep going."}
    </p>
  );
}

export function Section({ title, children, description }) {
  return (
    <section className="space-y-4">
      <div>
        <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
        {description && <p className="text-sm text-gray-600">{description}</p>}
      </div>
      {children}
    </section>
  );
}

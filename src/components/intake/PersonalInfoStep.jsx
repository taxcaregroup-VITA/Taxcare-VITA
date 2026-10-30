// Form 13614-C (Rev. 10-2026), page 1: personal information.
import { TextField, Choice, YesNo, YouSpouse, Section, ScopeNote } from "./fields";

export default function PersonalInfoStep({ formData, setFormData }) {
  const p = formData.personal || {};
  const status = p.status || {};
  const married = p.maritalStatus === "married";

  const update = (field, value) =>
    setFormData((prev) => ({ ...prev, personal: { ...prev.personal, [field]: value } }));
  const updateStatus = (field, value) =>
    setFormData((prev) => ({
      ...prev,
      personal: { ...prev.personal, status: { ...(prev.personal?.status || {}), [field]: value } },
    }));

  return (
    <div className="space-y-10">
      <h2 className="text-xl font-bold">About You</h2>

      <Section title="Your information">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <TextField label="First name" value={p.firstName} onChange={(v) => update("firstName", v)} />
          <TextField label="Middle initial" value={p.middleInitial} maxLength={1} onChange={(v) => update("middleInitial", v)} />
          <TextField label="Last name" value={p.lastName} onChange={(v) => update("lastName", v)} />
          <TextField label="Date of birth" type="date" value={p.dob} onChange={(v) => update("dob", v)} />
          <TextField label="Job title" value={p.jobTitle} onChange={(v) => update("jobTitle", v)} />
        </div>
      </Section>

      <Section title="Marital status as of December 31, 2026">
        <Choice
          name="maritalStatus"
          label="Marital status"
          value={p.maritalStatus}
          onChange={(v) => update("maritalStatus", v)}
          options={[
            ["never", "Never married"],
            ["married", "Married"],
            ["divorced", "Divorced"],
            ["separated", "Legally separated (not divorced)"],
            ["widowed", "Widowed"],
          ]}
        />
        {married && (
          <div className="space-y-4">
            <YesNo name="marriedLastDay" label="Were you married on the last day of the year?" value={p.marriedLastDay} onChange={(v) => update("marriedLastDay", v)} />
            <YesNo name="livedApart" label="Did you and your spouse live apart all of the last 6 months of the year?" value={p.livedApart} onChange={(v) => update("livedApart", v)} />
          </div>
        )}
        {p.maritalStatus === "divorced" && (
          <TextField label="Date of final decree" type="date" value={p.divorceDate} onChange={(v) => update("divorceDate", v)} />
        )}
        {p.maritalStatus === "separated" && (
          <TextField label="Date of separate maintenance decree" type="date" value={p.separationDate} onChange={(v) => update("separationDate", v)} />
        )}
        {p.maritalStatus === "widowed" && (
          <TextField label="Year of spouse's death" value={p.spouseDeathYear} maxLength={4} onChange={(v) => update("spouseDeathYear", v)} />
        )}
      </Section>

      {married && (
        <Section title="Spouse's information">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <TextField label="Spouse's first name" value={p.spouseFirstName} onChange={(v) => update("spouseFirstName", v)} />
            <TextField label="Middle initial" value={p.spouseMiddleInitial} maxLength={1} onChange={(v) => update("spouseMiddleInitial", v)} />
            <TextField label="Last name" value={p.spouseLastName} onChange={(v) => update("spouseLastName", v)} />
            <TextField label="Spouse's date of birth" type="date" value={p.spouseDob} onChange={(v) => update("spouseDob", v)} />
            <TextField label="Spouse's job title" value={p.spouseJobTitle} onChange={(v) => update("spouseJobTitle", v)} />
          </div>
        </Section>
      )}

      <Section title="Contact information">
        <TextField label="Mailing address" value={p.address} onChange={(v) => update("address", v)} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <TextField label="Apt #" value={p.apt} onChange={(v) => update("apt", v)} />
          <TextField label="City" value={p.city} onChange={(v) => update("city", v)} />
          <TextField label="State" value={p.state} maxLength={2} onChange={(v) => update("state", v.toUpperCase())} />
          <TextField label="ZIP code" value={p.zip} maxLength={10} onChange={(v) => update("zip", v)} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <TextField label="Best contact number" type="tel" value={p.phone} onChange={(v) => update("phone", v)} />
          {married && <TextField label="Spouse's best contact number" type="tel" value={p.spousePhone} onChange={(v) => update("spousePhone", v)} />}
          <TextField label="Email address (optional)" type="email" value={p.email} onChange={(v) => update("email", v)} />
        </div>
      </Section>

      <Section title="About your situation in 2026">
        <YesNo name="claimedByOther" label="Can anyone else claim you or your spouse on their tax return?" value={p.claimedByOther} onChange={(v) => update("claimedByOther", v)} />
        <div>
          <YesNo name="twoStates" label="Did you live in two or more states in 2026?" value={p.twoStates} onChange={(v) => update("twoStates", v)} />
          <ScopeNote formData={formData} ids={["twoStates"]} />
        </div>

        <div>
          <p className="text-sm font-medium text-gray-800 mb-1">
            Were you{married ? " or your spouse" : ""} any of the following in 2026? For each line, check {married ? "You, Spouse, or No" : "You or No"}.
          </p>
          <YouSpouse married={married} label="A U.S. citizen" value={status.citizen} onChange={(v) => updateStatus("citizen", v)} />
          <YouSpouse married={married} label="In the U.S. on a visa" value={status.visa} onChange={(v) => updateStatus("visa", v)} />
          <ScopeNote formData={formData} ids={["visa"]} />
          <YouSpouse married={married} label="A full-time student" value={status.student} onChange={(v) => updateStatus("student", v)} />
          <YouSpouse married={married} label="Legally blind" value={status.blind} onChange={(v) => updateStatus("blind", v)} />
          <YouSpouse married={married} label="Totally and permanently disabled" value={status.disabled} onChange={(v) => updateStatus("disabled", v)} />
          <YouSpouse married={married} label="Issued an Identity Protection PIN (IP PIN)" value={status.ipPin} onChange={(v) => updateStatus("ipPin", v)} />
          <YouSpouse married={married} label="An owner or holder of any digital assets (crypto)" value={status.digitalAssets} onChange={(v) => updateStatus("digitalAssets", v)} />
          {(status.digitalAssets?.you || status.digitalAssets?.spouse) && (
            <div className="mt-3 ml-1">
              <Choice
                name="digitalAssetsActivity"
                label="What did you do with digital assets in 2026?"
                value={p.digitalAssetsActivity}
                onChange={(v) => update("digitalAssetsActivity", v)}
                options={[
                  ["holdOnly", "Only bought with cash, held, moved between my own wallets, or received as a gift or inheritance"],
                  ["other", "Sold, exchanged, spent, or received them as payment"],
                ]}
              />
              <ScopeNote formData={formData} ids={["digitalAssets", "digitalAssetsUnsure"]} />
            </div>
          )}
        </div>
      </Section>

      <Section title="Refund and payment">
        <Choice
          name="refund"
          label="If you are due a refund, how would you like to receive it?"
          value={p.refund}
          onChange={(v) => update("refund", v)}
          options={[["directDeposit", "Direct deposit"], ["split", "Split between accounts"], ["other", "Other"]]}
        />
        {p.refund === "other" && <TextField label="Please explain" value={p.refundOther} onChange={(v) => update("refundOther", v)} />}
        <Choice
          name="balanceDue"
          label="If you have a balance due, how would you like to pay?"
          value={p.balanceDue}
          onChange={(v) => update("balanceDue", v)}
          options={[["bankAccount", "From my bank account"], ["other", "Other"]]}
        />
        {p.balanceDue === "other" && <TextField label="Please explain" value={p.balanceDueOther} onChange={(v) => update("balanceDueOther", v)} />}
      </Section>

      <Section title="Other preferences">
        <div>
          <p className="text-sm font-medium text-gray-800 mb-1">Would you like written communication from the IRS in a language other than English?</p>
          <YouSpouse married={married} label="Other language" value={p.otherLanguage} onChange={(v) => update("otherLanguage", v)} />
          {(p.otherLanguage?.you || p.otherLanguage?.spouse) && (
            <div className="mt-3"><TextField label="What language?" value={p.languageName} onChange={(v) => update("languageName", v)} /></div>
          )}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-800 mb-1">
            Would you{married ? ", or your spouse if filing jointly," : ""} like $3 to go to the Presidential Election Campaign Fund? (This does not change your tax or refund.)
          </p>
          <YouSpouse married={married} label="$3 to the fund" value={p.presidentialFund} onChange={(v) => update("presidentialFund", v)} />
        </div>
      </Section>
    </div>
  );
}

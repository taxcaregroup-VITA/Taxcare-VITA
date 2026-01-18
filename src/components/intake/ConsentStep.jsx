export default function ConsentStep({ formData, setFormData }) {
  const consent = formData.consent14446 || {};

  const update = (field, value) => {
    setFormData({
      ...formData,
      consent14446: { ...consent, [field]: value },
    });
  };

  const allAccepted =
    consent.virtualConsent === "yes" &&
    consent.electronicCommunication === "yes" &&
    consent.eSignature === "yes";

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">
        Virtual Tax Preparation Consent (IRS Form 14446)
      </h2>

      <p className="text-gray-600">
        IRS rules require your consent before we can prepare your tax return
        using virtual or electronic methods.
      </p>

      {[
        [
          "virtualConsent",
          "I consent to having my tax return prepared virtually (not in person).",
        ],
        [
          "electronicCommunication",
          "I consent to receiving and sending tax documents electronically.",
        ],
        [
          "eSignature",
          "I consent to using electronic signatures where allowed by the IRS.",
        ],
      ].map(([field, label]) => (
        <div key={field} className="border rounded-lg p-4">
          <p className="font-medium mb-2">{label}</p>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name={field}
                value="yes"
                checked={consent[field] === "yes"}
                onChange={() => update(field, "yes")}
              />
              Yes
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name={field}
                value="no"
                checked={consent[field] === "no"}
                onChange={() => update(field, "no")}
              />
              No
            </label>
          </div>
        </div>
      ))}

      {!allAccepted && (
        <p className="text-red-600 font-medium">
          All consents are required to continue with virtual tax preparation.
        </p>
      )}
    </div>
  );
}

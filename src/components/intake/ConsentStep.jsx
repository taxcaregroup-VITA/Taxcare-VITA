import React from "react";

export default function ConsentStep({ data, onChange }) {
  const consent = data.consent || {};

  const update = (field, value) => {
    onChange({
      ...data,
      consent: {
        ...consent,
        [field]: value,
      },
    });
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">
        Consent & Authorization
      </h2>

      <p className="text-gray-700">
        IRS-certified volunteers require your consent to prepare your tax
        return and handle your information securely.
      </p>

      {/* Consent to Prepare */}
      <div className="border rounded-xl p-6 space-y-4 bg-white">
        <h3 className="font-semibold text-lg">
          Consent to Prepare Tax Return
        </h3>

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={consent.prepare_return || false}
            onChange={(e) =>
              update("prepare_return", e.target.checked)
            }
            className="mt-1"
          />
          <span className="text-gray-700">
            I authorize IRS-certified VITA volunteers to prepare my federal
            and state tax returns based on the information I provide.
          </span>
        </label>
      </div>

      {/* Disclosure Consent */}
      <div className="border rounded-xl p-6 space-y-4 bg-white">
        <h3 className="font-semibold text-lg">
          Consent to Disclose Information (IRC §7216)
        </h3>

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={consent.disclose_info || false}
            onChange={(e) =>
              update("disclose_info", e.target.checked)
            }
            className="mt-1"
          />
          <span className="text-gray-700">
            I consent to the use and disclosure of my tax return
            information for tax preparation and quality review purposes.
          </span>
        </label>
      </div>

      {/* Virtual Consent */}
      <div className="border rounded-xl p-6 space-y-4 bg-white">
        <h3 className="font-semibold text-lg">
          Virtual / Remote Services Consent
        </h3>

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={consent.virtual_consent || false}
            onChange={(e) =>
              update("virtual_consent", e.target.checked)
            }
            className="mt-1"
          />
          <span className="text-gray-700">
            I understand that my tax return is being prepared remotely and
            that electronic communication will be used.
          </span>
        </label>
      </div>

      {/* Signature */}
      <div className="border rounded-xl p-6 space-y-4 bg-white">
        <h3 className="font-semibold text-lg">
          Taxpayer Signature
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">
              Full Legal Name
            </label>
            <input
              type="text"
              value={consent.signature_name || ""}
              onChange={(e) =>
                update("signature_name", e.target.value)
              }
              className="mt-1 w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Date
            </label>
            <input
              type="date"
              value={consent.signature_date || ""}
              onChange={(e) =>
                update("signature_date", e.target.value)
              }
              className="mt-1 w-full border rounded-lg px-3 py-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

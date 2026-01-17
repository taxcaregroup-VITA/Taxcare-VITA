import React from "react";

export default function VirtualConsentStep({ data, onChange }) {
  const consent = data.virtualConsent || {};

  const update = (field, value) => {
    onChange({
      ...data,
      virtualConsent: {
        ...consent,
        [field]: value,
      },
    });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">

      <h2 className="text-2xl font-bold text-gray-900">
        Virtual Tax Services Consent
      </h2>

      <p className="text-gray-700">
        This consent is required because your tax return will be prepared
        using virtual (remote) VITA services, in accordance with IRS Form 14446.
      </p>

      {/* Consent Acknowledgements */}
      <div className="space-y-4 bg-gray-50 p-6 rounded-xl border">

        <label className="flex gap-3">
          <input
            type="checkbox"
            checked={consent.virtual_services || false}
            onChange={(e) => update("virtual_services", e.target.checked)}
          />
          <span>
            I consent to receive tax preparation services virtually
            (by phone, video, email, or secure portal).
          </span>
        </label>

        <label className="flex gap-3">
          <input
            type="checkbox"
            checked={consent.electronic_communication || false}
            onChange={(e) =>
              update("electronic_communication", e.target.checked)
            }
          />
          <span>
            I consent to the use of electronic communication for sharing my tax
            information and documents.
          </span>
        </label>

        <label className="flex gap-3">
          <input
            type="checkbox"
            checked={consent.data_storage || false}
            onChange={(e) => update("data_storage", e.target.checked)}
          />
          <span>
            I understand my tax data may be stored and transmitted electronically
            and accept the associated risks.
          </span>
        </label>

        <label className="flex gap-3">
          <input
            type="checkbox"
            checked={consent.identity_verification || false}
            onChange={(e) =>
              update("identity_verification", e.target.checked)
            }
          />
          <span>
            I understand my identity must be verified before services can be provided.
          </span>
        </label>
      </div>

      {/* Signature Section */}
      <div className="bg-white p-6 rounded-xl border space-y-4">
        <h3 className="text-lg font-semibold">Taxpayer Signature</h3>

        <div>
          <label className="block text-sm font-medium">Full Legal Name</label>
          <input
            type="text"
            className="mt-1 w-full border rounded px-3 py-2"
            value={consent.taxpayer_name || ""}
            onChange={(e) => update("taxpayer_name", e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Date</label>
          <input
            type="date"
            className="mt-1 w-48 border rounded px-3 py-2"
            value={consent.date || ""}
            onChange={(e) => update("date", e.target.value)}
          />
        </div>

        <label className="flex gap-3 mt-4">
          <input
            type="checkbox"
            checked={consent.signature_confirmed || false}
            onChange={(e) =>
              update("signature_confirmed", e.target.checked)
            }
          />
          <span>
            I certify that I have read and agree to the above virtual consent terms.
          </span>
        </label>
      </div>

    </div>
  );
}

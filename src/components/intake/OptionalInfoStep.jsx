import React from "react";

export default function OptionalInfoStep({ formData, setFormData }) {
  const optional = formData.optional || {};

  const update = (field, value) => {
    setFormData({
      ...formData,
      optional: { ...optional, [field]: value },
    });
  };

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-bold">Optional Information</h2>

      {/* English Proficiency */}
      <div>
        <label>Can you carry on a conversation in English?</label>
        <select
          value={optional.conversation || ""}
          onChange={(e) => update("conversation", e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="">Select</option>
          <option value="veryWell">Very well</option>
          <option value="well">Well</option>
          <option value="notWell">Not well</option>
          <option value="notAtAll">Not at all</option>
          <option value="noAnswer">Prefer not to answer</option>
        </select>
      </div>

      <div>
        <label>Can you read a newspaper in English?</label>
        <select
          value={optional.read || ""}
          onChange={(e) => update("read", e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="">Select</option>
          <option value="veryWell">Very well</option>
          <option value="well">Well</option>
          <option value="notWell">Not well</option>
          <option value="notAtAll">Not at all</option>
          <option value="noAnswer">Prefer not to answer</option>
        </select>
      </div>

      {/* Disability / Veteran */}
      <div>
        <label>Do you or anyone in your household have a disability?</label>
        <select
          value={optional.disabled || ""}
          onChange={(e) => update("disabled", e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="noAnswer">Prefer not to answer</option>
        </select>
      </div>

      <div>
        <label>Are you or your spouse a Veteran of the U.S. Armed Forces?</label>
        <select
          value={optional.veteran || ""}
          onChange={(e) => update("veteran", e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="noAnswer">Prefer not to answer</option>
        </select>
      </div>

      {/* Race / Ethnicity */}
      <div>
        <label>Your race and/or ethnicity</label>
        <select
          value={optional.personalRace || ""}
          onChange={(e) => update("personalRace", e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="">Select</option>
          <option value="indian">American Indian or Alaska Native</option>
          <option value="asian">Asian</option>
          <option value="black">Black or African American</option>
          <option value="latino">Hispanic or Latino</option>
          <option value="middleEast">Middle Eastern or North African</option>
          <option value="hawaiian">Native Hawaiian or Pacific Islander</option>
          <option value="white">White</option>
          <option value="noAnswer">Prefer not to answer</option>
        </select>
      </div>

      <div>
        <label>Spouse’s race and/or ethnicity</label>
        <select
          value={optional.spouseRace || ""}
          onChange={(e) => update("spouseRace", e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="">Select</option>
          <option value="indian">American Indian or Alaska Native</option>
          <option value="asian">Asian</option>
          <option value="black">Black or African American</option>
          <option value="latino">Hispanic or Latino</option>
          <option value="middleEast">Middle Eastern or North African</option>
          <option value="hawaiian">Native Hawaiian or Pacific Islander</option>
          <option value="white">White</option>
          <option value="noAnswer">Prefer not to answer</option>
        </select>
      </div>
    </div>
  );
}

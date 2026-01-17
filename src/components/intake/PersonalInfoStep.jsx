export default function PersonalInfoStep({ formData, setFormData }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Personal Information</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name"
          className="border rounded-lg px-4 py-3"
          value={formData.firstName || ""}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Last Name"
          className="border rounded-lg px-4 py-3"
          value={formData.lastName || ""}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />

        <input
          type="date"
          className="border rounded-lg px-4 py-3"
          value={formData.dateOfBirth || ""}
          onChange={(e) =>
            setFormData({ ...formData, dateOfBirth: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="SSN or ITIN"
          className="border rounded-lg px-4 py-3"
          value={formData.ssn || ""}
          onChange={(e) =>
            setFormData({ ...formData, ssn: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="border rounded-lg px-4 py-3"
          value={formData.phone || ""}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email Address"
          className="border rounded-lg px-4 py-3"
          value={formData.email || ""}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
      </div>
    </div>
  );
}

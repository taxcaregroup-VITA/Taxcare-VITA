// src/components/intake/DependentsStep.jsx
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, Trash } from "lucide-react";

export default function DependentsStep({ data, onChange }) {
  const dependents = data.dependents || [];

  const addDependent = () => {
    onChange({
      ...data,
      dependents: [...dependents, { name: '', ssn: '', birthDate: '', relationship: '' }]
    });
  };

  const updateDependent = (index, field, value) => {
    const updated = dependents.map((dep, i) =>
      i === index ? { ...dep, [field]: value } : dep
    );
    onChange({ ...data, dependents: updated });
  };

  const removeDependent = (index) => {
    const updated = dependents.filter((_, i) => i !== index);
    onChange({ ...data, dependents: updated });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dependents</h2>
      <p className="text-gray-600">Enter information for each dependent you will claim on your tax return.</p>

      {dependents.map((dep, index) => (
        <div key={index} className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 relative">
          <button
            type="button"
            onClick={() => removeDependent(index)}
            className="absolute top-4 right-4 text-red-500 hover:text-red-700"
          >
            <Trash />
          </button>

          <div>
            <Label>Name</Label>
            <Input
              value={dep.name}
              onChange={(e) => updateDependent(index, 'name', e.target.value)}
              placeholder="Full Name"
              className="mt-1"
            />
          </div>
          <div>
            <Label>SSN</Label>
            <Input
              value={dep.ssn}
              onChange={(e) => updateDependent(index, 'ssn', e.target.value)}
              placeholder="XXX-XX-XXXX"
              className="mt-1"
            />
          </div>
          <div>
            <Label>Date of Birth</Label>
            <Input
              type="date"
              value={dep.birthDate}
              onChange={(e) => updateDependent(index, 'birthDate', e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label>Relationship</Label>
            <Input
              value={dep.relationship}
              onChange={(e) => updateDependent(index, 'relationship', e.target.value)}
              placeholder="Child, Parent, etc."
              className="mt-1"
            />
          </div>
        </div>
      ))}

      <Button onClick={addDependent} className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700">
        <Plus /> Add Dependent
      </Button>
    </div>
  );
}

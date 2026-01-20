import React from "react";
import { Document, Page } from "@react-pdf/renderer";

import PartI from "./PartI";
import PartII from "./PartII_Dependents";
import PartIII from "./PartIII_Income";
import PartIV from "./PartIV_Expens
import PartV from "./PartV_Optional";
import PartVI from "./PartVI_Notes";

export default function Form13614C({ formData }) {
  return (
    <Document>
      <Page size="LETTER" wrap>
        <PartI data={formData} />
        <PartII data={formData.dependents || []} />
        <PartIII data={formData.income || {}} />
        <PartIV data={formData.expenses || {}} />
        <PartV data={formData.optional || {}} />
        <PartVI data={formData.notes || ""} />
      </Page>
    </Document>
  );
}

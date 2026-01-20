import { Document, Page, Text, View } from "@react-pdf/renderer";
import { styles } from "../styles";

export default function Form14446({ data }) {
  const c = data.consent14446 || {};

  return (
    <Document>
      <Page size="LETTER" style={styles.page}>

        <Text style={styles.header}>Form 14446</Text>
        <Text>Virtual VITA/TCE Taxpayer Consent</Text>

        <View style={styles.box}>
          <Text>Virtual Consent: {c.virtualConsent}</Text>
          <Text>Electronic Communication: {c.electronicCommunication}</Text>
          <Text>Electronic Signature: {c.eSignature}</Text>
        </View>

        <Text style={{ marginTop: 20 }}>
          This document confirms the taxpayer consented to virtual services.
        </Text>

      </Page>
    </Document>
  );
}

import { Page, View, Text } from "@react-pdf/renderer";
import styles from "./styles";

export default function Form14446({ data }) {
  const personal = data.personal || {};
  const consent = data.consent || {};

  return (
    <Page size="LETTER" style={styles.page}>
      <Text style={styles.title}>
        Form 14446 – Virtual VITA/TCE Taxpayer Consent
      </Text>

      {/* Taxpayer Info */}
      <View style={styles.section}>
        <Text style={styles.header}>Taxpayer Information</Text>
        <Text>Name: {personal.firstName} {personal.lastName}</Text>
        <Text>SSN / ITIN: {personal.ssn}</Text>
        <Text>Tax Year: {data.taxYear || "2025"}</Text>
      </View>

      {/* Spouse Info (if MFJ/MFS) */}
      {personal.spouseName && (
        <View style={styles.section}>
          <Text style={styles.header}>Spouse Information</Text>
          <Text>Name: {personal.spouseName}</Text>
          <Text>SSN / ITIN: {personal.spouseSSN}</Text>
        </View>
      )}

      {/* Consent Statements */}
      <View style={styles.section}>
        <Text style={styles.header}>Taxpayer Consents</Text>

        <Text>
          ☐ I consent to my tax return being prepared using virtual service
          delivery methods.
        </Text>
        <Text>
          ☐ I consent to electronic communication (email, portal, messaging).
        </Text>
        <Text>
          ☐ I consent to the use of IRS-approved third-party software.
        </Text>
      </View>

      {/* Signature Section */}
      <View style={styles.section}>
        <Text style={styles.header}>Signatures</Text>

        <Text>Taxpayer Signature: {consent.taxpayerSignature || "____________________"}</Text>
        <Text>Date: {consent.taxpayerDate || "__________"}</Text>

        {personal.spouseName && (
          <>
            <Text style={{ marginTop: 8 }}>
              Spouse Signature: {consent.spouseSignature || "____________________"}
            </Text>
            <Text>Date: {consent.spouseDate || "__________"}</Text>
          </>
        )}
      </View>

      {/* Disclosure */}
      <View style={styles.disclaimer}>
        <Text>
          This consent applies only to the current tax year and may be revoked
          at any time.
        </Text>
      </View>
    </Page>
  );
}

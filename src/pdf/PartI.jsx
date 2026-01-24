// PartI.jsx
import styles from "./styles";

export default function PartI({ data }) {
  const p = data.personal || {};

  return (
    <View style={styles.section}>
      <Text style={styles.header}>Part I – Your Personal Information</Text>

      <Text>Name: {p.firstName} {p.middleInitial} {p.lastName}</Text>
      <Text>Date of Birth: {p.dob}</Text>
      <Text>Job Title: {p.jobTitle}</Text>

      <Text>
        Address: {p.address} {p.apt}, {p.city}, {p.state} {p.zip}
      </Text>

      <Text>Phone: {p.phone}</Text>
      <Text>Email: {p.email}</Text>

      <Text>Marital Status: {p.maritalStatus}</Text>

      {(p.filingStatus === "mfj" || p.filingStatus === "mfs") && (
        <>
          <Text style={styles.subHeader}>Spouse</Text>
          <Text>
            {p.spouseFirstName} {p.spouseMiddleInitial} {p.spouseLastName}
          </Text>
          <Text>DOB: {p.spouseDob}</Text>
          <Text>Job Title: {p.spouseJobTitle}</Text>
        </>
      )}

      <Text>Multi-state: {p.multiState ? "Yes" : "No"}</Text>
      <Text>Can be claimed as dependent: {p.claimedDependent ? "Yes" : "No"}</Text>

      <Text>Citizenship: {p.citizen}</Text>
      <Text>Visa: {p.visa}</Text>
      <Text>Student: {p.student}</Text>
      <Text>Blind: {p.blind}</Text>
      <Text>Disabled: {p.disabled}</Text>
      <Text>IP PIN: {p.ipPin}</Text>
      <Text>Digital Assets: {p.crypto}</Text>

      <Text>Refund Method: {p.refundMethod}</Text>
      <Text>Payment Method if Owed: {p.paymentMethod}</Text>
      <Text>Preferred Language: {p.languagePreference}</Text>
      <Text>$3 Fund Contribution: {p.contributeFund}</Text>
    </View>
  );
}

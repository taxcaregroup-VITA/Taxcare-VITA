// PartII_Dependents.jsx
import { View, Text } from "@react-pdf/renderer";
import styles from "./styles";

export default function PartII({ data }) {
  if (!data.length) return null;

  return (
    <View style={styles.section}>
      <Text style={styles.header}>Part II – Dependents</Text>

      {data.map((d, i) => (
        <View key={i} style={styles.box}>
          <Text>Name: {d.name}</Text>
          <Text>DOB: {d.dob}</Text>
          <Text>Relationship: {d.relationship}</Text>
          <Text>Months Lived With You: {d.monthsLivedWithYou}</Text>
          <Text>Student: {d.student ? "Yes" : "No"}</Text>
          <Text>Disabled: {d.disabled ? "Yes" : "No"}</Text>
          <Text>Provided Support: {d.providedSupport ? "Yes" : "No"}</Text>
          <Text>IP PIN: {d.ipPIN ? "Yes" : "No"}</Text>
        </View>
      ))}
    </View>
  );
}

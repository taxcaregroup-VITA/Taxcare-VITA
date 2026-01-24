import styles from "./styles";

export default function PartV_Optional({ data }) {
  return (
    <View style={styles.section}>
      <Text style={styles.header}>
        Part V – Optional Information
      </Text>

      <Text>English conversation ability: {data.conversation || "N/A"}</Text>
      <Text>English reading ability: {data.read || "N/A"}</Text>

      <Text>Household disability: {data.disabled ? "Yes" : "No"}</Text>
      <Text>Veteran status: {data.veteran ? "Yes" : "No"}</Text>

      <Text>Taxpayer race/ethnicity: {data.personalRace || "N/A"}</Text>
      <Text>Spouse race/ethnicity: {data.spouseRace || "N/A"}</Text>
    </View>
  );
}

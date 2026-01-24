import styles from "./styles";

export default function PartVI_Notes({ data }) {
  if (!data) return null;

  return (
    <View style={styles.section}>
      <Text style={styles.header}>
        Part VI – Notes / Comments
      </Text>

      <View style={styles.notesBox}>
        <Text>{data}</Text>
      </View>
    </View>
  );
}

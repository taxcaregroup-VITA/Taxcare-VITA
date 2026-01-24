// PartIII_Income.jsx
import styles from "./styles";

export default function PartIII({ data }) {
  return (
    <View style={styles.section}>
      <Text style={styles.header}>Part III – Income</Text>

      {Object.entries(data).map(([key, value]) => (
        <Text key={key}>
          {key}: {value ? "Yes" : "No"}
        </Text>
      ))}

      <Text>Loss last year: {data.lossLastYear ? "Yes" : "No"}</Text>
      <Text>Other money received: {data.otherMoney ? "Yes" : "No"}</Text>
    </View>
  );
}

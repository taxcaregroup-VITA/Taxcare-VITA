import { styles } from "../styles";

export default function Form13614C({ data }) {
  const p = data.personal || {};

  return (
    <Document>
      <Page size="LETTER" style={styles.page}>

        <Text style={styles.header}>Form 13614-C</Text>
        <Text>Intake / Interview & Quality Review Sheet</Text>

        {/* Part I */}
        <View style={styles.section}>
          <Text style={styles.header}>Part I – Personal Information</Text>

          <View style={styles.box}>
            <Text><Text style={styles.label}>Name:</Text> {p.firstName} {p.lastName}</Text>
            <Text><Text style={styles.label}>Address:</Text> {p.address}</Text>
            <Text><Text style={styles.label}>City/State/ZIP:</Text> {p.city}, {p.state} {p.zip}</Text>
            <Text><Text style={styles.label}>Phone:</Text> {p.phone}</Text>
            <Text><Text style={styles.label}>Email:</Text> {p.email}</Text>
          </View>
        </View>

        {/* Part II */}
        <View style={styles.section}>
          <Text style={styles.header}>Part II – Marital & Household</Text>

          <View style={styles.box}>
            <Text>Marital Status: {p.maritalStatus}</Text>
            <Text>Multiple States: {p.multiState}</Text>
            <Text>Claimed as Dependent: {p.claimedDependent}</Text>
          </View>
        </View>

        {/* Part III */}
        <View style={styles.section}>
          <Text style={styles.header}>Part III – Income</Text>

          <View style={styles.box}>
            <Text>Self-Employment: {data.income?.selfEmployment ? "Yes" : "No"}</Text>
          </View>
        </View>

        {/* Part IV */}
        <View style={styles.section}>
          <Text style={styles.header}>Part IV – Expenses</Text>

          <View style={styles.box}>
            <Text>Mortgage Interest: {data.expenses?.mortgageInterest ? "Yes" : "No"}</Text>
            <Text>Taxes: {data.expenses?.taxes ? "Yes" : "No"}</Text>
            <Text>Medical: {data.expenses?.medical ? "Yes" : "No"}</Text>
            <Text>Charity: {data.expenses?.charity ? "Yes" : "No"}</Text>
          </View>
        </View>

        {/* Part VI */}
        <View style={styles.section}>
          <Text style={styles.header}>Part VI – Notes</Text>

          <View style={styles.box}>
            <Text>{data.notes || "None"}</Text>
          </View>
        </View>

      </Page>
    </Document>
  );
}

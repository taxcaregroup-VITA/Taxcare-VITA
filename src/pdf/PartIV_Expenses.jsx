import { View, Text } from "@react-pdf/renderer";
import styles from "./styles";

export default function PartIV_Expenses({ data }) {
  return (
    <View style={styles.section}>
      <Text style={styles.header}>
        Part IV – Expenses and Tax-Related Events
      </Text>

      <Text>Child or dependent care expenses: {data.childCare ? "Yes" : "No"}</Text>
      <Text>Education expenses: {data.education ? "Yes" : "No"}</Text>
      <Text>Student loan interest: {data.studentLoanInterest ? "Yes" : "No"}</Text>

      <Text>IRA contributions: {data.ira ? "Yes" : "No"}</Text>
      <Text>Retirement contributions: {data.retirement ? "Yes" : "No"}</Text>

      <Text>Medical expenses: {data.medical ? "Yes" : "No"}</Text>
      <Text>Mortgage interest: {data.mortgageInterest ? "Yes" : "No"}</Text>
      <Text>Real estate taxes: {data.realEstateTax ? "Yes" : "No"}</Text>

      <Text>Charitable contributions: {data.charity ? "Yes" : "No"}</Text>

      <Text>Casualty or theft loss: {data.casualtyLoss ? "Yes" : "No"}</Text>
      <Text>Sold home: {data.soldHome ? "Yes" : "No"}</Text>
      <Text>Purchased home: {data.purchasedHome ? "Yes" : "No"}</Text>

      <Text>Estimated tax payments: {data.estimatedPayments ? "Yes" : "No"}</Text>
    </View>
  );
}

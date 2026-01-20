import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    fontFamily: "Helvetica"
  },
  section: {
    marginBottom: 10
  },
  header: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 6
  },
  label: {
    fontWeight: "bold"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4
  },
  box: {
    border: "1 solid #000",
    padding: 6,
    marginBottom: 6
  }
});

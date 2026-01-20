import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    fontFamily: "Helvetica",
  },

  title: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },

  section: {
    marginBottom: 12,
  },

  header: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 4,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  box: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 6,
    marginBottom: 6,
  },

  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },

  checkbox: {
    width: 10,
    height: 10,
    borderWidth: 1,
    marginRight: 6,
  },

  disclaimer: {
    marginTop: 20,
    fontSize: 8,
    color: "#444",
  },
});

export default styles;

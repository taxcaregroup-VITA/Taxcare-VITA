import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    fontFamily: "Helvetica",
    lineHeight: 1.4,
  },

  section: {
    marginBottom: 14,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
  },

  header: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 6,
    textTransform: "uppercase",
  },

  subHeader: {
    fontSize: 10,
    fontWeight: "bold",
    marginTop: 6,
    marginBottom: 4,
  },

  box: {
    padding: 6,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
  },

  notesBox: {
    minHeight: 80,
    padding: 8,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
  },
});

export default styles;

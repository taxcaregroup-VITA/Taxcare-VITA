import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    position: "relative",
    fontSize: 10,
  },

  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },

  text: {
    position: "absolute",
    fontSize: 10,
  },

  checkbox: {
    position: "absolute",
    fontSize: 12,
  },
});

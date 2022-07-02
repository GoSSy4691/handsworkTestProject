import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  countdownText: {
    fontSize: 18,
  },
  title: {
    fontSize: 30,
    margin: 10,
  },
  activeElement: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 336,
    height: 52,
    backgroundColor: "rgba(152, 179, 157, 0.25)",
    margin: 8,
  },
  elementText: {
    fontSize: 21,
    marginLeft: 10,
  },
});

export default styles;

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  svg: {
    position: "absolute",
  },
  container: {
    position: "relative",
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  title: {
    fontSize: 23,
    color: "white",
  },
  amount: {
    fontSize: 34,
    color: "white",
    fontWeight: "800",
  },
  accountBox: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 5,
  },
  accountTitle: {
    textAlign: "center",
    color: "white",
    fontSize: 12,
  },
  accountIcon: {
    marginTop: 4,
    color: "white",
  },
});

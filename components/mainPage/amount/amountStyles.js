import { StyleSheet } from "react-native";
import { pixels } from "../../../stores/usePhoneProperties";

export const styles = StyleSheet.create({
  svg: {
    position: "absolute",
  },
  container: {
    position: "relative",
    width: "100%",
    height: pixels(245),
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  title: {
    fontSize: pixels(23),
    color: "white",
  },
  amount: {
    fontSize: pixels(34),
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
    fontSize: pixels(12),
  },
  accountIcon: {
    marginTop: 4,
    color: "white",
  },
});

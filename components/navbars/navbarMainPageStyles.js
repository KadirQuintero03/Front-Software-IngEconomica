import { StyleSheet } from "react-native";
import { pixels } from "../../stores/usePhoneProperties";

export const styles = StyleSheet.create({
  navbar: {
    width: "100%",
    padding: pixels(18),
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

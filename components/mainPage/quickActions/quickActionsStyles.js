import { StyleSheet } from "react-native";
import { pixels } from "../../../stores/usePhoneProperties";

export const styles = StyleSheet.create({
  box: {
    position: "absolute",
    bottom: pixels(26),
    right: pixels(22),
    padding: pixels(14),
    borderRadius: pixels(6),
  },
  icon: {
    color: "white",
  },
});

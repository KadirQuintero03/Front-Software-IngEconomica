import { StyleSheet } from "react-native";
import { pixels, windowHeight } from "../../stores/usePhoneProperties";

export const styles = StyleSheet.create({
  menu: {
    paddingBottom: pixels(25),
    position: "absolute",
    height: "100%",
    bottom: 0,
    left: 0,
  },
});

import { StyleSheet } from "react-native";
import { pixels, windowHeight } from "../../stores/usePhoneProperties";

export const styles = StyleSheet.create({
  menu: {
    paddingBottom: pixels(25),
    position: "absolute",
    height: windowHeight,
    bottom: 0,
    left: 0,
  },
});

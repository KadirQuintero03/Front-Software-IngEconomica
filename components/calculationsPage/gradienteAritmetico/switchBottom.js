import { StyleSheet } from "react-native";
import { pixels } from "../../../stores/usePhoneProperties";

export const stylesSwitch = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: pixels(15),
  },
  switch: {
    transform: [{ scaleX: 1.8 }, { scaleY: 1.8 }], // Escalado para hacer el interruptor más grande
  },
  text: {
    marginLeft: pixels(10),
    fontSize: pixels(17),
    fontWeight: "500",
  },
});

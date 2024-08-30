import { StyleSheet } from "react-native";
import { pixels } from "../../../stores/usePhoneProperties";

export const styles1 = StyleSheet.create({
  btn: {
    marginVertical: pixels(15),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: pixels(100),
    paddingVertical: pixels(10),
    width: pixels(290),
  },
  txt: {
    fontSize: pixels(16),
    color: "#fff",
    fontWeight: "bold",
  },
});

import { StyleSheet } from "react-native";
import { pixels } from "../../stores/usePhoneProperties";

export const styles = StyleSheet.create({
  header: {
    padding: pixels(16.5),
    alignItems: "center",
  },
  title: {
    fontSize: pixels(20),
    fontWeight: "600",
    color: "#fff",
  },
  optionsBox: {
    marginHorizontal: pixels(17),
    marginVertical: pixels(35),
  },
  pressable: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: pixels(5),
    paddingVertical: pixels(10),
    paddingHorizontal: pixels(5),
    borderBottomWidth: pixels(2.5),
    gap: pixels(8),
  },
  optionTitle: {
    maxWidth: "90%",
    flexWrap: "wrap",
    paddingHorizontal: pixels(2),
    fontSize: pixels(17),
    fontWeight: "500",
    color: "white",
  },
});

import { StyleSheet } from "react-native";
import { pixels } from "../../../stores/usePhoneProperties";

export const styles = StyleSheet.create({
  page: {
    width: "100%",
    height: "100%",
    padding: pixels(15),
    alignItems: "center",
  },
  scrollView: {
    marginTop: pixels(20),
    width: "100%",
  },
  container: {
    flexDirection: "row",
    gap: pixels(10),
    alignItems: "center",
  },
});

import { StyleSheet } from "react-native";
import { pixels } from "../../../stores/usePhoneProperties";

export const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    height: pixels(78),
    justifyContent: "space-between",
    marginBottom: pixels(13),
    paddingBottom: pixels(2),
  },
  input: {
    width: "100%",
    borderBottomWidth: pixels(3),
    padding: pixels(10),
    fontSize: pixels(16),
    fontWeight: "400",
  },
  text: {
    fontSize: pixels(17),
    fontWeight: "500",
  },
});

export const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    height: pixels(80),
    marginBottom: pixels(13),
  },
  box: {
    width: "100%",
    marginTop: pixels(6),
    borderWidth: pixels(2.5),
  },
  input: {
    fontSize: pixels(15),
  },
  text: {
    fontSize: pixels(17),
    fontWeight: "500",
  },
  dropdown: {
    zIndex: 2,
    backgroundColor: "#fff",
  },
});

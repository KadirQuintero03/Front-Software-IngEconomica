import { StyleSheet } from "react-native";
import { pixels } from "../../../stores/usePhoneProperties";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: pixels(12),
    paddingLeft: 20,
    zIndex: -1,
  },
  title: {
    fontSize: pixels(18),
    fontWeight: "600",
    paddingVertical: 10,
    marginRight: 20,
    borderBottomWidth: 2,
    borderColor: "#7E93C6BF",
  },
  option: {
    height: pixels(110),
    width: pixels(110),
    marginRight: 18,
    marginVertical: 18,
    backgroundColor: "#E1E5FA",
    borderRadius: 7,
    alignItems: "center",
    paddingTop: pixels(20),
    elevation: 1,
    gap: 5,
  },
  text: {
    textAlign: "center",
    marginHorizontal: pixels(7),
    flexWrap: "wrap",
    fontSize: pixels(13.5),
  },
});

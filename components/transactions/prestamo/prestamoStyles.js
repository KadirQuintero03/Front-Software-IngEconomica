import { StyleSheet } from "react-native";
import { pixels } from "../../../stores/usePhoneProperties";

export const styles = StyleSheet.create({
  page: {
    width: "100%",
    height: "100%",
    padding: pixels(15),
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: pixels(5),
    elevation: pixels(3),
    borderRadius: pixels(6),
  },
  headerSeparate: {
    borderRightWidth: 1,
    height: "80%",
    borderColor: "grey",
  },
  img: {
    height: pixels(90),
    width: pixels(120),
    marginRight: pixels(5),
  },
});

import { StyleSheet } from "react-native";
import { pixels } from "../../../stores/usePhoneProperties";

export const styles = StyleSheet.create({
  page: {
    width: "100%",
    height: "100%",
    padding: pixels(15),
    alignItems: "center",
    gap: pixels(15),
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
  scrollView: {
    width: "100%",
  },
  headerSeparate: {
    height: "80%",
    borderColor: "grey",
    borderWidth: 0.4,
  },
  img: {
    height: pixels(90),
    width: pixels(120),
    marginRight: pixels(5),
  },
  interesBox: {
    width: "100%",
    marginTop: pixels(20),
  },
  interesTitle: {
    fontSize: pixels(19),
    fontWeight: "500",
  },
  interesType: {
    height: pixels(70),
  },
  interesBoxDouble1: {
    flexDirection: "row",
    gap: pixels(10),
    alignItems: "center",
  },
  interesQuote: {
    height: pixels(80),
  },
});

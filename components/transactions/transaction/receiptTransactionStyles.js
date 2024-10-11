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
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: pixels(5),
    elevation: pixels(3),
    borderRadius: pixels(6),
    paddingHorizontal: pixels(20)
  },
  scrollView: {
    width: "100%",
  },
  img: {
    height: pixels(180),
    width: pixels(210),
    marginRight: pixels(5),
  },
  interesBox: {
    width: "100%",
    marginTop: pixels(20),
    marginBottom: pixels(7)
  },
  label: {
    fontSize: pixels(18),
    marginBottom: pixels(8),
    fontWeight: "bold",
  },
  text: {
    fontSize: pixels(16),
    color: "gray",
  },
  underline: {
    borderBottomWidth: pixels(2),
    borderBottomColor: "#5f79a6",
    marginTop: pixels(5),
    width: pixels(280),
  },
});

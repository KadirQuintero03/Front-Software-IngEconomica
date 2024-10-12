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
    width: pixels(130),
  },
  container: {
    paddingLeft: pixels(40),
  },
});

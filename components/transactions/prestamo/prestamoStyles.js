import { StyleSheet } from "react-native";
import { pixels } from "../../../stores/usePhoneProperties";
import useColorPalette from "../../../stores/useColorPalette";

const color1 = useColorPalette(1, 1);

export const styles = StyleSheet.create({
  page: {
    width: "100%",
    height: "100%",
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
    padding: pixels(20),
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
  popUpPage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    alignItems: "center",
    backgroundColor: "#0000003A",
  },
  popUp: {
    alignItems: "center",
    width: "90%",
    paddingVertical: pixels(15),
    backgroundColor: "white",
    borderTopWidth: 4,
    borderColor: color1,
    borderBottomLeftRadius: pixels(17),
    borderBottomRightRadius: pixels(17),
    gap: pixels(17),
  },
  popUpTitle: {
    fontSize: pixels(18),
    fontWeight: "500",
  },
  popUpText: {
    fontSize: pixels(12.5),
    fontWeight: "400",
    paddingHorizontal: pixels(4),
  },
  btnBox: {
    width: "90%",
    paddingHorizontal: pixels(5),
    flexDirection: "row",
    gap: pixels(10),
  },
  popUpbtn: {
    flex: 1,
    alignItems: "center",
    paddingVertical: pixels(6),
    borderRadius: pixels(25),
  },
  popUpTxt: {
    color: "white",
    fontSize: pixels(16),
    fontWeight: "500",
  },
  confirm: {
    backgroundColor: color1,
  },
  cancel: {
    backgroundColor: "red",
  },
});

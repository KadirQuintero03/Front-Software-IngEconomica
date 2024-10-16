import { StyleSheet } from "react-native";
import { pixels } from "../../../stores/usePhoneProperties";
import useColorPalette from "../../../stores/useColorPalette";

const color1 = useColorPalette(3, 1);

export const styles = StyleSheet.create({
  scroll: {
    alignItems: "center",
    marginHorizontal: pixels(5),
  },
  title: {
    fontSize: pixels(17),
    fontWeight: "500",
    marginHorizontal: pixels(15),
    marginBottom: pixels(5),
  },
  loading: {
    marginTop: pixels(30),
    color: color1,
  },
  movBox: {
    width: "90%",
    height: pixels(50),
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: pixels(4),
    borderBottomWidth: 1,
    borderColor: color1,
  },
  movCreditIcon: {
    color: "#DC143C",
  },
  movPrincipal: {
    width: "52%",
    paddingLeft: pixels(6),
  },
  principalTitle: {
    fontSize: pixels(14),
    fontWeight: "500",
  },
  principalSub: {
    color: "#444",
    paddingBottom: pixels(2.5),
  },
  movSecundario: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: pixels(4),
  },
  secundarioTitle: {
    fontWeight: "500",
    fontSize: pixels(14),
  },
  secundarioSub: {
    color: "#444",
    paddingBottom: pixels(2.5),
  },
});

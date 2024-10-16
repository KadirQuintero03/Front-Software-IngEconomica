import { StyleSheet } from "react-native";
import { pixels } from "../../../stores/usePhoneProperties";
import useColorPalette from "../../../stores/useColorPalette";

const color1 = useColorPalette(1, 1);
const color2 = useColorPalette(2, 1);
const color31 = useColorPalette(3, 0.1);
const color35 = useColorPalette(3, 0.5);

export const styles = StyleSheet.create({
  loanPage: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  loanTitle: {
    width: "100%",
    fontSize: pixels(24),
    fontWeight: "600",
    paddingVertical: pixels(15),
    paddingLeft: pixels(15),
  },
  loanDetail: {
    width: "100%",
    paddingHorizontal: pixels(15),
    paddingVertical: pixels(3),
    marginLeft: pixels(50),
    marginBottom: pixels(20),
    borderLeftWidth: pixels(3),
    borderColor: color1,
    gap: pixels(3),
  },
  loanPhrase: {
    flexDirection: "row",
  },
  detailBold: {
    fontSize: pixels(15.5),
    fontWeight: "500",
  },
  detailTxt: {
    fontSize: pixels(14),
    paddingTop: pixels(1),
    color: "#333",
  },
  borderSeparator: {
    width: "100%",
    borderBottomWidth: pixels(3),
    borderColor: color2,
    elevation: pixels(7),
  },
  loanQuotes: {
    width: "100%",
    paddingTop: pixels(5),
    paddingLeft: pixels(15),
    paddingRight: pixels(15),
    backgroundColor: color31,
  },
  quoteBox: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: pixels(10),
    paddingHorizontal: pixels(7),
    borderBottomWidth: pixels(1.5),
    borderColor: color35,
  },
  quoteNumber: {
    fontSize: pixels(22),
    fontWeight: "700",
    color: color1,
    marginRight: pixels(20),
  },
  quotePrincipal: {
    flex: 1,
  },
  principalTitle: {
    fontSize: pixels(17),
    fontWeight: "500",
  },
  principalSubBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  prinSubBold: {
    fontSize: pixels(16),
    fontWeight: "500",
    lineHeight: pixels(18),
  },
  prinSub: {
    color: "#333",
  },
  prinSubSep: {
    height: "100%",
    marginHorizontal: pixels(7),
    borderLeftWidth: pixels(1.3),
    borderColor: color1,
  },
  quoteSecundario: {
    alignItems: "flex-end",
  },
  secundarioTitle: {
    fontSize: pixels(15),
  },
  secundarioSub: {
    color: "#333",
  },
});

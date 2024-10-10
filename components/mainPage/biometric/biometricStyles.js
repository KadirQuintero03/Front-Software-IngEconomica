import { StyleSheet } from "react-native";
import { pixels } from "../../../stores/usePhoneProperties";

export const styles = StyleSheet.create({
  page: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "#0000003A",
  },
  container: {
    alignItems: "center",
    padding: pixels(20),
    marginVertical: pixels(17),
    marginHorizontal: pixels(15),
    backgroundColor: "white",
    borderRadius: pixels(10),
    gap: pixels(10),
  },
  title: {
    fontSize: pixels(20),
    fontWeight: "700",
  },
  txt: {
    fontSize: pixels(16),
    marginBottom: pixels(25),
  },
  btnBox: {
    flexDirection: "row",
    gap: pixels(10),
  },
  btn: {
    flex: 1,
    alignItems: "center",
    borderRadius: pixels(50),
    padding: pixels(7),
  },
  txtBtn: {
    fontSize: pixels(16),
    fontWeight: "600",
    color: "white",
  },
});

import { StyleSheet } from "react-native";
import { pixels } from "../../stores/usePhoneProperties";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: pixels(18),
  },

  containerimg: {
    position: "relative",
    width: "100%",
    alignItems: "center",
  },

  txtSlogan: {
    fontSize: pixels(18),
    textAlign: "center",
  },

  txtCreateAccount: {
    fontSize: pixels(16),
    color: "#fff",
    fontWeight: "bold",
  },

  btnCreateAccount: {
    marginTop: pixels(50),
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: pixels(100),
    padding: pixels(12),
  },

  txtLogin: {
    fontSize: pixels(16),
    color: "#022a9b",
    fontWeight: "bold",
  },

  btnLogin: {
    backgroundColor: "#fff",
    borderWidth: pixels(2),
    borderStyle: "solid",
    borderColor: "#022a9b",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: pixels(100),
    padding: pixels(10),
    marginTop: pixels(16),
  },

  bg1: {
    width: pixels(300),
    height: pixels(300),
    zIndex: 10,
  },

  bg2: {
    width: "96%",
    height: pixels(320),
    resizeMode: "contain",
    position: "absolute",
    top: 0,
  },
});

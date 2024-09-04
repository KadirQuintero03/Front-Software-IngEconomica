import { StyleSheet } from "react-native";
import { pixels } from "../../stores/usePhoneProperties";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: pixels(200),
    height: pixels(200),
    marginBottom: pixels(60),
  },

  txtMsg: {
    fontSize: pixels(18),
    textAlign: "center",
  },

  input: {
    height: pixels(32),
    borderBottomColor: "gray",
    borderBottomWidth: pixels(1),
    marginBottom: pixels(12),
    paddingLeft: pixels(27),
    width: pixels(270),
    color: "#000",
    fontSize: pixels(18),
  },

  txtLogin: {
    fontSize: pixels(16),
    color: "#fff",
    fontWeight: "bold",
  },

  btnLogin: {
    marginTop: pixels(58),
    marginBottom: pixels(60),
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: pixels(100),
    padding: pixels(10),
    width: pixels(290),
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: pixels(14),
  },

  icon: {
    position: "absolute",
    left: 0,
    bottom: pixels(19),
  },
});

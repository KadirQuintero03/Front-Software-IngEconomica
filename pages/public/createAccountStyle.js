import { StyleSheet } from "react-native";
import { pixels } from "../../stores/usePhoneProperties";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: pixels(180),
    height: pixels(180),
    marginBottom: pixels(40),
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
    fontSize: pixels(16),
  },

  txtCreateAccount: {
    fontSize: pixels(16),
    color: "#fff",
    fontWeight: "bold",
  },

  btnCreateAccount: {
    marginTop: pixels(32),
    marginBottom: pixels(32),
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: pixels(100),
    padding: pixels(12),
    width: pixels(290),
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: pixels(6),
  },

  icon: {
    position: "absolute",
    left: 0,
    bottom: pixels(19),
  },
});

import { StyleSheet } from "react-native";
import { pixels } from "../../stores/usePhoneProperties";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
    alignItems: "center",
    padding: pixels(15),
  },
  title: {
    marginTop: pixels(60),
    fontSize: pixels(16),
    fontWeight: "bold",
  },
  logo: {
    width: pixels(250),
    height: pixels(250),
    marginBottom: pixels(20),
  },

  txtMsg: {
    fontSize: pixels(14),
    textAlign: "left",
    paddingHorizontal: pixels(10),
  },

  input: {
    flex: 1,
    borderBottomColor: "gray",
    borderBottomWidth: pixels(2),
    paddingHorizontal: pixels(8),
    paddingVertical: pixels(7),
    color: "#000",
    fontSize: pixels(12),
  },

  txtForgot: {
    fontSize: pixels(16),
    color: "#fff",
    fontWeight: "bold",
  },

  btnForgot: {
    marginTop: pixels(58),
    marginBottom: pixels(60),
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: pixels(100),
    padding: pixels(10),
    width: "100%",
  },

  inputContainer: {
    gap: pixels(12),
    marginHorizontal: pixels(15),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: pixels(14),
  },

  icon: {
    color: "#000000CF",
  },

  fingerContainer: {
    position: "absolute",
    bottom: pixels(25),
    right: pixels(20),
    padding: pixels(17),
    borderRadius: pixels(7),
  },
});

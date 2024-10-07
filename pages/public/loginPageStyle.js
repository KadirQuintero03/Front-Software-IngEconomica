import { StyleSheet } from "react-native";
import { pixels } from "../../stores/usePhoneProperties";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: pixels(15),
  },

  logo: {
    width: pixels(200),
    height: pixels(200),
    marginBottom: pixels(60),
  },

  txtMsg: {
    fontSize: pixels(17),
    textAlign: "center",
  },

  input: {
    flex: 1,
    borderBottomColor: "gray",
    borderBottomWidth: pixels(2),
    paddingHorizontal: pixels(8),
    paddingVertical: pixels(7),
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

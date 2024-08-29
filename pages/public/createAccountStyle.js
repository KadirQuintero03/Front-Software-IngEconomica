import { StyleSheet } from "react-native";
import { pixels } from "../../stores/usePhoneProperties";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 250,
    height: 250,
    marginBottom: 50,
  },

  txtMsg: {
    fontSize: pixels(20),
    textAlign: "center",
  },

  input: {
    height: 40,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: 350,
    color: "#000",
    fontSize: 20,
  },

  txtCreateAccount: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },

  btnCreateAccount: {
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    padding: 12,
    width: 350,
  },
});

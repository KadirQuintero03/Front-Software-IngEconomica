import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  containerimg: {
    position: "relative",
    width: "100%",
    alignItems: "center",
  },

  txtSlogan: {
    fontSize: 24,
    textAlign: "center",
  },

  txtCreateAccount: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },

  btnCreateAccount: {
    marginTop: 55,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    padding: 12,
  },

  txtLogin: {
    fontSize: 20,
    color: "#022a9b",
    fontWeight: "bold",
  },

  btnLogin: {
    backgroundColor: "#fff",
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "#022a9b",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    padding: 12,
    marginTop: 16,
  },

  bg1: {
    width: 360,
    height: 360,
    zIndex: 10,
  },

  bg2: {
    width: "96%",
    height: 360,
    resizeMode: "contain",
    position: "absolute",
    top: 0,
  },
});

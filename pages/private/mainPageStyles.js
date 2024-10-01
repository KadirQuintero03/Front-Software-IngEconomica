import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height - 7;

export const styles = StyleSheet.create({
  mainPage: {
    position: "relative",
    height: "100%",
    width: windowWidth,
  },
});

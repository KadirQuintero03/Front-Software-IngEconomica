import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height - 7;

export const styles = StyleSheet.create({
  mainPage: {
    height: windowHeight,
    width: windowWidth,
  },
});

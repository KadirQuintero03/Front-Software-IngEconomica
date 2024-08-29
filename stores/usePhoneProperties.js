import { Dimensions } from "react-native";

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height - 7;
export const pixels = (n = 1) => n * (windowWidth / 350);

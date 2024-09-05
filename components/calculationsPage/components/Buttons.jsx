import { Pressable, Text } from "react-native";
import useColorPalette from "../../../stores/useColorPalette";
import { styles1 } from "./buttonsStyles";

export function Button1({ text = "Template", pressed, dissable = false }) {
  return (
    <Pressable
      disabled={dissable}
      onPress={pressed}
      style={{
        ...styles1.btn,
        backgroundColor: dissable
          ? useColorPalette(3, 1)
          : useColorPalette(1, 1),
      }}
    >
      <Text style={styles1.txt}>{text}</Text>
    </Pressable>
  );
}

import { Pressable, Text } from "react-native";
import useColorPalette from "../../../stores/useColorPalette";
import { styles1 } from "./buttonsStyles";

export function Button1({ text = "Template", pressed }) {
  return (
    <Pressable
      onPress={pressed}
      style={{ ...styles1.btn, backgroundColor: useColorPalette(1, 1) }}
    >
      <Text style={styles1.txt}>{text}</Text>
    </Pressable>
  );
}

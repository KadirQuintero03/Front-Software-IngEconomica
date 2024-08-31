import { View } from "react-native";
import { styles } from "./quickActionsStyles";
import { GridIcon } from "../../icons/Icons";
import { pixels } from "../../../stores/usePhoneProperties";
import useColorPalette from "../../../stores/useColorPalette";

export default function QuickActions() {
  return (
    <View style={{ ...styles.box, backgroundColor: useColorPalette(1, 0.9) }}>
      <GridIcon style={styles.icon} size={pixels(28)} />
    </View>
  );
}

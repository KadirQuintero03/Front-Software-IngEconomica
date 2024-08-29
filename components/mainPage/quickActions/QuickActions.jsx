import { View } from "react-native";
import { styles } from "./quickActionsStyles";
import { GridIcon } from "../../icons/Icons";
import { pixels } from "../../../stores/usePhoneProperties";

export default function QuickActions() {
  return (
    <View style={styles.box}>
      <GridIcon style={styles.icon} size={pixels(28)} />
    </View>
  );
}

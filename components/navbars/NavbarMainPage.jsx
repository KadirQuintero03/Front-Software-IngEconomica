import { Pressable, Text, View } from "react-native";
import { styles } from "./navbarMainPageStyles";
import { BarsIcon, LockIcon } from "../icons/Icons";
import { pixels } from "../../stores/usePhoneProperties";

export default function NavbarMainPage({ onPressed }) {
  return (
    <View style={styles.navbar}>
      <Pressable onPress={onPressed}>
        <BarsIcon style={{ color: "#333" }} size={pixels(24)} />
      </Pressable>
      <LockIcon style={{ color: "#333" }} size={pixels(24)} />
    </View>
  );
}

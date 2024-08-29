import { View } from "react-native";
import { styles } from "./navbarMainPageStyles";
import { BarsIcon, LockIcon } from "../icons/Icons";
import { pixels } from "../../stores/usePhoneProperties";

export default function NavbarMainPage() {
  return (
    <View style={styles.navbar}>
      <BarsIcon style={{ color: "#333" }} size={pixels(24)} />
      <LockIcon style={{ color: "#333" }} size={pixels(24)} />
    </View>
  );
}

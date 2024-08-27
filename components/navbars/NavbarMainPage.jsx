import { View } from "react-native";
import { styles } from "./navbarMainPageStyles";
import { BarsIcon, LockIcon } from "../icons/Icons";

export default function NavbarMainPage() {
  return (
    <View style={styles.navbar}>
      <BarsIcon style={{ color: "#333" }} />
      <LockIcon style={{ color: "#333" }} />
    </View>
  );
}

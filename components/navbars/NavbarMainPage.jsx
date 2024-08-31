import { Pressable, Text, View } from "react-native";
import { styles } from "./navbarMainPageStyles";
import { BarsIcon, LockIcon } from "../icons/Icons";
import { pixels } from "../../stores/usePhoneProperties";

export default function NavbarMainPage({ pressed, onPressed }) {
  return (
    <View style={styles.navbar}>
      <Pressable
        onPress={onPressed}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#00000026" : undefined },
        ]}
      >
        <BarsIcon
          style={{ color: pressed ? "#fff" : "#333" }}
          size={pixels(24)}
        />
      </Pressable>
      <LockIcon style={{ color: "#333" }} size={pixels(24)} />
    </View>
  );
}

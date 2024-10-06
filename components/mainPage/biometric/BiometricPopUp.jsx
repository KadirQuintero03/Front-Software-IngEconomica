import { Pressable, Text, View } from "react-native";
import { styles } from "./biometricStyles";
import { FingerIcon } from "../../icons/Icons";
import useColorPalette from "../../../stores/useColorPalette";
import { pixels } from "../../../stores/usePhoneProperties";

export default function BiometricPopUp({ onAgree, onCancel }) {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <FingerIcon
          size={pixels(42)}
          style={{ color: useColorPalette(1, 0.8) }}
        />
        <Text style={styles.title}> Activa la huella </Text>
        <Text style={styles.txt}>
          Ingresa a la aplicación de manera fácil y segura.
        </Text>
        <View style={styles.btnBox}>
          <Pressable
            style={{
              ...styles.btn,
              backgroundColor: useColorPalette(1, 1),
            }}
            onPress={onAgree}
          >
            <Text style={styles.txtBtn}>Aceptar</Text>
          </Pressable>
          <Pressable
            style={{ ...styles.btn, backgroundColor: "#eb4034" }}
            onPress={onCancel}
          >
            <Text style={styles.txtBtn}>Cancelar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

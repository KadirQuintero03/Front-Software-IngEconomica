import { View, Text, Image, TextInput, Pressable } from "react-native";
import { styles } from "../public/loginPageStyle";
import logocarter from "../../assets/logocarter.png";
import { PhoneIcon, LockIcon } from "../../components/icons/Icons";

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logocarter}></Image>

      <View style={styles.inputContainer}>
        <PhoneIcon style={styles.icon} />
        <TextInput
          placeholder="Número de Teléfono"
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <LockIcon style={styles.icon} />
        <TextInput
          placeholder="Contraseña"
          secureTextEntry
          style={styles.input}
        />
      </View>

      <Pressable style={styles.btnLogin}>
        <Text style={styles.txtLogin}>Iniciar sesion</Text>
      </Pressable>

      <Text style={styles.txtMsg}>¿Olvidaste tu contraseña?</Text>
      <Text style={styles.txtMsg}>
        Presiona{" "}
        <Text style={{ color: "#022a9b", fontWeight: "bold" }}>aquí</Text>
      </Text>
    </View>
  );
}

import { View, Text, Image, TextInput, Pressable } from "react-native";

import logocarter from "../../assets/logocarter.png";
import { styles } from "../public/createAccountStyle";

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logocarter}></Image>

      <TextInput
        placeholder="Número de Identificación"
        style={styles.input}
      ></TextInput>

      <TextInput placeholder="Nombre" style={styles.input}></TextInput>

      <TextInput placeholder="Apellido" style={styles.input}></TextInput>

      <TextInput
        placeholder="Correo Electrónico"
        keyboardType="email-address"
        style={styles.input}
      ></TextInput>

      <TextInput
        placeholder="Número de Teléfono"
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput placeholder="Contraseña" style={styles.input}></TextInput>

      <Pressable style={styles.btnCreateAccount}>
        <Text style={styles.txtCreateAccount}>Crear Cuenta</Text>
      </Pressable>

      <Text style={styles.txtMsg}>¿Ya tienes una cuenta?</Text>
      <Text style={styles.txtMsg}>
        Presiona{" "}
        <Text style={{ color: "#022a9b", fontWeight: "bold" }}>aquí</Text>
      </Text>
    </View>
  );
}

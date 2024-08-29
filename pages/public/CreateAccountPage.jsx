import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";

import logocarter from "../../assets/logocarter.png";

export default function LoginPage() {
  return (
    <View style={styles.contain}>
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

      <Pressable style={styles.btnCrearCuenta}>
        <Text style={styles.txtCrearCuenta}>Crear Cuenta</Text>
      </Pressable>

      <Text style={styles.txtMsg}>¿Ya tienes una cuenta?</Text>
      <Text style={styles.txtMsg}>
        Presiona{" "}
        <Text style={{ color: "#022a9b", fontWeight: "bold" }}>aquí</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contain: {
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 250,
    height: 250,
    marginBottom: 50,
  },

  txtMsg: {
    fontSize: 20,
    textAlign: "center",
  },

  input: {
    height: 40,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: 350,
    color: "#000",
    fontSize: 20,
  },

  txtCrearCuenta: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },

  btnCrearCuenta: {
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    padding: 12,
    width: 350,
  },
});

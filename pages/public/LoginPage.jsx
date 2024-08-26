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
      {/* <Text
        style={{
          color: "#022a9b",
          fontWeight: "900",
          fontSize: 40,
          marginBottom: 60,
          marginTop: -20,
        }}
      >
        Inicio de Sesion
      </Text> */}

      <Image style={styles.logo} source={logocarter}></Image>

      <TextInput
        placeholder="Número de Teléfono"
        keyboardType="numeric"
        style={styles.input}
      ></TextInput>

      <TextInput placeholder="Contraseña" style={styles.input}></TextInput>

      <Pressable style={styles.btnIniciarSesion}>
        <Text style={styles.txtIniciarSesion}>Iniciar sesion</Text>
      </Pressable>

      <Text style={styles.txtMsg}>¿Olvidaste tu contraseña?</Text>
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
    marginBottom: 70,
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

  txtIniciarSesion: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },

  btnIniciarSesion: {
    marginTop: 65,
    marginBottom: 65,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    padding: 12,
    width: 350,
  },
});

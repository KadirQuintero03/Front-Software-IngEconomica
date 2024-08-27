import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";

import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";

export default function HomePage() {
  const router = useRouter();
  return (
    <View>
      <Image style={styles.bg1} source={bg1}></Image>
      <Image style={styles.bg2} source={bg2}></Image>

      <View>
        <Text style={styles.txtSlogan}>Lo hacemos fácil para ti.</Text>
        <Text style={styles.txtSlogan}>
          Tu dinero y movimientos seguros con tu cuenta{" "}
          <Text style={{ color: "#022a9b", fontWeight: "bold" }}>
            FinanceFlow
          </Text>
        </Text>

        <Pressable
          style={styles.btnCrearCuenta}
          onPress={() => router.navigate("./_createaccount")}
        >
          <Text style={styles.txtCrearCuenta}>Crear cuenta</Text>
        </Pressable>

        <Pressable
          style={styles.btnIniciarSesion}
          onPress={() => router.navigate("./_loginpage")}
        >
          <Text style={styles.txtIniciarSesion}>Iniciar sesion</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txtSlogan: {
    fontSize: 24,
    textAlign: "center",
  },

  txtCrearCuenta: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },

  btnCrearCuenta: {
    marginTop: 55,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    padding: 12,
  },

  txtIniciarSesion: {
    fontSize: 20,
    color: "#022a9b",
    fontWeight: "bold",
  },

  btnIniciarSesion: {
    backgroundColor: "#fff",
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "#022a9b",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    padding: 12,
    marginTop: 16,
  },

  bg1: {
    width: 360,
    height: 360,
    zIndex: 10,
  },

  bg2: {
    width: 700,
    height: 100,
    zIndex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    marginHorizontal: -12,
  },
});

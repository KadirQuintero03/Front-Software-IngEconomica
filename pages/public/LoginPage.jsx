import { View, Text, Image, TextInput, Pressable, Alert } from "react-native";
import { styles } from "../public/loginPageStyle";
import logocarter from "../../assets/logocarter.png";
import { PhoneIcon, LockIcon, FingerIcon } from "../../components/icons/Icons";
import { useEffect, useState } from "react";
import { login } from "../../services/LoginServices";
import { setCredentials } from "../../stores/useUser";
import useColorPalette from "../../stores/useColorPalette";
import * as LocalAuthentication from "expo-local-authentication";
import * as SecureStore from "expo-secure-store";
import { useRouter } from "expo-router";

export default function LoginPage() {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const fingerColor = useColorPalette(2, 1);
  const router = useRouter();

  useEffect(() => {
    biometricVerification();
  }, []);

  const biometricVerification = async () => {
    //const compatible = await LocalAuthentication.hasHardwareAsync();
    const hasCredentials = await SecureStore.getItemAsync("phoneNumber");
    console.log(hasCredentials);
    setIsBiometricSupported(hasCredentials != null);
  };

  const handleLogin = async (pn = phoneNumber, ps = password) => {
    try {
      // const response = await login({
      //   phoneNumber: pn,
      //   password: ps,
      // });

      // if ("error" in response) {
      //   Alert.alert("Alerta", response.error);
      //   return;
      // }

      setCredentials(pn, ps);

      router.navigate("./_mainPage");
    } catch (error) {
      console.log("handleLogin: " + error);
    }
  };

  function onAuthenticate() {
    const auth = LocalAuthentication.authenticateAsync({
      promptMessage: "Inicia sesion con tu huella",
      fallbackLabel: "Ingrese Contraseña",
    });

    auth.then(async (result) => {
      const phoneNumberLocal = await SecureStore.getItemAsync("phoneNumber");
      const passwordLocal = await SecureStore.getItemAsync("password");

      if (result.success) handleLogin(phoneNumberLocal, passwordLocal);
    });
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logocarter}></Image>

      <View style={styles.inputContainer}>
        <PhoneIcon style={styles.icon} />
        <TextInput
          placeholder="Número de Teléfono"
          keyboardType="numeric"
          onChangeText={setPhoneNumber}
          value={phoneNumber}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <LockIcon style={styles.icon} />
        <TextInput
          placeholder="Contraseña"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
          style={styles.input}
        />
      </View>

      <Pressable
        onPress={() => handleLogin()}
        style={
          (({ pressed }) => [
            { backgroundColor: pressed ? "#00000026" : undefined },
          ],
          styles.btnLogin)
        }
      >
        <Text style={styles.txtLogin}>Iniciar sesion</Text>
      </Pressable>

      <Text style={styles.txtMsg}>¿Olvidaste tu contraseña?</Text>
      <Text style={styles.txtMsg}>
        Presiona{" "}
        <Text
          onPress={() => console.log("*forgot password*")}
          style={{
            color: "#022a9b",
            fontWeight: "bold",
            textDecorationLine: "underline",
          }}
        >
          aquí
        </Text>
      </Text>

      {isBiometricSupported && (
        <Pressable
          onPress={onAuthenticate}
          style={{
            ...styles.fingerContainer,
            backgroundColor: fingerColor,
          }}
        >
          <FingerIcon />
        </Pressable>
      )}
    </View>
  );
}

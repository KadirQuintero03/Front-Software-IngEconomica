import { View, Text, Image, TextInput, Pressable, Alert } from "react-native";
import { styles } from "../public/loginPageStyle";
import logocarter from "../../assets/logocarter.png";
import { PhoneIcon, LockIcon } from "../../components/icons/Icons";
import { useState } from "react";
import { login } from "../../services/LoginServices";
import { useRouter } from "expo-router";

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await login({
        phoneNumber: phoneNumber,
        password: password,
      });

      if (response.hasOwnProperty("error")) {
        Alert.alert("Error", response.error);
      }

      router.navigate("./_mainPage");
    } catch (error) {
      console.log(error);
    }
  };

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
        onPress={handleLogin}
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
          style={{
            color: "#022a9b",
            fontWeight: "bold",
            textDecorationLine: "underline",
          }}
        >
          aquí
        </Text>
      </Text>
    </View>
  );
}

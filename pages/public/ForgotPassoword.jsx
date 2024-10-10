import { Alert, Image, Pressable, Text, TextInput, View } from "react-native";
import passwordPng from "../../assets/password.png";
import { styles } from "./ForgotPassword";
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/forgotPassword/forgotPassword";
import { useRouter } from "expo-router";

export const ForgotPasswordPage = () => {
  const [input, setInput] = useState("");
  const { error, loading, data, triggerFetch } = useFetch(input);

  const router = useRouter();

  useEffect(() => {
    if (error) {
      Alert.alert("Error", error);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      Alert.alert("Éxito", data.message, [
        {
          text: "OK",
          onPress: () => {
            router.navigate("./_loginpage");
          },
        },
      ]);
    }
  }, [data, router]);

  const handleForgotPassword = async () => {
    if (!input)
      return alert("Por favor, ingrese su número de teléfono o correo");

    await triggerFetch({ input });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>¿Olvidaste tu contraseña?</Text>
      </View>
      <View>
        <Image style={styles.logo} source={passwordPng}></Image>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Número de Teléfono o Correo"
          style={styles.input}
          onChangeText={(newText) => setInput(newText)}
          value={input}
        ></TextInput>
      </View>

      <Text style={styles.txtMsg}>
        Ingresa tu número de teléfono o correo, para que recibir un correo de
        recuperación
      </Text>

      <Pressable
        onPress={() => handleForgotPassword()}
        style={
          (({ pressed }) => [
            { backgroundColor: pressed ? "#00000026" : undefined },
            styles.btnForgot,
          ],
          styles.btnForgot)
        }
      >
        <Text style={styles.txtForgot}>Recuperar contraseña</Text>
      </Pressable>

      {loading && <Text>Cargando...</Text>}
    </View>
  );
};

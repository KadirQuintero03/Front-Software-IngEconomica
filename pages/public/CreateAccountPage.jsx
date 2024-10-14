import { View, Text, Image, TextInput, Pressable, Alert } from "react-native";
import { PhoneIcon, LockIcon, UserIcon } from "../../components/icons/Icons";
import logocarter from "../../assets/logocarter.png";
import { styles } from "../public/createAccountStyle";
import React, { useState } from "react";
import { createUser } from "../../services/RegisterServices";
import { Link, useRouter } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function LoginPage() {
  const [id, setId] = useState("");
  const [name, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const CreateAccount = async () => {
    const newUser = {
      id,
      name,
      lastName,
      email,
      phoneNumber,
      password,
    };

    try {
      const createdUser = await createUser(newUser);

      if (response.hasOwnProperty("error")) {
        Alert.alert("Alerta", createdUser.error);
        return;
      }

      router.navigate("./_loginpage");
    } catch (error) {
      console.log("create user" + error);
    }
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Image style={styles.logo} source={logocarter}></Image>

        <View style={styles.inputContainer}>
          <UserIcon style={styles.icon} />
          <TextInput
            placeholder="Número de Identificación"
            style={styles.input}
            value={id}
            onChangeText={setId}
          ></TextInput>
        </View>

        <View style={styles.inputContainer}>
          <UserIcon style={styles.icon} />
          <TextInput
            placeholder="Nombre"
            style={styles.input}
            value={name}
            onChangeText={setFirstName}
          ></TextInput>
        </View>

        <View style={styles.inputContainer}>
          <UserIcon style={styles.icon} />
          <TextInput
            placeholder="Apellido"
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
          ></TextInput>
        </View>

        <View style={styles.inputContainer}>
          <UserIcon style={styles.icon} />
          <TextInput
            placeholder="Correo Electrónico"
            keyboardType="email-address"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          ></TextInput>
        </View>

        <View style={styles.inputContainer}>
          <PhoneIcon style={styles.icon} />
          <TextInput
            placeholder="Número de Teléfono"
            keyboardType="numeric"
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <View style={styles.inputContainer}>
          <LockIcon style={styles.icon} />
          <TextInput
            placeholder="Contraseña"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          ></TextInput>
        </View>

        <Pressable style={styles.btnCreateAccount} onPress={CreateAccount}>
          <Text style={styles.txtCreateAccount}>Crear Cuenta</Text>
        </Pressable>

        <Text style={styles.txtMsg}>¿Ya tienes una cuenta?</Text>
        <Text style={styles.txtMsg}>
          Presiona{" "}
          <Link href="./_loginpage">
            <Text style={{ color: "#022a9b", fontWeight: "bold" }}>aquí</Text>
          </Link>
        </Text>
      </View>
    </SafeAreaProvider>
  );
}

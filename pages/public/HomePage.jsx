import { Text, View, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "./homePageStyle.js";

import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";

export default function HomePage() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.containerimg}>
        <Image style={styles.bg1} source={bg1}></Image>
        <Image style={styles.bg2} source={bg2}></Image>
      </View>

      <View>
        <Text style={styles.txtSlogan}>Lo hacemos fácil para ti.</Text>
        <Text style={styles.txtSlogan}>
          Tu dinero y movimientos seguros con tu cuenta{" "}
          <Text style={{ color: "#022a9b", fontWeight: "bold" }}>
            FinanceFlow
          </Text>
        </Text>

        <Pressable
          style={styles.btnCreateAccount}
          onPress={() => router.navigate("./_createaccount")}
        >
          <Text style={styles.txtCreateAccount}>Crear cuenta</Text>
        </Pressable>

        <Pressable
          style={styles.btnLogin}
          onPress={() => router.navigate("./_loginpage")}
        >
          <Text style={styles.txtLogin}>Iniciar sesion</Text>
        </Pressable>
      </View>
    </View>
  );
}

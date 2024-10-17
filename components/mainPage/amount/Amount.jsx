import { Alert, Pressable, Text, View } from "react-native";
import { styles } from "./amountStyles";
import { ArrowRight } from "../../icons/Icons";
import Svg, { Polygon } from "react-native-svg";
import { pixels } from "../../../stores/usePhoneProperties";
import { getBalance, getUser } from "../../../stores/useUser";

export default function Amount({ size = 420 }) {
  const points = [
    `${size / 2},75`,
    `${size},${size * 0.25}`,
    `${size},${size * 0.75}`,
    `${size / 2},${size - 75}`,
    `0,${size * 0.75}`,
    `0,${size * 0.25}`,
  ].join(" ");

  function amountUser() {
    return getBalance()
  }

  function seeAccount() {
    const user = getUser();
    Alert.alert(
      "Usuario",
      `Nombre: ${user.name} ${user.lastName}\nTelefono: ${user.phoneNumber}\nSaldo: $${parseFloat(user.balance).toLocaleString("de-DE")}`
    );
  }

  return (
    <View style={styles.container}>
      <Svg style={styles.svg} height={size} width={size}>
        <Polygon points={points} fill={"#FC5975"} />
      </Svg>

      <Text style={styles.title}>Cuenta de Ahorros</Text>
      <Text style={styles.amount}>
        ${" "}
        {parseFloat(parseFloat(getBalance()).toFixed(2)).toLocaleString(
          "de-DE"
        )}
      </Text>
      <Pressable style={styles.accountBox} onPress={() => seeAccount()}>
        <Text style={styles.accountTitle}>Ver cuenta</Text>
        <ArrowRight style={styles.accountIcon} size={pixels(11)} />
      </Pressable>
    </View>
  );
}

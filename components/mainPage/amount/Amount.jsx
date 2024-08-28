import { Text, View } from "react-native";
import { styles } from "./amountStyles";
import { ArrowRight } from "../../icons/Icons";
import Svg, { Polygon } from "react-native-svg";
import { pixels } from "../../../stores/usePhoneProperties";

export default function Amount({ size = 420 }) {
  const points = [
    `${size / 2},75`,
    `${size},${size * 0.25}`,
    `${size},${size * 0.75}`,
    `${size / 2},${size - 75}`,
    `0,${size * 0.75}`,
    `0,${size * 0.25}`,
  ].join(" ");

  return (
    <View style={styles.container}>
      <Svg style={styles.svg} height={size} width={size}>
        <Polygon points={points} fill={"#FC5975"} />
      </Svg>

      <Text style={styles.title}>Cuenta de Ahorros</Text>
      <Text style={styles.amount}>$ 0,00</Text>
      <View style={styles.accountBox}>
        <Text style={styles.accountTitle}>Ver cuenta</Text>
        <ArrowRight style={styles.accountIcon} size={pixels(11)} />
      </View>
    </View>
  );
}

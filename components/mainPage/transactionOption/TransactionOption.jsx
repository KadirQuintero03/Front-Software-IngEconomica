import { ScrollView, View, Text } from "react-native";
import { styles } from "./transactionOptionStyles";
import { CashIcon } from "../../icons/Icons";
import { pixels } from "../../../stores/usePhoneProperties";

export default function TransactionOption() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transacciones</Text>
      <ScrollView horizontal={true}>
        {Array.from(
          ["Prestamos", "Ver movimientos", "Verificar transacciones"],
          (v, i) => ({ id: i, name: v })
        ).map((v) => {
          return (
            <View style={styles.option} key={v.id}>
              <CashIcon style={styles.icon} size={pixels(30)} />
              <Text style={styles.text}>{v.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

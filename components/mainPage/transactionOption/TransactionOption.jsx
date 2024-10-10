import { ScrollView, View, Text, Pressable } from "react-native";
import { styles } from "./transactionOptionStyles";
import { router } from "expo-router";
import {
  options,
  setSelectedOption,
} from "../../../stores/useTransactionOptions";

export default function TransactionOption() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transacciones</Text>
      <ScrollView horizontal={true}>
        {options.map((op) => {
          return (
            <Pressable
              style={styles.option}
              key={op.id}
              onPress={() => {
                setSelectedOption(op.id);
                router.navigate("./_transactionPage");
              }}
            >
              {op.icon}
              <Text style={styles.text}>{op.title}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

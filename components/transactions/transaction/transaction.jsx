import { Image, ScrollView, Text, View } from "react-native";
import { Input1 } from "../../calculationsPage/components/Inputs";
import illustration from "./../../../assets/prestamoIlustracion1.png";
import { useState } from "react";
import { styles } from "./transactionStyles";
import { Button1 } from "../../calculationsPage/components/Buttons";
import { userTransaction } from "../../../services/transactionService/transactionServices";
import { useRouter } from "expo-router";

export default function Transaction() {
  const [numberPhone, setNumberPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");

  const router = useRouter();

  const makeTransaction = async () => {
    const newTransancion = {
      numberPhone,
      amount,
      reason,
    };

    try {
      const transaction = await userTransaction(newTransancion);
      Alert.alert("Transaccion realizada con exito");
      router.navigate("./_receiptTransaction");
    } catch (error) {
      Alert.alert(error);
    }
  };

  return (
    <View style={styles.page}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Image style={styles.img} source={illustration}></Image>
          <View style={styles.headerSeparate}></View>
          <View style={styles.container}>
            <Text style={styles.label}>Disponible:</Text>
            <Text style={styles.text}>$ 200.000</Text>
            <View style={styles.underline} />
          </View>
        </View>
        <View style={styles.interesBox}>
          <Input1
            name="Numero telefono"
            placeHolder="Digite el numero"
            type="number"
            value={numberPhone}
            onChangeText={setNumberPhone}
          />

          <Input1
            name="Cantidad"
            placeHolder="Digite la cantidad"
            type="number"
            value={amount}
            onChangeText={setAmount}
          />

          <Input1
            name="Motivo"
            placeHolder="Digite un motivo (opcional)"
            type="text"
            value={reason}
            onChangeText={setReason}
          />
        </View>
      </ScrollView>
      <Button1 text="Transferir" pressed={makeTransaction} />
    </View>
  );
}

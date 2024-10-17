import { Image, ScrollView, Text, View, Alert } from "react-native";
import { Input1 } from "../../calculationsPage/components/Inputs";
import illustration from "./../../../assets/prestamoIlustracion1.png";
import { useState } from "react";
import { styles } from "./transactionStyles";
import { Button1 } from "../../calculationsPage/components/Buttons";
import { userTransaction } from "../../../services/transactionService/transactionServices";
import { useRouter } from "expo-router";
import {
  getBalance,
  getPhoneNumber,
  setUser,
  getUser,
} from "../../../stores/useUser";
import { validateInputs } from "../../../utils/validateInput";

export default function Transaction() {
  const [destination, setdestination] = useState("");
  const [omuntMovement, setomuntMovement] = useState("");
  const [description, setdescription] = useState("");

  const router = useRouter();
  const phoneNumber = getPhoneNumber();
  const balance = getBalance();
  let maxTransfer;

  const newTransancion = [phoneNumber, omuntMovement, description, destination];

  const makeTransaction = async () => {
    const validate = validateInputs(newTransancion);

    if (validate) {
      return Alert.alert("Por favor, rellene todos los campos");
    }

    if (omuntMovement > balance) {
      return Alert.alert("Error, saldo insuficiente.");
    }

    if (destination == phoneNumber) {
      return Alert.alert("Error, no puedes enviarte dinero a ti mismo.");
    }

    if (parseInt(maxTransfer) > 3000000) {
      return Alert.alert(
        "Error, acaba de superar el tope de transferencia permitido."
      );
    }

    try {
      const transferJson = {
        phoneNumber,
        omuntMovement,
        description,
        destination,
      };
      const transaction = await userTransaction(transferJson);

      if (transaction.hasOwnProperty("error")) {
        Alert.alert("Alerta", transaction.error);
        return;
      }

      const currentBalance = parseInt(getBalance());
      const updatedBalance = currentBalance - parseInt(omuntMovement);

      setUser({
        ...getUser(),
        balance: updatedBalance.toString(),
      });

      Alert.alert("Transaccion realizada con exito");
      router.navigate("./_receiptTransaction");
    } catch (error) {
      console.log("Transaction" + error);
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
            <Text style={styles.text}>
              $ {parseFloat(getBalance()).toLocaleString("de-DE")}
            </Text>
            <View style={styles.underline} />
          </View>
        </View>
        <View style={styles.interesBox}>
          <Input1
            name="Numero telefono"
            placeHolder="Digite el numero"
            type="number"
            value={destination}
            onChangeNumber={(val) => setdestination(val)}
          />

          <Input1
            name="Cantidad"
            placeHolder="Digite la cantidad"
            type="number"
            value={parseInt(omuntMovement)}
            onChangeNumber={(val) => setomuntMovement(parseInt(val))}
          />

          <Input1
            name="Motivo"
            placeHolder="Digite un motivo (opcional)"
            type="text"
            value={description}
            onChangeNumber={(val) => setdescription(val)}
          />
        </View>
      </ScrollView>
      <Button1 text="Transferir" pressed={makeTransaction} />
    </View>
  );
}

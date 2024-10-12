import { Image, ScrollView, Text, View } from "react-native";
import illustration from "./../../../assets/prestamoIlustracion1.png";
import { styles } from "./receiptTransactionStyles";
import { Button1 } from "../../calculationsPage/components/Buttons";
import { useRouter } from "expo-router";
import { getData } from "../../../stores/useUser";

export default function ReceiptTransaction() {
  const router = useRouter();
  const data = getData();

  const finished = () => {
    router.navigate("./_mainPage");
  };

  return (
    <View style={styles.page}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Image style={styles.img} source={illustration}></Image>
          <View style={styles.interesBox}>
            <Text style={styles.label}>Destino</Text>
            <Text style={styles.text}> {data.name} {data.lastName} </Text>
            <View style={styles.underline} />
          </View>
          <View style={styles.interesBox}>
            <Text style={styles.label}>Valor de la transaccion</Text>
            <Text style={styles.text}> {data.omuntMovement} </Text>
            <View style={styles.underline} />
          </View>
          <View style={styles.interesBox}>
            <Text style={styles.label}>Motivo</Text>
            <Text style={styles.text}> {data.description} </Text>
            <View style={styles.underline} />
          </View>
          <View style={styles.interesBox}>
            <Text style={styles.label}>Fecha de transferencia</Text>
            <Text style={styles.text}> {data.dateMovement} </Text>
            <View style={styles.underline} />
          </View>
          <View style={styles.interesBox}>
            <Text style={styles.label}>Numero de transferencia</Text>
            <Text style={styles.text}> {data.idMovement} </Text>
            <View style={styles.underline} />
          </View>
          <Button1 text="Finalizar" pressed={finished} />
        </View>
      </ScrollView>

    </View>
  );
}

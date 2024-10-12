import { Alert, Image, ScrollView, Text, View } from "react-native";
import { Input1, Input2 } from "../../calculationsPage/components/Inputs";
import { styles } from "./prestamoStyles";
import { pixels } from "../../../stores/usePhoneProperties";
import illustration from "./../../../assets/prestamoIlustracion1.png";
import { useEffect, useState } from "react";
import { values } from "../../../utils/interesConversion";
import { Button1 } from "../../calculationsPage/components/Buttons";
import { request } from "../../../services/PrestamoServices";
import { getCredentials } from "../../../stores/useUser";

export default function Prestamo() {
  const [credit, setCredit] = useState({
    userId: "",
    amountApproved: undefined,
    interestType: undefined,
    interestRate: undefined,
    quotesNumber: undefined,
    period: undefined,
  });

  useEffect(() => {
    const credentials = getCredentials();
    setCredit({ ...credit, userId: credentials.phoneNumber });
  }, []);

  function handleInput(name, value) {
    setCredit({ ...credit, [name]: value });
  }

  function onChangeSelected(key) {
    const selected = values.find((v) => v.key == key);
    handleInput("period", selected.value);
  }

  async function onRequest() {
    try {
      console.log(credit);
      const response = await request(credit);

      if (response.hasOwnProperty("error")) {
        Alert.alert("Alerta", response.error);
        return;
      }

      Alert.alert("Prestamo", response.message);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.page}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Image style={styles.img} source={illustration}></Image>
          <View style={styles.headerSeparate}></View>
          <Input1
            name="Monto"
            fontSize={pixels(20)}
            placeHolder="$ 200.000"
            type="number"
            value={credit.amountApproved}
            onChangeNumber={(value) => handleInput("amountApproved", value)}
            styles={{
              paddingLeft: pixels(20),
              paddingTop: pixels(5),
              paddingRight: pixels(15),
            }}
          />
        </View>
        <View style={styles.interesBox}>
          <Text style={styles.interesTitle}>Interes</Text>
          <View style={styles.interesType}>
            <Input2
              placeHolder="Tipo Interes"
              selected={credit.interestType}
              onChangeSelected={(value) => handleInput("interestType", value)}
              data={["Simple", "Compuesto"]}
            />
          </View>
          <View style={styles.interesBoxDouble1}>
            <Input1
              placeHolder="Tasa interes"
              type="number"
              value={credit.interestRate}
              onChangeNumber={(value) => handleInput("interestRate", value)}
            />
            <Input2
              placeHolder="Periodo"
              selected={credit.period}
              onChangeSelected={onChangeSelected}
              data={values}
            />
          </View>
          <View style={styles.interesQuote}>
            <Input1
              name="Numero Cuotas"
              placeHolder="12"
              type="number"
              value={credit.quotesNumber}
              onChangeNumber={(value) =>
                handleInput("quotesNumber", parseInt(value))
              }
            />
          </View>
        </View>
      </ScrollView>
      <Button1 text="Solicitar" pressed={onRequest} />
    </View>
  );
}

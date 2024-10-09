import { Image, Text, View } from "react-native";
import { styles } from "./prestamoStyles";

import illustration from "./../../../assets/prestamoIlustracion1.png";

import { Input1, Input2 } from "../../calculationsPage/components/Inputs";
import { pixels } from "../../../stores/usePhoneProperties";

export default function Prestamo() {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Image style={styles.img} source={illustration}></Image>
        <View style={styles.headerSeparate}></View>
        <Input1
          name="Monto"
          placeHolder="$ 200.000"
          type="number"
          fontSize={pixels(20)}
          styles={{
            paddingLeft: pixels(20),
            paddingTop: pixels(5),
            paddingRight: pixels(7),
          }}
        />
      </View>
      <View style={styles.interesBox}>
        <Text style={styles.interesTitle}>Interes</Text>
        <Input2 placeHolder="Tipo Interes" data={["Simple", "Compuesto"]} />
      </View>
    </View>
  );
}

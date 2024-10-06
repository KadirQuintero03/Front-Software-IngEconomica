import { ScrollView, View } from "react-native";
import { Button1 } from "../components/Buttons";
import { styles } from "../template/templateStyles";
import { Input1, Input2 } from "../components/Inputs";

export default function Anualidades() {
  return (
    <View style={styles.page}>
      <ScrollView style={styles.scrollView}>
        <Input2
          name="Seleccione el tipo de Anualidad"
          placeHolder="Enter value"
        />
        <View style={styles.container}>
          <Input1 name="Valor presente" placeHolder="Enter value" />
          <Input1 name="Valor futuro" placeHolder="Enter value" />
        </View>

        <Input1 name="Numero de cuotas" placeHolder="Enter value" />
        <View style={styles.container}>
          <Input1 name="Tasa de interes" placeHolder="Enter value" />
          <Input2 name="¿En que unidad?" placeHolder="Enter value" />
        </View>
        <Input2 name="¿En que unidad los periodos?" placeHolder="Enter value" />
        <View style={styles.container}>
          <Input1 name="Numero de periodo" placeHolder="Enter value" />

          <Input1 name="Periodos muertos" placeHolder="Enter value" />
        </View>
      </ScrollView>
      <Button1 text="Template" />
    </View>
  );
}

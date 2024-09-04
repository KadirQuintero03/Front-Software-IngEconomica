import { ScrollView, View } from "react-native";
import { Button1 } from "../components/Buttons";
import { styles } from "../template/templateStyles";
import { Input1, Input2 } from "../components/Inputs";

export default function CompoundInterest() {
  return (
    <View style={styles.page}>
      <ScrollView style={styles.scrollView}>
        <Input2 name="Tipo de interes" placeHolder="Enter value" />
        <Input1
          name="Capital inicial"
          placeHolder="Ingrese el capital inicial"
          value={CapitalInicial}
          onChangeNumber={(val) => setCapitalInicial(val)}
          type="numeric"
        />
        <Input1
          name="Tasa de interes"
          placeHolder="Ingrese la tasa de interes"
          value={TasaDeInteres}
          onChangeNumber={(val) => setTasaDeInteres(val / 100)}
          type="numeric"
        />
        <Input2 name="Unidad de tiempo" placeHolder="Enter value" />
        <View style={styles.container}>
          <Input1
            name="Tiempo"
            placeHolder="Ingrese un valor"
            value={Tiempo}
            onChangeNumber={(val) => setTiempo(val)}
            type="numeric"
          />
          <Input2
            name="Unidad de tiempo"
            placeHolder="Escoja un valor"
            value={UnidadDeTiempo}
            data={dataTiempo}
            onChangeSelected={getTime}
          />
        </View>
        <Input1
          name="Interes"
          placeHolder="Ingrese el Iinteres"
          value={Interes}
          onChangeNumber={(val) => setInteres(val)}
          type="numeric"
        />
        <Input1
          name="Monto futuro"
          placeHolder="Ingrese el monto futuro"
          value={MontoFuturo}
          onChangeNumber={(val) => setMontoFuturo(val)}
          type="numeric"
        />
      </ScrollView>
      <Button1 text="Calcular" pressed={Calcular} />
    </View>
  );
}

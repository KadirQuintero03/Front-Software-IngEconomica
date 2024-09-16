import { ScrollView, View, Alert } from "react-native";
import { Button1 } from "../components/Buttons";
import { styles } from "../template/templateStyles";
import { Input1, Input2 } from "../components/Inputs";
import React, { useState } from "react";
import {
  timeConversion,
  calculateSimpleInterest,
} from "../../../utils/interesSimple";

export default function InteresSimple() {
  let [CapitalInicial, setCapitalInicial] = useState(0);
  let [TasaDeInteres, setTasaDeInteres] = useState(0);
  let [MontoFuturo, setMontoFuturo] = useState(0);
  let [Interes, setInteres] = useState(0);
  let [Tiempo, setTiempo] = useState(0);
  let [tiempoDia, settiempoDia] = useState(0);
  let [tiempoMes, settiempoMes] = useState(0);
  let [tiempoAño, settiempoAño] = useState(0);
  const [UnidadDeTiempo, setUnidadDeTiempo] = useState("anual");

  let UnidadesDeTiempo = {
    dias: 365,
    meses: 12,
    semestral: 2,
    trimestral: 4,
    cuatrimestral: 3,
    bimestral: 6,
    anual: 1,
  };

  const dataTiempo = [
    { key: "1", value: "anual", time: 1 },
    { key: "2", value: "semestral", time: 2 },
    { key: "3", value: "bimestral", time: 6 },
    { key: "4", value: "trimestral", time: 4 },
    { key: "5", value: "mensual", time: 12 },
    { key: "6", value: "cuatrimestral", time: 3 },
    { key: "7", value: "dias", time: 365 },
  ];

  function getTime(data) {
    dataTiempo.map((values) =>
      values.key === data ? setUnidadDeTiempo(values.value) : false
    );
  }

  const resetFields = () => {
    setCapitalInicial(0);
    setTasaDeInteres(0);
    setMontoFuturo(0);
    setInteres(0);
    setTiempo(0);
    settiempoDia(0);
    settiempoMes(0);
    settiempoAño(0);
    setUnidadDeTiempo("anual");
  };

  timeConversion(Tiempo, tiempoDia, tiempoMes, tiempoAño, UnidadDeTiempo);

  const onPressButton = () => {
    const result = calculateSimpleInterest(
      CapitalInicial,
      TasaDeInteres,
      Tiempo,
      tiempoDia,
      tiempoMes,
      tiempoAño,
      UnidadDeTiempo,
      MontoFuturo,
      Interes,
      UnidadesDeTiempo,
      resetFields,
    );

    Alert.alert("Resultado", result);
    resetFields();
  };

  return (
    <View style={styles.page}>
      <ScrollView style={styles.scrollView}>
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
          onChangeNumber={(val) => setTasaDeInteres(val)}
          type="numeric"
        />
        <View style={styles.container}>
          <Input1
            name="Tiempo"
            placeHolder="Ingrese un valor"
            value={Tiempo}
            onChangeNumber={(val) => setTiempo(val)}
            type="numeric"
          />
          <Input2
            name="Cada cuanto"
            placeHolder="Escoja un valor"
            value={UnidadDeTiempo}
            data={dataTiempo}
            onChangeSelected={getTime}
          />
        </View>
        <Input1
          name="Días"
          placeHolder="Ingrese un valor"
          value={tiempoDia}
          onChangeNumber={(val) => settiempoDia(val)}
          type="numeric"
        />
        <Input1
          name="Meses"
          placeHolder="Ingrese un valor"
          value={tiempoMes}
          onChangeNumber={(val) => settiempoMes(val)}
          type="numeric"
        />
        <Input1
          name="Años"
          placeHolder="Ingrese un valor"
          value={tiempoAño}
          onChangeNumber={(val) => settiempoAño(val)}
          type="numeric"
        />
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
      <Button1 text="Calcular" pressed={() => onPressButton()} />
    </View>
  );
}

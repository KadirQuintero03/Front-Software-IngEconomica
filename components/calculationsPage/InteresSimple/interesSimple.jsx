import { ScrollView, View } from "react-native";
import { Button1 } from "../components/Buttons";
import { styles } from "../template/templateStyles";
import { Input1, Input2 } from "../components/Inputs";
import React, { useState } from "react";

export default function InteresSimple() {
  let [CapitalInicial, setCapitalInicial] = useState(0);
  let [TasaDeInteres, setTasaDeInteres] = useState(0 / 100);
  let [MontoFuturo, setMontoFuturo] = useState(0);
  let [Interes, setInteres] = useState(0);
  let [tiempoDia, setTiempoDia] = useState(0);
  let [tiempoMes, setTiempoMes] = useState(0);
  let [tiempoAño, setTiempoAño] = useState(0);
  let [Tiempo, setTiempo] = useState("0");
  const [UnidadDeTiempo, setUnidadDeTiempo] = useState("1");

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

  const Calcular = () => {
    let TiempoMod = conversionTiempo(Tiempo, UnidadDeTiempo);

    //Calcular Interes✅
    if (CapitalInicial !== 0 && MontoFuturo !== 0 && TiempoMod === 0 && TasaDeInteres === 0) {
      Interes = MontoFuturo - CapitalInicial;
      return console.log("El interes simple es de: ", Interes);
    }

    if (TasaDeInteres !== 0 && CapitalInicial !== 0 && TiempoMod !== 0 && Interes === 0) {
      Interes = CapitalInicial * TasaDeInteres * TiempoMod;
      MontoFuturo = parseInt(CapitalInicial) + parseInt(Interes);
      return console.log(
        "El interes simple es dee: ",
        Interes,
        " Y el valor futuro es de: ",
        MontoFuturo
      );
    }

    //Calcular capital inicial✅
    if (Interes !== 0 && TiempoMod !== 0 && TasaDeInteres !== 0 && MontoFuturo === 0) {
      CapitalInicial = Interes / (TasaDeInteres * TiempoMod);
      return console.log("El capital inicial es de: ", CapitalInicial);
    }

    if (MontoFuturo !== 0 && TiempoMod !== 0 && TasaDeInteres !== 0 && Interes === 0) {
      CapitalInicial = MontoFuturo / (1 + TiempoMod * TasaDeInteres);
      return console.log("El capital inicial es dee: ", CapitalInicial);
    }

    if (Interes !== 0 && MontoFuturo !== 0 && TasaDeInteres === 0 && CapitalInicial === 0) {
      CapitalInicial = MontoFuturo - Interes;
      return console.log("El capital inicial es deee: ", CapitalInicial);
    }

    //Calcular tasa de interes
    if (CapitalInicial !== 0 && MontoFuturo !== 0 && TiempoMod !== 0 && Interes === 0) {
      Interes = MontoFuturo - CapitalInicial;
      TasaDeInteres = (Interes / (CapitalInicial * TiempoMod)) * 100;
      return console.log("La tasa de interes es de: ", TasaDeInteres, "%");
    }

    if (Interes !== 0 && TiempoMod !== 0 && CapitalInicial !== 0 && MontoFuturo === 0) {
      MontoFuturo = parseInt(CapitalInicial) + parseInt(Interes);
      TasaDeInteres = ((MontoFuturo / CapitalInicial - 1) / TiempoMod) * 100;
      return console.log("La tasa de interes es dee: ", TasaDeInteres, "%");
    }

    //Calcular tiempo
    if (MontoFuturo !== 0 && CapitalInicial !== 0 && TasaDeInteres !== 0) {
      Interes = MontoFuturo - CapitalInicial;
      Tiempo = Interes / (CapitalInicial * TasaDeInteres);
      return console.log("El tiempo es de: ", Tiempo);
    }

    //Revisar
    if (CapitalInicial !== 0 && Interes !== 0 && TasaDeInteres !== 0 && UnidadDeTiempo === "" && MontoFuturo === 0) {
      MontoFuturo = parseInt(CapitalInicial) + parseInt(Interes);
      Tiempo = (MontoFuturo / CapitalInicial - 1) / TasaDeInteres;
      return console.log("El tiempo es deee: ", Tiempo);
    }

    if (CapitalInicial !== 0 && TasaDeInteres !== 0 && Interes !== 0 && UnidadDeTiempo !== "" && MontoFuturo === 0) {
      Tiempo =
        (UnidadesDeTiempo[UnidadDeTiempo] * Interes) /
        (CapitalInicial * TasaDeInteres);
      return console.log("El tiempo es dee: ", Tiempo);
    }
  };

  function conversionTiempo(Tiempo, UnidadDeTiempo) {
    if (UnidadDeTiempo === "dias") {
      return Tiempo / 365;
    }

    if (UnidadDeTiempo === "meses") {
      return Tiempo / 12;
    }

    if (UnidadDeTiempo === "semestral") {
      return Tiempo / 2;
    }

    if (UnidadDeTiempo === "trimestral") {
      return Tiempo / 4;
    }

    if (UnidadDeTiempo === "cuatrimestral") {
      return Tiempo / 3;
    }

    if (UnidadDeTiempo === "bimestral") {
      return Tiempo / 6;
    }

    if (UnidadDeTiempo === "anual") {
      return Tiempo / 1;
    }
  }

  function getTime(data) {
    dataTiempo.map((values) =>
      values.key === data ? setUnidadDeTiempo(values.value) : false
    );
  }

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

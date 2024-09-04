import { ScrollView, View } from "react-native";
import { Button1 } from "../components/Buttons";
import { styles } from "../template/templateStyles";
import { Input1, Input2 } from "../components/Inputs";
import React, { useState } from "react";

export default function InteresSimple() {
  const [CapitalInicial, setCapitalInicial] = useState("");
  const [TasaDeInteres, setTasaDeInteres] = useState("");
  const [MontoFuturo, setMontoFuturo] = useState("");
  const [Interes, setInteres] = useState("");
  const [tiempoDia, setTiempoDia] = useState("");
  const [tiempoMes, setTiempoMes] = useState("");
  const [tiempoAño, setTiempoAño] = useState("");
  const [Tiempo, setTiempo] = useState("");
  const [UnidadDeTiempo, setUnidadDeTiempo] = useState("");
  const [UnidadesDeTiempo, setUnidadesDeTiempo] = useState("");

  // TasaDeInteres = TasaDeInteres / 100;

  function CalcularInteres(
    CapitalInicial,
    TasaDeInteres,
    TiempoMod,
    MontoFuturo,
  ) {
    //Calcular interes dado el capital inicial y monto futuro.
    if (CapitalInicial !== 0 && MontoFuturo !== 0) {
      Interes = MontoFuturo - CapitalInicial;
      return console.log("El interes simple es de: ", Interes);
    }

    //Calcular interes dado el capital inicial, tasa de interes y tiempo.
    if (TasaDeInteres !== 0 && CapitalInicial !== 0 && TiempoMod !== 0) {
      Interes = CapitalInicial * TasaDeInteres * Tiempo;
      MontoFuturo = CapitalInicial + Interes;
      return console.log(
        "El interes simple es de: ",
        Interes,
        " Y el valor futuro es de: ",
        MontoFuturo,
      );
    }
  }

  function CalcularCapitalInicial(TasaDeInteres, TiempoMod, Interes) {
    //Calcular el capital inicial dado el interes, tasa de interes y tiempo.
    if (
      Interes !== 0 &&
      TiempoMod !== 0 &&
      TasaDeInteres !== 0 &&
      MontoFuturo === 0
    ) {
      CapitalInicial = Interes / (TasaDeInteres * TiempoMod);
      return console.log("El capital inicial es de: ", CapitalInicial);
    }

    //Calcular el capital inicial dado el Monto futuro, tasa de interes y tiempo.
    if (
      MontoFuturo !== 0 &&
      TiempoMod !== 0 &&
      TasaDeInteres !== 0 &&
      Interes === 0
    ) {
      CapitalInicial = MontoFuturo / (1 + TiempoMod * TasaDeInteres);
      return console.log("El capital inicial es de: ", CapitalInicial);
    }

    //Calcular el capital inicial dado el interes y el monto futuro.
    if (Interes !== 0 && MontoFuturo !== 0 && TasaDeInteres === 0) {
      CapitalInicial = MontoFuturo - Interes;
      return console.log("El capital inicial es de: ", CapitalInicial);
    }
  }

  function CalcularTasaDeInteres(MontoFuturo, CapitalInicial, TiempoMod) {
    //Calcular la tasa de interes dado Capital inicial, monto futuro y tiempo.
    if (
      CapitalInicial !== 0 &&
      MontoFuturo !== 0 &&
      TiempoMod !== 0 &&
      Interes === 0
    ) {
      //En esta condicion necesitamos el interes, así que lo calculamos.
      Interes = MontoFuturo - CapitalInicial;
      TasaDeInteres = (Interes / (CapitalInicial * TiempoMod)) * 100;
      return console.log("La tasa de interes es de: ", TasaDeInteres, "%");
    }

    //Calcular la tasa de interes dado el Capital inicial, Interes y tiempo.
    if (
      Interes !== 0 &&
      TiempoMod !== 0 &&
      CapitalInicial !== 0 &&
      MontoFuturo === 0
    ) {
      MontoFuturo = CapitalInicial + Interes;
      TasaDeInteres = ((MontoFuturo / CapitalInicial - 1) / TiempoMod) * 100;
      return console.log("La tasa de interes es de: ", TasaDeInteres, "%");
    }
  }

  function CalcularTiempo(
    MontoFuturo,
    CapitalInicial,
    TasaDeInteres,
    UnidadDeTiempo,
  ) {
    //Calculamos el tiempo dado el capital inicial, monto futuro y tasa de interes.
    if (
      MontoFuturo !== 0 &&
      CapitalInicial !== 0 &&
      TasaDeInteres !== 0 &&
      Interes === 0
    ) {
      //Dado que necesitamos saber el interes para calcular el tiempo, lo sacamos usando el CI y el MF.
      Interes = MontoFuturo - CapitalInicial;
      Tiempo = Interes / (CapitalInicial * TasaDeInteres);
      return console.log("El tiempo es de: ", Tiempo);
    }

    //Calculamos el tiempo dado el Capital inicial, tasa de interes, interes y unidad de tiempo.
    if (
      CapitalInicial !== 0 &&
      TasaDeInteres !== 0 &&
      Interes !== 0 &&
      UnidadDeTiempo !== "" &&
      MontoFuturo === 0
    ) {
      Tiempo =
        (UnidadesDeTiempo[UnidadDeTiempo] * Interes) /
        (CapitalInicial * TasaDeInteres);
      return console.log("El tiempo es dee: ", Tiempo);
    }

    //Calculamos el tiempo dado el capital inicial, tasa de interes e interes.
    if (CapitalInicial !== 0 && Interes !== 0 && TasaDeInteres !== 0) {
      MontoFuturo = CapitalInicial + Interes;
      Tiempo = (MontoFuturo / CapitalInicial - 1) / TasaDeInteres;
      return console.log("El tiempo es deee: ", Tiempo);
    }
  }

  const test = () => {
    console.log(CapitalInicial);
  };

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
          onChangeNumber={(val) => setTasaDeInteres(val)}
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
          <Input2 name="Unidad de tiempo" placeHolder="Enter value" />
        </View>
        <Input1
          name="Interes"
          placeHolder="Ingrese el Iinteres"
          value={Interes}
          onChangeNumber={(val) => setInteres(val)}
        />
        <Input1
          name="Monto futuro"
          placeHolder="Ingrese el monto futuro"
          value={MontoFuturo}
          onChangeText={setMontoFuturo}
        />
      </ScrollView>
      <Button1 text="Calcular" pressed={test} />
    </View>
  );
}

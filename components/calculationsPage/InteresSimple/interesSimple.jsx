import { ScrollView, View } from "react-native";
import { Button1 } from "../components/Buttons";
import { styles } from "../template/templateStyles";
import { Input1, Input2 } from "../components/Inputs";
import React, { useState } from "react";

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

  function conversionTiempo(Tiempo, tiempoDia, tiempoMes, tiempoAño, UnidadDeTiempo) {
    //Conversion para tiempo especifico.
    if (tiempoDia !== 0 && tiempoMes !== 0 && tiempoAño !== 0 && Tiempo === 0) {

      if (UnidadDeTiempo === "dias") {
        return ((parseInt(tiempoAño) * 365) + (parseInt(tiempoMes) * 30) + parseInt(tiempoDia)).toFixed(2);
      }

      if (UnidadDeTiempo === "meses") {
        return ((parseInt(tiempoAño) * 12) + parseInt(tiempoMes) + (parseInt(tiempoDia) / 30)).toFixed(2);
      }

      if (UnidadDeTiempo === "anual") {
        return (parseInt(tiempoAño) + (parseInt(tiempoMes) / 12) + (parseInt(tiempoDia) / 365)).toFixed(2);
      }
    }

    //Conversion para periodo de tiempo.
    if (Tiempo !== 0 && tiempoDia === 0 && tiempoMes === 0 && tiempoAño === 0) {
      if (UnidadDeTiempo === "dias") {
        return Tiempo / 365;
      }

      if (UnidadDeTiempo === "mensual") {
        return Tiempo / 12;
      }

      if (UnidadDeTiempo === "semestral") {
        return Tiempo / 2;
      }

      if (UnidadDeTiempo === "trimestral") {
        return Tiempo / 3;
      }

      if (UnidadDeTiempo === "cuatrimestral") {
        return Tiempo / 4;
      }

      if (UnidadDeTiempo === "bimestral") {
        return Tiempo / 6;
      }

      if (UnidadDeTiempo === "anual") {
        return Tiempo / 1;
      }
    }
  }

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

  const Calcular = () => {
    TasaDeInteres = TasaDeInteres / 100;

    let fieldsFilled = 0;
    if (CapitalInicial !== 0) fieldsFilled++;
    if (TasaDeInteres !== 0) fieldsFilled++;
    if (MontoFuturo !== 0) fieldsFilled++;
    if (Interes !== 0) fieldsFilled++;
    if (Tiempo !== 0) fieldsFilled++;

    // Si hay menos de 2 campos llenos, mostramos la alerta
    if (fieldsFilled < 2) {
      alert("Debe rellenar mínimo 2 campos");
      return; // Salimos de la función si no hay suficientes campos llenos
    }

    let TiempoMod = conversionTiempo(
      Tiempo,
      tiempoDia,
      tiempoMes,
      tiempoAño,
      UnidadDeTiempo
    );

    //Calcular Interes✅
    if (CapitalInicial !== 0 && MontoFuturo !== 0 && TiempoMod === 0 && TasaDeInteres === 0) {
      Interes = MontoFuturo - CapitalInicial;
      alert("El interes simple es de: " + Interes.toFixed(2));
      return resetFields();
    }

    if (TasaDeInteres !== 0 && CapitalInicial !== 0 && TiempoMod !== 0 && Interes === 0) {
      console.log("Capital Inicial: ", CapitalInicial, "Tasa de interes: ", TasaDeInteres, "TiempoMod: ", TiempoMod)
      Interes = CapitalInicial * TasaDeInteres * TiempoMod;
      MontoFuturo = parseInt(CapitalInicial) + parseInt(Interes);
      alert("El interes simple es de: " + Interes.toFixed(2) + " Y el valor futuro es de: " + MontoFuturo.toFixed(2));
      return resetFields();
    }

    //Calcular tiempo✅
    if (MontoFuturo !== 0 && CapitalInicial !== 0 && TasaDeInteres !== 0) {
      Interes = MontoFuturo - CapitalInicial;
      Tiempo = Interes / (CapitalInicial * TasaDeInteres);
      alert("El total del tiempo es: " + Tiempo.toFixed(2));
      return resetFields();
    }

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
      alert("El total del tiempo es: " + Tiempo.toFixed(2));
      return resetFields();
    }

    if (
      CapitalInicial !== 0 &&
      Interes !== 0 &&
      TasaDeInteres !== 0 &&
      UnidadDeTiempo === "" &&
      MontoFuturo === 0
    ) {
      MontoFuturo = parseInt(CapitalInicial) + parseInt(Interes);
      Tiempo = (MontoFuturo / CapitalInicial - 1) / TasaDeInteres;
      alert("El total del tiempo es: " + Tiempo.toFixed(2));
      return resetFields();
    }

    //Calcular capital inicial✅
    if (
      Interes !== 0 &&
      TiempoMod !== 0 &&
      TasaDeInteres !== 0 &&
      MontoFuturo === 0
    ) {
      CapitalInicial = Interes / (TasaDeInteres * TiempoMod);
      alert("El capital inicial es de: " + CapitalInicial.toFixed(2));
      return resetFields();
    }

    if (
      MontoFuturo !== 0 &&
      TiempoMod !== 0 &&
      TasaDeInteres !== 0 &&
      Interes === 0
    ) {
      CapitalInicial = MontoFuturo / (1 + TiempoMod * TasaDeInteres);
      alert("El capital inicial es de: " + CapitalInicial.toFixed(2));
      return resetFields();
    }

    if (
      Interes !== 0 &&
      MontoFuturo !== 0 &&
      TasaDeInteres === 0 &&
      CapitalInicial === 0
    ) {
      CapitalInicial = MontoFuturo - Interes;
      alert("El capital inicial es de: " + CapitalInicial.toFixed(2));
      return resetFields();
    }

    //Calcular tasa de interes✅
    if (
      CapitalInicial !== 0 &&
      MontoFuturo !== 0 &&
      TiempoMod !== 0 &&
      Interes === 0
    ) {
      Interes = MontoFuturo - CapitalInicial;
      TasaDeInteres = (Interes / (CapitalInicial * TiempoMod)) * 100;
      alert("La tasa de interes es de: " + TasaDeInteres + "%");
      return resetFields();
    }

    if (
      Interes !== 0 &&
      TiempoMod !== 0 &&
      CapitalInicial !== 0 &&
      MontoFuturo === 0
    ) {
      MontoFuturo = parseInt(CapitalInicial) + parseInt(Interes);
      TasaDeInteres = ((MontoFuturo / CapitalInicial - 1) / TiempoMod) * 100;
      alert("La tasa de interes es de: " + TasaDeInteres + "%");
      return resetFields();
    }
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
      <Button1 text="Calcular" pressed={Calcular} />
    </View>
  );
}

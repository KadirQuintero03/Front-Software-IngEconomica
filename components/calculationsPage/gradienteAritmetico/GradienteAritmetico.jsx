import { ScrollView, View } from "react-native";
import { Button1 } from "../components/Buttons";
import { styles } from "../template/templateStyles";
import { Input1, Input2 } from "../components/Inputs";
import { useState } from "react";

export default function GradienteAritmetico() {
  const [interes, setInteres] = useState(0);
  const [CuotaInicial, setCuotaIncial] = useState(0);
  const [unidadTiempoInteres, setTiempoInteres] = useState("1");
  const [unidadTiempoCuotas, setTiempoCuotas] = useState("1");
  const [tipoCalculo, setTipoCalulo] = useState("1");
  const [gradiente, setGradiente] = useState(0);
  const [valorCuota, serValorCuota] = useState(0);
  const [valorOptions, SetOptions] = useState("VP");

  const dataTiempo = [
    { key: "1", value: "anual", time: 1 },
    { key: "2", value: "semestral", time: 2 },
    { key: "3", value: "bimestral", time: 6 },
    { key: "4", value: "trimestral", time: 4 },
    { key: "5", value: "mensual", time: 12 },
  ];
  const dataTipos = [
    { key: "1", value: "Valor Presente", option: "VP" },
    { key: "2", value: "Valor futuro", option: "VF" },
    { key: "3", value: "Primera cuota", option: "VI" },
    { key: "4", value: "Cuota N", option: "cuotaN" },
  ];

  const interestNomalizad = (typeTaseInteres, typeQuotas, taseInterest) => {
    if (typeTaseInteres === "anual") {
      const searchDiccionary = encontrarParecido(typeQuotas);
      return (Math.pow(1 + taseInterest, 1 / searchDiccionary) - 1).toFixed(2);
    } else if (typeTaseInteres === "semestral") {
      const searchDiccionary = encontrarParecido(typeQuotas);
      return (Math.pow(1 + taseInterest, searchDiccionary / 2) - 1).toFixed(2);
    } else if (typeTaseInteres === "trimestral") {
      const searchDiccionary = encontrarParecido(typeQuotas);
      return (Math.pow(1 + taseInterest, searchDiccionary / 4) - 1).toFixed(2);
    } else if (typeTaseInteres === "bimestral") {
      const searchDiccionary = encontrarParecido(typeQuotas);
      return (Math.pow(1 + taseInterest, searchDiccionary / 6) - 1).toFixed(2);
    } else if (typeTaseInteres === "mensual") {
      const searchDiccionary = encontrarParecido(typeQuotas);
      return (Math.pow(1 + taseInterest, searchDiccionary / 12) - 1).toFixed(2);
    }
  };
  const GradientCrecient = (
    option,
    taseInterest,
    typeTaseInterest,
    typeQuotas,
    numberQuotas,
    valueInit,
    gradiente,
  ) => {
    let A = valueInit;
    let G = gradiente;
    let n = numberQuotas;
    let i = interestNomalizad(typeTaseInterest, typeQuotas, taseInterest);
    i = parseFloat(i);
    console.log(i);
    if (option === "VP") {
      let vp =
        A * ((1 - Math.pow(1 + i, -n)) / i) +
        (G / i) * ((1 - Math.pow(1 + i, -n)) / i - n / Math.pow(1 + i, n));
      return vp;
    } else if (option === "cuotaN") {
      let cuota = A + (n - 1) * G;
      return cuota;
    } else if (option === "VF") {
      let vf =
        A * ((Math.pow(1 + i, n) - 1) / i) +
        (G / i) * ((Math.pow(1 + i, n) - 1) / i - n);
      return vf;
    } else if (option === "VI") {
      let vi = A / i + G * Math.pow(i, 2);
      return vi;
    }
  };

  const gradientDecent = (
    option,
    taseInterest,
    typeTaseInterest,
    typeQuotas,
    numberQuotas,
    valueInit,
    gradiente,
  ) => {
    let A = valueInit;
    let G = gradiente;
    let n = numberQuotas;
    let i = interestNomalizad(typeTaseInterest, typeQuotas, taseInterest);
    i = parseFloat(i);
    if (option === "VP") {
      let vp =
        A * ((1 - Math.pow(1 + i, -n)) / i) -
        (G / i) * ((1 - Math.pow(1 + i, -n)) / i - n / Math.pow(1 + i, n));
      return vp;
    } else if (option === "cuotaN") {
      let cuota = A + (n - 1) * G;
      return cuota;
    } else if (option === "VF") {
      let vf =
        A * ((Math.pow(1 + i, n) - 1) / i) -
        (G / i) * ((Math.pow(1 + i, n) - 1) / i - n);
      return vf;
    } else if (option === "VI") {
      let vi = A / i - G * Math.pow(i, 2);
      return vi;
    }
  };
  function encontrarParecido(typeQuotas) {
    let result;
    dataTiempo.forEach((element) => {
      if (typeQuotas === element.value) {
        result = element.time;
      }
    });
    return result;
  }

  function busquedaArray(data) {
    dataTipos.map((v) => (v.key === data ? setTipoCalulo(v.value) : false));
    dataTipos.map((v) => (v.key === data ? SetOptions(v.option) : false));
  }
  function busquedaTiempoInteres(data) {
    dataTiempo.map((v) => (v.key === data ? setTiempoInteres(v.value) : false));
  }
  function busquedaTiempoCuota(data) {
    dataTiempo.map((v) => (v.key === data ? setTiempoCuotas(v.value) : false));
  }

  const calcular = () => {
    const cal = interestNomalizad(
      unidadTiempoInteres,
      unidadTiempoCuotas,
      interes,
    );
    console.log(cal);
    const result = GradientCrecient(
      valorOptions,
      interes,
      unidadTiempoInteres,
      unidadTiempoCuotas,
      valorCuota,
      CuotaInicial,
      gradiente,
    );
    console.log(result);
  };
  return (
    <View style={styles.page}>
      <ScrollView style={styles.scrollView}>
        <Input2
          name="Tipo de calculo"
          placeHolder="Selecciona un tipo..."
          data={dataTipos}
          value={tipoCalculo}
          onChangeSelected={busquedaArray} // asi agarra un dato
        />
        <Input1
          name="Primera cuota"
          placeHolder="ingrese valor"
          type="numeric"
          value={CuotaInicial}
          onChangeNumber={(value) => setCuotaIncial(value)}
        />
        <View style={styles.container}>
          <Input1
            name="Cuota"
            placeHolder="Enter value"
            type="numeric"
            value={valorCuota}
            onChangeNumber={(value) => serValorCuota(value)}
          />
          <Input2
            name="Unidad tiempo"
            placeHolder="Selecciona tipo"
            value={unidadTiempoCuotas}
            data={dataTiempo}
            onChangeSelected={busquedaTiempoCuota}
          />
        </View>
        <View style={styles.container}>
          <Input1
            name="Interes %"
            placeHolder="Enter value"
            type="numeric"
            value={interes}
            onChangeNumber={(value) => setInteres(value / 100)}
          />
          <Input2
            name="Unidad tiempo"
            placeHolder="Selecciona tipo"
            value={unidadTiempoInteres}
            data={dataTiempo}
            onChangeSelected={busquedaTiempoInteres}
          />
        </View>
        <View style={styles.container}>
          <Input1
            name="Gradiente"
            placeHolder="ej: 70000"
            type="numeric"
            value={gradiente}
            onChangeNumber={(value) => setGradiente(value)}
          />
        </View>
      </ScrollView>
      <Button1 text="Calcular" pressed={calcular} />
    </View>
  );
}

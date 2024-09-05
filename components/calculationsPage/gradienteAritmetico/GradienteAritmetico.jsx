import { ScrollView, View } from "react-native";
import { Button1 } from "../components/Buttons";
import { styles } from "../template/templateStyles";
import { Input1, Input2 } from "../components/Inputs";
import { useState } from "react";
import { CustomSwitch } from "./switchBottom.jsx";

export default function GradienteAritmetico() {
  const [interes, setInteres] = useState(0);
  const [CuotaInicial, setCuotaIncial] = useState(0);
  const [unidadTiempoInteres, setTiempoInteres] = useState();
  const [unidadTiempoCuotas, setTiempoCuotas] = useState();
  const [tipoCalculo, setTipoCalulo] = useState(1);
  const [gradiente, setGradiente] = useState(0);
  const [valorCuota, serValorCuota] = useState(0);
  const [valorOptions, SetOptions] = useState("VP");
  const [state, setState] = useState(false);

  function setStateChild(state) {
    setState(state);
  }
  const resetFields = () => {
    setInteres(0);
    setCuotaIncial(0);
    setGradiente(0);
    serValorCuota(0);
    setState(false);
  };

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
    let A = parseFloat(valueInit);
    let G = parseFloat(gradiente);
    let n = parseFloat(numberQuotas);
    let i = interestNomalizad(typeTaseInterest, typeQuotas, taseInterest / 100);
    i = parseFloat(i);
    if (option === "VP") {
      if (!A || !G || !n || !i) {
        alert("Faltan datos para calcular gradiente");
        return;
      }
      let vp =
        A * ((1 - Math.pow(1 + i, -n)) / i) +
        (G / i) * ((1 - Math.pow(1 + i, -n)) / i - n / Math.pow(1 + i, n));
      alert("El valor presente es " + vp);
      return vp;
    } else if (option === "cuotaN") {
      if (!A || !G || !n) {
        alert("Faltan datos para calcular el valor de la cuota");
        return;
      }
      let cuota = A + (n - 1) * G;
      alert("El valor de la cuota: " + n + " Es " + cuota);
      return cuota;
    } else if (option === "VF") {
      if (!A || !G || !n || !i) {
        alert("Faltan datos para calcular gradiente");
        return;
      }
      let vf =
        A * ((Math.pow(1 + i, n) - 1) / i) +
        (G / i) * ((Math.pow(1 + i, n) - 1) / i - n);
      alert("El valor furuto es " + vf);
      return vf;
    } else if (option === "VI") {
      if (!A || !G || !i) {
        alert("Faltan datos para calcular gradiente");
        return;
      }
      let vi = A / i + G * Math.pow(i, 2);
      alert("El valor de la primera cuota es " + vi);
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
    let A = parseFloat(valueInit);
    let G = parseFloat(gradiente);
    let n = parseFloat(numberQuotas);
    let i = interestNomalizad(typeTaseInterest, typeQuotas, taseInterest / 100);
    i = parseFloat(i);
    if (option === "VP") {
      if (!A && !G && !n && !i) {
        alert("Faltan datos para calcular gradiente");
        return;
      }
      let vp =
        A * ((1 - Math.pow(1 + i, -n)) / i) -
        (G / i) * ((1 - Math.pow(1 + i, -n)) / i - n / Math.pow(1 + i, n));
      alert("El valor presente es " + vp);
      return vp;
    } else if (option === "cuotaN") {
      if (!A || !G || !n) {
        alert("Faltan datos para calcular el valor de la cuota");
        return;
      }
      let cuota = A + (n - 1) * -G;
      alert("El valor de la cuota: " + n + " Es " + cuota);
      return cuota;
    } else if (option === "VF") {
      if (!A || !G || !n || !i) {
        alert("Faltan datos para calcular gradiente");
        return;
      }
      console.log(A, i, n, G);
      console.log((Math.pow(1 + i, n) - 1) / i);
      console.log(G / i);
      console.log((Math.pow(1 + i, n) - 1) / i - n);
      let vf =
        A * ((Math.pow(1 + i, n) - 1) / i).toFixed(5) -
        (G / i) * ((Math.pow(1 + i, n) - 1) / i - n);
      alert("El valor futuro es " + vf);
      return vf;
    } else if (option === "VI") {
      if (!A || !G || !i) {
        alert("Faltan datos para calcular gradiente");
        return;
      }
      let vi = A / i - G * Math.pow(i, 2);
      alert("El valor de la cuota inicial " + vi);
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
    let result = 0;
    console.log(state);
    if (state === true) {
      result = GradientCrecient(
        valorOptions,
        interes,
        unidadTiempoInteres,
        unidadTiempoCuotas,
        valorCuota,
        CuotaInicial,
        gradiente,
      );
      return resetFields();
    } else {
      result = gradientDecent(
        valorOptions,
        interes,
        unidadTiempoInteres,
        unidadTiempoCuotas,
        valorCuota,
        CuotaInicial,
        gradiente,
      );
      return resetFields();
    }
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
        {tipoCalculo === "Primera cuota" && (
          <Input1
            name="Monto Cuota"
            placeHolder="ingrese valor"
            type="numeric"
            value={CuotaInicial}
            onChangeNumber={(value) => setCuotaIncial(value)}
          />
        )}
        {tipoCalculo !== "Primera cuota" && (
          <>
            <Input1
              name="Primera cuota"
              placeHolder="ingrese valor"
              type="numeric"
              value={CuotaInicial}
              onChangeNumber={(value) => setCuotaIncial(value)}
            />
            <View style={styles.container}>
              <Input1
                name="Cuotas"
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
          </>
        )}
        {tipoCalculo !== "Cuota N" && (
          <View style={styles.container}>
            <Input1
              name="Interes %"
              placeHolder="Enter value"
              type="numeric"
              value={interes}
              onChangeNumber={(value) => setInteres(value)}
            />
            <Input2
              name="Unidad tiempo"
              placeHolder="Selecciona tipo"
              value={unidadTiempoInteres}
              data={dataTiempo}
              onChangeSelected={busquedaTiempoInteres}
            />
          </View>
        )}

        <View style={styles.container}>
          <Input1
            name="Gradiente"
            placeHolder="ej: 70000"
            type="numeric"
            value={gradiente}
            onChangeNumber={(value) => setGradiente(value)}
          />
        </View>
        <CustomSwitch setStateChild={setStateChild} value={state} />
      </ScrollView>
      <Button1 text="Calcular" pressed={calcular} />
    </View>
  );
}

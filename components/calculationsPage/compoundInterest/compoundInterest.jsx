import { ScrollView, View } from "react-native";
import Checkbox from "expo-checkbox";
import { Button1 } from "../components/Buttons";
import { styles } from "../template/templateStyles";
import { Input1, Input2 } from "../components/Inputs";
import { useState } from "react";

export default function CompoundInterest() {
  let [CapitalInicial, setCapitalInicial] = useState(0);
  let [TasaDeInteres, setTasaDeInteres] = useState(0);
  let [MontoFuturo, setMontoFuturo] = useState(0);
  let [Interes, setInteres] = useState(0);
  let [UnidadDeTiempoCapitalizable, setUnidadDeTiempoCapitalizable] =
    useState(0);
  let [Tiempo, setTiempo] = useState(0);
  const [UnidadDeTiempo, setUnidadDeTiempo] = useState("");

  const [isCapitalDisabled, setIsCapitalDisabled] = useState(false);
  const [isTasaDisabled, setIsTasaDisabled] = useState(false);
  const [isTiempoDisabled, setIsTiempoDisabled] = useState(false);
  const [isInteresDisabled, setIsInteresDisabled] = useState(false);
  const [isMontoFuturoDisabled, setIsMontoFuturoDisabled] = useState(false);

  const dataTiempo = [
    { key: "1", value: "Anual", time: 1 },
    { key: "2", value: "Semestral", time: 2 },
    { key: "3", value: "Bimestral", time: 6 },
    { key: "4", value: "Trimestral", time: 4 },
    { key: "5", value: "Mensual", time: 12 },
    { key: "6", value: "Cuatrimestral", time: 3 },
    { key: "7", value: "Dias", time: 365 },
  ];

  function conversionTiempo(Tiempo, UnidadDeTiempo) {
    if (UnidadDeTiempo === "Dias") {
      return Tiempo / 365;
    }

    if (UnidadDeTiempo === "Mensual") {
      return Tiempo / 12;
    }

    if (UnidadDeTiempo === "Semestral") {
      return Tiempo / 2;
    }

    if (UnidadDeTiempo === "Trimestral") {
      return Tiempo / 3;
    }

    if (UnidadDeTiempo === "Cuatrimestral") {
      return Tiempo / 4;
    }

    if (UnidadDeTiempo === "Bimestral") {
      return Tiempo / 6;
    }

    if (UnidadDeTiempo === "Anual") {
      return Tiempo / 1;
    }
  }

  function conversionTasa(TasaDeInteres, UnidadDeTiempoCapitalizable) {
    if (UnidadDeTiempoCapitalizable === "Dias") {
      return TasaDeInteres / 100 / 365;
    }

    if (UnidadDeTiempoCapitalizable === "Mensual") {
      return TasaDeInteres / 100 / 12;
    }

    if (UnidadDeTiempoCapitalizable === "Semestral") {
      return TasaDeInteres / 100 / 2;
    }

    if (UnidadDeTiempoCapitalizable === "Trimestral") {
      return TasaDeInteres / 100 / 4;
    }

    if (UnidadDeTiempoCapitalizable === "Cuatrimestral") {
      return TasaDeInteres / 100 / 3;
    }

    if (UnidadDeTiempoCapitalizable === "Bimestral") {
      return TasaDeInteres / 100 / 6;
    }

    if (UnidadDeTiempoCapitalizable === "Anual") {
      return TasaDeInteres / 100 / 1;
    }
  }

  function getTime(data) {
    dataTiempo.map((values) =>
      values.key === data ? setUnidadDeTiempo(values.value) : false,
    );
  }

  function getTasa(data) {
    dataTiempo.map((values) =>
      values.key === data
        ? setUnidadDeTiempoCapitalizable(values.value)
        : false,
    );
  }

  const resetFields = () => {
    setCapitalInicial(0);
    setTasaDeInteres(0);
    setMontoFuturo(0);
    setInteres(0);
    setTiempo(0);
    setUnidadDeTiempo("");
    setUnidadDeTiempoCapitalizable("");
  };

  const Calcular = () => {
    let TiempoMod = conversionTiempo(Tiempo, UnidadDeTiempo);
    let TasaCapitalizable = conversionTasa(
      TasaDeInteres,
      UnidadDeTiempoCapitalizable,
    );
    //Calcular Interes Compuesto✅
    if (
      CapitalInicial !== 0 &&
      TasaDeInteres !== 0 &&
      Interes === 0 &&
      TiempoMod === 0
    ) {
      Interes = CapitalInicial * (TasaDeInteres / 100);
      alert("El interes Compuesto es de: " + Interes);
      resetFields();
      return "";
    }

    //Calcular el Monto Futuro✅
    if (
      MontoFuturo === 0 &&
      CapitalInicial !== 0 &&
      TasaCapitalizable !== 0 &&
      TiempoMod !== 0
    ) {
      console.log(MontoFuturo);
      console.log(CapitalInicial);
      console.log(TasaCapitalizable);
      console.log(TiempoMod);
      MontoFuturo = CapitalInicial * Math.pow(1 + TasaCapitalizable, TiempoMod);
      alert("El monto Futuro es de: " + MontoFuturo);
      resetFields();
      return "";
    }

    //Calcular Tasa De Interes ??
    if (
      MontoFuturo !== 0 &&
      CapitalInicial !== 0 &&
      TasaDeInteres === 0 &&
      TiempoMod !== 0
    ) {
      console.log(MontoFuturo);
      console.log(CapitalInicial);
      console.log(TiempoMod);
      TasaDeInteres = Math.pow(MontoFuturo / CapitalInicial, 1 / TiempoMod) - 1;
      let result = conversionTasa(TasaDeInteres, UnidadDeTiempoCapitalizable);
      console.log(result);
      alert("La Tasa de Interes es de: " + TasaDeInteres);
      resetFields();
      return "";
    }

    //Calcular el Tiempo ✅
    if (
      MontoFuturo !== 0 &&
      CapitalInicial !== 0 &&
      TasaDeInteres !== 0 &&
      Tiempo === 0
    ) {
      console.log(MontoFuturo);
      console.log(CapitalInicial);
      console.log(TasaDeInteres);
      Tiempo =
        Math.log(MontoFuturo / CapitalInicial) /
        Math.log(1 + TasaDeInteres / 100);
      alert("El tiempo es de: " + Tiempo);
      resetFields();
      return "";
    }

    //Calcular el Capital Inicial ✅
    if (
      MontoFuturo !== 0 &&
      CapitalInicial === 0 &&
      TasaDeInteres !== 0 &&
      TiempoMod !== 0
    ) {
      console.log(MontoFuturo);
      console.log(CapitalInicial);
      console.log(TasaDeInteres);
      console.log(TiempoMod);
      console.log(UnidadDeTiempoCapitalizable);
      CapitalInicial =
        MontoFuturo / Math.pow(1 + TasaDeInteres / 100, TiempoMod);
      alert("El Capital inicial es de: " + CapitalInicial);
      resetFields();
      return "";
    }
  };

  return (
    <View style={styles.page}>
      <ScrollView style={styles.scrollView}>
        <View>
          <Checkbox
            value={isCapitalDisabled}
            onValueChange={() => setIsCapitalDisabled(!isCapitalDisabled)}
          />
          <Input1
            name="Capital inicial"
            placeHolder="Ingrese el capital inicial"
            value={CapitalInicial}
            onChangeNumber={(val) => setCapitalInicial(val)}
            type="numeric"
          />
        </View>

        <View style={styles.container}>
          <Input1
            name="Tasa de interes"
            placeHolder="Ingrese la tasa de interes"
            value={TasaDeInteres}
            onChangeNumber={(val) => setTasaDeInteres(val)}
            type="numeric"
          />
          <Input2
            name="Capitalizable"
            placeHolder="Escoja un Valor"
            value={UnidadDeTiempoCapitalizable}
            data={dataTiempo}
            onChangeSelected={getTasa}
          />
        </View>

        <View style={styles.container}>
          <Input1
            name="Tiempo"
            placeHolder="Ingrese un valor"
            value={Tiempo}
            onChangeNumber={(val) => setTiempo(val)}
            type="numeric"
          />
          <Input2
            name="Periodo"
            placeHolder="Escoja un valor"
            value={UnidadDeTiempo}
            data={dataTiempo}
            onChangeSelected={getTime}
          />
        </View>

        <View>
          <Input1
            name="Interes"
            placeHolder="Ingrese el Iinteres"
            value={Interes}
            onChangeNumber={(val) => setInteres(val)}
            type="numeric"
          />
        </View>

        <View>
          <Input1
            name="Monto futuro"
            placeHolder="Ingrese el monto futuro"
            value={MontoFuturo}
            onChangeNumber={(val) => setMontoFuturo(val)}
            type="numeric"
          />
        </View>
      </ScrollView>
      <Button1 text="Calcular" pressed={Calcular} />
    </View>
  );
}

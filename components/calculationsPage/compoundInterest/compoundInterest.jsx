import { ScrollView, View } from "react-native";
import { Button1 } from "../components/Buttons";
import { styles } from "../template/templateStyles";
import { Input1, Input2 } from "../components/Inputs";
import { useState } from "react";
import { tiempoConversion } from "../../../utils/interesConversion";

export default function CompoundInterest() {
  let [CapitalInicial, setCapitalInicial] = useState(0);
  let [TasaDeInteres, setTasaDeInteres] = useState(0);
  let [MontoFuturo, setMontoFuturo] = useState(0);
  let [Interes, setInteres] = useState(0);
  let [UnidadDeTiempoCapitalizable, setUnidadDeTiempoCapitalizable] =
    useState(0);
  let [timeDay, setTimeDay] = useState(0);
  let [timeMonth, setTimeMonth] = useState(0);
  let [timeYear, setTimeYear] = useState(0);
  let [Tiempo, setTiempo] = useState(0);
  const [selectedTimeOption, setSelectedTimeOption] = useState("");

  const timeOptions = ["Periodo de tiempo", "Tiempo específico"];

  const [UnidadDeTiempo, setUnidadDeTiempo] = useState("");

  const handleTimeOptionChange = (val) => {
    setSelectedTimeOption(val);
  };
  const timeList = [
    { key: 365, value: "Dia" },
    { key: 52, value: "Semana" },
    { key: 24, value: "Quincena" },
    { key: 12, value: "Mes" },
    { key: 6, value: "Bimestre" },
    { key: 4, value: "Trimestre" },
    { key: 2, value: "Semestre" },
    { key: 1, value: "Año" },
  ];

  function conversionTasa(TasaDeInteres, UnidadDeTiempoCapitalizable) {
    if (UnidadDeTiempoCapitalizable === "Dia") {
      return TasaDeInteres / 100 / 365;
    }

    if (UnidadDeTiempoCapitalizable === "Mes") {
      return TasaDeInteres / 100 / 12;
    }

    if (UnidadDeTiempoCapitalizable === "Semestre") {
      return TasaDeInteres / 100 / 2;
    }

    if (UnidadDeTiempoCapitalizable === "Trimestre") {
      return TasaDeInteres / 100 / 4;
    }

    if (UnidadDeTiempoCapitalizable === "Quincena") {
      return TasaDeInteres / 100 / 24;
    }

    if (UnidadDeTiempoCapitalizable === "Bimestre") {
      return TasaDeInteres / 100 / 6;
    }

    if (UnidadDeTiempoCapitalizable === "Año") {
      return TasaDeInteres / 100 / 1;
    }
  }

  function getTime(data) {
    timeList.map((values) =>
      values.key === data ? setUnidadDeTiempo(values.value) : false,
    );
  }

  function getTasa(data) {
    timeList.map((values) =>
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
    setTimeDay(0);
    setTimeMonth(0);
    setTimeYear(0);
    setUnidadDeTiempo("");
    setUnidadDeTiempoCapitalizable("");
  };

  const Calcular = () => {
    let TiempoMod = tiempoConversion(
      UnidadDeTiempo,
      UnidadDeTiempoCapitalizable,
      Tiempo,
      timeDay,
      timeMonth,
      timeYear,
    );
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
    //Sin Capitalizar✅
    //Calcular el Monto Futuro✅
    if (
      MontoFuturo === 0 &&
      CapitalInicial !== 0 &&
      TasaCapitalizable !== 0 &&
      TiempoMod !== 0
      //Capitalizable === false
    ) {
      MontoFuturo =
        CapitalInicial * Math.pow(1 + TasaDeInteres / 100, TiempoMod);
      alert("El monto Futuro es de: " + MontoFuturo);
      resetFields();
      return "";
    }

    //Capitalizando
    //Calcular el Monto Futuro✅
    // if (
    //   MontoFuturo === 0 &&
    //   CapitalInicial !== 0 &&
    //   TasaCapitalizable !== 0 &&
    //   TiempoMod !== 0 &&
    //   Capitalizable === true
    // ) {
    //   console.log("Capitalizando");
    //   MontoFuturo =
    //     CapitalInicial * Math.pow(1 + TasaDeInteres / 100, TiempoMod);
    //   alert("El monto Futuro es de: " + MontoFuturo);
    //   resetFields();
    //   return "";
    // }

    //Calcular Tasa De Interes ✅
    if (
      MontoFuturo !== 0 &&
      CapitalInicial !== 0 &&
      TasaDeInteres === 0 &&
      TiempoMod !== 0
    ) {
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
          <Input2
            name="Tiempo"
            placeHolder="Escoja un valor"
            value={selectedTimeOption}
            data={timeOptions}
            onChangeSelected={handleTimeOptionChange}
          />
        </View>
        <View>
          <Input1
            name="Capital inicial"
            placeHolder="Ingrese el capital inicial"
            value={CapitalInicial}
            onChangeNumber={(val) => setCapitalInicial(val)}
            type="numeric"
          />
        </View>
        {/* <View style={styles.container}>
          <Checkbox
            value={Capitalizable}
            onValueChange={(val) => setCapitalizable(val)}
          />
          <Text>Capitalizable</Text>
        </View> */}

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
            data={timeList}
            onChangeSelected={getTasa}
          />
        </View>
        {selectedTimeOption === "Periodo de tiempo" && (
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
              data={timeList}
              onChangeSelected={getTime}
            />
          </View>
        )}

        {selectedTimeOption === "Tiempo específico" && (
          <View style={styles.container}>
            <Input1
              name="Días"
              placeHolder="Ingrese un valor"
              value={timeDay}
              onChangeNumber={(val) => setTimeDay(val)}
              type="numeric"
            />
            <Input1
              name="Meses"
              placeHolder="Ingrese un valor"
              value={timeMonth}
              onChangeNumber={(val) => setTimeMonth(val)}
              type="numeric"
            />
            <Input1
              name="Años"
              placeHolder="Ingrese un valor"
              value={timeYear}
              onChangeNumber={(val) => setTimeYear(val)}
              type="numeric"
            />
          </View>
        )}
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

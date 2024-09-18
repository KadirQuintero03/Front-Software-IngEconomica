import { ScrollView, View, Alert } from "react-native";
import { Button1 } from "../components/Buttons";
import { styles } from "../template/templateStyles";
import { Input1, Input2 } from "../components/Inputs";
import React, { useState } from "react";
import { calculateSimpleInterest } from "../../../utils/interesSimple";

export default function InteresSimple() {
  let [VP, setVP] = useState(0);
  let [interestRate, setInterestRate] = useState(0);
  let [VF, setVF] = useState(0);
  let [Interes, setInteres] = useState(0);
  let [periodOfTime, setPeriodOfTime] = useState(0);
  let [timeDay, setTimeDay] = useState(0);
  let [timeMonth, setTimeMonth] = useState(0);
  let [timeYear, setTimeYear] = useState(0);
  const [typeTime, setTypeTime] = useState("anual");
  const [typeInterest, setTypeInterest] = useState("anual");
  const [selectedTimeOption, setSelectedTimeOption] = useState(""); // Nuevo estado

  const timeOptions = ["Periodo de tiempo", "Tiempo específico"]; // Opciones para el nuevo Input2

  const handleTimeOptionChange = (val) => {
    setSelectedTimeOption(val);
  };

  let UnidadesDeTiempo = {
    dias: 365,
    meses: 12,
    semestral: 2,
    trimestral: 4,
    cuatrimestral: 3,
    bimestral: 6,
    anual: 1,
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

  function getTime(data) {
    timeList.map((values) =>
      values.key === data ? setTypeTime(values.value) : false
    );
  }

  function getInteres(data) {
    timeList.map((values) =>
      values.key === data ? setTypeInterest(values.value) : false
    );
  }

  const resetFields = () => {
    setVP(0);
    setInterestRate(0);
    setVF(0);
    setInteres(0);
    setPeriodOfTime(0);
    setTimeDay(0);
    setTimeMonth(0);
    setTimeYear(0);
    setTypeTime("anual");
    setTypeInterest("anual");
  };

  const onPressButton = () => {
    const result = calculateSimpleInterest(
      VP,
      interestRate,
      periodOfTime,
      timeDay,
      timeMonth,
      timeYear,
      typeTime,
      typeInterest,
      VF,
      Interes,
      UnidadesDeTiempo
    );

    Alert.alert("Resultado", result);
    resetFields();
  };

  return (
    <View style={styles.page}>
      <ScrollView style={styles.scrollView}>
        <Input2
          name="Tiempo"
          placeHolder="Escoja un valor"
          value={selectedTimeOption}
          data={timeOptions}
          onChangeSelected={handleTimeOptionChange}
        />
        <View style={styles.container}>
          <Input1
            name="Capital inicial"
            placeHolder="Ingrese el valor"
            value={VP}
            onChangeNumber={(val) => setVP(val)}
            type="numeric"
          />
          <Input1
            name="Monto futuro"
            placeHolder="Ingrese el valor"
            value={VF}
            onChangeNumber={(val) => setVF(val)}
            type="numeric"
          />
        </View>

        <View style={styles.container}>
          <Input1
            name="Tasa de interes"
            placeHolder="Ingrese el valor"
            value={interestRate}
            onChangeNumber={(val) => setInterestRate(val)}
            type="numeric"
          />

          <Input2
            name="Unidad de interes"
            placeHolder="Escoja un valor"
            value={typeInterest}
            data={timeList}
            onChangeSelected={getInteres}
          />
        </View>

        {selectedTimeOption === "Periodo de tiempo" && (
          <View style={styles.container}>
            <Input1
              name="Tiempo"
              placeHolder="Ingrese un valor"
              value={periodOfTime}
              onChangeNumber={(val) => setPeriodOfTime(val)}
              type="numeric"
            />

            <Input2
              name="Unidad de tiempo"
              placeHolder="Escoja un valor"
              value={typeTime}
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

        <Input1
          name="Interes"
          placeHolder="Ingrese el valor"
          value={Interes}
          onChangeNumber={(val) => setInteres(val)}
          type="numeric"
        />
      </ScrollView>
      <Button1 text="Calcular" pressed={() => onPressButton()} />
    </View>
  );
}

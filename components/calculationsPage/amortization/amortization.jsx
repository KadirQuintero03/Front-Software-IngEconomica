import { ScrollView, View, Alert } from "react-native";
import { Button1 } from "../components/Buttons";
import { styles } from "../template/templateStyles";
import { Input1, Input2 } from "../components/Inputs";
import React, { useState } from "react";
import { calculateAmerican } from "../../../hooks/amortization/americanAmortization";
import { calculateGerman } from "../../../hooks/amortization/germanAmortization";
import { calculateFrench } from "../../../hooks/amortization/frenchAmortization  ";

export default function Amortization() {
  let [capital, setCapital] = useState(0); //Capital que se aportara.
  let [period, setPeriod] = useState(0); //Periodo o cuota.
  let [interestRate, setInterestRate] = useState(0); //Tasa de interes.
  const [typeTime, setTypeTime] = useState("anual"); //Unidad de tiempo.
  const [typeInterest, setTypeInterest] = useState("anual"); //Unidad de la tasa de interes.
  const [selectedAmortization, setSelectedAmortization] = useState(""); //Seleccionar la amortizacion.

  const typeOfAmortization = ["Francesa", "Alemán", "Americana"];

  const handleTimeOptionChange = (val) => {
    setSelectedAmortization(val);
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

  const resetFields = () => {
    setCapital(0);
    setPeriod(0);
    setInterestRate(0);
    setTypeTime("anual");
    setTypeInterest("anual");
  };

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

  let result;
  const values = [capital, period, interestRate, typeTime, typeInterest];

  const onPressButton = () => {
    if (selectedAmortization === "Americana") {
      result = calculateAmerican(...values);
    }

    if (selectedAmortization === "Alemán") {
      result = calculateGerman(...values);
    }

    if (selectedAmortization === "Francesa") {
      result = calculateFrench(...values);
    }

    Alert.alert(
      "El resultado de la amortización " + selectedAmortization + " es:",
      result
    );
    // return resetFields();
  };

  return (
    <View style={styles.page}>
      <ScrollView style={styles.scrollView}>
        <Input2
          name="¿Que amortizacion desea calcular?"
          placeHolder="Seleccione una opcion"
          value={selectedAmortization}
          data={typeOfAmortization}
          onChangeSelected={handleTimeOptionChange}
        />
        <Input1
          name="Capital"
          placeHolder="Ingrese el valor del capital"
          value={capital}
          onChangeNumber={(val) => setCapital(val)}
          type="numeric"
        />
        <Input2
          name="¿En que unidad la tasa de interes?"
          placeHolder="Escoja una"
          value={typeInterest}
          data={timeList}
          onChangeSelected={getInteres}
        />
        <Input1
          name="Tasa de interes"
          placeHolder="Ingrese un valor"
          value={interestRate}
          onChangeNumber={(val) => setInterestRate(val)}
          type="numeric"
        />
        <Input2
          name="¿En que unidad los periodos?"
          placeHolder="Escoja una"
          value={typeTime}
          data={timeList}
          onChangeSelected={getTime}
        />
        <Input1
          name="Numero de periodos"
          placeHolder="Ingrese un valor"
          value={period}
          onChangeNumber={(val) => setPeriod(val)}
          type="numeric"
        />
      </ScrollView>
      <Button1 text="Calcular" pressed={() => onPressButton()} />
    </View>
  );
}

import { ScrollView, View, Alert } from "react-native";
import { Button1 } from "../components/Buttons";
import { styles } from "../template/templateStyles";
import { Input1, Input2 } from "../components/Inputs";
import React, { useState, useMemo } from "react";
import { calculateAnnuity } from "../../../utils/Anualidades";

export default function Anualidades() {
  let [VP, setVP] = useState(0); //Capital o valor presente de una anualidad.
  let [VF, setVF] = useState(0); //Valor futuro o monto.
  let [R, setR] = useState(0); //Anualidad, cuota o renta periódica.
  let [N, setN] = useState(0); //Tiempo, periodo o plazo de anualidad.
  let [Y, setY] = useState(0); //Periodo de gracia.
  let [I, setI] = useState(0); //Tasa de interés efectiva periódica.
  const [typeTime, setTypeTime] = useState("anual");
  const [typeInterest, setTypeInterest] = useState("anual");
  const [selectedAnnuity, setSelectedAnnuity] = useState("");

  const typeOfAnnuity = [
    "Vencida",
    "Anticipada",
    "Diferida vencida",
    "Diferida anticipada",
  ];

  const handleTimeOptionChange = (val) => {
    setSelectedAnnuity(val);
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
    setVF(0);
    setR(0);
    setN(0);
    setY(0);
    setI(0);
    setTypeTime("anual");
    setTypeInterest("anual");
  };

  const onPressButton = () => {
    const result = calculateAnnuity(
      VP,
      VF,
      R,
      N,
      Y,
      I,
      typeTime,
      typeInterest,
      selectedAnnuity
    );

    Alert.alert("Resultado", result);
    resetFields();
  };

  const shouldShowInput = useMemo(() => {
    return (
      selectedAnnuity === "Diferida vencida" ||
      selectedAnnuity === "Diferida anticipada"
    );
  }, [selectedAnnuity]);

  return (
    <View style={styles.page}>
      <ScrollView style={styles.scrollView}>
        <Input2
          name="Seleccione el tipo de Anualidad"
          placeHolder="Enter value"
          value={selectedAnnuity}
          data={typeOfAnnuity}
          onChangeSelected={handleTimeOptionChange}
        />
        <View style={styles.container}>
          <Input1
            name="Valor presente"
            placeHolder="Enter value"
            value={VP}
            onChangeNumber={(val) => setVP(val)}
            type="numeric"
          />
          <Input1
            name="Valor futuro"
            placeHolder="Enter value"
            value={VF}
            onChangeNumber={(val) => setVF(val)}
            type="numeric"
          />
        </View>

        <Input1
          name="Numero de cuotas"
          placeHolder="Enter value"
          value={R}
          onChangeNumber={(val) => setR(val)}
          type="numeric"
        />
        <View style={styles.container}>
          <Input1
            name="Tasa de interes"
            placeHolder="Enter value"
            value={I}
            onChangeNumber={(val) => setI(val)}
            type="numeric"
          />
          <Input2
            name="¿En que unidad?"
            placeHolder="Enter value"
            value={typeInterest}
            data={timeList}
            onChangeSelected={getInteres}
          />
        </View>
        <Input2
          name="¿En que unidad los periodos?"
          placeHolder="Enter value"
          value={typeTime}
          data={timeList}
          onChangeSelected={getTime}
        />
        <View style={styles.container}>
          <Input1
            name="Numero de periodo"
            placeHolder="Enter value"
            value={N}
            onChangeNumber={(val) => setN(val)}
            type="numeric"
          />
          {shouldShowInput && (
            <Input1
              name="Periodos muertos"
              placeHolder="Enter value"
              value={Y}
              onChangeNumber={(val) => setY(val)}
              type="numeric"
            />
          )}
        </View>
      </ScrollView>
      <Button1 text="Calcular" pressed={() => onPressButton()} />
    </View>
  );
}

import { Alert, ScrollView, View } from "react-native";
import { Button1 } from "../components/Buttons";
import { styles } from "../template/templateStyles";
import { Input1, Input2 } from "../components/Inputs";
import { useEffect, useState } from "react";
import {
  calculateCreciente,
  validateInputs,
} from "../../../utils/gradienteGeometrico";

export default function GradienteGeometrico() {
  const [selectedTimeInteres, setSelectedTimeInteres] = useState(undefined);
  const [selectedTimeCuota, setSelectedTime] = useState(undefined);
  const [selectedCalculate, setSelectedCalculate] = useState(undefined);
  const [valorPresente, setValorPresente] = useState(0);
  const [primeraCuota, setPrimeraCuota] = useState(0);
  const [interes, setInteres] = useState(0);
  const [gradiente, setGradiente] = useState(0);
  const [cuota, setCuota] = useState(0);
  const [isDissable, setIsDissable] = useState(true);

  const calculateList = [
    { key: "1", value: "Valor Presente" },
    { key: "2", value: "Valor Futuro" },
    { key: "3", value: "Primera Cuota" },
  ];

  const timeList = [
    { key: "1", value: "Semana" },
    { key: "2", value: "Quincena" },
    { key: "3", value: "Mes" },
    { key: "4", value: "Año" },
    { key: "5", value: "Semestre" },
    { key: "6", value: "Bimestre" },
    { key: "7", value: "Trimestre" },
  ];

  useEffect(() => {
    onChangeInputs();
  }, [
    selectedCalculate,
    valorPresente,
    primeraCuota,
    cuota,
    selectedTimeCuota,
    interes,
    selectedTimeInteres,
    gradiente,
  ]);

  const onChangeSelectedCalculate = (value) => {
    calculateList.map((v) =>
      v.key == value ? setSelectedCalculate(v.value) : false
    );
  };

  const onChangeSelectedTimeInteres = (value) => {
    timeList.map((v) =>
      v.key == value ? setSelectedTimeInteres(v.value) : false
    );
  };

  const onChangeSelectedTimeCuota = (value) => {
    timeList.map((v) => (v.key == value ? setSelectedTime(v.value) : false));
  };

  const onChangeInputs = () => {
    setIsDissable(
      validateInputs(
        selectedCalculate,
        valorPresente,
        primeraCuota,
        cuota,
        selectedTimeCuota,
        interes,
        selectedTimeInteres,
        gradiente
      )
    );
  };

  const onPressButton = () => {
    const result = calculateCreciente(
      selectedCalculate,
      valorPresente,
      primeraCuota,
      cuota,
      selectedTimeCuota,
      interes / 100,
      selectedTimeInteres,
      gradiente / 100
    );

    Alert.alert("Resultado", result);
  };

  return (
    <View style={styles.page}>
      <ScrollView style={styles.scrollView}>
        <Input2
          name="Calcular"
          placeHolder="Seleccione"
          selected={selectedCalculate}
          onChangeSelected={onChangeSelectedCalculate}
          data={calculateList}
        />

        {selectedCalculate == "Primera Cuota" ? (
          <Input1
            name="Monto"
            placeHolder="0"
            type="numeric"
            value={valorPresente}
            onChangeNumber={(value) => setValorPresente(parseFloat(value))}
            onEnd={onChangeInputs}
          />
        ) : (
          <Input1
            name="Primera Cuota"
            placeHolder="0"
            type="numeric"
            value={primeraCuota}
            onChangeNumber={(value) => setPrimeraCuota(parseFloat(value))}
            onEnd={onChangeInputs}
          />
        )}

        <View style={styles.container}>
          <Input1
            name="Cuota"
            placeHolder="0"
            type="numeric"
            value={cuota}
            onChangeNumber={(value) => setCuota(parseFloat(value))}
            onEnd={onChangeInputs}
          />
          <Input2
            name="Unidad"
            placeHolder="Seleccione"
            selected={selectedTimeCuota}
            onChangeSelected={onChangeSelectedTimeCuota}
            data={timeList}
          />
        </View>

        <View style={styles.container}>
          <Input1
            name="Interes"
            placeHolder="0"
            type="numeric"
            value={interes}
            onChangeNumber={(value) => setInteres(parseFloat(value))}
            onEnd={onChangeInputs}
          />
          <Input2
            name="Cada"
            placeHolder="Seleccione"
            selected={selectedTimeInteres}
            onChangeSelected={onChangeSelectedTimeInteres}
            data={timeList}
          />
        </View>

        <Input1
          name="Gradiente"
          placeHolder="0"
          type="numeric"
          value={gradiente}
          onChangeNumber={(value) => setGradiente(parseFloat(value))}
        />
      </ScrollView>
      <Button1
        text="Calcular"
        dissable={isDissable}
        pressed={() => onPressButton()}
      />
    </View>
  );
}

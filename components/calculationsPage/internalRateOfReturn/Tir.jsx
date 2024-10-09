import { Alert, ScrollView, View } from "react-native";
import { styles } from "../template/templateStyles";
import { Input1 } from "../components/Inputs";
import { useEffect, useState } from "react";
import { Button1 } from "../components/Buttons";
import { useCalculateTir } from "../../../hooks/internalRateOfReturn/useTir";

export default function Tir() {
  const [initalInvestiment, setInitalInvestiment] = useState(0);
  const [cashFlowNumber, setCashFlowNumber] = useState(0);
  const [cashFlowArray, setCashFlowArray] = useState([]);
  const [capitalCost, setCapitalCost] = useState(0);

  const { triggerTIR } = useCalculateTir();
  const createArrayForInputs = (cashFlowNumber) => {
    setCashFlowNumber(cashFlowNumber);
    //En caso de cambio, se limpia el array
    setCashFlowArray([]);
  };

  const handleInputCashFlow = (newValue, index) => {
    setCashFlowArray((prevFlows) => {
      //Creamos una copia del array de flujos
      const newFlows = [...prevFlows];
      //Asignamos el nuevo valor al flujo de efectivo correspondiente
      newFlows[index] = newValue;
      return newFlows;
    });
  };

  const resetFields = () => {
    setInitalInvestiment(0);
    setCashFlowNumber(0);
    setCashFlowArray([]);
    setCapitalCost(0);
  };

  const handleCalculateTir = () => {
    const tir = triggerTIR({
      flows: cashFlowArray,
      initialInvestment: initalInvestiment,
    });

    if (initalInvestiment === 0)
      return Alert.alert("Error", "Ingrese la inversion inicial");

    if (cashFlowArray.some((flow) => flow === 0))
      return Alert.alert(
        "Error",
        "Ingrese los flujos de efectivo correctamente",
      );

    if (capitalCost === 0)
      return Alert.alert("Error", "Ingrese el coste de capital");

    if (tir?.error) return Alert.alert("Error", tir.error);

    /*
Si la TIR es mayor que la tasa mínima que esperas ganar (a veces llamada la tasa de corte o costo de capital), significa que el proyecto vale la pena.

Si la TIR es menor, tal vez prefieras no invertir.*/
    if (tir < 0.01 && tir > -0.01) {
      return Alert.alert(
        "Resultado",
        "La Tasa Interna de Retorno es de 0.00%. Significa que la inversión no es rentable.",
        [
          {
            text: "OK",
            onPress: () => resetFields(),
          },
        ],
      );
    }

    if (tir > capitalCost) {
      return Alert.alert(
        "Resultado",
        ` La Tasa Interna de Retorno es de ${tir.toFixed(1)}%. Significa que la inversión te generará más dienero de lo que te cuesta o usar ese capital. ¡Sigue adelante con tu inversión!`,
        [
          {
            text: "OK",
            onPress: () => resetFields(),
          },
        ],
      );
    }

    if (tir < capitalCost) {
      return Alert.alert(
        "Resultado",
        ` La Tasa Interna de Retorno es de ${tir.toFixed(1)}%. Significa que la inversión te generará menos dienero de lo que te cuesta o usar ese capital. ¡Reconsidera tu inversión!`,
        [
          {
            text: "OK",
            onPress: () => resetFields(),
          },
        ],
      );
    }
  };

  return (
    <View style={styles.page}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Input1
            name="Inversion inicial"
            placeHolder="Ingrese el valor, sin puntos ni comas"
            onChangeNumber={(newValue) =>
              setInitalInvestiment(parseInt(newValue))
            }
            value={initalInvestiment ? initalInvestiment.toString() : ""}
            type="numeric"
          ></Input1>
        </View>
        <View style={styles.container}>
          <Input1
            name="Numero de flujos de efectivo"
            placeHolder="Ingrese el numero de flujos"
            onChangeNumber={(newValue) =>
              createArrayForInputs(parseInt(newValue))
            }
            value={cashFlowNumber ? cashFlowNumber.toString() : ""}
            type="numeric"
          ></Input1>
        </View>
        {cashFlowNumber > 0 &&
          Array.from({ length: cashFlowNumber }).map((_, index) => {
            return (
              <View key={index} style={styles.container}>
                <Input1
                  name={`Flujo de efectivo ${index + 1}`}
                  placeHolder="Ingrese el valor"
                  value={cashFlowArray[index]?.toString() || ""}
                  onChangeNumber={(newValue) =>
                    handleInputCashFlow(parseInt(newValue), index)
                  }
                  type="numeric"
                ></Input1>
              </View>
            );
          })}
        {cashFlowArray.length > 0 &&
          cashFlowArray.length === cashFlowNumber && (
            <View style={styles.container}>
              <Input1
                name="Coste de capital"
                placeHolder="Ingrese el procentaje"
                value={capitalCost * 100}
                onChangeNumber={(newValue) =>
                  setCapitalCost(parseFloat(newValue / 100))
                }
                type="numeric"
              ></Input1>
            </View>
          )}
      </ScrollView>
      <Button1 text="Calcular TIR" pressed={() => handleCalculateTir()} />
    </View>
  );
}

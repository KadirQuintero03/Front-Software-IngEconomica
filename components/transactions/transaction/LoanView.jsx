import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { getPrestamo } from "../../../services/PrestamoServices";
import { router } from "expo-router";

export default function LoanView() {
  const [loan, setLoan] = useState(undefined);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    getLoan();
  }, []);

  async function getLoan() {
    try {
      const response = await getPrestamo();

      if (response.hasOwnProperty("error")) {
        Alert.alert(
          "Alert",
          "Fallo al cargar prestamo. Intente de nuevo mas tarde."
        );
        router.navigate("./_mainPage");
        return;
      }

      if ("quotesPaid" in response) {
        setQuotes(response.quotesPaid);
      }

      setLoan(response);
    } catch (error) {
      console.log(error);
    }
  }

  return <View></View>;
}

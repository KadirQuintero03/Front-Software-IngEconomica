import { useEffect, useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { getPrestamo } from "../../../services/PrestamoServices";
import { router } from "expo-router";
import { LoadingIcon } from "../../icons/Icons";
import useColorPalette from "../../../stores/useColorPalette";
import { styles } from "./loanStyles";

const color1 = useColorPalette(1, 1);
const color2 = useColorPalette(3, 1);

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

  return (
    <View style={styles.loanPage}>
      <Text style={styles.loanTitle}>Detalle del Prestamo</Text>
      {loan ? (
        <>
          <View style={styles.loanDetail}>
            <View style={styles.loanPhrase}>
              <Text style={styles.detailBold}>{"Estado: "}</Text>
              <Text style={styles.detailTxt}>{loan.creditStatus}</Text>
            </View>
            <View style={styles.loanPhrase}>
              <Text style={styles.detailBold}>{"Fecha: "}</Text>
              <Text
                style={styles.detailTxt}
              >{`${loan.startDate} - ${loan.endDate}`}</Text>
            </View>
            <View style={styles.loanPhrase}>
              <Text style={styles.detailBold}>{"Interes: "}</Text>
              <Text
                style={styles.detailTxt}
              >{`${parseFloat(loan.interestRate) * 100}% / ${loan.interestType}.`}</Text>
            </View>
            <View style={styles.loanPhrase}>
              <Text style={styles.detailBold}>{"Cuotas: "}</Text>
              <Text
                style={styles.detailTxt}
              >{`${loan.quotesNumber} cada ${loan.period}.`}</Text>
            </View>
            <View style={styles.loanPhrase}>
              <Text style={styles.detailBold}>{"Monto: "}</Text>
              <Text style={styles.detailTxt}>
                {"$" + parseFloat(loan.amountApproved).toLocaleString("de-DE")}
              </Text>
            </View>
            <View style={styles.loanPhrase}>
              <Text style={styles.detailBold}>{"Interes total: "}</Text>
              <Text style={styles.detailTxt}>
                {"$" + parseFloat(loan.totalInterest).toLocaleString("de-DE")}
              </Text>
            </View>
            <View style={styles.loanPhrase}>
              <Text style={styles.detailBold}>{"Total a pagar: "}</Text>
              <Text style={styles.detailTxt}>
                {"$" + parseFloat(loan.totalCredit).toLocaleString("de-DE")}
              </Text>
            </View>
          </View>
          <View style={styles.borderSeparator}></View>
          <ScrollView style={styles.loanQuotes}>
            {quotes.map((quote) => (
              <View key={quote.idQuotesPaid} style={styles.quoteBox}>
                <Text style={styles.quoteNumber}>{quote.number}</Text>
                <View style={styles.quotePrincipal}>
                  <Text style={styles.principalTitle}>
                    {"$ " +
                      parseFloat(quote.totalValue).toLocaleString("de-DE")}
                  </Text>
                  <View style={styles.principalSubBox}>
                    <Text style={styles.prinSubBold}>{"c: "}</Text>
                    <Text style={styles.prinSub}>
                      {"$" + parseFloat(quote.capital).toLocaleString("de-DE")}
                    </Text>
                    <View style={styles.prinSubSep}></View>
                    <Text style={styles.prinSubBold}>{"i: "}</Text>
                    <Text style={styles.prinSub}>
                      {"$" + parseFloat(quote.interest).toLocaleString("de-DE")}
                    </Text>
                  </View>
                </View>
                <View style={styles.quoteSecundario}>
                  <Text
                    style={[
                      styles.secundarioTitle,
                      { color: quote.status == "Pagado" ? color1 : color2 },
                    ]}
                  >
                    {quote.status}
                  </Text>
                  <Text style={styles.secundarioSub}>{quote.date}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </>
      ) : (
        <LoadingIcon size={32} style={{ color: color1 }} />
      )}
    </View>
  );
}

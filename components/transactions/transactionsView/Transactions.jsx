import { RefreshControl, ScrollView, Text, View } from "react-native";
import { styles } from "./transactionStyles";
import { useEffect, useState } from "react";
import movements from "../../../services/MovementServices";
import { getPhoneNumber, refresh } from "../../../stores/useUser";
import { LoadingIcon, TransactionIcon } from "../../icons/Icons";
import { pixels } from "../../../stores/usePhoneProperties";

export default function Transactions() {
  const [refreshing, setRefreshing] = useState(false);
  const [movement, setMovement] = useState([]);

  useEffect(() => {
    getMovements();
  }, [refresh]);

  async function getMovements() {
    const response = await movements(getPhoneNumber());

    if (response.hasOwnProperty("error") || response.length == 0) {
      return;
    }

    setMovement(
      response.sort(
        (a, b) => new Date(b.dateMovement) - new Date(a.dateMovement)
      )
    );
  }

  function onRefresh() {
    setRefreshing(true);
    getMovements();
    setRefreshing(false);
  }

  return (
    <>
      <Text style={styles.title}>Movimientos</Text>
      <ScrollView
        contentContainerStyle={styles.scroll}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {movement.length != 0 ? (
          movement.map((m) => (
            <View key={m.idMovement} style={styles.movBox}>
              <TransactionIcon
                size={pixels(34)}
                style={[
                  m.typeTransfer == "Debito"
                    ? { transform: [{ rotate: "180deg" }], color: "#32CD32" }
                    : styles.movCreditIcon,
                ]}
              />
              <View style={styles.movPrincipal}>
                <Text
                  style={styles.principalTitle}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {m.origin != null ? `De ${m.origin}` : `A ${m.destination}`}
                </Text>
                <Text
                  style={styles.principalSub}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {m.description}
                </Text>
              </View>
              <View style={styles.movSecundario}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={[
                    styles.secundarioTitle,
                    {
                      color: m.typeTransfer == "Debito" ? "#32CD32" : "#DC143C",
                    },
                  ]}
                >
                  {m.typeTransfer == "Debito"
                    ? `+$${parseFloat(m.omuntMovement).toLocaleString("de-DE")}`
                    : `-$${parseFloat(m.omuntMovement).toLocaleString("de-DE")}`}
                </Text>
                <Text
                  style={styles.secundarioSub}
                >{`${new Date(m.dateMovement).getDate()}/${new Date(m.dateMovement).getMonth() + 1}`}</Text>
              </View>
            </View>
          ))
        ) : (
          <LoadingIcon size={pixels(32)} style={styles.loading} />
        )}
      </ScrollView>
    </>
  );
}

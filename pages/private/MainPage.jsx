import { View } from "react-native";
import NavbarMainPage from "../../components/navbars/NavbarMainPage";
import { styles } from "./mainPageStyles";
import Amount from "../../components/mainPage/amount/Amount";
import { windowWidth } from "../../stores/usePhoneProperties";
import TransactionOption from "../../components/mainPage/transactionOption/TransactionOption";
import QuickActions from "../../components/mainPage/quickActions/QuickActions";
import { useState } from "react";

export default function MainPage() {
  const [pressed, setPressed] = useState(false);

  return (
    <View style={styles.mainPage}>
      <NavbarMainPage onPressed={() => setPressed((current) => !current)} />
      <Amount size={windowWidth + 30} />
      <TransactionOption />
      <QuickActions />
    </View>
  );
}

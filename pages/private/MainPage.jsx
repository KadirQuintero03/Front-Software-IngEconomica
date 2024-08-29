import { View } from "react-native";
import NavbarMainPage from "../../components/navbars/NavbarMainPage";
import { styles } from "./mainPageStyles";
import Amount from "../../components/mainPage/amount/Amount";
import { windowWidth } from "../../stores/usePhoneProperties";
import TransactionOption from "../../components/mainPage/transactionOption/TransactionOption";
import QuickActions from "../../components/mainPage/quickActions/QuickActions";

export default function MainPage() {
  return (
    <View style={styles.mainPage}>
      <NavbarMainPage />
      <Amount size={windowWidth + 30} />
      <TransactionOption />
      <QuickActions />
    </View>
  );
}

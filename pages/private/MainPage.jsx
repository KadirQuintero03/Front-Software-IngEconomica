import { View } from "react-native";
import NavbarMainPage from "../../components/navbars/NavbarMainPage";
import { styles } from "./mainPageStyles";
import Amount from "../../components/mainPage/amount/Amount";

export default function MainPage() {
  return (
    <View style={styles.mainPage}>
      <NavbarMainPage />
      <Amount />
    </View>
  );
}

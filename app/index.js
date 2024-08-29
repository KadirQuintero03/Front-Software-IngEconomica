import { View } from "react-native";
<<<<<<< HEAD
// import HomePage from "../pages/public/HomePage";
// import LoginPage from "../pages/public/LoginPage"; //LoginPage Importado para la creacion de las vistas en lo que arreglo rutas
import CreateAccountPage from "../pages/public/CreateAccountPage";
import { SafeAreaView } from "react-native-safe-area-context";
import MainPage from "../pages/private/MainPage";

export default function Index() {
  return (
    <SafeAreaView>
      <MainPage />
    </SafeAreaView>
=======
import HomePage from "../pages/public/HomePage";

export default function Index() {
  return (
    <View>
      <HomePage />
    </View>
>>>>>>> b6cf179630735cc3022fb1151c49f53b48500817
  );
}

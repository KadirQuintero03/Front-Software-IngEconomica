import { View } from "react-native";
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
  );
}

import { View } from "react-native";
// import HomePage from "../pages/public/HomePage";
import LoginPage from "../pages/public/LoginPage"; //LoginPage Importado para la creacion de las vistas en lo que arreglo rutas

export default function Index() {
  return (
    <View>
      <LoginPage />
    </View>
  );
}

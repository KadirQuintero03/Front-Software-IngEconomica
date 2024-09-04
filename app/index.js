import { View } from "react-native";
//import HomePage from "../pages/public/HomePage";
import { pixels } from "../stores/usePhoneProperties";
import MainPage from "../pages/private/MainPage";

export default function Index() {
  return (
    <View style={{ marginTop: pixels(25) }}>
      <MainPage />
    </View>
  );
}

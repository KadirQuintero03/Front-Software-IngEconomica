import { View } from "react-native";
import MainPage from "../pages/private/MainPage";
import HomePage from "../pages/public/HomePage";
import { pixels } from "../stores/usePhoneProperties";

export default function Index() {
  return (
    <View style={{ marginTop: pixels(15) }}>
      <MainPage />
    </View>
  );
}

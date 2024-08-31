import { View } from "react-native";
import HomePage from "../pages/public/HomePage";
import { pixels } from "../stores/usePhoneProperties";

export default function Index() {
  return (
    <View style={{ marginTop: pixels(25) }}>
      <HomePage />
    </View>
  );
}

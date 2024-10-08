import { Stack } from "expo-router";
import { View } from "react-native";
import useColorPalette from "../stores/useColorPalette";
import {
  getCalculatorOption,
  optionList,
} from "../stores/useCalculatorOptions";
import { pixels } from "../stores/usePhoneProperties";

export default function Layout() {
  const headerColor = useColorPalette(3, 1);

  return (
    <View style={{ paddingTop: pixels(26), flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="_createaccount"
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="_loginpage"
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="_mainPage"
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="_forgotPassword"
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="_calculatorPage"
          options={({ route }) => {
            const option = optionList[getCalculatorOption()];
            return {
              headerTitle: option.name,
              headerTitleAlign: "center",
              headerTitleStyle: {
                color: "white",
                fontSize: pixels(22),
              },
              headerTintColor: "white",
              headerStyle: { backgroundColor: headerColor },
            };
          }}
        ></Stack.Screen>
      </Stack>
    </View>
  );
}

import { Stack } from "expo-router";
import { View } from "react-native";

export default function Layout() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="_createaccount"></Stack.Screen>
        <Stack.Screen name="_loginpage"></Stack.Screen>
      </Stack>
    </View>
  );
}

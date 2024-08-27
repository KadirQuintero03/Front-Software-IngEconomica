import { Stack } from "expo-router";
import { View } from "react-native";

export default function Layout() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 12,
      }}
    >
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="about"></Stack.Screen>
      </Stack>
    </View>
  );
}

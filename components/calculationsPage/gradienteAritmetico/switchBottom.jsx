import React, { useState } from "react";
import { View, Switch, Text } from "react-native";
import { stylesSwitch } from "./switchBottom";
import useColorPalette from "../../../stores/useColorPalette";

export function CustomSwitch({ setStateChild }) {
  const [isEnabled, setIsEnabled] = useState(true);

  const colorButtomSwich = useColorPalette(3, 1);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    console.log(isEnabled);
    setStateChild(isEnabled);
  };
  return (
    <View style={stylesSwitch.container}>
      <Switch
        trackColor={{ false: "#ccc", true: "#ccc" }} // Color de la pista del interruptor
        thumbColor={isEnabled ? colorButtomSwich : "#0000FF"} // Color del círculo del interruptor
        ios_backgroundColor="#ccc"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={stylesSwitch.text}>
        {isEnabled ? "Gradiente Decreciente" : "Gradiente Creciente"}
      </Text>
    </View>
  );
}

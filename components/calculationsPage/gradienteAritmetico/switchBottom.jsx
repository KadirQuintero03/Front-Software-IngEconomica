import React, { useState } from "react";
import { View, Switch, Text } from "react-native";
import { styles } from "./switchBottom";

export default function CustomSwitch() {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#ccc", true: "#ccc" }} // Color de la pista del interruptor
        thumbColor={isEnabled ? "#4CAF50" : "#0000FF"} // Color del círculo del interruptor
        ios_backgroundColor="#ccc"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switch}
      />
      <Text style={styles.text}>{isEnabled ? "On" : "Off"}</Text>
    </View>
  );
}

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  switch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }], // Escalado para hacer el interruptor más grande
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});

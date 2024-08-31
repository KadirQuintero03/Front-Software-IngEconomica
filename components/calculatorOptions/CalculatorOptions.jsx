import { Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./calculatorOptionsStyles";
import useColorPalette from "../../stores/useColorPalette";
import { ArrowRight } from "../icons/Icons";
import { pixels } from "../../stores/usePhoneProperties";
import {
  optionList,
  setCalculatorOption,
} from "../../stores/useCalculatorOptions";
import { router } from "expo-router";

export default function CalculatorOptions() {
  const borderColor = useColorPalette(3, 0.75);
  return (
    <>
      <View
        style={{ ...styles.header, backgroundColor: useColorPalette(3, 1) }}
      >
        <Text style={styles.title}>Opciones</Text>
      </View>
      <ScrollView style={styles.optionsBox}>
        {optionList.map((op) => {
          return (
            <Pressable
              key={op.id}
              onPress={() => {
                setCalculatorOption(op.id);
                router.navigate("./_calculatorPage");
              }}
              style={({ pressed }) => [
                { backgroundColor: pressed ? "#00000026" : undefined },
                styles.pressable,
                { borderColor: borderColor },
              ]}
            >
              <ArrowRight size={pixels(18)} style={{ color: "white" }} />
              <Text style={styles.optionTitle}>{op.name}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </>
  );
}

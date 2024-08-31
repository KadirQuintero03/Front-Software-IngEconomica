import { View } from "react-native";
import NavbarMainPage from "../../components/navbars/NavbarMainPage";
import { styles } from "./mainPageStyles";
import Amount from "../../components/mainPage/amount/Amount";
import { windowWidth } from "../../stores/usePhoneProperties";
import TransactionOption from "../../components/mainPage/transactionOption/TransactionOption";
import QuickActions from "../../components/mainPage/quickActions/QuickActions";
import { useState } from "react";
import { useRef } from "react";
import { Animated } from "react-native";
import AnimatedView from "../../components/calculatorOptions/AnimatedView";
import CalculatorOptions from "../../components/calculatorOptions/CalculatorOptions";

export default function MainPage() {
  const [pressed, setPressed] = useState(false);
  const slideAnim = useRef(new Animated.Value(-(windowWidth * 0.8))).current;

  return (
    <View style={styles.mainPage}>
      <AnimatedView
        slideAnim={slideAnim}
        pressed={pressed}
        width={windowWidth * 0.8}
      >
        <CalculatorOptions />
      </AnimatedView>
      <NavbarMainPage
        pressed={pressed}
        onPressed={() => setPressed((current) => !current)}
      />
      <Amount size={windowWidth + 30} />
      <TransactionOption />
      <QuickActions />
    </View>
  );
}

import { View } from "react-native";
import NavbarMainPage from "../../components/navbars/NavbarMainPage";
import { styles } from "./mainPageStyles";
import Amount from "../../components/mainPage/amount/Amount";
import { windowWidth } from "../../stores/usePhoneProperties";
import TransactionOption from "../../components/mainPage/transactionOption/TransactionOption";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { Animated } from "react-native";
import AnimatedView from "../../components/calculatorOptions/AnimatedView";
import CalculatorOptions from "../../components/calculatorOptions/CalculatorOptions";
import * as LocalAuthentication from "expo-local-authentication";
import * as SecureStore from "expo-secure-store";
import BiometricPopUp from "../../components/mainPage/biometric/BiometricPopUp";
import { getCredentials } from "../../stores/useUser";
import Transactions from "../../components/transactions/transactionsView/Transactions";

export default function MainPage() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [pressedOptions, setPressedOptions] = useState(false);
  const slideAnim = useRef(new Animated.Value(-(windowWidth * 0.8))).current;

  useEffect(() => {
    biometricVerification();
  }, []);

  const biometricVerification = async () => {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    const hasCredentials = await SecureStore.getItemAsync("phoneNumber");
    setShowPopUp(compatible && hasCredentials == null);
  };

  function onAgree() {
    const auth = LocalAuthentication.authenticateAsync({
      promptMessage: "Inicia sesion con tu huella",
      fallbackLabel: "Ingrese Contraseña",
    });

    auth.then(async (result) => {
      const credentials = getCredentials();

      if (result.success) {
        await SecureStore.setItemAsync("phoneNumber", credentials.phoneNumber);
        await SecureStore.setItemAsync("password", credentials.password);

        setShowPopUp(false);
      }
    });
  }

  return (
    <View style={styles.mainPage}>
      <AnimatedView
        slideAnim={slideAnim}
        pressed={pressedOptions}
        width={windowWidth * 0.8}
      >
        <CalculatorOptions />
      </AnimatedView>
      <NavbarMainPage
        pressed={pressedOptions}
        onPressed={() => setPressedOptions((current) => !current)}
      />
      <Amount size={windowWidth + 30} />
      <TransactionOption />
      <Transactions />

      {showPopUp && (
        <BiometricPopUp
          onAgree={onAgree}
          onCancel={() => setShowPopUp(false)}
        />
      )}
    </View>
  );
}

import { useEffect } from "react";
import { Animated } from "react-native";
import { styles } from "./animatedViewStyles";
import useColorPalette from "../../stores/useColorPalette";

export default function AnimatedView({ slideAnim, pressed, width, children }) {
  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: pressed ? 0 : -width,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }, [pressed, slideAnim, width]);

  return (
    <Animated.View
      style={{
        ...styles.menu,
        display: pressed ? "flex" : "none",
        width: width,
        backgroundColor: useColorPalette(1, 1),
        transform: [{ translateX: slideAnim }],
      }}
    >
      {children}
    </Animated.View>
  );
}

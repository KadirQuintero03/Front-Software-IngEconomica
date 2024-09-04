import { ScrollView, View } from "react-native";
import { Button1 } from "../components/Buttons";
import { styles } from "../template/templateStyles";
import { Input1, Input2 } from "../components/Inputs";

export default function GradienteAritmetico() {
  return (
    <View style={styles.page}>
      <ScrollView style={styles.scrollView}>
        <Input2 name="Input2" placeHolder="Enter value" />
        <Input1 name="Input1" placeHolder="Enter value" />
        <View style={styles.container}>
          <Input1 name="Input1" placeHolder="Enter value" />
          <Input2 name="Input2" placeHolder="Enter value" />
        </View>
      </ScrollView>
      <Button1 text="Template" />
    </View>
  );
}

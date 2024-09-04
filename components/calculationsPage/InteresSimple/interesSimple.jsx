import { ScrollView, View } from "react-native";
import { Button1 } from "../components/Buttons";
import { styles } from "../template/templateStyles";
import { Input1, Input2 } from "../components/Inputs";
import React, { useState } from "react";

export default function InteresSimple() {
  return (
    <View style={styles.page}>
      <ScrollView style={styles.scrollView}>
        <Input2 name="Tipo de interes" placeHolder="Enter value" />
        <Input1
          name="Capital inicial"
          placeHolder="Ingrese el capital inicial"
        />
        <Input1
          name="Tasa de interes"
          placeHolder="Ingrese la tasa de interes"
        />
        <Input2 name="Unidad de tiempo" placeHolder="Enter value" />
        <View style={styles.container}>
          <Input1 name="Tiempo" placeHolder="Ingrese un valor" />
          <Input2 name="Unidad de tiempo" placeHolder="Enter value" />
        </View>
        <Input1 name="Interes" placeHolder="Ingrese el Iinteres" />
        <Input1 name="Monto futuro" placeHolder="Ingrese el monto futuro" />
      </ScrollView>
      <Button1 text="Calcular" />
    </View>
  );
}

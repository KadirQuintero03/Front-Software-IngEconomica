import { Text, TextInput, View } from "react-native";
import useColorPalette from "../../../stores/useColorPalette";
import { styles1, styles2 } from "./inputsStyles";
import { SelectList } from "react-native-dropdown-select-list";

export function Input1({
  name = "",
  fontSize,
  placeHolder = "",
  type = "",
  value = "",
  onChangeNumber,
  styles,
}) {
  return (
    <View style={{ ...styles1.container, ...styles }}>
      {name !== "" && (
        <Text style={{ ...styles1.text, fontSize: fontSize }}>{name}</Text>
      )}
      <TextInput
        style={{ ...styles1.input, borderColor: useColorPalette(3, 1) }}
        onChangeText={onChangeNumber}
        value={value}
        placeholder={placeHolder}
        keyboardType={type}
      />
    </View>
  );
}

export function Input2({
  name = "",
  placeHolder = "",
  selected,
  onChangeSelected,
  data = [],
}) {
  // data = [{key: '1', value: 'item1'}]

  return (
    <View style={styles2.container}>
      {name !== "" && <Text style={styles2.text}>{name}</Text>}
      <SelectList
        data={data}
        setSelected={onChangeSelected}
        placeholder={placeHolder}
        defaultOption={selected}
        boxStyles={{
          ...styles2.box,
          borderColor: useColorPalette(1, 1),
          backgroundColor: useColorPalette(3, 0.2),
        }}
        dropdownStyles={styles2.dropdown}
        maxHeight={100}
        inputStyles={styles2.input}
      />
    </View>
  );
}

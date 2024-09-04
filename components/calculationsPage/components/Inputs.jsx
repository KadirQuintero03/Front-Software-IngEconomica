import { Text, TextInput, View } from "react-native";
import useColorPalette from "../../../stores/useColorPalette";
import { styles1, styles2 } from "./inputsStyles";
import { SelectList } from "react-native-dropdown-select-list";

export function Input1({
  name = "",
  placeHolder = "",
  type = "",
  value = "",
  onChangeNumber,
}) {
  return (
    <View style={styles1.container}>
      <Text style={styles1.text}>{name}</Text>
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
      <Text style={styles2.text}>{name}</Text>
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
        maxHeight={150}
        inputStyles={styles2.input}
      />
    </View>
  );
}

/*
const [value, setValue] = useState('$ ');

  const handleChange = (text) => {
    // Asegúrate de que el valor siempre comience con '$ '
    if (!text.startsWith('$')) {
      setValue('$ ' + text.trim().replace('$ ', ''));
    } else {
      setValue(text);
    }
  };
*/

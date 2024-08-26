import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

//Icono de telefono
export const PhoneIcon = (props) => (
  <MaterialCommunityIcons name="phone" size={24} color="black" {...props} />
);

//Icono de usuario
export const UserIcon = (props) => (
  <FontAwesome6 name="user" size={24} color="black" {...props} />
);

//Icono de candado
export const LockIcon = (props) => (
  <MaterialIcons name="lock-outline" size={24} color="black" {...props} />
);

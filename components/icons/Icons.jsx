import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";

//Icono de telefono
export const PhoneIcon = ({ size = 24, style = {} }) => (
  <FontAwesomeIcon icon={faPhone} size={size} style={style} />
);

//Icono de usuario
export const UserIcon = ({ size = 24, style = {} }) => (
  <FontAwesomeIcon icon={faUser} size={size} style={style} />
);

//Icono de barras
export const BarsIcon = ({ size = 24, style = {} }) => (
  <FontAwesomeIcon icon={faBars} size={size} style={style} />
);

export const ArrowRight = ({ size = 24, style = {} }) => (
  <FontAwesomeIcon icon={faAngleRight} size={size} style={style} />
);

//Icono de candado
export const LockIcon = ({ size = 24, style = {} }) => (
  <FontAwesomeIcon icon={faLock} size={size} style={style} />
);

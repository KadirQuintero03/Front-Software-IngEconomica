import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { faMoneyBills } from "@fortawesome/free-solid-svg-icons/faMoneyBills";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons/faGripVertical";
import { pixels } from "../../stores/usePhoneProperties";

//Icono de telefono
export const PhoneIcon = ({ size = pixels(18), style = {} }) => (
  <FontAwesomeIcon icon={faPhone} size={size} style={style} />
);

//Icono de usuario
export const UserIcon = ({ size = pixels(18), style = {} }) => (
  <FontAwesomeIcon icon={faUser} size={size} style={style} />
);

//Icono de candado
export const LockIcon = ({ size = pixels(18), style = {} }) => (
  <FontAwesomeIcon icon={faLock} size={size} style={style} />
);

//Icono de barras
export const BarsIcon = ({ size = pixels(24), style = {} }) => (
  <FontAwesomeIcon icon={faBars} size={size} style={style} />
);

export const ArrowRight = ({ size = pixels(24), style = {} }) => (
  <FontAwesomeIcon icon={faAngleRight} size={size} style={style} />
);

export const CashIcon = ({ size = pixels(24), style = {} }) => (
  <FontAwesomeIcon icon={faMoneyBills} size={size} style={style} />
);

export const GridIcon = ({ size = pixels(24), style = {} }) => (
  <FontAwesomeIcon icon={faGripVertical} size={size} style={style} />
);

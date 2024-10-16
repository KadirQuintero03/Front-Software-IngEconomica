import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { faMoneyBills } from "@fortawesome/free-solid-svg-icons/faMoneyBills";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons/faGripVertical";
import { faFingerprint } from "@fortawesome/free-solid-svg-icons/faFingerprint";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons/faSquareArrowUpRight";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import { faLandmark } from "@fortawesome/free-solid-svg-icons/faLandmark";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons/faRotateRight";

import { pixels } from "../../stores/usePhoneProperties";

export const PhoneIcon = ({ size = pixels(18), style = {} }) => (
  <FontAwesomeIcon icon={faPhone} size={size} style={style} />
);

export const UserIcon = ({ size = pixels(18), style = {} }) => (
  <FontAwesomeIcon icon={faUser} size={size} style={style} />
);

export const LockIcon = ({ size = pixels(18), style = {} }) => (
  <FontAwesomeIcon icon={faLock} size={size} style={style} />
);

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

export const FingerIcon = ({ size = pixels(24), style = {} }) => (
  <FontAwesomeIcon icon={faFingerprint} size={size} style={style} />
);

export const TransactionIcon = ({ size = pixels(24), style = {} }) => (
  <FontAwesomeIcon icon={faSquareArrowUpRight} size={size} style={style} />
);

export const LoadingIcon = ({ size = pixels(24), style = {} }) => (
  <FontAwesomeIcon icon={faSpinner} size={size} style={style} />
);

export const LoanIcon = ({ size = pixels(24), style = {} }) => (
  <FontAwesomeIcon icon={faLandmark} size={size} style={style} />
);

export const RefreshIcon = ({ size = pixels(24), style = {} }) => (
  <FontAwesomeIcon icon={faRotateRight} size={size} style={style} />
);

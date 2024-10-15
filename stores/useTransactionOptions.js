import { CashIcon, LoanIcon } from "../components/icons/Icons";
import Prestamo from "../components/transactions/prestamo/Prestamo";
import LoanView from "../components/transactions/transaction/LoanView";
import Transaction from "../components/transactions/transaction/transaction";
import { pixels } from "./usePhoneProperties";

let selected;

export const options = [
  {
    id: 0,
    title: "Solicitar Prestamo",
    icon: <CashIcon style={{ color: "#333" }} size={pixels(30)} />,
    component: <Prestamo />,
  },
  {
    id: 1,
    title: "Transferir Dinero",
    icon: <CashIcon style={{ color: "#333" }} size={pixels(30)} />,
    component: <Transaction />,
  },
  {
    id: 2,
    title: "Ver Prestamo",
    icon: <LoanIcon style={{ color: "#333" }} size={pixels(30)} />,
    component: <LoanView />,
  },
];

export const setSelectedOption = (id) => (selected = id);
export const getSelectedOption = () => selected;

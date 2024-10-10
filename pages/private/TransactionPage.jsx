import { options } from "../../stores/useTransactionOptions";

export default function TransactionPage({ option }) {
  return options[option].component;
}

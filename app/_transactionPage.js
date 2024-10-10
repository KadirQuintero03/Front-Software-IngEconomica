import TransactionPage from "../pages/private/TransactionPage";
import { getSelectedOption } from "../stores/useTransactionOptions";

export default function _transactionPage() {
  return <TransactionPage option={getSelectedOption()} />;
}

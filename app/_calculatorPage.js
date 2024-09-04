import CalculatorPage from "../pages/private/CalculatorPage";
import { getCalculatorOption } from "../stores/useCalculatorOptions";

export default function _calculatorPage() {
  return <CalculatorPage option={getCalculatorOption()} />;
}

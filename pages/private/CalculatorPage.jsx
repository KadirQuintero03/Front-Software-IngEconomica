import { optionList } from "../../stores/useCalculatorOptions";

export default function CalculatorPage({ option }) {
  return optionList[option].component;
}

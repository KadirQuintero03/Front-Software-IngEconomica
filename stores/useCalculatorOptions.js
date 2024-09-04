import Template from "../components/calculationsPage/template/Template";
import InteresSimple from "../components/calculationsPage/InteresSimple/interesSimple";

let useCalculatorOption;

export const optionList = [
  { id: 0, name: "Intereses", component: <InteresSimple /> },
  { id: 1, name: "Anualidades", component: <Template /> },
  { id: 2, name: "Gradientes", component: <Template /> },
  { id: 3, name: "Amortización", component: <Template /> },
  { id: 4, name: "Taza de interés de retorno", component: <Template /> },
  { id: 5, name: "Unidad de valor real", component: <Template /> },
  {
    id: 6,
    name: "Evaluación de alternativas de Inversión",
    component: <Template />,
  },
  { id: 7, name: "Inflación", component: <Template /> },
  { id: 8, name: "Bonos", component: <Template /> },
];

export const getCalculatorOption = () => useCalculatorOption;
export const setCalculatorOption = (value) => (useCalculatorOption = value);

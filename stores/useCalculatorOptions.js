import Template from "../components/calculationsPage/template/Template";
import InteresSimple from "../components/calculationsPage/InteresSimple/interesSimple";
import GradienteAritmetico from "../components/calculationsPage/gradienteAritmetico/GradienteAritmetico";
import GradienteGeometrico from "../components/calculationsPage/gradienteGeometrico/GradienteGeometrico";
import CompoundInterest from "../components/calculationsPage/compoundInterest/compoundInterest";

let useCalculatorOption;

export const optionList = [
  { id: 0, name: "Interes Simple", component: <InteresSimple /> },
  { id: 1, name: "Interes Compuesto", component: <CompoundInterest /> },
  { id: 2, name: "Gradiente Aritmetico", component: <GradienteAritmetico /> },
  { id: 3, name: "Gradiente Geometrico", component: <GradienteGeometrico /> },
  { id: 4, name: "Amortización", component: <Template /> },
  { id: 5, name: "Taza de interés de retorno", component: <Template /> },
  { id: 6, name: "Unidad de valor real", component: <Template /> },
  {
    id: 7,
    name: "Evaluación de alternativas de Inversión",
    component: <Template />,
  },
  { id: 8, name: "Inflación", component: <Template /> },
  { id: 9, name: "Bonos", component: <Template /> },
];

export const getCalculatorOption = () => useCalculatorOption;
export const setCalculatorOption = (value) => (useCalculatorOption = value);

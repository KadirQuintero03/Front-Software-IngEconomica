import Template from "../components/calculationsPage/template/Template";
import InteresSimple from "../components/calculationsPage/InteresSimple/interesSimple";
import GradienteAritmetico from "../components/calculationsPage/gradienteAritmetico/GradienteAritmetico";
import GradienteGeometrico from "../components/calculationsPage/gradienteGeometrico/GradienteGeometrico";

let useCalculatorOption;

export const optionList = [
  { id: 0, name: "Interes Simple", component: <InteresSimple /> },
  { id: 1, name: "Interes Compuesto", component: <InteresSimple /> },
  { id: 2, name: "Anualidades", component: <Template /> },
  { id: 3, name: "Gradiente Aritmetico", component: <GradienteGeometrico /> },
  { id: 4, name: "Gradiente Geometrico", component: <GradienteGeometrico /> },
  { id: 5, name: "Amortización", component: <Template /> },
  { id: 6, name: "Taza de interés de retorno", component: <Template /> },
  { id: 7, name: "Unidad de valor real", component: <Template /> },
  {
    id: 8,
    name: "Evaluación de alternativas de Inversión",
    component: <Template />,
  },
  { id: 9, name: "Inflación", component: <Template /> },
  { id: 10, name: "Bonos", component: <Template /> },
];

export const getCalculatorOption = () => useCalculatorOption;
export const setCalculatorOption = (value) => (useCalculatorOption = value);

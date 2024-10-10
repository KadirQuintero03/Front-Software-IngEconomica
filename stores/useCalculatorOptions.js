import Template from "../components/calculationsPage/template/Template";
import InteresSimple from "../components/calculationsPage/InteresSimple/interesSimple";
import GradienteAritmetico from "../components/calculationsPage/gradienteAritmetico/GradienteAritmetico";
import GradienteGeometrico from "../components/calculationsPage/gradienteGeometrico/GradienteGeometrico";
import CompoundInterest from "../components/calculationsPage/compoundInterest/compoundInterest";
import Anualidades from "../components/calculationsPage/anualidades/anualidades";
import Amortization from "../components/calculationsPage/amortization/amortization";
import Tir from "../components/calculationsPage/internalRateOfReturn/Tir";

let useCalculatorOption;

export const optionList = [
  { id: 0, name: "Interes Simple", component: <InteresSimple /> },
  { id: 1, name: "Interes Compuesto", component: <CompoundInterest /> },
  { id: 2, name: "Gradiente Aritmetico", component: <GradienteAritmetico /> },
  { id: 3, name: "Gradiente Geometrico", component: <GradienteGeometrico /> },
  { id: 4, name: "Anualidades", component: <Anualidades /> },
  { id: 5, name: "Amortización", component: <Amortization /> },
  { id: 6, name: "Tasa interna de retorno", component: <Tir /> },
];

export const getCalculatorOption = () => useCalculatorOption;
export const setCalculatorOption = (value) => (useCalculatorOption = value);

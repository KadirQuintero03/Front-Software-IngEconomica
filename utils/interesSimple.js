import { tiempoConversion } from "./interesConversion";
import { calculateInterest } from "./simpleInterest/calculateInterest";
import { calculateInterestRate } from "./simpleInterest/calculateInterestRate";
import { calculateTime } from "./simpleInterest/calculateTime";
import { calculateVP } from "./simpleInterest/calculateVP";

export function calculateSimpleInterest(
  VP,
  interestRate,
  periodOfTime,
  timeDay,
  timeMonth,
  timeYear,
  typeTime,
  typeInterest,
  VF,
  Interes,
  UnidadesDeTiempo,
  selectedCalculate
) {
  let fieldsFilled = 0;
  if (VP !== 0) fieldsFilled++;
  if (interestRate !== 0) fieldsFilled++;
  if (VF !== 0) fieldsFilled++;
  if (Interes !== 0) fieldsFilled++;
  if (periodOfTime !== 0) fieldsFilled++;

  if (fieldsFilled < 2) {
    return "Debe rellenar mínimo 2 campos";
  }

  interestRate = interestRate / 100;

  let TiempoMod = tiempoConversion(
    typeTime,
    typeInterest,
    periodOfTime,
    timeDay,
    timeMonth,
    timeYear
  );

  console.log(
    VP,
    interestRate,
    typeTime,
    typeInterest,
    VF,
    Interes,
    TiempoMod,
    UnidadesDeTiempo,
    selectedCalculate
  );

  if (selectedCalculate === "Tiempo") {
    return calculateTime(VF, VP, interestRate, Interes)
  }

  if (selectedCalculate === "Capital Inicial") {
    return calculateVP(Interes, TiempoMod, interestRate, VF)
  }

  if (selectedCalculate === "Tasa de interes") {
    return calculateInterestRate(VP, VF, TiempoMod, Interes)
  }

  if (selectedCalculate === "Interes") {
    return calculateInterest(VP, VF, TiempoMod, interestRate)
  }



}

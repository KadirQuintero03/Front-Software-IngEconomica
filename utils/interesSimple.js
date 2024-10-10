import { tiempoConversion } from "./interesConversion";

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
    timeYear,
  );

  //Calcular Interes✅
  if (VP !== 0 && VF !== 0 && TiempoMod === 0 && interestRate === 0) {
    Interes = VF - VP;
    return "El interes simple es de: " + Interes.toFixed(2);
  }

  if (interestRate !== 0 && VP !== 0 && TiempoMod !== 0 && Interes === 0) {
    Interes = VP * interestRate * TiempoMod;
    VF = parseInt(VP) + parseInt(Interes);
    return (
      "El interes simple es de: " +
      Interes.toFixed(2) +
      " Y el valor futuro es de: " +
      VF.toFixed(2)
    );
  }

  //Calcular tiempo✅
  if (VF !== 0 && VP !== 0 && interestRate !== 0) {
    Interes = VF - VP;
    periodOfTime = Interes / (VP * interestRate);
    return "El total del tiempo es: " + periodOfTime.toFixed(2);
  }

  if (
    VP !== 0 &&
    interestRate !== 0 &&
    Interes !== 0 &&
    typeTime !== "" &&
    VF === 0
  ) {
    periodOfTime = (UnidadesDeTiempo[typeTime] * Interes) / (VP * interestRate);
    return "El total del tiempo es: " + periodOfTime.toFixed(2);
  }

  if (
    VP !== 0 &&
    Interes !== 0 &&
    interestRate !== 0 &&
    typeTime === "" &&
    VF === 0
  ) {
    VF = parseInt(VP) + parseInt(Interes);
    periodOfTime = (VF / VP - 1) / interestRate;
    return "El total del tiempo es: " + periodOfTime.toFixed(2);
  }

  //Calcular capital inicial✅
  if (Interes !== 0 && TiempoMod !== 0 && interestRate !== 0 && VF === 0) {
    VP = Interes / (interestRate * TiempoMod);
    return "El capital inicial es de: " + VP.toFixed(2);
  }

  if (VF !== 0 && TiempoMod !== 0 && interestRate !== 0 && Interes === 0) {
    VP = VF / (1 + TiempoMod * interestRate);
    return "El capital inicial es de: " + VP.toFixed(2);
  }

  if (Interes !== 0 && VF !== 0 && interestRate === 0 && VP === 0) {
    VP = VF - Interes;
    return "El capital inicial es de: " + VP.toFixed(2);
  }

  //Calcular tasa de interes✅
  if (VP !== 0 && VF !== 0 && TiempoMod !== 0 && Interes === 0) {
    Interes = VF - VP;
    interestRate = (Interes / (VP * TiempoMod)) * 100;
    return "La tasa de interes es de: " + interestRate + "%";
  }

  if (Interes !== 0 && TiempoMod !== 0 && VP !== 0 && VF === 0) {
    VF = parseInt(VP) + parseInt(Interes);
    interestRate = ((VF / VP - 1) / TiempoMod) * 100;
    return "La tasa de interes es de: " + interestRate + "%";
  }
}

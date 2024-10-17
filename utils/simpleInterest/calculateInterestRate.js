export function calculateInterestRate(VP, VF, TiempoMod, Interes) {
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

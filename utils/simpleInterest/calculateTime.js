export function calculateTime(VF, VP, interestRate, Interes) {
  //Calcular tiempo✅
  if (VF !== 0 && VP !== 0 && interestRate !== 0) {
    Interes = VF - VP;
    periodOfTime = Interes / (VP * interestRate);
    return "El total del tiempo es: " + periodOfTime.toFixed(2);
  }

  if (VP !== 0 && Interes !== 0 && interestRate !== 0) {
    VF = parseInt(VP) + parseInt(Interes);
    periodOfTime = (VF / VP - 1) / interestRate;
    return "El total del tiempo es: " + periodOfTime.toFixed(2);
  }
}

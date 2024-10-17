export function calculateInterest(VP, VF, TiempoMod, interestRate) {
  //Calcular Interes✅
  if (VP !== 0 && VF !== 0 && TiempoMod === 0 && interestRate === 0) {
    Interes = VF - VP;
    return "El interes simple es de: " + Interes.toFixed(2);
  }

  if (interestRate !== 0 && VP !== 0 && TiempoMod !== 0) {
    Interes = VP * interestRate * TiempoMod;
    VF = parseInt(VP) + parseInt(Interes);
    return (
      "El interes simple es de: " +
      Interes.toFixed(2) +
      " Y el valor futuro es de: " +
      VF.toFixed(2)
    );
  }
}

export function calculateVP(Interes, TiempoMod, interestRate, VF) {
  //Calcular capital inicial✅
  if (Interes !== 0 && TiempoMod !== 0 && interestRate !== 0 && VF === 0) {
    VP = Interes / (interestRate * TiempoMod);
    return "El capital inicial es de: " + VP.toFixed(2);
  }

  if (VF !== 0 && TiempoMod !== 0 && interestRate !== 0 && Interes === 0) {
    VP = VF / (1 + TiempoMod * interestRate);
    return "El capital inicial es de: " + VP.toFixed(2);
  }

  if (Interes !== 0 && VF !== 0 && interestRate === 0) {
    VP = VF - Interes;
    return "El capital inicial es de: " + VP.toFixed(2);
  }
}

function calculateVPN(tir, flows, initialInvestment) {
  let vpn = 0;

  for (let index = 0; index < flows.length; index++) {
    let pow = index + 1;
    vpn += flows[index] / Math.pow(1 + tir, pow);
  }
  return vpn - initialInvestment;
}

export const useCalculateTir = () => {
  function triggerTIR({ flows, initialInvestment }) {
    let tir = 0.1; // Valor inicial aproximado que equivale al  -> 10%
    let precision = 0.0001; // Margen de error aceptable
    let increment = 0.001; //Ajuste
    let maxIterations = 100000;
    let iterations = 0;

    while (iterations <= maxIterations) {
      let vpn = calculateVPN(tir, flows, initialInvestment);

      if (Math.abs(vpn) < precision) break;

      tir += vpn > 0 ? increment : -increment;

      // Reducir el incremento a medida que nos acercamos
      if (iterations % 100 === 0) increment /= 2;

      iterations++;
    }

    if (iterations === maxIterations) {
      return {
        error:
          "No se pudo encontrar la TIR en el número máximo de iteraciones.",
      };
    }

    return tir * 100;
  }

  return { triggerTIR };
};

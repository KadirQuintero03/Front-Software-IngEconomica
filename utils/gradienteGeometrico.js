import { tiempoConversion } from "./interesConversion";

export function validateInputs(
  type,
  valPresente,
  priCuota,
  n,
  timeCuota,
  interes,
  timeInteres,
  gradiente
) {
  if (type == "Valor Presente" || type == "Valor Futuro") {
    if (
      priCuota != 0 &&
      interes != 0 &&
      timeInteres != undefined &&
      n != 0 &&
      timeCuota != undefined &&
      gradiente != 0
    ) {
      return false;
    }
  }

  if (
    type == "Primera Cuota" &&
    valPresente != 0 &&
    interes != 0 &&
    timeInteres != undefined &&
    n != 0 &&
    timeCuota != undefined &&
    gradiente != 0
  ) {
    return false;
  }

  return true;
}

export function calculateCreciente(
  type,
  valPresente,
  priCuota,
  cuota,
  timeCuota,
  interes,
  timeInteres,
  gradiente
) {
  const n = tiempoConversion(timeCuota, timeInteres, cuota);

  switch (type) {
    case "Valor Presente":
      let vp = 0;
      if (interes != gradiente) {
        vp =
          (priCuota / (interes - gradiente)) *
          (1 - Math.pow((1 + gradiente) / (1 + interes), n));
      } else {
        vp = (n * priCuota) / (1 + interes);
      }

      return (
        "El valor presente es: " +
        parseFloat(vp.toFixed(2)).toLocaleString("de-DE")
      );

    case "Valor Futuro":
      const factor = Math.pow((1 + interes) / (1 + gradiente), n) - 1;
      const vf = (priCuota / (interes - gradiente)) * factor;
      return (
        "El valor futuro es: " +
        parseFloat(vf.toFixed(2)).toLocaleString("de-DE")
      );

    case "Primera Cuota":
      const a =
        (valPresente * (interes - gradiente)) /
        (1 - Math.pow((1 + gradiente) / (1 + interes), n));
      return (
        "La primera cuota es de: " +
        parseFloat(a.toFixed(2)).toLocaleString("de-DE")
      );
  }
}

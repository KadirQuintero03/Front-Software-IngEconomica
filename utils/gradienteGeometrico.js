export function validateInputs(
  type,
  valPresente,
  priCuota,
  cuota,
  timeCuota,
  i,
  timeInteres,
  gradiente
) {
  if (type == "Valor Presente" || type == "Valor Futuro") {
    if (
      priCuota != 0 &&
      i != 0 &&
      timeInteres != undefined &&
      cuota != 0 &&
      timeCuota != undefined &&
      gradiente != 0
    ) {
      return false;
    }
  }

  if (
    type == "Primera Cuota" &&
    valPresente != 0 &&
    i != 0 &&
    timeInteres != undefined &&
    cuota != 0 &&
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
  priCuota = parseFloat(priCuota);
  cuota = parseFloat(cuota);
  interes = parseFloat(interes);
  gradiente = parseFloat(gradiente);

  const i = interesConversion(timeCuota, timeInteres, interes);

  switch (type) {
    case "Valor Presente":
      let vp = 0;
      if (i != gradiente) {
        vp =
          (priCuota *
            ((Math.pow(1 + gradiente, cuota) - Math.pow(1 + i, cuota)) /
              (gradiente - i))) /
          Math.pow(1 + i, cuota);
      } else {
        vp = (cuota * priCuota) / (1 + i);
      }

      return "El valor presente es: " + vp.toFixed(2);

    case "Valor Futuro":
      const factor = Math.pow((1 + i) / (1 + gradiente), cuota) - 1;
      const vf = (priCuota / (i - gradiente)) * factor;
      return "El valor futuro es: " + vf.toFixed(2);

    case "Primera Cuota":
      const facto = 1 - Math.pow((1 + gradiente) / (1 + i), cuota);
      const a = (valPresente * (i - gradiente)) / facto;
      return "La primera cuota es de: " + a.toFixed(2);
  }
}

const interesConversion = (type, mainType, interes) => {
  const pDado = values.find((i) => i.value == type);
  const pDeseado = values.find((i) => i.value == mainType);

  return interes / (pDeseado.key / pDado.key);
};

const values = [
  { key: 52, value: "Semana" },
  { key: 24, value: "Quincena" },
  { key: 12, value: "Mes" },
  { key: 1, value: "Año" },
  { key: 2, value: "Semestre" },
  { key: 6, value: "Bimestre" },
  { key: 4, value: "Trimestre" },
];

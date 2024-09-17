const values = [
  { key: 365, value: "Dia" },
  { key: 52, value: "Semana" },
  { key: 24, value: "Quincena" },
  { key: 12, value: "Mes" },
  { key: 6, value: "Bimestre" },
  { key: 4, value: "Trimestre" },
  { key: 2, value: "Semestre" },
  { key: 1, value: "Año" },
];

export const interesConversion = (type, mainType, interes) => {
  const pDado = values.find((i) => i.value == type);
  const pDeseado = values.find((i) => i.value == mainType);

  return interes / (pDeseado.key / pDado.key);
};

export const tiempoConversion = (
  typeTime,
  typeInterest,
  periodOfTime,
  timeDay,
  timeMonth,
  timeYear,
) => {
  //Conversion para tiempo especifico.
  if (periodOfTime === 0) {
    if (typeTime === "Dia") {
      return (
        parseInt(timeYear) * 365 +
        parseInt(timeMonth) * 30 +
        parseInt(timeDay)
      ).toFixed(2);
    }

    if (typeTime === "Mes") {
      return (
        parseInt(timeYear) * 12 +
        parseInt(timeMonth) +
        parseInt(timeDay) / 30
      ).toFixed(2);
    }

    if (typeTime === "Año") {
      return (
        parseInt(timeYear) +
        parseInt(timeMonth) / 12 +
        parseInt(timeDay) / 365
      ).toFixed(2);
    }
  }

  //Conversion para periodo de tiempo
  if (
    periodOfTime !== 0 &&
    timeDay === 0 &&
    timeMonth === 0 &&
    timeYear === 0
  ) {
    const pDado = values.find((i) => i.value === typeTime);
    const pDeseado = values.find((i) => i.value === typeInterest);

    return periodOfTime / (pDeseado.key / pDado.key);
  }
};

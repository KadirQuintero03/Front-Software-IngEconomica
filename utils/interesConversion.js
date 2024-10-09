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

export const tiempoConversion = (
  typeTime,
  typeInterest,
  periodOfTime,
  timeDay,
  timeMonth,
  timeYear
) => {
  //Conversion para tiempo especifico.
  if (periodOfTime === 0) {
    if (typeInterest === "Dia") {
      return (
        parseInt(timeYear) * 365 +
        parseInt(timeMonth) * 30 +
        parseInt(timeDay)
      ).toFixed(2);
    }

    if (typeInterest === "Mes") {
      return (
        parseInt(timeYear) * 12 +
        parseInt(timeMonth) +
        parseInt(timeDay) / 30
      ).toFixed(2);
    }

    if (typeInterest === "Año") {
      return (
        parseInt(timeYear) +
        parseInt(timeMonth) / 12 +
        parseInt(timeDay) / 365
      ).toFixed(2);
    }

    if (typeInterest === "Semana") {
      return (
        parseInt(timeYear) * 52 +
        parseInt(timeMonth) * 4.34524 + // Un mes equivale a ~4.345 semanas
        parseInt(timeDay) / 7
      ).toFixed(2);
    }

    if (typeInterest === "Quincena") {
      return (
        parseInt(timeYear) * 24 +
        parseInt(timeMonth) * 2 +
        parseInt(timeDay) / 15
      ).toFixed(2);
    }

    if (typeInterest === "Bimestre") {
      return (
        parseInt(timeYear) * 6 +
        parseInt(timeMonth) / 2 +
        parseInt(timeDay) / 60
      ).toFixed(2);
    }

    if (typeInterest === "Trimestre") {
      return (
        parseInt(timeYear) * 4 +
        parseInt(timeMonth) / 3 +
        parseInt(timeDay) / 90
      ).toFixed(2);
    }

    if (typeInterest === "Semestre") {
      return (
        parseInt(timeYear) * 2 +
        parseInt(timeMonth) / 6 +
        parseInt(timeDay) / 180
      ).toFixed(2);
    }
  }

  //Conversion para periodo de tiempo
  if (periodOfTime !== 0) {
    const pDado = values.find((i) => i.value === typeTime);
    const pDeseado = values.find((i) => i.value === typeInterest);

    return periodOfTime / (pDado.key / pDeseado.key);
  }
};

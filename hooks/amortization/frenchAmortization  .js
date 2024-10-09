const typeTaseInterest = "mensual";
const typeQuotas = "mensual";
const capitalPrestamo = 70000;
const tasaInteres = 1.5 / 100;
const cantidadCuotas = 35;

class SistemaFrances {
  saldoCapital;
  interesCuota;
  amortizacion;
}

let matrizTodo = [];

const amortizacionFrancesa = (
  capital,
  tsa,
  cuotas,
  typeQuotas,
  typeInterest
) => {
  cuotas = parseInt(cuotas);
  tsa = parseFloat(tsa);
  capital = parseInt(capital);
  console.log(tsa);
  // convertir el tipo de tiempo
  tsa = interestNomalizad(typeInterest, typeQuotas, tsa);
  tsa = parseFloat(tsa);
  console.log(tsa);
  let cuotaTotal =
    (capital * tsa * Math.pow(1 + tsa, cuotas)) /
    (Math.pow(1 + tsa, cuotas) - 1);

  let objectInsert = new SistemaFrances();

  saldoCapital = capital;
  interesCuota = saldoCapital * tsa;
  amortizacion = parseFloat(cuotaTotal - interesCuota);

  // matrizTodo.push([saldoCapital,interesCuota,amortizacion])

  // console.log(matrizTodo)

  for (let index = 1; index <= cuotas; index++) {
    interesCuota = saldoCapital * tsa;

    let amortizacion = cuotaTotal - interesCuota;

    saldoCapital = saldoCapital - amortizacion;

    matrizTodo.push([saldoCapital, interesCuota, amortizacion]);
  }

  return matrizTodo;
};

let diccionarioCuotas = {
  anual: 1,
  semestral: 2,
  bimestral: 6,
  trimestral: 4,
  mensual: 12,
};

const interestNomalizad = (typeTaseInteres, typeQuotas, taseInterest) => {
  if (typeTaseInteres === "anual") {
    const searchDiccionary = encontrarParecido(typeQuotas);
    return (Math.pow(1 + taseInterest, 1 / searchDiccionary) - 1).toFixed(3);
  } else if (typeTaseInteres === "semestral") {
    const searchDiccionary = encontrarParecido(typeQuotas);
    return (Math.pow(1 + taseInterest, searchDiccionary / 2) - 1).toFixed(3);
  } else if (typeTaseInteres === "trimestral") {
    const searchDiccionary = encontrarParecido(typeQuotas);
    return (Math.pow(1 + taseInterest, searchDiccionary / 4) - 1).toFixed(3);
  } else if (typeTaseInteres === "bimestral") {
    const searchDiccionary = encontrarParecido(typeQuotas);
    return (Math.pow(1 + taseInterest, searchDiccionary / 6) - 1).toFixed(3);
  } else if (typeTaseInteres === "mensual") {
    const searchDiccionary = encontrarParecido(typeQuotas);
    return (Math.pow(1 + taseInterest, searchDiccionary / 12) - 1).toFixed(3);
  }
};
function encontrarParecido(typeQuotas) {
  if (diccionarioCuotas.hasOwnProperty(typeQuotas)) {
    return diccionarioCuotas[typeQuotas];
  }
}

const tabla = amortizacionFrancesa(
  capitalPrestamo,
  tasaInteres,
  cantidadCuotas,
  typeQuotas,
  typeTaseInterest
);

//console.table(tabla)

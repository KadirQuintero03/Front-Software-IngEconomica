/*El banco comercial concede un préstamo para la compra de un inmueble cuyo valor es de
5.000um, bajo las siguientes condiciones: Pagos trimestrales con sistema de 
amortización alemán, a una TEA(Tasa efectiva anual) del 20% y un plazo de 2 años. Elabore el cronograma

Datos:
Préstamo: 5000
n (trimestral): 2 * 4 = 8 
TEA: 0.20
TET: 0.0466351

i_solicitada = (1 + i_dato)^periodo_deseo/periodo_dato - 1
TET = (1 + 0.20)^90/360 - 1

periodo deseo: El periodo que deseo calcular en numero de días.
periodo dato: El periodo de la tasa dato(tasa efectiva anual) en numero de días.
*/

let capital = 5000;
let period = 8;
let interestRate = 0.0466351;

function generarTablaAmortizacion(capital, period, interestRate) {
  // Inicializar variables
  let saldoInicial = capital;
  let saldo = saldoInicial;
  let amortizacion = capital / period;
  let tabla = [];

  // Iterar sobre cada periodo
  for (let periodo = 1; periodo <= period; periodo++) {
    // Calcular interés
    let interes = saldo * interestRate;

    // Calcular cuota
    let cuota = amortizacion + interes;

    // Actualizar saldo
    saldo = saldo - amortizacion;

    // Agregar fila a la tabla: [Periodo, Amortización, Interés, Cuota, Saldo]
    tabla.push([periodo, amortizacion, interes, cuota, saldo]);
  }

  return tabla;
}

// Llamada a la función
let tablaAmortizacion = generarTablaAmortizacion(capital, period, interestRate);

// Mostrar la tabla
console.table(tablaAmortizacion);

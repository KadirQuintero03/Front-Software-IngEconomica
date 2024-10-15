import { tiempoConversion } from "../../utils/interesConversion";

export function calculateGerman(
  capital,
  period,
  interestRate,
  typeTime,
  typeInterest
) {
  period = tiempoConversion(typeTime, typeInterest, period);

  // Inicializar variables
  let saldoInicial = capital;
  let saldo = saldoInicial;
  let amortizacion = capital / period;
  let totalPagos = 0,
    totalInteres = 0,
    totalAmortizacion = 0;
  let tabla = [];

  let fieldsFilled = 0;
  if (capital !== 0) fieldsFilled++;
  if (period !== 0) fieldsFilled++;
  if (interestRate !== 0) fieldsFilled++;

  if (fieldsFilled < 3) {
    return "Por favor, rellene todos los campos";
  }

  interestRate = interestRate / 100;

  // Iterar sobre cada periodo
  for (let periodo = 1; periodo <= period; periodo++) {
    // Calcular interés
    let interes = parseInt(saldo) * parseFloat(interestRate);

    // Calcular cuota
    let cuota = parseInt(amortizacion) + parseInt(interes);

    // Actualizar saldo
    saldo = parseInt(saldo) - parseInt(amortizacion);

    // Acumular totales
    totalPagos += parseInt(cuota);
    totalInteres += parseInt(interes);
    totalAmortizacion += parseInt(amortizacion);

    // Agregar fila a la tabla: [Periodo, Amortización, Interés, Cuota, Saldo]
    tabla.push([periodo, amortizacion, interes, cuota, saldo]);
  }

  // Agregar fila de totales
  tabla.push(["T", totalAmortizacion, totalInteres, totalPagos, ""]);

  // Formatear la tabla como string
  let tablaString = "Periodo | Amortizacion | Interés | Cuota | Saldo\n";
  tabla.forEach((row) => {
    tablaString += `${row[0]}         | ${row[1]}      | ${row[2]}        | ${row[3]}           | ${row[4]}\n`;
  });

  return tablaString; // Devolver la tabla formateada
}

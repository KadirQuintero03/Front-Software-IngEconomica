import { tiempoConversion } from "../../utils/interesConversion";

export function calculateAmerican(
  capital,
  period,
  interestRate,
  typeTime,
  typeInterest
) {
  console.log(
    "Datos que llegaron: ",
    capital,
    period,
    interestRate,
    typeTime,
    typeInterest
  );

  // Inicializar variables
  let saldoInicial = capital;
  let saldo = saldoInicial;
  let amortizacion = 0;
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

  period = tiempoConversion(typeTime, typeInterest, period);

  // Iterar sobre cada periodo
  for (let periodo = 1; periodo <= period; periodo++) {
    let interes = parseInt(saldoInicial) * parseFloat(interestRate);

    // En el último periodo, la amortización será igual al saldo
    if (periodo === period) {
      amortizacion = saldo;
      saldo = 0;
    }

    let pagos = parseInt(amortizacion) + parseInt(interes);

    // Acumular totales
    totalPagos += parseInt(pagos);
    totalInteres += parseInt(interes);
    totalAmortizacion += parseInt(amortizacion);

    // Agregar fila a la tabla: [periodo, pagos, interes, amortizacion, saldo]
    tabla.push([periodo, pagos, interes, amortizacion, saldo]);
  }

  // Agregar fila de totales
  tabla.push(["T", totalPagos, totalInteres, totalAmortizacion, ""]);

  // Formatear la tabla como string
  let tablaString = "Periodo | Pagos | Interés | Amortización | Saldo\n";
  tabla.forEach((row) => {
    tablaString += `${row[0]}         | ${row[1]}      | ${row[2]}        | ${row[3]}           | ${row[4]}\n`;
  });

  return tablaString; // Devolver la tabla formateada
}

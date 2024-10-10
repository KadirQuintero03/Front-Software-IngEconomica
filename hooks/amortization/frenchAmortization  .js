import { tiempoConversion } from "../../utils/interesConversion";

export function calculateFrench(
  capital,
  period,
  interestRate,
  typeTime,
  typeInterest
) {
  period = tiempoConversion(typeTime, typeInterest, period);

  interestRate = interestRate / 100;

  console.log(
    "Datos que llegaron: ",
    capital,
    period,
    interestRate,
    typeTime,
    typeInterest
  );

  // Inicializar variables
  let saldoCapital = parseInt(capital);
  let cuotaTotal =
    (parseInt(capital) *
      parseFloat(interestRate) *
      Math.pow(1 + parseFloat(interestRate), parseInt(period))) /
    (Math.pow(1 + parseFloat(interestRate), parseInt(period)) - 1);

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

  // Iterar sobre cada periodo
  for (let periodo = 1; periodo <= period; periodo++) {
    // Calcular interés de la cuota
    let interesCuota = parseInt(saldoCapital) * parseFloat(interestRate);

    // Calcular amortización de la cuota
    let amortizacion = parseInt(cuotaTotal) - parseInt(interesCuota);

    // Acumular totales
    totalPagos += parseInt(cuotaTotal);
    totalInteres += parseInt(interesCuota);
    totalAmortizacion += parseInt(amortizacion);

    // Agregar fila a la tabla: [Periodo, Amortización, Interés, Cuota, Saldo]
    tabla.push([
      periodo,
      saldoCapital,
      interesCuota,
      amortizacion,
      cuotaTotal.toFixed(0),
    ]);

    // Actualizar saldo del capital
    saldoCapital = parseInt(saldoCapital) - parseInt(amortizacion);
  }

  // Agregar fila de totales
  tabla.push(["T", "        ", totalInteres, totalAmortizacion, totalPagos]);

  // Formatear la tabla como string
  let tablaString = "Periodo | Saldo | Interés | Amortización | Cuota\n";
  tabla.forEach((row) => {
    tablaString += `${row[0]}         | ${row[1]}      | ${row[2]}        | ${row[3]}           | ${row[4]}\n`;
  });

  return tablaString; // Devolver la tabla formateada
}

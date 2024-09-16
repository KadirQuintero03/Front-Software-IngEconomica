export function timeConversion(
  Tiempo,
  tiempoDia,
  tiempoMes,
  tiempoAño,
  UnidadDeTiempo,
) {
  //Conversion para tiempo especifico.
  if (tiempoDia !== 0 && tiempoMes !== 0 && tiempoAño !== 0 && Tiempo === 0) {
    if (UnidadDeTiempo === "dias") {
      return (
        parseInt(tiempoAño) * 365 +
        parseInt(tiempoMes) * 30 +
        parseInt(tiempoDia)
      ).toFixed(2);
    }

    if (UnidadDeTiempo === "meses") {
      return (
        parseInt(tiempoAño) * 12 +
        parseInt(tiempoMes) +
        parseInt(tiempoDia) / 30
      ).toFixed(2);
    }

    if (UnidadDeTiempo === "anual") {
      return (
        parseInt(tiempoAño) +
        parseInt(tiempoMes) / 12 +
        parseInt(tiempoDia) / 365
      ).toFixed(2);
    }
  }

  //Conversion para periodo de tiempo.
  if (Tiempo !== 0 && tiempoDia === 0 && tiempoMes === 0 && tiempoAño === 0) {
    if (UnidadDeTiempo === "dias") {
      return Tiempo / 365;
    }

    if (UnidadDeTiempo === "mensual") {
      return Tiempo / 12;
    }

    if (UnidadDeTiempo === "semestral") {
      return Tiempo / 2;
    }

    if (UnidadDeTiempo === "trimestral") {
      return Tiempo / 3;
    }

    if (UnidadDeTiempo === "cuatrimestral") {
      return Tiempo / 4;
    }

    if (UnidadDeTiempo === "bimestral") {
      return Tiempo / 6;
    }

    if (UnidadDeTiempo === "anual") {
      return Tiempo / 1;
    }
  }
}

export function calculateSimpleInterest(
  CapitalInicial,
  TasaDeInteres,
  Tiempo,
  tiempoDia,
  tiempoMes,
  tiempoAño,
  UnidadDeTiempo,
  MontoFuturo,
  Interes,
  UnidadesDeTiempo,
  resetFields,
) {
  TasaDeInteres = TasaDeInteres / 100;

  let fieldsFilled = 0;
  if (CapitalInicial !== 0) fieldsFilled++;
  if (TasaDeInteres !== 0) fieldsFilled++;
  if (MontoFuturo !== 0) fieldsFilled++;
  if (Interes !== 0) fieldsFilled++;
  if (Tiempo !== 0) fieldsFilled++;

  if (fieldsFilled < 2) {
    return "Debe rellenar mínimo 2 campos";
  }

  let TiempoMod = timeConversion(
    Tiempo,
    tiempoDia,
    tiempoMes,
    tiempoAño,
    UnidadDeTiempo,
  );

  //Calcular Interes✅
  if (
    CapitalInicial !== 0 &&
    MontoFuturo !== 0 &&
    TiempoMod === 0 &&
    TasaDeInteres === 0
  ) {
    Interes = MontoFuturo - CapitalInicial;
    return "El interes simple es de: " + Interes.toFixed(2);
  }

  if (
    TasaDeInteres !== 0 &&
    CapitalInicial !== 0 &&
    TiempoMod !== 0 &&
    Interes === 0
  ) {
    Interes = CapitalInicial * TasaDeInteres * TiempoMod;
    MontoFuturo = parseInt(CapitalInicial) + parseInt(Interes);
    return "El interes simple es de: " + Interes.toFixed(2) + " Y el valor futuro es de: " + MontoFuturo.toFixed(2);
  }

  //Calcular tiempo✅
  if (MontoFuturo !== 0 && CapitalInicial !== 0 && TasaDeInteres !== 0) {
    Interes = MontoFuturo - CapitalInicial;
    Tiempo = Interes / (CapitalInicial * TasaDeInteres);
    return "El total del tiempo es: " + Tiempo.toFixed(2);
  }

  if (
    CapitalInicial !== 0 &&
    TasaDeInteres !== 0 &&
    Interes !== 0 &&
    UnidadDeTiempo !== "" &&
    MontoFuturo === 0
  ) {
    Tiempo =
      (UnidadesDeTiempo[UnidadDeTiempo] * Interes) /
      (CapitalInicial * TasaDeInteres);
    return "El total del tiempo es: " + Tiempo.toFixed(2);
  }

  if (
    CapitalInicial !== 0 &&
    Interes !== 0 &&
    TasaDeInteres !== 0 &&
    UnidadDeTiempo === "" &&
    MontoFuturo === 0
  ) {
    MontoFuturo = parseInt(CapitalInicial) + parseInt(Interes);
    Tiempo = (MontoFuturo / CapitalInicial - 1) / TasaDeInteres;
    return "El total del tiempo es: " + Tiempo.toFixed(2);
  }

  //Calcular capital inicial✅
  if (
    Interes !== 0 &&
    TiempoMod !== 0 &&
    TasaDeInteres !== 0 &&
    MontoFuturo === 0
  ) {
    CapitalInicial = Interes / (TasaDeInteres * TiempoMod);
    return "El capital inicial es de: " + CapitalInicial.toFixed(2);
  }

  if (
    MontoFuturo !== 0 &&
    TiempoMod !== 0 &&
    TasaDeInteres !== 0 &&
    Interes === 0
  ) {
    CapitalInicial = MontoFuturo / (1 + TiempoMod * TasaDeInteres);
    return "El capital inicial es de: " + CapitalInicial.toFixed(2);
  }

  if (
    Interes !== 0 &&
    MontoFuturo !== 0 &&
    TasaDeInteres === 0 &&
    CapitalInicial === 0
  ) {
    CapitalInicial = MontoFuturo - Interes;
    return "El capital inicial es de: " + CapitalInicial.toFixed(2);
  }

  //Calcular tasa de interes✅
  if (
    CapitalInicial !== 0 &&
    MontoFuturo !== 0 &&
    TiempoMod !== 0 &&
    Interes === 0
  ) {
    Interes = MontoFuturo - CapitalInicial;
    TasaDeInteres = (Interes / (CapitalInicial * TiempoMod)) * 100;
    return "La tasa de interes es de: " + TasaDeInteres + "%";
  }

  if (
    Interes !== 0 &&
    TiempoMod !== 0 &&
    CapitalInicial !== 0 &&
    MontoFuturo === 0
  ) {
    MontoFuturo = parseInt(CapitalInicial) + parseInt(Interes);
    TasaDeInteres = ((MontoFuturo / CapitalInicial - 1) / TiempoMod) * 100;
    return "La tasa de interes es de: " + TasaDeInteres + "%";
  }

  resetFields();
}

import { tiempoConversion } from "./interesConversion";

export function calculateAnnuity(
  VP,
  VF,
  R,
  N,
  Y,
  I,
  typeTime,
  typeInterest,
  selectedAnnuity
) {
  let fieldsFilled = 0;
  if (VP !== 0) fieldsFilled++;
  if (VF !== 0) fieldsFilled++;
  if (R !== 0) fieldsFilled++;
  if (N !== 0) fieldsFilled++;
  if (Y !== 0) fieldsFilled++;
  if (I !== 0) fieldsFilled++;

  if (fieldsFilled < 3) {
    return "Debe rellenar mínimo 3 campos";
  }

  I = I / 100;

  N = tiempoConversion(typeTime, typeInterest, N);
  Y = tiempoConversion(typeTime, typeInterest, Y);

  if (selectedAnnuity === "Vencida") {
    //Calcular renta teniendo el monto final.
    if (R === 0 && VP === 0 && VF !== 0 && I !== 0 && N !== 0) {
      R =
        parseInt(VF) /
        ((Math.pow(1 + parseFloat(I), parseInt(N)) - 1) / parseFloat(I));
      return (
        "El valor de la renta teniendo el mondo final es de: ", R.toFixed(2)
      );
    }

    //Calcular periodos teniendo el monto final.
    if (N === 0 && VP === 0 && VF !== 0 && I !== 0 && R !== 0) {
      N =
        Math.log((parseInt(VF) * parseFloat(I)) / parseInt(R) + 1) /
        Math.log(1 + parseFloat(I));
      return (
        "El valor de numero de periodos teniendo el monto final es de: ",
        N.toFixed(2)
      );
    }

    //Calcular renta teniendo el valor presente.
    if (R === 0 && VF === 0 && VP !== 0 && I !== 0 && N !== 0) {
      R =
        (parseInt(VP) * parseFloat(I)) /
        (1 - Math.pow(1 + parseFloat(I), -parseInt(N)));
      return (
        "El valor de la renta teniendo el valor presente es de: ", R.toFixed(2)
      );
    }

    //Calcular periodos teniendo el valor presente.
    if (N === 0 && VF === 0 && VP !== 0 && I !== 0 && R !== 0) {
      N =
        Math.log(1 - (parseInt(VP) * parseFloat(I)) / parseInt(R)) /
        Math.log(1 + parseFloat(I));
      return (
        "El valor del numero de periodos teniendo el valor presente es de: ",
        N.toFixed(2)
      );
    }

    //Calcular valor presente y futuro.
    if (VP === 0 && VF === 0 && N !== 0 && I !== 0 && R !== 0) {
      VP =
        (parseInt(R) * (1 - Math.pow(1 + parseFloat(I), -parseInt(N)))) /
        parseFloat(I);
      VF =
        (parseInt(R) * (Math.pow(1 + parseFloat(I), parseInt(N)) - 1)) /
        parseFloat(I);
      return (
        "El valor presente de la anualidad es de: ",
        VP.toFixed(2),
        "mientras que el valor futuro es de: ",
        VF.toFixed(2)
      );
    }
  }

  if (selectedAnnuity === "Anticipada") {
    //Calcular renta teniendo el monto final.
    if (R === 0 && VP === 0 && VF !== 0 && I !== 0 && N !== 0) {
      R =
        parseInt(VF) /
        (((Math.pow(1 + parseFloat(I), parseInt(N)) - 1) / parseFloat(I)) *
          (1 + parseFloat(I)));
      return (
        "El valor de la renta teniendo el monto final es de: ", R.toFixed(2)
      );
    }

    //Calcular periodos teniendo el monto final.
    if (N === 0 && VP === 0 && VF !== 0 && I !== 0 && R !== 0) {
      N =
        Math.log(
          (parseInt(VF) * parseFloat(I)) / (parseInt(R) * (1 + parseFloat(I))) +
            1
        ) / Math.log(1 + parseFloat(I));
      return (
        "El numero de periodos teniendo el monto final es de: ", N.toFixed(2)
      );
    }

    //Calcular renta teniendo el valor presente.
    if (R === 0 && VF === 0 && VP !== 0 && I !== 0 && N !== 0) {
      R =
        (parseInt(VP) * parseFloat(I)) /
        ((1 + parseFloat(I)) * (1 - Math.pow(1 + parseFloat(I), -parseInt(N))));
      return (
        "El valor de la renta teniendo el valor presente es de: ", R.toFixed(2)
      );
    }

    //Calcular periodos teniendo el valor presente.
    if (N === 0 && VF === 0 && VP !== 0 && I !== 0 && R !== 0) {
      let N =
        1 -
        Math.log(
          1 - (parseInt(VP) * parseFloat(I)) / parseInt(R) + parseFloat(I)
        ) /
          Math.log(1 + parseFloat(I));
      return "El numero de periodos teniendo el valor presente es de: ", N;
    }

    //Calcular valor presente y futuro.
    if (VP === 0 && VF === 0 && N !== 0 && I !== 0 && R !== 0) {
      VP =
        ((parseInt(R) * (1 - Math.pow(1 + parseFloat(I), -parseInt(N)))) /
          parseFloat(I)) *
        (1 + parseFloat(I));
      VF =
        ((parseInt(R) * (1 - Math.pow(1 + parseFloat(I), parseInt(N)))) /
          parseFloat(I)) *
        (1 + parseFloat(I));
      return (
        "El valor presente es de: ",
        VP.toFixed(2),
        "mientras que el valor futuro es de: ",
        VF.toFixed(2)
      );
    }
  }

  if (selectedAnnuity === "Diferida vencida") {
    //Calcular valor presente.
    if (VP === 0 && R !== 0 && I !== 0 && N !== 0 && Y !== 0) {
      VP =
        parseInt(R) *
        ((1 - Math.pow(1 + parseFloat(I), -parseInt(N))) /
          (Math.pow(1 + parseFloat(I), parseInt(Y)) * parseFloat(I)));
      return "El capital inicial de la ADV es de: ", VP.toFixed(2);
    }

    //Calcular la renta teniendo el valor presente.
    if (R === 0 && VP !== 0 && I !== 0 && N !== 0 && Y !== 0) {
      R =
        ((parseInt(VP) * parseFloat(I)) /
          (1 - Math.pow(1 + parseFloat(I), -parseInt(N)))) *
        Math.pow(1 + parseFloat(I), parseInt(Y));
      return "El valor de la renta de la ADV es de: ", R.toFixed(2);
    }

    //Calcular periodo de gracia teniendo el valor presente.
    if (Y === 0 && VP !== 0 && I !== 0 && N !== 0 && R !== 0) {
      Y =
        (Math.log(parseInt(R)) +
          Math.log(1 - Math.pow(1 + parseFloat(I), -parseInt(N))) -
          Math.log(parseInt(VP) * parseFloat(I))) /
        Math.log(1 + parseFloat(I));
      return "El periodo de gracia de la ADV es de: ", Y.toFixed(2);
    }

    //Calcular periodo teniendo el valor presente.
    if (N === 0 && VP !== 0 && I !== 0 && R !== 0 && Y !== 0) {
      N =
        (Math.log(parseInt(R)) -
          Math.log(
            parseInt(R) -
              parseInt(VP) *
                (Math.pow(1 + parseFloat(I), parseInt(Y)) * parseFloat(I))
          )) /
        Math.log(1 + parseFloat(I));
      return "El tiempo calculado en el ADV es de: ", N.toFixed(2);
    }
  }

  if (selectedAnnuity === "Diferida anticipada") {
    //Calcular valor presente.
    if (VP === 0 && R !== 0 && I !== 0 && N !== 0 && Y !== 0) {
      VP =
        parseInt(R) *
        ((1 - Math.pow(1 + parseFloat(I), -parseInt(N))) /
          (Math.pow(1 + parseFloat(I), parseInt(Y - 1)) * parseFloat(I)));
      return "El capital inicial de la ADA es de: ", VP.toFixed(2);
    }

    //Calcular la renta teniendo el valor presente.
    if (R === 0 && VP !== 0 && I !== 0 && N !== 0 && Y !== 0) {
      R =
        ((parseInt(VP) * parseFloat(I)) /
          (1 - Math.pow(1 + parseFloat(I), -parseInt(N)))) *
        (Math.pow(1 + parseFloat(I), parseInt(Y - 1)) / 1);
      return "El valor de la renta de la ADA es de: ", R.toFixed(2);
    }

    //Calcular periodo de gracia teniendo el valor presente.
    if (Y === 0 && VP !== 0 && I !== 0 && N !== 0 && R !== 0) {
      Y =
        (Math.log(parseInt(R)) *
          (1 + parseFloat(I)) *
          (1 - Math.pow(1 + parseFloat(I), -parseInt(N))) -
          Math.log(parseInt(VP) * parseFloat(I))) /
        Math.log(1 + parseFloat(I));
      return "El periodo de gracia de la ADA es de: ", Y.toFixed(2);
    }

    //Calcular periodo teniendo el valor presente.
    if (N === 0 && VP !== 0 && I !== 0 && R !== 0 && Y !== 0) {
      N =
        (Math.log(parseInt(R)) -
          Math.log(
            parseInt(R) -
              parseInt(VP) *
                (Math.pow(1 + parseFloat(I), parseInt(Y - 1)) * parseFloat(I))
          )) /
        Math.log(1 + parseFloat(I));
      return "El tiempo calculado en el ADA es de: ", N.toFixed(2);
    }
  }
}

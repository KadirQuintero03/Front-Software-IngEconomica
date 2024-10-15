export function anticipated(VP, VF, R, N, I) {
  //Calcular renta teniendo el monto final.
  if (R === 0 && VP === 0 && VF !== 0 && I !== 0 && N !== 0) {
    R =
      parseInt(VF) /
      (((Math.pow(1 + parseFloat(I), parseInt(N)) - 1) / parseFloat(I)) *
        (1 + parseFloat(I)));
    return (
      "El valor de la renta teniendo el monto final es de: " + R.toFixed(2)
    );
  }

  //Calcular periodos teniendo el monto final.
  if (N === 0 && VP === 0 && VF !== 0 && I !== 0 && R !== 0) {
    N =
      Math.log(
        (parseInt(VF) * parseFloat(I)) / (parseInt(R) * (1 + parseFloat(I))) + 1
      ) / Math.log(1 + parseFloat(I));
    return (
      "El numero de periodos teniendo el monto final es de: " + N.toFixed(2)
    );
  }

  //Calcular renta teniendo el valor presente.
  if (R === 0 && VF === 0 && VP !== 0 && I !== 0 && N !== 0) {
    R =
      (parseInt(VP) * parseFloat(I)) /
      ((1 + parseFloat(I)) * (1 - Math.pow(1 + parseFloat(I), -parseInt(N))));
    return (
      "El valor de la renta teniendo el valor presente es de: " + R.toFixed(2)
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
    return "El numero de periodos teniendo el valor presente es de: " + N;
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
      "El valor presente es de: " + VP.toFixed(2),
      "mientras que el valor futuro es de: " + VF.toFixed(2)
    );
  }
}

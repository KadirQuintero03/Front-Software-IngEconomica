export function deferredAnticipated(VP, VF, R, N, Y, I) {
  //Calcular valor presente.
  if (VP === 0 && R !== 0 && I !== 0 && N !== 0 && Y !== 0) {
    VP =
      parseInt(R) *
      ((1 - Math.pow(1 + parseFloat(I), -parseInt(N))) /
        (Math.pow(1 + parseFloat(I), parseInt(Y - 1)) * parseFloat(I)));
    return "El capital inicial de la ADA es de: " + VP.toFixed(2);
  }

  //Calcular la renta teniendo el valor presente.
  if (R === 0 && VP !== 0 && I !== 0 && N !== 0 && Y !== 0) {
    R =
      ((parseInt(VP) * parseFloat(I)) /
        (1 - Math.pow(1 + parseFloat(I), -parseInt(N)))) *
      (Math.pow(1 + parseFloat(I), parseInt(Y - 1)) / 1);
    return "El valor de la renta de la ADA es de: " + R.toFixed(2);
  }

  //Calcular periodo de gracia teniendo el valor presente.
  if (Y === 0 && VP !== 0 && I !== 0 && N !== 0 && R !== 0) {
    Y =
      (Math.log(parseInt(R)) *
        (1 + parseFloat(I)) *
        (1 - Math.pow(1 + parseFloat(I), -parseInt(N))) -
        Math.log(parseInt(VP) * parseFloat(I))) /
      Math.log(1 + parseFloat(I));
    return "El periodo de gracia de la ADA es de: " + Y.toFixed(2);
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
    return "El tiempo calculado en el ADA es de: " + N.toFixed(2);
  }
}

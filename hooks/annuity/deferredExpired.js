export function deferredExpired(VP, VF, R, N, Y, I) {
  //Calcular valor presente.
  if (VP === 0 && R !== 0 && I !== 0 && N !== 0 && Y !== 0) {
    VP =
      parseInt(R) *
      ((1 - Math.pow(1 + parseFloat(I), -parseInt(N))) /
        (Math.pow(1 + parseFloat(I), parseInt(Y)) * parseFloat(I)));
    return "El capital inicial de la ADV es de: " + VP.toFixed(2);
  }

  //Calcular la renta teniendo el valor presente.
  if (R === 0 && VP !== 0 && I !== 0 && N !== 0 && Y !== 0) {
    R =
      ((parseInt(VP) * parseFloat(I)) /
        (1 - Math.pow(1 + parseFloat(I), -parseInt(N)))) *
      Math.pow(1 + parseFloat(I), parseInt(Y));
    return "El valor de la renta de la ADV es de: " + R.toFixed(2);
  }

  //Calcular periodo de gracia teniendo el valor presente.
  if (Y === 0 && VP !== 0 && I !== 0 && N !== 0 && R !== 0) {
    Y =
      (Math.log(parseInt(R)) +
        Math.log(1 - Math.pow(1 + parseFloat(I), -parseInt(N))) -
        Math.log(parseInt(VP) * parseFloat(I))) /
      Math.log(1 + parseFloat(I));
    return "El periodo de gracia de la ADV es de: " + Y.toFixed(2);
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
    return "El tiempo calculado en el ADV es de: " + N.toFixed(2);
  }
}

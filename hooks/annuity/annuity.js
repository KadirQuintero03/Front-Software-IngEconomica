import { tiempoConversion } from "../../utils/interesConversion";
import { anticipated } from "./anticipated";
import { deferredAnticipated } from "./deferredAnticipated";
import { deferredExpired } from "./deferredExpired";
import { expired } from "./expired";

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

  console.log(VP, VF, R, N, Y, I, typeTime, typeInterest, selectedAnnuity);

  if (selectedAnnuity === "Vencida") {
    return expired(VP, VF, R, N, I);
  }

  if (selectedAnnuity === "Anticipada") {
    return anticipated(VP, VF, R, N, I);
  }

  if (selectedAnnuity === "Diferida vencida") {
    return deferredExpired(VP, VF, R, N, Y, I);
  }

  if (selectedAnnuity === "Diferida anticipada") {
    return deferredAnticipated(VP, VF, R, N, Y, I);
  }
}

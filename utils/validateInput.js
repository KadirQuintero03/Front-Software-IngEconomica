export function validateInputs(inputs) {
  const validate = inputs.some((i) => i == "" || i == 0 || i == undefined);
  return validate;
}

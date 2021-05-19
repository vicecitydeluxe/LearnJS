function pow(number, degree) {
  if (degree >= 1) {
    return number ** degree;
  }
  return "Неверная степень";
}
let result = pow(2, 0);
console.log(result);
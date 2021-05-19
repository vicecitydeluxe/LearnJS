function min(number1, number2) {
  if (number1 < number2) {
    return number1;
  } else if (number2 < number1) {
    return number2;
  } else if (number1 === number2) {
    return number2;
  }
}
let result = min(1, 1);
console.log(result);

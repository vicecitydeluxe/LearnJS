"use strict";
/*У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0. */

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0; //делаем 0, вдруг мы решим убрать все параметры из квадратных скобок выше
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum); 
salaries.John
console.log(salaries.John)

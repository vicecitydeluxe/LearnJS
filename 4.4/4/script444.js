'use strict';
/*Создайте объект calculator (калькулятор) с тремя методами:

    read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
    sum() (суммировать) возвращает сумму сохранённых значений.
    mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() ); */

let calculator = {
  read() {
    number1 = +prompt("Введите number1?", "");
    number2 = +prompt("Введите number2?", "");
  },

  sum() {
    return number1 + number2;
  },

  mul() {
    return number1 * number2;
  },
};
//тесты в https://plnkr.co/edit/8dD0zQy1BDTcwoJ3?p=preview&preview
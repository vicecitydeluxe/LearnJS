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
    chislo_1 = +prompt("Введите chislo_1?", "");
    chislo_2 = +prompt("Введите chislo_2?", "");
  },

  sum() {
    return chislo_1 + chislo_2;
  },

  mul() {
    return chislo_1 * chislo_2;
  },
};
//тесты в https://plnkr.co/edit/8dD0zQy1BDTcwoJ3?p=preview&preview
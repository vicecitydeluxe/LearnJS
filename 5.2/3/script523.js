'use strict';
/*
Создайте функцию readNumber, 
которая будет запрашивать ввод числового значения до тех пор, 
пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, 
отправив пустую строку или нажав «Отмена». 
В этом случае функция должна вернуть null.
*/

function readNumber() {
  while (true) {
    let num = prompt('Введите число', '');
    if (num === '' || num === null) { // if (!num) {}
      return null;
    }
    num = parseFloat(num);
    if (typeof num === 'number' && !isNaN(num)) { // isNan - лишнее, это просто доп проверка равная typeof
      
      return num;
    }
  }
}
//тесты в https://plnkr.co/edit/dKRj7PBDpz58ed0t?p=preview&preview
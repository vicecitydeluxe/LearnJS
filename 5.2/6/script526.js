'use strict';
/*
Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

Любое число из интервала min..max должно появляться с одинаковой вероятностью.

Пример работы функции:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5

Можно использовать решение из предыдущей задачи.
*/

function randomInteger(min, max) {
  return min + Math.floor(Math.random() * (++max - min)); //math floor округляет до ближайшего меньшего целого, ++ всегда прибавлет +1 к переменной
}

console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));

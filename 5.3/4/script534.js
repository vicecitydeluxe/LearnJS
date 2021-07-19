'use strict';
/*
Есть стоимость в виде строки '$120'. То есть сначала идёт знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

Например:

alert( extractCurrencyValue('$120') === 120 ); // true
*/

function extractCurrencyValue(str) {
let num = '';

  for (let symbol of str) {
    num += isFinite(symbol) ? symbol : '';
  }

  return num;
}

console.log(extractCurrencyValue('$120'));
//либо в одну строку: parseInt(num.match(/\d+/))
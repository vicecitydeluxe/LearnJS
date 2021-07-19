'use strict';
/*
Сортировать в порядке по убыванию

let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию

alert( arr ); // 8, 5, 2, 1, -10
*/

let arr = [4, 2, 5, 1, 3];

arr.sort(function (a, b) {
  return b - a;
});

console.log(arr);

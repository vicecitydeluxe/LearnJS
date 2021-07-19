'use strict';
/*
Фильтрация по диапазону 'на месте'

Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr 
и удаляет из него все значения кроме тех, которые находятся между a и b. 
То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна изменять принимаемый массив и ничего не возвращать.

Например:
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
alert( arr ); // [3, 1]
*/
function filterRangeInPlace(arr, param1, param2) {
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (value < param1 || value > param2) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [ 1, 1.1];
console.log(filterRangeInPlace(arr, 1, 2));
console.log(arr);

//тест https://plnkr.co/edit/Tm408Cmi3OgRvQHo?p=preview&preview

'use strict';
/*
Отсортировать пользователей по возрасту
Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
 */

let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let arr = [vasya, petya, masha];

function sortByAge(arr) {
  return arr.sort((a, b) => parseFloat(a.age) - parseFloat(b.age));
}

console.log(arr[0].name); 
console.log(arr[1].name); 
console.log(arr[2].name); 

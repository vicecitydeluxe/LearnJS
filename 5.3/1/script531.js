'use strict';
/*
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася";
*/

function ucFirst(str) {
  if (!str) return str; //if (!str && typeof str === 'string')

  return str[0].toUpperCase() + str.slice(1); //Первый символ в верхнем регистре + продолжение со второго символа
}

console.log(ucFirst("Вставь любое значение сюда")); // 

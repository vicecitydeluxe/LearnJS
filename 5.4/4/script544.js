'use strict';
/*
Напишите функцию sumInput(), которая:

    Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
    Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
    Подсчитывает и возвращает сумму элементов массива.

P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
*/

function sumInput() {
    let dataNum = [];
    let sumNum = 0;

 while (true) {
     let userNum;
     userNum = prompt('Введите число', '');

     if  (isNaN(userNum) || userNum === null || userNum === '') {
         break;
     }
     dataNum.push(+userNum);
 }

 for (let num of dataNum) {
     sumNum += num;
 }
 return sumNum;
}

console.log(sumInput()); // код и решение Антона мне понравились, позаимствовал у него
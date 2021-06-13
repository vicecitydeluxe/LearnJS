'use strict';
/*
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam('innocent rabbit') == false
*/
function checkSpam(str) {
  let lowerStr = str.toLowerCase(); // переводим строку в нижний регистр

  return lowerStr.includes('viagra') || lowerStr.includes('xxx'); 
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));

'use strict';
/*
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

Например:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!"
*/

function truncate(str, maxLenght) {
  if (str.length > maxLenght) {
  return str.substr(0, maxLenght) + '…';
  }
  
  return str;
  }
  
  console.log(truncate('aaaafffffffff11111111111111f', 14)); //
  
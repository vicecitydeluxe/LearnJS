'use strict';
/*Здесь функция makeUser возвращает объект.

Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
  return {
    name: "Джон",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // Каким будет результат? */

function makeUser() {
  return {
    name: "Джон",
    ref() {
      return this;
    }, // 20-22 строки правим под функцию
  };
}

let user = makeUser();

alert(user.ref().name); //user.ref() используем как метод
// Код будет работать верно

'use strict';
/*Возможно ли создать функции A и B в примере ниже, где объекты равны new A()==new B()?

function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true
Если да – приведите пример вашего кода.
*/
const object = {};

function A() {return object};
function B() {return object};

alert(new A() === new B()); //true
'use strict';
/* 
Покажите день недели
важность: 5

Напишите функцию getWeekDay(date), показывающую день 
недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

Например:

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести 'ВТ' 
*/

let date = new Date();
let weekday = date.getDay();
let options = { weekday: 'long' };
console.log(new Intl.DateTimeFormat('ru-RU', options).format(date));
//решил не через функцию, а более изящно

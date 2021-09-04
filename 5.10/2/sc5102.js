'use strict';
/* 
Максимальная зарплата
важность: 5

У нас есть объект salaries с зарплатами:

let salaries = {
  'John': 100,
  'Pete': 300,
  'Mary': 250
};

Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

    Если объект salaries пустой, то нужно вернуть null.
    Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.

P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение. 
*/

let salaries = {
  John: 1000,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  let maximumNumber = 0;
  let WorkerName = null;

  for (const [name, salary] of Object.entries(salaries))
    if (salary > maximumNumber) {
      maximumNumber = salary;
      WorkerName = name;
    }
  return WorkerName;
}

console.log(topSalary(salaries));

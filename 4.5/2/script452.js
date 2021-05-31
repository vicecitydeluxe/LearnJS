'use strict';
/*Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

    read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
    sum() возвращает сумму введённых свойств.
    mul() возвращает произведение введённых свойств.

Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/
function Calculator() {
    this.read = function() {
        this.numberA = Number(prompt('Введите первое число:'));
        this.numberB = Number(prompt('Введите второе число:'));

        if (isNaN(this.numberA) || isNaN(this.numberB)) {
            alert('Введите числовое значение');
            return;
        }
        this.actionMethod();
    }
    this.actionMethod = function() {
        const result = prompt('Умножение, деление, сложение, вычитание?');
        switch (result.toLowerCase().trim()) {
            case 'умножение': alert(this.mult());   break;
            case 'деление':     alert(this.div());      break;
            case 'сложение':   alert(this.sum());   break;
            case 'вычитание': alert(this.diff());     break;
            default: alert('Такой операции нет'); break;
        }
    }
    this.mult = function() {
        return this.numberA * this.numberB;
    }
    this.div = function() {
        return this.numberA / this.numberB;
    }
    this.sum = function() {
        return this.numberA + this.numberB;
    }
    this.diff = function() {
        return this.numberA - this.numberB;
    }
}

const calc = new Calculator();
calc.read(); // очень крутое решение от челика, можем его разобрать подробнее
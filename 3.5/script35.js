"use strict";
/*
Что не так с этим тестом?
Что не так в нижеприведённом тесте функции pow?

it("Возводит x в степень n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
}); 
*/
describe("Возводит x в степень n", function () {
  it("5 в степени 1 будет 5", function () {
    assert.equal(pow(5, 1), 5);
  });
//мы выделили каждый конкретный тест в отдельные блоки it
  it("5 в степени 2 будет 25", function () {
    assert.equal(pow(5, 2), 25);
  });
//вместо переходящего Х как в ДАНО, мы уточняем переменные
  it("5 в степени 3 будет 125", function () {
    assert.equal(pow(5, 3), 125);
  });
});/* в результате тест работает корректнее,
    песочница даст ощутить разницу, 
   там будет 3 отдельые строки на каждый тест*/
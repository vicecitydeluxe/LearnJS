'use strict';
/* Каким будет результат выполнения этого кода?

let user = {
  name: "Джон",
  go: function() { alert(this.name) }
}

(user.go)()
*/

let user = {
  name: "Джон",
  go: function () {
    alert(this.name)
  }
}; //пропустили точку с запятой, если добавим, то код будет работать 
(user.go)();

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}
// скрипт не рабочий, просто отвечаем на вопрос задачи:
// отличий между приципом работы не будет, else по сути двойную работу делает, как я понял
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}
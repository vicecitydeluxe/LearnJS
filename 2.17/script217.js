let ask= (question, yes, no) =>  {
  if (confirm(question)) yes()
  else no();
}
ask(
  "Вы согласны?",
  () => alert("Вы согласились."),//пустые скобки, т.к.  нет аргументов
  () => alert("Вы отменили выполнение.")
);

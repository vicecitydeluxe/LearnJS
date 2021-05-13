let login = prompt('Введите логин!', '')

if (login == 'Админ'){

let password = prompt('Введите пароль!', '')// основная ветка условий
if (password == 'Я главный'){
alert('Здравствуйте!')
} else if (password){
alert('Неверный пароль')
} else {
alert('Отменено')
}

} else if (login){ //ветка если первая проверка не прошла (не ввел "Админ")
alert('Я вас не знаю')
} else {
alert('Отменено')
}
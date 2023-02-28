alert( null || 2 || undefined ); //выведет 2

alert( alert(1) || 2 || alert(3) );//сначала сделает alert(1) а потом выведет 2

alert( 1 && null && 2 );//выведет null

alert( alert(1) && alert(2) );// 1 // underfined

alert( null || 2 && 3 || 4 );//3

let age;
if (age>=14 && age<=90){
    return true;
}

if (age<14 || age>90){
    return true;
}
if (!(age>=14 && age<=90)){
    return true;
}

if (-1 || 0) alert( 'first' );//true
if (-1 && 0) alert( 'second' );//false
if (null || -1 && 1) alert( 'third' );//true



let user = prompt("Кто там? ",'');
if (user === null){
    console.log("Отменено");
}
else if (user == "Админ"){
    let password = prompt("Пароль? ","");
    if (user === null){
        console.log("Отменено");
    }
    else if (password === "Я Главный"){
        console.log("Здравствуйте!");
    }
    else{
        console.log("Неверный пароль!");
    }
}
else{
    console.log("Я Вас не знаю");
}
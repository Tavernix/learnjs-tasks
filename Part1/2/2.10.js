if ("0") {  //"0" это строка, она не пустая,
    alert( 'Привет' ); //поэтому alert сработает
}

let answer = prompt("Какое «официальное» название JavaScript?",'');
if (answer == "ECMAScript"){
    console.log("Верно!");
}
else{
    console.log("Не знаете? ECMAScript!")
}

let answerNumber = prompt("Введите число: ", '');
if (answerNumber>0){
    console.log(1);
}
else if(answerNumber<0){
    console.log(-1);
}
else{
    console.log(0);
}

let result = (a+b<4)?'Мало':'Много';
//if (a + b < 4) {
//    result = 'Мало';
//} else {
//    result = 'Много';
//}


let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
        (login == '') ? 'Нет логина' : '';
/*
if (login == 'Сотрудник') {
    message = 'Привет';
} else if (login == 'Директор') {
    message = 'Здравствуйте';
} else if (login == '') {
    message = 'Нет логина';
} else {
    message = '';
}*/


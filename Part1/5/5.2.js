let a = +prompt("Введите первое число: ", "");
let b = +prompt("Введите второе число: ", "");
console.log( a + b );


console.log(6.35.toFixed(1) );
// в JS и других языках где используется формат IEEE 754
//Наиболее часто встречающаяся ошибка при работе с числами – это потеря точности.
//в этом случае решить можно так:
console.log( +(6.35 * 10).toFixed(20) );


function readNumber() {
    let num;
    while ( !isFinite(num) ){
        num = prompt("Введите число: ", 0);
    };
    if (num === null || num === '') {
        return null;
    }
    return +num;
}
console.log(`Число: ` + readNumber());


let i = 0;
while (i != 10) { //этот цикл бесконечный из-за той же проблемы округления чисел
    i += 0.2;   // i = 9.9999  i = 10.199999
    console.log(i);
}

function random(min, max) {
    let a = min + (Math.random() * (max-min));
    return a;
}


function randomInteger(min, max) {
    let a = min + (Math.random() * (max-min));
    return Math.round(a);
}
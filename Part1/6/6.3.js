function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // 0
alert( counter2() ); // 1


//будет работать
function Counter() {
    let count = 0;

    this.up = function() {
        return ++count;
    };

    this.down = function() {
        return --count;
    };
}

let counter = new Counter();

alert( counter.up() ); // 1
alert( counter.up() ); // 2
alert( counter.down() ); // 1


let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        alert(`${phrase}, ${user}`);
    }
}
//функция существует внутри if, тут она работать не будет.
sayHi();


function sum(a) {
    return function(b) {
        return (a + b);
    };
}


function inBetween(a, b) {
    return function(x) {
        return x >= a && x <= b;
    };
}
function inArray(arr) {
    return function(x) {
        return arr.includes(x);
    };
}



function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}


function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) { //этот цикл нужно заменить на for(let i = 0...
        let shooter = function() { // функция shooter
            alert( i ); // тогда порядковый номер будет выводиться правильно
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}

let army = makeArmy();
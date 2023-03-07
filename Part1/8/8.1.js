let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};
alert( rabbit.jumps ); // true
delete rabbit.jumps;
alert( rabbit.jumps ); // null
delete animal.jumps;
alert( rabbit.jumps ); // undefined


let head = {
    glasses: 1
};
let table = {
    pen: 3,
    __proto__: head
};
let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};
let pockets = {
    money: 2000,
    __proto__: bed
};
// как быстрее получить значение glasses – через pockets.glasses или через head.glasses?
// наверное неважно



let animal = {
    eat() {
        this.full = true;
    }
};
let rabbit = {
    __proto__: animal
};
rabbit.eat(); //rabbit.full = true



let hamster = {
    stomach: [],//еда добавляется в один массив.
    eat(food) {
        this.stomach.push(food);
    }
};
let speedy = {
    __proto__: hamster,
    stomach: []    //теперь у каждого свой stomach
};
let lazy = {
    __proto__: hamster,
    stomach: []
};


let c = {};
function A() { return c };
function B() { return c };
let a = new A();
let b = new B();
console.log( a == b ); // true



function Calculator() {
    this.read = function() {
        this.a = +prompt('Введите a: ', 0);
        this.b = +prompt('Введиет b: ', 0);
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function() {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();
console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );



function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt('Введите число: ', 0);
    };
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);


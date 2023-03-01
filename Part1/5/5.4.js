let fruits = ["Яблоки", "Груша", "Апельсин"];
// это не копия переменной а ссылка на массив в памяти
let shoppingCart = fruits;
shoppingCart.push("Банан");
console.log( fruits.length ); // 4


let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log( styles.shift() );
styles.unshift("Рэп", "Регги");


let arr = ["a", "b"];
arr.push(function() {
    console.log( this );//function(){...}
});
arr[2](); // function(){...}
console.log(arr);//["a", "b", function () {...}]


function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt("Введите число", 0);
        if (value === "" || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
console.log( sumInput() );


function getMaxSubSum(arr) {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let sumStart = 0;
        for (let j = i; j < arr.length; j++) {
            sumStart += arr[j];
            maxSum = Math.max(maxSum, sumStart);
        }
    }
    return maxSum;
}
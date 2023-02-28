function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Родители разрешили?');
    }
}function checkAge(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Родители разрешили?');
} //  оба варианта работают одинакого. я бы пользовался первым потому что его проще читать.


function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}
function checkAge(age) {
    return ((age > 18) || confirm('Родители разрешили?'));
}

function min(a,b){
    return ((a<b) ? a : b);
}

let pow = function (x,n){
    let a =1;
    for (let i =0; i<n; i++){
        a *=x;
    }
    return a
}
let x = prompt("Введе x: ", '1');
let n = prompt("Введите n: ", '1');
console.log(pow(x,n));
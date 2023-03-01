function camelize(str) {
    return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
}


function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}


function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        if (value < a || value > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}


let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
console.log( arr );


function copySorted(arr) {
    return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
let arr2 = copySorted(arr);
console.log( arr2 );
console.log( arr );


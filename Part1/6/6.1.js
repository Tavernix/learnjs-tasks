function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}
console.log( sumTo(100) );


function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}


let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
function printList(list) {
    console.log(list.value);
    if (list.next) {
        printList(list.next);
    }
}

function printReverseList(list) {
    if (list.next) {
        printReverseList(list.next);
    }
    console.log(list.value);
}
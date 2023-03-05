function printNumbers(from, to) {
    let current = from;

    let timerId = setInterval(function() {
        alert(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}


let i = 0;
setTimeout(() => alert(i), 100); // i = 100000000

for(let j = 0; j < 100000000; j++) {
    i++;
}
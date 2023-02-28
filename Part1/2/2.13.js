let i = 3;
while (i) {
    console.log( i-- );
}// last 1

let i = 0;
while (++i < 5) console.log( i );
//1 2 3 4
let i = 0;
while (i++ < 5) console.log( i );
//1 2 3 4 5

for (let i = 0; i < 5; i++) console.log( i );
//0 1 2 3 4
for (let i = 0; i < 5; ++i) console.log( i );
//0 1 2 3 4

for (let i=0; i<=10; i++){
    if(i%2==0){
        console.log(i);
    }
}

let i = 0;
while(i<3) {
    console.log( `number ${i}!` );
    i++;
}


let answer;
do {
    answer = prompt("Введите число: ", 0);
} while (answer <= 100 && answer);


let n = 10;
label:
    for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue label;
        }
        console.log( i );
    }

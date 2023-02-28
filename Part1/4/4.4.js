function makeUser() {
    return {
        name: "John",
        ref: this
    };
}
let user = makeUser();
console.log( user.ref.name ); // ошибка, я почитал о ней в учебнике.
//мои компиляторы вернули мне пустую строку.


let calculator = {
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
    read() {
        this.a = +prompt('Введите a: ', '');
        this.b = +prompt('Введите b: ', '');
    }
};


let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() {
        console.log( this.step );
        return this;
    }
};
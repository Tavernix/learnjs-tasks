function f() {
    console.log( this ); // null
}
let user = {
    g: f.bind(null)
};
user.g();


function f() {
    console.log(this.name);
}
f = f.bind( {name: "Вася"} ).bind( {name: "Петя"} );
f(); // Вася


function sayHi() {
    alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
    name: "Вася"
});

console.log( bound.test ); // undefined, потому что у bound нет test



function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}
let user = {
    name: 'Вася',
    loginOk() {
        console.log(`${this.name} logged in`);
    },
    loginFail() {
        console.log(`${this.name} failed to log in`);
    },
};
askPassword(user.loginOk.bind(user), user.loginFail.bind(user))


function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}
let user = {
    name: 'John',
    login(result) {
        console.log( this.name + (result ? ' logged in' : ' failed to log in') );
    }
};
askPassword(user.login.bind(user, true), user.login.bind(user, false));
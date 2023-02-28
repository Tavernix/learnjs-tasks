let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

function isEmpty(obj) {
    for (let i in obj) {
        return false;
    }
    return true;
}

const user = {
    name: "John"
};
// это сработает
user.name = "Pete";


function allSalaries(obj){
    let sum = 0;
    for (let i in obj){
        sum += obj[i];
    }
    return sum;
}


function multiplyNumeric(obj) {
    for (let i in obj){
        if (typeof(obj[i]) == 'number'){
            obj[i] *= 2;
        }
    }
}

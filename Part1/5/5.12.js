let user = {
    name: "Василий Иванович",
    age: 35
};
let user2 = JSON.stringify(user);
user2 = JSON.parse(user2);


let room = {
    number: 23
};
let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};
room.occupiedBy = meetup;
meetup.self = meetup;
console.log( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));
/*
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/
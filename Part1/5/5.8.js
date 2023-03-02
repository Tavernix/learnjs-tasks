let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];
let reads = new WeakSet();//сет пустой
// Два сообщения были прочитаны
readMess.add(messages[0]);//это
readMess.add(messages[1]);//и это прочитаны
// readMessages содержит 2 элемента
// ...давайте снова прочитаем первое сообщение!
readMess.add(messages[0]);//оно уже прочитано, поэтому у нас сет который без повторок.
// readMessages до сих пор содержит 2 элемента
// Вопрос: было ли сообщение message[0] прочитано?
console.log("Сообщение messages[0] прочитано?: " + readMess.has(messages[0])); // true


let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];
let readMap = new WeakMap();
let date;
readMap.set(messages[0], date);
"use strict";
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.main = function () {
        console.log("Hello World!");
        return 0;
    };
    return Program;
}());
Program.main();
;
var user = {
    name: "John",
    id: 1,
    sayHello: function () {
        console.log("I'm ".concat(this.name, ". Hello!"));
    },
};
user.sayHello();
var dir = "right";
console.log('dir: ', dir);
dir = "up-and-down";
console.log('dir: ', dir);
var odd = 4;
console.log('odd: ', odd);
var complex = "yes";
console.log('complex: ', complex);
console.log('typeof complex: ', typeof complex);
complex = true;
console.log('complex: ', complex);
console.log('typeof complex: ', typeof complex);
function add(value, dest) {
    if (Array.isArray(value)) {
        dest.push.apply(dest, value);
    }
    else {
        dest.push(value);
    }
}
var numbers = [];
add(1, numbers);
console.log('numbers: ', numbers);
add([2, 3], numbers);
console.log('numbers: ', numbers);
function add2(first, second) {
    if (typeof first === "number" && typeof second === "number") {
        return first + second;
    }
    if (typeof first === "string" && typeof second === "string") {
        return first + second;
    }
    return "invalid inputs";
}
var result = add2(3, 5);
console.log('result: ', result);
result = add2("Hello ", "World");
console.log('result: ', result);
result = add2(3, "World");
console.log('result: ', result);
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.enqueue = function (value) {
        this.data.push(value);
    };
    Queue.prototype.dequeue = function () {
        return this.data.shift();
    };
    return Queue;
}());
var stringQueue = new Queue();
stringQueue.enqueue("Hello");
stringQueue.enqueue("World");
console.log('stringQueue: ', stringQueue);
console.log('first item: ', stringQueue.dequeue());
console.log('second item: ', stringQueue.dequeue());
console.log('third item: ', stringQueue.dequeue());
var m = "HELLO WORLD";
var lowered = m.toLocaleLowerCase();
console.log('lowered: ', lowered);
lowered = "THAT'S ALL I WANTED".toLocaleLowerCase();
console.log('lowered: ', lowered);
var x = {
    x: 1,
    xx: 8,
};
console.log('');
//# sourceMappingURL=program.js.map
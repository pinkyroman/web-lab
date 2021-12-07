import { Person } from './es6-module.mjs';

let p1 = new Person('alice', 'cooper', 88);
let p2 = new Person('ozzy', 'osbourne', 90);

console.log(p2);
console.log(p2.getId());
console.log(p2.getFirstName());

console.log(p1);
console.log(p1.getId());
console.log(p1.getFirstName());

console.log("change p1's name to 'bob'");
p1.setFirstName('bob');
console.log('p1 name: ' + p1.getFirstName());
console.log('p2 name: ' + p2.getFirstName());

console.log('"abc": ' + typeof "abc");
console.log('123: ' + typeof 123);
console.log('false: ' + typeof false);
console.log('Symbol("x"): ' + typeof Symbol('x'));
console.log('{}: ' + typeof {});
console.log('[]: ' + typeof []);
console.log('Math: ' + typeof Math);
console.log('Array: ' + typeof Array);
console.log('(function () { }): ' + typeof (function () { }));

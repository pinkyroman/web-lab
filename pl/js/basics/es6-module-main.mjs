import { Person } from './es6-module.mjs';

let p1 = Person('alice', 'cooper', 88);
let p2 = new Person('ozzy', 'osbourne', 90);
console.log(p2.getFirstName());
console.log(p1.getFirstName());

console.log('"abc": ' + typeof "abc");
console.log('123: ' + typeof 123);
console.log('false: ' + typeof false);
console.log('Symbol("x"): ' + typeof Symbol('x'));
console.log('{}: ' + typeof {});
console.log('[]: ' + typeof []);
console.log('Math: ' + typeof Math);
console.log('Array: ' + typeof Array);
console.log('(function () { }): ' + typeof (function () { }));

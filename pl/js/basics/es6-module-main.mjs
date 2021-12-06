import { Person } from './es6-module.mjs';

let p1 = Person('alice', 'cooper', 88);
let p2 = new Person('ozzy', 'osbourne', 90);
console.log(p2.getFirstName());
console.log(p1.getFirstName());

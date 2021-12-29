console.log('globalThis:', globalThis);
console.log('globalThis === this: ', globalThis === this); // true
console.log('globalThis === window: ', globalThis === window); // true
console.log('globalThis === self : ', globalThis === self); // true
console.log('globalThis === frames: ', globalThis === frames); // true

var xyz = 123;
console.log('xyz: ', xyz);
console.log('window.xyz: ', window.xyz);
console.log('xyz === window.xyz: ', xyz === window.xyz); // true

function globalDoSomething() {
    console.log('Okay, I am doing something.');
}

console.log('globalDoSomething === self.globalDoSomething: ', globalDoSomething === self.globalDoSomething); // true

let abc = 999;
console.log('abc: ', abc);
console.log('window.abc: ', window.abc); // undefined

// 암묵적 전역
varWithoutVar = 888; // varWithoutVar is not a global variable but a property of the global object.
console.log('varWithoutVar: ', varWithoutVar);
console.log('window.varWithoutVar: ', window.varWithoutVar);
console.log('varWithoutVar === window.varWithoutVar: ', varWithoutVar === window.varWithoutVar);



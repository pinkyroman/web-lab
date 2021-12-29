// Run the following code in Node.js.
console.log('globalThis:', globalThis);
console.log('globalThis === this: ', globalThis === this); // false !!!
console.log('globalThis === global: ', globalThis === global); // true

// Node.js 에서의 this 는 ...
console.log('this: ', this); // {}
console.log('exports: ', exports); // {}
console.log('module.exports: ', module.exports); // {}
console.log('this === exports: ', this === exports); // true
console.log('this === module.exports: ', this === module.exports); // true


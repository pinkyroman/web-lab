// let ProductProto = {
//   toString: function() {
//     return `toString: Name: ${this.name}, Price: ${this.price}`;
//   }
// };

// let hat = {
//   name: 'Hat',
//   price: 100,
//   getPriceIncTax() {
//     return Number(this.price) * 1.2;
//   },
// };

// let boots = {
//   name: 'Boots',
//   price: 100,
//   getPriceIncTax() {
//     return Number(this.price) * 1.2;
//   }
// };

// let hatPrototype = Object.getPrototypeOf(hat);
// hatPrototype.toString = function() {
//   return `toString: Name: ${this.name}, Price: ${this.price}`;
// }

// console.log(`Hat Prototype: ${hatPrototype}`);

// let bootsPrototype = Object.getPrototypeOf(boots);
// console.log(`Boots Prototype: ${bootsPrototype}`);

// console.log(`Common Prototype: ${ hatPrototype === bootsPrototype }`);

// Object.setPrototypeOf(hat, ProductProto);
// Object.setPrototypeOf(boots, ProductProto);

// console.log(hat.toString());
// console.log(boots.toString());

let Product = function(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.toString = function() {
  return `toString: Name: ${this.name}, Price: ${this.price}`;
}

let TaxedProduct = function(name, price, taxRate) {
  Product.call(this, name, price);
  this.taxRate = taxRate;
}
Object.setPrototypeOf(TaxedProduct.prototype, Product.prototype);

TaxedProduct.prototype.getPriceIncTax = function() {
  return Number(this.price) * this.taxRate;
}

// TaxedProduct.prototype.toTaxString = function() {
//   return `${this.toString()}, Tax: ${this.getPriceIncTax()}`;
// }

TaxedProduct.prototype.toString = function() {
  // accessing overriden prototype methods
  return `${Product.prototype.toString.call(this)}, Tax: ${this.getPriceIncTax()}`;
}

let hat = new TaxedProduct('Hat', 100, 1.2);
let boots = new Product('Boots', 100);

console.log(`\n=================================================`);
console.log(`Object.prototype === Function.prototype.__proto__: ${Function.prototype.__proto__ === Object.prototype}`); //true
console.log(`Function.prototype === Product.__proto__: ${Product.__proto__ === Function.prototype}`); // true
console.log(`Product.prototype === boots.__proto__: ${Product.prototype === boots.__proto__}`); // true
console.log(`=================================================\n`);

console.log(hat.toString());
console.log(boots.toString());

console.log(`hat and TaxedProduct: ${hat instanceof TaxedProduct}`);
console.log(`hat and Product: ${hat instanceof Product}`);
console.log(`boots and TaxedProduct: ${boots instanceof TaxedProduct}`);
console.log(`boots and Product: ${boots instanceof Product}`);

console.log(`\n=================================================`);
console.log(`Product.__proto__: ${Product.__proto__}`); // function () { [native code] }
console.log(`typeof Product.__proto__: ${typeof Product.__proto__}`); // function
console.log(`Product.prototype: ${Product.prototype}`); // { toString, name, price }
console.log(`typeof Product.prototype: ${typeof Product.prototype}`); // object
console.log(`=================================================`);
console.log(`TaxedProduct.__proto__: ${TaxedProduct.__proto__}`);
console.log(`typeof TeaxedProduct.__proto__: ${typeof TaxedProduct.__proto__}`);
console.log(`TaxedProduct.prototype: ${TaxedProduct.prototype}`);
console.log(`=================================================\n`);

console.log(`hat.__proto__: ${hat.__proto__}`);
console.log(`Object.getPrototpeOf(hat): ${Object.getPrototypeOf(hat)}`);
console.log(`hat.prototype: ${hat.prototype}`);


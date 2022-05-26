"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productCollection3 = exports.productCollection2 = exports.p = exports.productCollection = void 0;
const dataTypes_1 = require("./dataTypes");
let products = [
    new dataTypes_1.Product('Running Shoes', 100),
    new dataTypes_1.Product('Hat', 25),
    new dataTypes_1.Product('T-Shirt', 15),
];
class Collection {
    items;
    constructor(items) {
        this.items = items;
    }
    add(...newItems) {
        this.items.push(...newItems);
    }
    get(name) {
        return this.items.find((item) => item.name === name);
    }
    get count() {
        return this.items.length;
    }
}
exports.productCollection = new Collection(products);
console.log(`There are ${exports.productCollection.count} products in the collection`);
exports.p = exports.productCollection.get('Hat');
console.log(`The product ${exports.p.name} costs ${exports.p.price}`);
///////////////////////////////////////////////////////////////////////////////
// Using Generic Collections
class CollectionBySet {
    items;
    constructor(initialItems = []) {
        this.items = new Set(initialItems);
    }
    add(...newItems) {
        newItems.forEach((item) => this.items.add(item));
    }
    get(name) {
        return [...this.items.values()].find((item) => item.name === name);
    }
    get count() {
        return this.items.size;
    }
}
exports.productCollection2 = new CollectionBySet(products);
console.log(`There are ${exports.productCollection2.count} products in the collection(set)`);
exports.p = exports.productCollection.get('Hat');
console.log(`The product ${exports.p.name} costs ${exports.p.price}`);
class CollectionByMap {
    //   private items: Map<string, T>;
    items;
    constructor(initialItems = []) {
        this.items = new Map();
        initialItems.forEach((item) => this.items.set(item.name, item));
    }
    add(...newItems) {
        newItems.forEach((item) => this.items.set(item.name, item));
    }
    get(name) {
        return this.items.get(name);
    }
    get count() {
        return this.items.size;
    }
}
exports.productCollection3 = new CollectionByMap(products);
console.log(`There are ${exports.productCollection3.count} products in the collection(map)`);
exports.p = exports.productCollection.get('Hat');
console.log(`The product ${exports.p.name} costs ${exports.p.price}`);
///////////////////////////////////////////////////////////////////////////////
// Using Generic Iterators
//# sourceMappingURL=index.js.map
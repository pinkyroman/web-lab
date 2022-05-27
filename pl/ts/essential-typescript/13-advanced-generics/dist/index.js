"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rw = exports.genericMappedCity = exports.genericMappedProduct = exports.r = exports.q = exports.productCollection4 = exports.productCollection3 = exports.productCollection2 = exports.p = exports.productCollection = void 0;
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
// Using Generic Iterators & Combining an Iterable and an Iterator
class IterableCollection {
    items;
    constructor(initialItems = []) {
        this.items = new Map();
        this.add(...initialItems);
    }
    add(...newItems) {
        newItems.forEach((newItem) => this.items.set(newItem.name, newItem));
    }
    get(name) {
        return this.items.get(name);
    }
    get count() {
        return this.items.size;
    }
    // values(): Iterator<T> {
    //   return this.items.values();
    // }
    values() {
        return this.items.values();
    }
}
exports.productCollection4 = new IterableCollection(products);
console.log(`There are ${exports.productCollection4.count} products in the iterable collection`);
let iterator = exports.productCollection4.values();
let result = iterator.next();
while (!result.done) {
    console.log(`Product: ${result.value.name} costs ${result.value.price}`);
    result = iterator.next();
}
[...exports.productCollection4.values()].forEach((p) => {
    console.log(`Iterating Products with forEach: ${p.name} costs ${p.price}`);
});
///////////////////////////////////////////////////////////////////////////////
// Creating an Iterable Class
class CustomIteratorCollection {
    items;
    constructor(initialItems = []) {
        this.items = new Map();
        this.add(...initialItems);
    }
    add(...newItems) {
        newItems.forEach((newItem) => this.items.set(newItem.name, newItem));
    }
    get(name) {
        return this.items.get(name);
    }
    get count() {
        return this.items.size;
    }
    [Symbol.iterator]() {
        return this.items.values();
    }
}
[...new CustomIteratorCollection(products)].forEach((p) => {
    console.log(`(Custom) Iterating Products with forEach: ${p.name} costs ${p.price}`);
});
///////////////////////////////////////////////////////////////////////////////
// Using the Index Type Query
// keyof T: the index type query operator.
//          it returns a UNION of the property names of T.
// export function getValue<T, K extends keyof T>(item: T, keyname: K) {
//   console.log(`Value of ${String(keyname)}: ${item[keyname]}`);
// }
exports.p = new dataTypes_1.Product('Running Shoes', 100);
getValue(exports.p, 'name'); // Explicitly Providing Generic Type parameters for Index Types
getValue(exports.p, 'price');
let e = new dataTypes_1.Employee('Bob Smith', 'Sales');
getValue(e, 'name'); // TypeScript infers the type of K as 'name'
getValue(e, 'role'); // TypeScript infers the type of K as 'role'
function getValue(item, keyname) {
    return item[keyname];
}
class DataCollectionWithMultipleTypeParams {
    items = [];
    constructor(initialItems) {
        this.items.push(...initialItems);
    }
    // 다음은 Chapter 12의 예제. collate 함수를 Indexed Access Operator를 사용하여 재작성 한 것.
    collate(targetData, itemProp, targetProp) {
        let results = [];
        this.items.forEach((item) => {
            let match = targetData.find((d) => d[targetProp] === item[itemProp]);
            if (match !== undefined) {
                results.push({ ...match, ...item });
            }
        });
        return results;
    }
}
///////////////////////////////////////////////////////////////////////////////
// Using an Index Type for the Collection<T> Class
class KeyedCollection {
    keyPropName;
    items;
    constructor(initialItems = [], keyPropName) {
        this.keyPropName = keyPropName;
        this.items = new Map();
        this.add(...initialItems);
    }
    add(...newItems) {
        newItems.forEach((newItem) => this.items.set(newItem[this.keyPropName], newItem));
    }
    get(key) {
        return this.items.get(key);
    }
    get count() {
        return this.items.size;
    }
    [Symbol.iterator]() {
        return this.items.values();
    }
}
let keyedStore = new KeyedCollection(products, 'name'); // or KeyedCollection(products, 'name');
console.log(`There are ${keyedStore.count} products in the keyed collection`);
let itemByKey = keyedStore.get('Hat');
console.log(`Item: ${itemByKey.name} costs ${itemByKey.price}`);
let mp = { name: 'Kayak', price: 275 };
console.log(`Mapped Product: ${mp.name} costs ${mp.price}`);
exports.q = { name: 'Kayak', price: 'apples' };
console.log(`Changed type #1: ${exports.q.name} costs ${exports.q.price}`);
exports.r = { nameProperty: 'Kayak', priceProperty: 12 };
console.log(`Changed type #2: ${exports.r.nameProperty} costs ${exports.r.priceProperty}`);
exports.genericMappedProduct = {
    name: 'Kayak',
    price: 275,
};
console.log(`Generic Mapped Product: ${exports.genericMappedProduct.name} costs ${exports.genericMappedProduct.price}`);
exports.genericMappedCity = {
    name: 'Seattle',
    population: 652405,
};
console.log(`Generic Mapped City: ${exports.genericMappedCity.name} has ${exports.genericMappedCity.population} residents`);
exports.rw = { name: 'Kayak', price: 275 };
console.log(`Read-Write Type: ${exports.rw.name} costs ${exports.rw.price}`);
let p1 = { name: 'Kayak' };
let p2 = { name: 'Kayak' };
let p3 = { name: 'Kayak' };
let p4 = {};
let p5 = { name: 'Kayak' };
let p6 = {
    name: 'Kayak',
    price: 275,
};
let p7 = {
    name: 'Bob',
    city: 'Seattle',
};
let p8 = { name: 'Alice', city: 'Paris' };
let firstVal = 'String Value';
let secondVal = 100;
let condVal = true;
let mismatchCheck = 'String Value';
///////////////////////////////////////////////////////////////////////////////
// Using Conditional Types in Generic Classes
class ConditionalCollection {
    items;
    constructor(...initialItems) {
        this.items = initialItems;
    }
    total(propName, format) {
        let totalValue = this.items.reduce((t, item) => (t += Number(item[propName])), 0);
        return format ? `$${totalValue.toFixed()}` : totalValue;
    }
}
let data = new ConditionalCollection(new dataTypes_1.Product('Kayak', 275), new dataTypes_1.Product('Lifejacket', 48.95));
let v1 = data.total('price', true);
console.log(`Formatted value: ${v1}`);
let v2 = data.total('price', false);
console.log(`Unformatted value: ${v2}`);
/*
  
*/
function FilterArray(data, predicate) {
    return data.filter((item) => !predicate(item));
}
let dataArray = [
    new dataTypes_1.Product('Kayak', 275),
    new dataTypes_1.Person('Bob', 'London'),
    new dataTypes_1.Product('Lifejacket', 27.5),
];
function isProduct(item) {
    return item instanceof dataTypes_1.Product;
}
let filteredData = FilterArray(dataArray, isProduct);
console.log(`${filteredData.length} people filtered.`);
filteredData.forEach((item) => console.log(`Person: ${item.name}`));
// Exclude<T, U>: removing types from a union.
let excluded; // excluded: number | boolean
// Extrcact<T, U>: extracting types from a union.
let extracted; // extracted: string
// NonNullable<T>: removing null and undefined from a union.
let nonNullable; // nonNullable: number | string
function convertProduct(p) {
    return { name: p.name, price: `$${p.price.toFixed(2)}` };
}
let kayak = convertProduct(new dataTypes_1.Product('Kayak', 275));
console.log(`Product: ${kayak.name}, Price: ${kayak.price}`);
function getTotal(data, propName) {
    return data.reduce((t, item) => (t += Number(item[propName])), 0);
}
let productList = [new dataTypes_1.Product('Kayak', 275), new dataTypes_1.Product('Lifejacket', 48.95)];
console.log(`Totoal: ${getTotal(productList, 'price')}`);
function getValueOf(data, propName) {
    if (Array.isArray(data)) {
        return data[0][propName];
    }
    else {
        return data[propName];
    }
}
console.log(`Array Value: ${getValueOf(productList, 'price')}`);
console.log(`Single Total: ${getValueOf(productList[0], 'price')}`);
function processArray(data, func) {
    return data.map((item) => func(item));
}
let selectName = (p) => p.name;
let names = processArray(productList, selectName);
names.forEach((name) => console.log(`Name: ${name}`));
// Parameters<T>: extracting parameters of a function type.
let processArrayParams;
// ReturnType<T>: extracting return type of a function type.
let processArrayReturn;
// ConstructorParameters<T>: extracting parameters of a class type.
let processArrayConstructor;
// InstanceType<T>: extracting the instance type of a class type.
let processArrayInstance;
function makeObject(constructor, ...args) {
    return new constructor(...args);
}
let prod = makeObject(dataTypes_1.Product, 'Kayak', 275);
let city = makeObject(dataTypes_1.City, 'London', 8136000);
[prod, city].forEach(item => console.log(`Name: ${item.name}`));
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeData = exports.EmployeeSearchableCollection = exports.SearchableCollection = exports.TheDataCollection = exports.empData = exports.peopleData7 = exports.collatedData = void 0;
const dataTypes_1 = require("./dataTypes");
let people = [
    new dataTypes_1.Person('Bob Smith', 'London'),
    new dataTypes_1.Person('Dora Peters', 'New York'),
];
let products = [new dataTypes_1.Product('Running Shoes', 100), new dataTypes_1.Product('Hat', 25)];
// [...people, ...products].forEach((item) => console.log(`Item: ${item.name}`));
class PeopleCollection {
    items = [];
    constructor(initialItems) {
        this.items.push(...initialItems);
    }
    add(newItem) {
        this.items.push(newItem);
    }
    getNames() {
        return this.items.map((item) => item.name);
    }
    getItem(index) {
        return this.items[index];
    }
}
let peopleData = new PeopleCollection(people);
console.log(`Names: ${peopleData.getNames().join(', ')}`);
let firstPerson = peopleData.getItem(0);
console.log(`First Person: ${firstPerson.name}`);
class DataCollection {
    items = [];
    constructor(initialItems) {
        this.items.push(...initialItems);
    }
    add(newItem) {
        this.items.push(newItem);
    }
    getNames() {
        return this.items.map((item) => item.name);
    }
    getItem(index) {
        return this.items[index];
    }
}
let peopleData2 = new DataCollection(people);
console.log(`Data2 Names: ${peopleData2.getNames().join(', ')}`);
let firstPerson2 = peopleData2.getItem(0);
if (firstPerson2 instanceof dataTypes_1.Person) {
    console.log(`First Person from DataCollection: ${firstPerson2.name}, ${firstPerson2.city}`);
}
///////////////////////////////////////////////////////////////////////////////
// Creating and Understanding Generic Type Arguments
class GenericDataCollection {
    items = [];
    constructor(initialItems) {
        this.items.push(...initialItems);
    }
    add(newItem) {
        this.items.push(newItem);
    }
    getItem(index) {
        return this.items[index];
    }
}
let peopleData3 = new GenericDataCollection(people);
firstPerson = peopleData3.getItem(0);
console.log(`First Person from GenericDataCollection: ${firstPerson.name}, ${firstPerson.city}`);
///////////////////////////////////////////////////////////////////////////////
// Using Different Type Arguments
let productData = new GenericDataCollection(products);
let firstProduct = productData.getItem(0);
console.log(`First Product from GenericDataCollection: ${firstProduct.name}, ${firstProduct.price}`);
///////////////////////////////////////////////////////////////////////////////
// Constraining Generic Type Values
class GenericDataCollectionWithConstraints {
    items = [];
    constructor(initialItems) {
        this.items.push(...initialItems);
    }
    add(newItem) {
        this.items.push(newItem);
    }
    getItem(index) {
        return this.items[index];
    }
    getNames() {
        return this.items.map((item) => item.name);
    }
}
let peopleData4 = new GenericDataCollectionWithConstraints(people);
firstPerson = peopleData4.getItem(0);
console.log(`First Person from GenericDataCollectionWithConstraints: ${firstPerson.name}, ${firstPerson.city}`);
console.log(`Person Names: ${peopleData4.getNames().join(', ')}`);
let productData2 = new GenericDataCollectionWithConstraints(products);
firstProduct = productData2.getItem(0);
console.log(`First Product from GenericDataCollectionWithConstraints: ${firstProduct.name}, ${firstProduct.price}`);
console.log(`Product Names: ${productData2.getNames().join(', ')}`);
///////////////////////////////////////////////////////////////////////////////
// Constraining Generic Types Using a Shape
const dataTypes_2 = require("./dataTypes");
let cities = [new dataTypes_2.City('London', 8136000), new dataTypes_2.City('Paris', 2141000)];
class GenericDataCollectionWithShapeConstraint {
    items = [];
    constructor(initialItems) {
        this.items.push(...initialItems);
    }
    add(newItem) {
        this.items.push(newItem);
    }
    getItem(index) {
        return this.items[index];
    }
    getNames() {
        return this.items.map((item) => item.name);
    }
}
let peopleData5 = new GenericDataCollectionWithShapeConstraint(people);
firstPerson = peopleData5.getItem(0);
console.log(`First Person from GenericDataCollectionWithShapeConstraint: ${firstPerson.name}, ${firstPerson.city}`);
console.log(`Person Names: ${peopleData5.getNames().join(', ')}`);
let productData3 = new GenericDataCollectionWithShapeConstraint(products);
firstProduct = productData3.getItem(0);
console.log(`First Product from GenericDataCollectionWithShapeConstraint: ${firstProduct.name}, ${firstProduct.price}`);
console.log(`Product Names: ${productData3.getNames().join(', ')}`);
let cityData = new GenericDataCollectionWithShapeConstraint(cities);
console.log(`Citi Names: ${cityData.getNames().join(', ')}`);
///////////////////////////////////////////////////////////////////////////////
// Defining Multiple Type Parameters
class DataCollectionWithMultipleTypeParams {
    items = [];
    constructor(initialItems) {
        this.items.push(...initialItems);
    }
    collate(targetData, itemProp, targetProp) {
        let results = [];
        this.items.forEach((item) => {
            //   let match = targetData.find((d) => d[targetProp] === item[itemProp]); // TS7503 ERROR in strict mode
            let match = targetData.find((d) => d[targetProp] ===
                item[itemProp]);
            if (match !== undefined) {
                results.push({ ...match, ...item });
            }
        });
        return results;
    }
}
let peopleData6 = new DataCollectionWithMultipleTypeParams(people);
exports.collatedData = peopleData6.collate(cities, 'city', 'name');
exports.collatedData.forEach((c) => console.log(`${c.name} lives in ${c.city}, population is ${c.population}`));
///////////////////////////////////////////////////////////////////////////////
// Applying a Type Parameter to a Method
const dataTypes_3 = require("./dataTypes");
let employees = [
    new dataTypes_3.Employee('Bob Smith', 'Sales'),
    new dataTypes_3.Employee('Alice Jones', 'Sales'),
];
class DataCollectionWithGenericMethod {
    items = [];
    constructor(initialItems) {
        this.items.push(...initialItems);
    }
    collate(targetData, itemProp, targetProp) {
        let results = [];
        this.items.forEach((item) => {
            let match = targetData.find((d) => d[targetProp] ===
                item[itemProp]);
            if (match !== undefined) {
                results.push({ ...match, ...item });
            }
        });
        return results;
    }
}
exports.peopleData7 = new DataCollectionWithGenericMethod(people);
// collatedData = peopleData7.collate<City>(cities, 'city', 'name');
exports.collatedData = exports.peopleData7.collate(cities, 'city', 'name'); // allowing the Compiler to infer type arguments
exports.collatedData.forEach((c) => console.log(`${c.name}, ${c.city}`));
// let empData = peopleData7.collate<Employee>(employees, 'name', 'name');
exports.empData = exports.peopleData7.collate(employees, 'name', 'name'); // allowing the Compiler to infer type arguments
exports.empData.forEach((e) => console.log(`${e.name}, ${e.city}, ${e.role}`));
///////////////////////////////////////////////////////////////////////////////
// Adding Extra Features to the Existing Type Parameters
class TheDataCollection {
    items = [];
    constructor(initialItems) {
        this.items.push(...initialItems);
    }
    collate(targetData, itemProp, targetProp) {
        let results = [];
        this.items.forEach((item) => {
            let match = targetData.find((d) => d[targetProp] ===
                item[itemProp]);
            if (match !== undefined) {
                results.push({ ...match, ...item });
            }
        });
        return results;
    }
}
exports.TheDataCollection = TheDataCollection;
class SearchableCollection extends TheDataCollection {
    constructor(initialItems) {
        super(initialItems);
    }
    find(name) {
        return this.items.find((item) => item.name === name);
    }
}
exports.SearchableCollection = SearchableCollection;
let peopleCollection = new SearchableCollection(people);
let foundPerson = peopleCollection.find('Bob Smith');
if (foundPerson !== undefined) {
    console.log(`Person ${foundPerson.name} lives in ${foundPerson.city}`);
}
///////////////////////////////////////////////////////////////////////////////
// Fixing the Generic Type Parameter
class EmployeeSearchableCollection extends TheDataCollection {
    constructor(initialItems) {
        super(initialItems);
    }
    find(searchTerm) {
        return this.items.filter((item) => item.name === searchTerm || item.role === searchTerm);
    }
}
exports.EmployeeSearchableCollection = EmployeeSearchableCollection;
exports.employeeData = new EmployeeSearchableCollection(employees);
exports.employeeData
    .find('Sales')
    .forEach((e) => console.log(`Employeee ${e.name}, ${e.role}`));
///////////////////////////////////////////////////////////////////////////////
// Restricting the Generic Type Parameter
class RistrictedSearchableCollection extends TheDataCollection {
    constructor(initialItems) {
        super(initialItems);
    }
    find(searchTerm) {
        return this.items.filter((item) => {
            if (item instanceof dataTypes_3.Employee) {
                return item.name === searchTerm || item.role === searchTerm;
            }
            else if (item instanceof dataTypes_1.Person) {
                return item.name === searchTerm || item.city === searchTerm;
            }
        });
    }
}
let collecion1 = new RistrictedSearchableCollection(employees);
collecion1
    .find('Sales')
    .forEach((e) => console.log(`Employeee ${e.name}, ${e.role}`));
let collection2 = new RistrictedSearchableCollection(people);
collection2
    .find('New York')
    .forEach((p) => console.log(`Person ${p.name} lives in ${p.city}`));
///////////////////////////////////////////////////////////////////////////////
// Type Guarding Generic Types
class TypeGuardedDataCollection {
    items = [];
    constructor(initialItems) {
        this.items.push(...initialItems);
    }
    filter(predicate) {
        // Generic Type 에 대하여 instanceof 를 사용하여 타입 검사를 할 수 없다.
        // 따라서, predicate 를 제공하도록 해야 한다.
        return this.items.filter((item) => predicate(item));
    }
}
let mixedData = new TypeGuardedDataCollection([
    ...people,
    ...products,
]);
function isProduct(target) {
    return target instanceof dataTypes_1.Product;
}
let filteredProducts = mixedData.filter(isProduct);
// let filteredProducts = mixedData.filter<Product>(
//   (p): p is Product => p instanceof Product
// ); // predicate 함수를 별도로 생성하고 싶지 않다면, 이렇게 직접 매개변수로 predicate를 전달할 수 있다.
filteredProducts.forEach((p) => console.log(`$Product: ${p.name}, ${p.price}`));
///////////////////////////////////////////////////////////////////////////////
// Defining a Static Method on a Generic Class
class DataCollectionWithStaticMethod {
    items = [];
    constructor(initialItems) {
        this.items.push(...initialItems);
    }
    filter(predicate) {
        return this.items.filter((item) => predicate(item));
    }
    // static methods can define their own generic type parameters
    static reverse(items) {
        return items.reverse();
    }
}
let reversedCities = DataCollectionWithStaticMethod.reverse(cities);
reversedCities.forEach((c) => console.log(`City: ${c.name}, ${c.population}`));
///////////////////////////////////////////////////////////////////////////////
// Passing on the Generic Type Parameter
class ArrayCollection {
    items = [];
    add(...newItems) {
        this.items.push(...newItems);
    }
    get(name) {
        // strict mode 에서는 as DataType을 붙여주지 않으면 TS2322 컴파일 오류 발생.
        // find() 함수의 반환 값에 undefined가 포함되기 때문.
        return this.items.find((item) => item.name === name);
    }
    get count() {
        return this.items.length;
    }
}
let pcollection = new ArrayCollection();
pcollection.add(new dataTypes_1.Person('Bob Smith', 'London'), new dataTypes_1.Person('Dora Peters', 'New York'));
console.log(`Collection size: ${pcollection.count}`);
///////////////////////////////////////////////////////////////////////////////
// Restricting or Fixing the Generic Type Parameter
class PersonCollection {
    items = [];
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
pcollection = new PersonCollection();
pcollection.add(new dataTypes_1.Person('Bob Smith', 'London'), new dataTypes_1.Person('Dora Peters', 'New York'));
console.log(`Collection size: ${pcollection.count}`);
///////////////////////////////////////////////////////////////////////////////
// Creating an Abstract Inteface Implementation
class ArrayCollectionBase {
    items = [];
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
class ProductCollection extends ArrayCollectionBase {
    get(searchTerm) {
        return this.items.find((item) => item.name === searchTerm);
    }
}
class AnotherPersonCollection extends ArrayCollectionBase {
    get(searchTerm) {
        return this.items.find((item) => item.name === searchTerm || item.city === searchTerm);
    }
}
pcollection = new AnotherPersonCollection();
pcollection.add(new dataTypes_1.Person('Bob Smith', 'London'), new dataTypes_1.Person('Dora Peters', 'New York'));
let prodCollection = new ProductCollection();
prodCollection.add(new dataTypes_1.Product('Running Shoes', 100), new dataTypes_1.Product('Hat', 25));
[pcollection, prodCollection].forEach((c) => {
    console.log(`Collection size: ${c.count}`);
});

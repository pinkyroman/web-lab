import { Person, Product } from './dataTypes';

let people = [
  new Person('Bob Smith', 'London'),
  new Person('Dora Peters', 'New York'),
];

let products = [new Product('Running Shoes', 100), new Product('Hat', 25)];

// [...people, ...products].forEach((item) => console.log(`Item: ${item.name}`));

class PeopleCollection {
  private items: Person[] = [];

  constructor(initialItems: Person[]) {
    this.items.push(...initialItems);
  }

  add(newItem: Person) {
    this.items.push(newItem);
  }

  getNames(): string[] {
    return this.items.map((item) => item.name);
  }

  getItem(index: number): Person {
    return this.items[index];
  }
}

let peopleData = new PeopleCollection(people);
console.log(`Names: ${peopleData.getNames().join(', ')}`);

let firstPerson = peopleData.getItem(0);
console.log(`First Person: ${firstPerson.name}`);

type DataType = Person | Product;

class DataCollection {
  private items: DataType[] = [];

  constructor(initialItems: DataType[]) {
    this.items.push(...initialItems);
  }

  add(newItem: DataType) {
    this.items.push(newItem);
  }

  getNames(): string[] {
    return this.items.map((item) => item.name);
  }

  getItem(index: number): DataType {
    return this.items[index];
  }
}

let peopleData2 = new DataCollection(people);
console.log(`Data2 Names: ${peopleData2.getNames().join(', ')}`);

let firstPerson2 = peopleData2.getItem(0);
if (firstPerson2 instanceof Person) {
  console.log(
    `First Person from DataCollection: ${firstPerson2.name}, ${firstPerson2.city}`
  );
}

///////////////////////////////////////////////////////////////////////////////
// Creating and Understanding Generic Type Arguments

class GenericDataCollection<T> {
  private items: T[] = [];

  constructor(initialItems: T[]) {
    this.items.push(...initialItems);
  }

  add(newItem: T) {
    this.items.push(newItem);
  }

  getItem(index: number): T {
    return this.items[index];
  }
}

let peopleData3 = new GenericDataCollection<Person>(people);
firstPerson = peopleData3.getItem(0);
console.log(
  `First Person from GenericDataCollection: ${firstPerson.name}, ${firstPerson.city}`
);

///////////////////////////////////////////////////////////////////////////////
// Using Different Type Arguments

let productData = new GenericDataCollection<Product>(products);
let firstProduct = productData.getItem(0);
console.log(
  `First Product from GenericDataCollection: ${firstProduct.name}, ${firstProduct.price}`
);

///////////////////////////////////////////////////////////////////////////////
// Constraining Generic Type Values

class GenericDataCollectionWithConstraints<T extends Person | Product> {
  private items: T[] = [];

  constructor(initialItems: T[]) {
    this.items.push(...initialItems);
  }

  add(newItem: T) {
    this.items.push(newItem);
  }

  getItem(index: number): T {
    return this.items[index];
  }

  getNames(): string[] {
    return this.items.map((item) => item.name);
  }
}

let peopleData4 = new GenericDataCollectionWithConstraints<Person>(people);
firstPerson = peopleData4.getItem(0);
console.log(
  `First Person from GenericDataCollectionWithConstraints: ${firstPerson.name}, ${firstPerson.city}`
);
console.log(`Person Names: ${peopleData4.getNames().join(', ')}`);

let productData2 = new GenericDataCollectionWithConstraints<Product>(products);
firstProduct = productData2.getItem(0);
console.log(
  `First Product from GenericDataCollectionWithConstraints: ${firstProduct.name}, ${firstProduct.price}`
);
console.log(`Product Names: ${productData2.getNames().join(', ')}`);

///////////////////////////////////////////////////////////////////////////////
// Constraining Generic Types Using a Shape

import { City } from './dataTypes';

let cities = [new City('London', 8136000), new City('Paris', 2141000)];

class GenericDataCollectionWithShapeConstraint<T extends { name: string }> {
  private items: T[] = [];

  constructor(initialItems: T[]) {
    this.items.push(...initialItems);
  }

  add(newItem: T) {
    this.items.push(newItem);
  }

  getItem(index: number): T {
    return this.items[index];
  }

  getNames(): string[] {
    return this.items.map((item) => item.name);
  }
}

let peopleData5 = new GenericDataCollectionWithShapeConstraint<Person>(people);
firstPerson = peopleData5.getItem(0);
console.log(
  `First Person from GenericDataCollectionWithShapeConstraint: ${firstPerson.name}, ${firstPerson.city}`
);
console.log(`Person Names: ${peopleData5.getNames().join(', ')}`);

let productData3 = new GenericDataCollectionWithShapeConstraint<Product>(
  products
);
firstProduct = productData3.getItem(0);
console.log(
  `First Product from GenericDataCollectionWithShapeConstraint: ${firstProduct.name}, ${firstProduct.price}`
);
console.log(`Product Names: ${productData3.getNames().join(', ')}`);

let cityData = new GenericDataCollectionWithShapeConstraint<City>(cities);
console.log(`Citi Names: ${cityData.getNames().join(', ')}`);

///////////////////////////////////////////////////////////////////////////////
// Defining Multiple Type Parameters

class DataCollectionWithMultipleTypeParams<T extends { name: string }, U> {
  private items: T[] = [];

  constructor(initialItems: T[]) {
    this.items.push(...initialItems);
  }

  collate(targetData: U[], itemProp: string, targetProp: string): (T & U)[] {
    let results: (T & U)[] = [];

    this.items.forEach((item) => {
      //   let match = targetData.find((d) => d[targetProp] === item[itemProp]); // TS7503 ERROR in strict mode
      let match = targetData.find(
        (d) =>
          (d[targetProp as keyof U] as unknown) ===
          (item[itemProp as keyof T] as unknown)
      );
      if (match !== undefined) {
        results.push({ ...match, ...item });
      }
    });
    return results;
  }
}

let peopleData6 = new DataCollectionWithMultipleTypeParams<Person, City>(
  people
);
export let collatedData = peopleData6.collate(cities, 'city', 'name');
collatedData.forEach((c) =>
  console.log(`${c.name} lives in ${c.city}, population is ${c.population}`)
);

///////////////////////////////////////////////////////////////////////////////
// Applying a Type Parameter to a Method

import { Employee } from './dataTypes';

let employees = [
  new Employee('Bob Smith', 'Sales'),
  new Employee('Alice Jones', 'Sales'),
];

class DataCollectionWithGenericMethod<T extends { name: string }> {
  private items: T[] = [];

  constructor(initialItems: T[]) {
    this.items.push(...initialItems);
  }

  collate<U>(targetData: U[], itemProp: string, targetProp: string): (T & U)[] {
    let results: (T & U)[] = [];

    this.items.forEach((item) => {
      let match = targetData.find(
        (d) =>
          (d[targetProp as keyof U] as unknown) ===
          (item[itemProp as keyof T] as unknown)
      );
      if (match !== undefined) {
        results.push({ ...match, ...item });
      }
    });
    return results;
  }
}

export let peopleData7 = new DataCollectionWithGenericMethod<Person>(people);
// collatedData = peopleData7.collate<City>(cities, 'city', 'name');
collatedData = peopleData7.collate(cities, 'city', 'name'); // allowing the Compiler to infer type arguments
collatedData.forEach((c) => console.log(`${c.name}, ${c.city}`));

// let empData = peopleData7.collate<Employee>(employees, 'name', 'name');
export let empData = peopleData7.collate(employees, 'name', 'name'); // allowing the Compiler to infer type arguments
empData.forEach((e) => console.log(`${e.name}, ${e.city}, ${e.role}`));

///////////////////////////////////////////////////////////////////////////////
// Adding Extra Features to the Existing Type Parameters

export class TheDataCollection<T extends { name: string }> {
  protected items: T[] = [];

  constructor(initialItems: T[]) {
    this.items.push(...initialItems);
  }

  collate<U>(targetData: U[], itemProp: string, targetProp: string): (T & U)[] {
    let results: (T & U)[] = [];

    this.items.forEach((item) => {
      let match = targetData.find(
        (d) =>
          (d[targetProp as keyof U] as unknown) ===
          (item[itemProp as keyof T] as unknown)
      );
      if (match !== undefined) {
        results.push({ ...match, ...item });
      }
    });
    return results;
  }
}

export class SearchableCollection<
  T extends { name: string }
> extends TheDataCollection<T> {
  constructor(initialItems: T[]) {
    super(initialItems);
  }

  find(name: string): T | undefined {
    return this.items.find((item) => item.name === name);
  }
}

let peopleCollection = new SearchableCollection<Person>(people);
let foundPerson = peopleCollection.find('Bob Smith');
if (foundPerson !== undefined) {
  console.log(`Person ${foundPerson.name} lives in ${foundPerson.city}`);
}

///////////////////////////////////////////////////////////////////////////////
// Fixing the Generic Type Parameter

export class EmployeeSearchableCollection extends TheDataCollection<Employee> {
  constructor(initialItems: Employee[]) {
    super(initialItems);
  }

  find(searchTerm: string): Employee[] {
    return this.items.filter(
      (item) => item.name === searchTerm || item.role === searchTerm
    );
  }
}

export let employeeData = new EmployeeSearchableCollection(employees);
employeeData
  .find('Sales')
  .forEach((e) => console.log(`Employeee ${e.name}, ${e.role}`));

///////////////////////////////////////////////////////////////////////////////
// Restricting the Generic Type Parameter

class RistrictedSearchableCollection<
  T extends Employee | Person
> extends TheDataCollection<T> {
  constructor(initialItems: T[]) {
    super(initialItems);
  }

  find(searchTerm: string): T[] {
    return this.items.filter((item) => {
      if (item instanceof Employee) {
        return item.name === searchTerm || item.role === searchTerm;
      } else if (item instanceof Person) {
        return item.name === searchTerm || item.city === searchTerm;
      }
    });
  }
}

let collecion1 = new RistrictedSearchableCollection<Employee>(employees);
collecion1
  .find('Sales')
  .forEach((e) => console.log(`Employeee ${e.name}, ${e.role}`));

let collection2 = new RistrictedSearchableCollection<Person>(people);
collection2
  .find('New York')
  .forEach((p) => console.log(`Person ${p.name} lives in ${p.city}`));

///////////////////////////////////////////////////////////////////////////////
// Type Guarding Generic Types

class TypeGuardedDataCollection<T> {
  protected items: T[] = [];

  constructor(initialItems: T[]) {
    this.items.push(...initialItems);
  }

  filter<V extends T>(predicate: (target: unknown) => target is V): V[] {
    // Generic Type 에 대하여 instanceof 를 사용하여 타입 검사를 할 수 없다.
    // 따라서, predicate 를 제공하도록 해야 한다.
    return this.items.filter((item) => predicate(item)) as V[];
  }
}

let mixedData = new TypeGuardedDataCollection<Person | Product>([
  ...people,
  ...products,
]);
function isProduct(target: unknown): target is Product {
  return target instanceof Product;
}
let filteredProducts = mixedData.filter(isProduct);
// let filteredProducts = mixedData.filter<Product>(
//   (p): p is Product => p instanceof Product
// ); // predicate 함수를 별도로 생성하고 싶지 않다면, 이렇게 직접 매개변수로 predicate를 전달할 수 있다.
filteredProducts.forEach((p) => console.log(`$Product: ${p.name}, ${p.price}`));

///////////////////////////////////////////////////////////////////////////////
// Defining a Static Method on a Generic Class

class DataCollectionWithStaticMethod<T> {
  protected items: T[] = [];

  constructor(initialItems: T[]) {
    this.items.push(...initialItems);
  }

  filter<V extends T>(predicate: (target: unknown) => target is V): V[] {
    return this.items.filter((item) => predicate(item)) as V[];
  }

  // static methods can define their own generic type parameters
  static reverse<ArrayType>(items: ArrayType[]): ArrayType[] {
    return items.reverse();
  }
}

let reversedCities: City[] =
  DataCollectionWithStaticMethod.reverse<City>(cities);
reversedCities.forEach((c) => console.log(`City: ${c.name}, ${c.population}`));

///////////////////////////////////////////////////////////////////////////////
// Defining & Extending Generic Interfaces

type shapeType = { name: string };

interface ICollection<T extends shapeType> {
  add(...newItems: T[]): void;
  get(name: string): T;
  get count(): number;
}

// exteding generic interface
interface ISearchableCollection<T extends shapeType> extends ICollection<T> {
  find(name: string): T | undefined;
}

interface IProductCollection extends ICollection<Product> {
  sumPrices(): number;
}

interface IPeopleCollection<T extends Product | Employee>
  extends ICollection<T> {
  getNames(): string[];
}

///////////////////////////////////////////////////////////////////////////////
// Passing on the Generic Type Parameter

class ArrayCollection<DataType extends shapeType>
  implements ICollection<DataType>
{
  private items: DataType[] = [];

  add(...newItems: DataType[]): void {
    this.items.push(...newItems);
  }

  get(name: string): DataType {
    // strict mode 에서는 as DataType을 붙여주지 않으면 TS2322 컴파일 오류 발생.
    // find() 함수의 반환 값에 undefined가 포함되기 때문.
    return this.items.find((item) => item.name === name) as DataType;
  }

  get count(): number {
    return this.items.length;
  }
}

let pcollection: ICollection<Person> = new ArrayCollection<Person>();
pcollection.add(
  new Person('Bob Smith', 'London'),
  new Person('Dora Peters', 'New York')
);
console.log(`Collection size: ${pcollection.count}`);

///////////////////////////////////////////////////////////////////////////////
// Restricting or Fixing the Generic Type Parameter

class PersonCollection implements ICollection<Person> {
  private items: Person[] = [];

  add(...newItems: Person[]): void {
    this.items.push(...newItems);
  }

  get(name: string): Person {
    return this.items.find((item) => item.name === name) as Person;
  }

  get count(): number {
    return this.items.length;
  }
}

pcollection = new PersonCollection();
pcollection.add(
  new Person('Bob Smith', 'London'),
  new Person('Dora Peters', 'New York')
);
console.log(`Collection size: ${pcollection.count}`);

///////////////////////////////////////////////////////////////////////////////
// Creating an Abstract Inteface Implementation

abstract class ArrayCollectionBase<T extends shapeType>
  implements ICollection<T>
{
  protected items: T[] = [];

  add(...newItems: T[]): void {
    this.items.push(...newItems);
  }

  get(name: string): T {
    return this.items.find((item) => item.name === name) as T;
  }

  get count(): number {
    return this.items.length;
  }
}

class ProductCollection extends ArrayCollectionBase<Product> {
  get(searchTerm: string): Product {
    return this.items.find((item) => item.name === searchTerm) as Product;
  }
}

class AnotherPersonCollection extends ArrayCollectionBase<Person> {
  get(searchTerm: string): Person {
    return this.items.find(
      (item) => item.name === searchTerm || item.city === searchTerm
    ) as Person;
  }
}

pcollection = new AnotherPersonCollection();
pcollection.add(
  new Person('Bob Smith', 'London'),
  new Person('Dora Peters', 'New York')
);
let prodCollection: ICollection<Product> = new ProductCollection();
prodCollection.add(new Product('Running Shoes', 100), new Product('Hat', 25));
[pcollection, prodCollection].forEach((c) => {
  console.log(`Collection size: ${c.count}`);
});

import { City, Person, Product, Employee } from './dataTypes';

let products = [
  new Product('Running Shoes', 100),
  new Product('Hat', 25),
  new Product('T-Shirt', 15),
];

type shapeType = { name: string };

class Collection<T extends shapeType> {
  constructor(private items: T[]) {}

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

export let productCollection: Collection<Product> = new Collection(products);
console.log(`There are ${productCollection.count} products in the collection`);
export let p = productCollection.get('Hat');
console.log(`The product ${p.name} costs ${p.price}`);

///////////////////////////////////////////////////////////////////////////////
// Using Generic Collections

class CollectionBySet<T extends shapeType> {
  private items: Set<T>;

  constructor(initialItems: T[] = []) {
    this.items = new Set<T>(initialItems);
  }

  add(...newItems: T[]): void {
    newItems.forEach((item) => this.items.add(item));
  }

  get(name: string): T {
    return [...this.items.values()].find((item) => item.name === name) as T;
  }

  get count(): number {
    return this.items.size;
  }
}

export let productCollection2 = new CollectionBySet(products);
console.log(
  `There are ${productCollection2.count} products in the collection(set)`
);
p = productCollection.get('Hat');
console.log(`The product ${p.name} costs ${p.price}`);

class CollectionByMap<T extends shapeType> {
  //   private items: Map<string, T>;
  private items: Map<string, T>;

  constructor(initialItems: T[] = []) {
    this.items = new Map<string, T>();
    initialItems.forEach((item) => this.items.set(item.name, item));
  }

  add(...newItems: T[]): void {
    newItems.forEach((item) => this.items.set(item.name, item));
  }

  get(name: string): T {
    return this.items.get(name) as T;
  }

  get count(): number {
    return this.items.size;
  }
}

export let productCollection3 = new CollectionByMap(products);
console.log(
  `There are ${productCollection3.count} products in the collection(map)`
);
p = productCollection.get('Hat');
console.log(`The product ${p.name} costs ${p.price}`);

///////////////////////////////////////////////////////////////////////////////
// Using Generic Iterators & Combining an Iterable and an Iterator

class IterableCollection<T extends shapeType> {
  private items: Map<string, T>;

  constructor(initialItems: T[] = []) {
    this.items = new Map<string, T>();
    this.add(...initialItems);
  }

  add(...newItems: T[]): void {
    newItems.forEach((newItem) => this.items.set(newItem.name, newItem));
  }

  get(name: string): T {
    return this.items.get(name) as T;
  }

  get count(): number {
    return this.items.size;
  }

  // values(): Iterator<T> {
  //   return this.items.values();
  // }

  values(): IterableIterator<T> {
    return this.items.values();
  }
}

export let productCollection4 = new IterableCollection(products);
console.log(
  `There are ${productCollection4.count} products in the iterable collection`
);

let iterator: Iterator<Product> = productCollection4.values();
let result: IteratorResult<Product> = iterator.next();
while (!result.done) {
  console.log(`Product: ${result.value.name} costs ${result.value.price}`);
  result = iterator.next();
}

[...productCollection4.values()].forEach((p) => {
  console.log(`Iterating Products with forEach: ${p.name} costs ${p.price}`);
});

///////////////////////////////////////////////////////////////////////////////
// Creating an Iterable Class

class CustomIteratorCollection<T extends shapeType> implements Iterable<T> {
  private items: Map<string, T>;

  constructor(initialItems: T[] = []) {
    this.items = new Map<string, T>();
    this.add(...initialItems);
  }

  add(...newItems: T[]): void {
    newItems.forEach((newItem) => this.items.set(newItem.name, newItem));
  }

  get(name: string): T {
    return this.items.get(name) as T;
  }

  get count(): number {
    return this.items.size;
  }

  [Symbol.iterator](): Iterator<T> {
    return this.items.values();
  }
}

[...new CustomIteratorCollection(products)].forEach((p) => {
  console.log(
    `(Custom) Iterating Products with forEach: ${p.name} costs ${p.price}`
  );
});

///////////////////////////////////////////////////////////////////////////////
// Using the Index Type Query
// keyof T: the index type query operator.
//          it returns a UNION of the property names of T.

// export function getValue<T, K extends keyof T>(item: T, keyname: K) {
//   console.log(`Value of ${String(keyname)}: ${item[keyname]}`);
// }

p = new Product('Running Shoes', 100);
getValue<Product, 'name' | 'price'>(p, 'name'); // Explicitly Providing Generic Type parameters for Index Types
getValue<Product, 'price'>(p, 'price');

let e = new Employee('Bob Smith', 'Sales');
getValue(e, 'name'); // TypeScript infers the type of K as 'name'
getValue(e, 'role'); // TypeScript infers the type of K as 'role'

///////////////////////////////////////////////////////////////////////////////
// Using the Indexed Access Operator

export type priceType = Product['price']; // priceType is number type.
export type allTypes = Product[keyof Product]; // allTypes is string | number type

function getValue<T, K extends keyof T>(item: T, keyname: K): T[K] {
  return item[keyname];
}

class DataCollectionWithMultipleTypeParams<T extends { name: string }, U> {
  private items: T[] = [];

  constructor(initialItems: T[]) {
    this.items.push(...initialItems);
  }

  // 다음은 Chapter 12의 예제. collate 함수를 Indexed Access Operator를 사용하여 재작성 한 것.
  collate(targetData: U[], itemProp: keyof T, targetProp: keyof U): (T & U)[] {
    let results: (T & U)[] = [];

    this.items.forEach((item) => {
      let match = targetData.find(
        (d) => (d[targetProp] as unknown) === item[itemProp]
      );
      if (match !== undefined) {
        results.push({ ...match, ...item });
      }
    });
    return results;
  }
}

///////////////////////////////////////////////////////////////////////////////
// Using an Index Type for the Collection<T> Class

class KeyedCollection<T, K extends keyof T> implements Iterable<T> {
  private items: Map<T[K], T>;

  constructor(initialItems: T[] = [], private keyPropName: K) {
    this.items = new Map<T[K], T>();
    this.add(...initialItems);
  }

  add(...newItems: T[]): void {
    newItems.forEach((newItem) =>
      this.items.set(newItem[this.keyPropName], newItem)
    );
  }

  get(key: T[K]): T {
    return this.items.get(key) as T;
  }

  get count(): number {
    return this.items.size;
  }

  [Symbol.iterator](): Iterator<T> {
    return this.items.values();
  }
}

let keyedStore = new KeyedCollection<Product, 'name'>(products, 'name'); // or KeyedCollection(products, 'name');
console.log(`There are ${keyedStore.count} products in the keyed collection`);
let itemByKey = keyedStore.get('Hat');
console.log(`Item: ${itemByKey.name} costs ${itemByKey.price}`);

///////////////////////////////////////////////////////////////////////////////
// Using Type Mapping

type MappedProduct = {
  [P in keyof Product]: Product[P];
};

let mp: MappedProduct = { name: 'Kayak', price: 275 };
console.log(`Mapped Product: ${mp.name} costs ${mp.price}`);

///////////////////////////////////////////////////////////////////////////////
// Changing Mapping Names and Types

type AllowStrings = {
  [P in keyof Product]: Product[P] | string;
};

export let q: AllowStrings = { name: 'Kayak', price: 'apples' };
console.log(`Changed type #1: ${q.name} costs ${q.price}`);

type ChangeNames = {
  [P in keyof Product as `${P}Property`]: Product[P];
};

export let r: ChangeNames = { nameProperty: 'Kayak', priceProperty: 12 };
console.log(`Changed type #2: ${r.nameProperty} costs ${r.priceProperty}`);

///////////////////////////////////////////////////////////////////////////////
// Using a Generic Type Parameter with a Mapped Type

type Mapped<T> = {
  [P in keyof T]: T[P];
};

export let genericMappedProduct: Mapped<Product> = {
  name: 'Kayak',
  price: 275,
};
console.log(
  `Generic Mapped Product: ${genericMappedProduct.name} costs ${genericMappedProduct.price}`
);
export let genericMappedCity: Mapped<City> = {
  name: 'Seattle',
  population: 652405,
};
console.log(
  `Generic Mapped City: ${genericMappedCity.name} has ${genericMappedCity.population} residents`
);

///////////////////////////////////////////////////////////////////////////////
// Changing Property Optionality and Mutability

type MakeOptional<T> = {
  [P in keyof T]?: T[P];
};

type MakeRequired<T> = {
  [P in keyof T]-?: T[P];
};

type MakeReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

type MakeReadWrite<T> = {
  -readonly [P in keyof T]: T[P];
};

type optionalType = MakeOptional<Product>;
type requiredType = MakeRequired<optionalType>;
type readonlyType = MakeReadOnly<requiredType>;
type readWriteType = MakeReadWrite<readonlyType>;

export let rw: readWriteType = { name: 'Kayak', price: 275 };
console.log(`Read-Write Type: ${rw.name} costs ${rw.price}`);

type MakePropertyOptional<T, K extends keyof T> = {
  [P in K]?: T[P] | undefined;
};

///////////////////////////////////////////////////////////////////////////////
// Using the Basic Built-in Mapping
// -----
// Partial<T>: making properties optional.
// Required<T>: making properties required.
// Pick<T, K>: picking properties.
// Omit<T, K>: omitting properties.
// Record<K, V>: creating a type with a fixed set of properties.

type optionalProductType = Partial<Product>;
type requiredProductType = Required<optionalProductType>;
type readOnlyProductType = Readonly<requiredProductType>;

///////////////////////////////////////////////////////////////////////////////
// Mapping Specific Properties

type SelectProperties<T, K extends keyof T> = {
  [P in K]: T[P];
};

let p1: SelectProperties<Product, 'name'> = { name: 'Kayak' };
let p2: Pick<Product, 'name'> = { name: 'Kayak' };
let p3: Omit<Product, 'price'> = { name: 'Kayak' };
let p4: Omit<Product, 'name' | 'price'> = {};

///////////////////////////////////////////////////////////////////////////////
// Combining Transformations in a Single Mapping

type CustomMapped<T, K extends keyof T> = {
  readonly [P in K]?: T[P];
};

type BuiltInMapped<T, K extends keyof T> = Readonly<Partial<Pick<T, K>>>;

let p5: CustomMapped<Product, 'name'> = { name: 'Kayak' };
let p6: BuiltInMapped<Product, 'name' | 'price'> = {
  name: 'Kayak',
  price: 275,
};

///////////////////////////////////////////////////////////////////////////////
// Creating Types with a Type Mapping

type CustomMappedType<K extends keyof any, T> = {
  [P in K]: T;
};

let p7: CustomMappedType<'name' | 'city', string> = {
  name: 'Bob',
  city: 'Seattle',
};
let p8: Record<'name' | 'city', string> = { name: 'Alice', city: 'Paris' };

///////////////////////////////////////////////////////////////////////////////
// Using Conditional Types

type resultType<T extends boolean> = T extends true ? string : number;

let firstVal: resultType<true> = 'String Value';
let secondVal: resultType<false> = 100;

let condVal = true;
let mismatchCheck: resultType<typeof condVal> = 'String Value';

///////////////////////////////////////////////////////////////////////////////
// Using Conditional Types in Generic Classes

class ConditionalCollection<T> {
  private items: T[];

  constructor(...initialItems: T[]) {
    this.items = initialItems;
  }

  total<P extends keyof T, U extends boolean>(
    propName: P,
    format: U
  ): resultType<U> {
    let totalValue = this.items.reduce(
      (t, item) => (t += Number(item[propName])),
      0
    );
    return format ? `$${totalValue.toFixed()}` : (totalValue as any);
  }
}

let data = new ConditionalCollection<Product>(
  new Product('Kayak', 275),
  new Product('Lifejacket', 48.95)
);

let v1: string = data.total('price', true);
console.log(`Formatted value: ${v1}`);
let v2: number = data.total('price', false);
console.log(`Unformatted value: ${v2}`);

///////////////////////////////////////////////////////////////////////////////
// Using Conditional Types with Type Unions

/*
    type filteredUnion = Filter<Product | Person, Product>; 
    위 선언으로 filteredUnion 의 타입은 Person이 된다. 그 이유는 ...
    Filter<Product | Person, Product> 는 TypeScript 컴파일러에 의해
    Filter<Product, Product> | Filter<Person, Product>로 전개되고, 이는 다시
    never | Person 으로 전개 된다.
    never 타입과의 union은 가능하지 않으므로, never 는 컴파일러에 의해 제거된다.
    결과적으로, Filter<Product | Person, Product>는 Person이 된다.
*/
type Filter<T, U> = T extends U ? never : T;

/*
  
*/
function FilterArray<T, U>(
  data: T[],
  predicate: (item: any) => item is U
): Filter<T, U>[] {
  return data.filter((item) => !predicate(item)) as any;
}

let dataArray = [
  new Product('Kayak', 275),
  new Person('Bob', 'London'),
  new Product('Lifejacket', 27.5),
];

function isProduct(item: any): item is Product {
  return item instanceof Product;
}

let filteredData: Person[] = FilterArray(dataArray, isProduct);
console.log(`${filteredData.length} people filtered.`);
filteredData.forEach((item) => console.log(`Person: ${item.name}`));

// Exclude<T, U>: removing types from a union.
let excluded: Exclude<number | string | boolean, string>; // excluded: number | boolean

// Extrcact<T, U>: extracting types from a union.
let extracted: Extract<number | string | boolean, string>; // extracted: string

// NonNullable<T>: removing null and undefined from a union.
let nonNullable: NonNullable<number | string | null | undefined>; // nonNullable: number | string

///////////////////////////////////////////////////////////////////////////////
// Using Conditional Types in Type Mappings

type ChangeProps<T, U, V> = {
  [P in keyof T]: T[P] extends U ? V : T[P];
};

type ModifiedProduct = ChangeProps<Product, number, string>;

function convertProduct(p: Product): ModifiedProduct {
  return { name: p.name, price: `$${p.price.toFixed(2)}` };
}

let kayak = convertProduct(new Product('Kayak', 275));
console.log(`Product: ${kayak.name}, Price: ${kayak.price}`);

///////////////////////////////////////////////////////////////////////////////
// Identifying Properties of a Specific Type

/*
  UnionOfTypeNames<Product, number> creates a mapped type as follows: 
  {
    name: never;
    price: "price";
  }
*/
type UnionOfTypeNames<T, U> = {
  [P in keyof T]: T[P] extends U ? P : never;
};

/*
  PropertiesOfType<Product, number> creates a mapped type as follows:
  never | "price"
  and never type removed from the union automatically. so the last result is: "price"
*/
type PropertiesOfType<T, U> = UnionOfTypeNames<T, U>[keyof T];

function getTotal<T, P extends PropertiesOfType<T, number>>(
  data: T[],
  propName: P
): number {
  return data.reduce((t, item) => (t += Number(item[propName])), 0);
}

let productList = [new Product('Kayak', 275), new Product('Lifejacket', 48.95)];
console.log(`Totoal: ${getTotal(productList, 'price')}`);

///////////////////////////////////////////////////////////////////////////////
// Inferring Additional Types in Conditions

type TargetKeys<T> = T extends (infer U)[] ? keyof U : keyof T;

function getValueOf<T, P extends TargetKeys<T>>(data: T, propName: P): T[P] {
  if (Array.isArray(data)) {
    return data[0][propName];
  } else {
    return data[propName];
  }
}

console.log(`Array Value: ${getValueOf(productList, 'price')}`);
console.log(`Single Total: ${getValueOf(productList[0], 'price')}`);

///////////////////////////////////////////////////////////////////////////////
// Inferring Types of Functions

type Result<T> = T extends (...args: any) => infer R ? R : never;

function processArray<T, Func extends (args: T) => any>(
  data: T[],
  func: Func
): Result<Func>[] {
  return data.map((item) => func(item));
}

let selectName = (p: Product) => p.name;
let names: string[] = processArray(productList, selectName);
names.forEach((name) => console.log(`Name: ${name}`));

// Parameters<T>: extracting parameters of a function type.
let processArrayParams: Parameters<typeof processArray<Product, (p: Product) => string>>;

// ReturnType<T>: extracting return type of a function type.
let processArrayReturn: ReturnType<typeof processArray<Product, (p: Product) => string>>;

// ConstructorParameters<T>: extracting parameters of a class type.
let processArrayConstructor: ConstructorParameters<typeof Product>;

// InstanceType<T>: extracting the instance type of a class type.
let processArrayInstance: InstanceType<typeof Product>;

function makeObject<T extends new (...args: any) => any>(constructor: T, ...args: ConstructorParameters<T>): InstanceType<T> {
  return new constructor(...args as any[]);
}

let prod: Product = makeObject(Product, 'Kayak', 275);
let city: City = makeObject(City, 'London', 8136000);

[prod, city].forEach(item => console.log(`Name: ${item.name}`));

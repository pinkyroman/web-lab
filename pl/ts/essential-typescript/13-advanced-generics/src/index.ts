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
// Using Generic Iterators

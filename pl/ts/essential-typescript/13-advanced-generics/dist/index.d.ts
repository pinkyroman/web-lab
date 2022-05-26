import { Product } from './dataTypes';
declare type shapeType = {
    name: string;
};
declare class Collection<T extends shapeType> {
    private items;
    constructor(items: T[]);
    add(...newItems: T[]): void;
    get(name: string): T;
    get count(): number;
}
export declare let productCollection: Collection<Product>;
export declare let p: Product;
declare class CollectionBySet<T extends shapeType> {
    private items;
    constructor(initialItems?: T[]);
    add(...newItems: T[]): void;
    get(name: string): T;
    get count(): number;
}
export declare let productCollection2: CollectionBySet<Product>;
declare class CollectionByMap<T extends shapeType> {
    private items;
    constructor(initialItems?: T[]);
    add(...newItems: T[]): void;
    get(name: string): T;
    get count(): number;
}
export declare let productCollection3: CollectionByMap<Product>;
export {};

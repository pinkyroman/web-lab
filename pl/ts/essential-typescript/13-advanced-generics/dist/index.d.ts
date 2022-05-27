import { City, Product } from './dataTypes';
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
declare class IterableCollection<T extends shapeType> {
    private items;
    constructor(initialItems?: T[]);
    add(...newItems: T[]): void;
    get(name: string): T;
    get count(): number;
    values(): IterableIterator<T>;
}
export declare let productCollection4: IterableCollection<Product>;
export declare type priceType = Product['price'];
export declare type allTypes = Product[keyof Product];
declare type AllowStrings = {
    [P in keyof Product]: Product[P] | string;
};
export declare let q: AllowStrings;
declare type ChangeNames = {
    [P in keyof Product as `${P}Property`]: Product[P];
};
export declare let r: ChangeNames;
declare type Mapped<T> = {
    [P in keyof T]: T[P];
};
export declare let genericMappedProduct: Mapped<Product>;
export declare let genericMappedCity: Mapped<City>;
declare type MakeOptional<T> = {
    [P in keyof T]?: T[P];
};
declare type MakeRequired<T> = {
    [P in keyof T]-?: T[P];
};
declare type MakeReadOnly<T> = {
    readonly [P in keyof T]: T[P];
};
declare type MakeReadWrite<T> = {
    -readonly [P in keyof T]: T[P];
};
declare type optionalType = MakeOptional<Product>;
declare type requiredType = MakeRequired<optionalType>;
declare type readonlyType = MakeReadOnly<requiredType>;
declare type readWriteType = MakeReadWrite<readonlyType>;
export declare let rw: readWriteType;
export {};

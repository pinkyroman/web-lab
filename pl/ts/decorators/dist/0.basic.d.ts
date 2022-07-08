declare function mydeco(target: any): void;
declare class Cat {
    protected nameOfCat: string;
    constructor(nameOfCat?: string);
    get name(): string;
}
declare type Colors = 'white' | 'black' | 'red' | 'green' | 'blue' | 'purple' | 'cyan' | 'yellow' | 'gray';
declare function color(c: Colors): (target: any) => void;
declare class Glass {
    color: Colors;
}
declare function f(): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
declare function g(): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
declare class Ragdoll extends Cat {
    constructor(name: string);
    get name(): string;
    printName(): void;
}
//# sourceMappingURL=0.basic.d.ts.map
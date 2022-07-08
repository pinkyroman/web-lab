declare function configurable(state: boolean): (target: any, name: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
declare class Point {
    private _x;
    private _y;
    constructor(x: number, y: number);
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
}
//# sourceMappingURL=3.accessor.decorator.d.ts.map
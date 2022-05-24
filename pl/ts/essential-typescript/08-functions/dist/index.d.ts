declare function check(expression: boolean): asserts expression;
declare function checkNumber(val: any): asserts val is number;
declare function calculateTax(amount: number, discount?: number, ...extraFees: number[]): number;
declare function calculateTax(amount: null, discount?: number, ...extraFees: number[]): null;
declare function writeValue(label: string, value: number): void;
declare let taxValue: number;
declare let taxValueWithNull: null;

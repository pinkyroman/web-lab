declare function calculateTax(amount: number): number;
declare function writePrice(product: string, price: number): void;
declare enum OtherEnum {
    First = 10,
    Two = 20
}
declare const enum Product {
    Hat = 11,
    Gloves = 20,
    Umbrella = 31
}
declare let productValue: Product;
declare let unionValue: number | Product;
declare enum City {
    London = "LON",
    Paris = "PAR",
    Chicago = "CHI"
}
declare function getMixedValue(input: 1): 1;
declare function getMixedValue(input: 2 | 3): 'Hello' | true;
declare let first: 1;
declare let second: true | "Hello";
declare let third: true | "Hello";
declare let str: "City: London" | "City: Paris" | "City: Chicago";
declare type numVals = 1 | 2 | 3 | 4;
declare function getRandomValue(): numVals;
declare type cities = 'London' | 'Paris' | 'Chicago';
declare type cityResponse = `City: ${cities}`;
declare function getCityString(city: cities): cityResponse;

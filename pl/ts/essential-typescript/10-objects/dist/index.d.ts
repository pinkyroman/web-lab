declare enum Feature {
    Waterproof = 0,
    Insulated = 1
}
declare type Product = {
    id: number;
    name: string;
    price?: number;
};
declare type Person = {
    id: string;
    name: string;
    city: string;
    getContact(field: string): string;
};
declare type Employee = {
    id: string;
    company: string;
    dept: string;
    getContact(field: number): number;
};
declare type EmployedPerson = Person & Employee;
declare let person: EmployedPerson;
declare let typeTest: ((field: string) => string) & ((field: number) => number);
declare let stringParamTypeTest: string;
declare let numberParamTypeTest: number;

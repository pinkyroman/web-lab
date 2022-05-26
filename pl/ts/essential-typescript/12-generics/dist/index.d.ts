import { Person } from './dataTypes';
import { City } from './dataTypes';
export declare let collatedData: (Person & City)[];
import { Employee } from './dataTypes';
declare class DataCollectionWithGenericMethod<T extends {
    name: string;
}> {
    private items;
    constructor(initialItems: T[]);
    collate<U>(targetData: U[], itemProp: string, targetProp: string): (T & U)[];
}
export declare let peopleData7: DataCollectionWithGenericMethod<Person>;
export declare let empData: (Person & Employee)[];
export declare class TheDataCollection<T extends {
    name: string;
}> {
    protected items: T[];
    constructor(initialItems: T[]);
    collate<U>(targetData: U[], itemProp: string, targetProp: string): (T & U)[];
}
export declare class SearchableCollection<T extends {
    name: string;
}> extends TheDataCollection<T> {
    constructor(initialItems: T[]);
    find(name: string): T | undefined;
}
export declare class EmployeeSearchableCollection extends TheDataCollection<Employee> {
    constructor(initialItems: Employee[]);
    find(searchTerm: string): Employee[];
}
export declare let employeeData: EmployeeSearchableCollection;
export {};

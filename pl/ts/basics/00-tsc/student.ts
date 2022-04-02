import { Person } from './person';

export class Student extends Person {
    study(): string {
        return `${this.name} is studying`;
    }
}

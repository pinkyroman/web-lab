"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const person_1 = require("./person");
class Student extends person_1.Person {
    study() {
        return `${this.name} is studying`;
    }
}
exports.Student = Student;

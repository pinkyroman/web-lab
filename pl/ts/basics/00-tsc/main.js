"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("./student");
class Startup {
    static main() {
        const student = new student_1.Student('John Doe');
        console.log('Starting up...');
        console.log(student.sayHello());
        console.log(student.study());
        console.log('end of program');
        console.log('it was a lie!');
        return 0;
    }
}
Startup.main();

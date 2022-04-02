import { Student } from './student';

class Startup {
    public static main(): number {
        const student = new Student('John Doe');

        console.log('Starting up...');
        console.log(student.sayHello());
        console.log(student.study());
        console.log('end of program');
        console.log('it was a lie!');

        return 0;
    }
}

Startup.main();

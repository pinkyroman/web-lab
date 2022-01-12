class MyClass {
    name = '';

    // constructor
    constructor(name) {
        this.name = name;
    }
    // prototype method
    sayHello() {
        console.log(`Hello ${this.name}.`);
    }
    // static method
    static sayHelloStatic() {
        console.log('Hello static.');
    }
    // getter
    get description() {
        return `I'm ${this.name}.`;
    }
}

const me = new MyClass('John');
me.sayHello();
console.log(me.description);
MyClass.sayHelloStatic();

const Person = class MyPerson {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

const p = new Person('Ozzy', 'Osbourne');
console.dir(Person);
// console.dir(MyPerson); // Uncaught ReferenceError: MyPerson is not defined
console.log(p.fullName);


class NewPerson {
    static sig = "NewPerson";

    // static private fields
    static #instances = 0;

    // private fileds
    #id;
    #firstName;
    #lastName;

    constructor(firstName, lastName) {
        this.#id = NewPerson.#instances++;
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    get id() {
        return this.#id;
    }

    get firstName() {
        return this.#firstName;
    }

    get lastName() {
        return this.#lastName;
    }

    get fullName() {
        return `${this.#firstName} ${this.#lastName}`;
    }

    set fullName(name) {
        [this.#firstName, this.#lastName] = name.split(' ');
    }

    // static public method
    static getInstanceCount() {
        return NewPerson.#instances;
    }
}

const person = new NewPerson('Harry', 'Porter');
console.log(person.id);
console.log(person.fullName);
person.fullName = 'Alice Cooper';
console.log(person.fullName);

const andy = new NewPerson('Andy', 'Garsia');
console.log(andy.id);
console.log(andy.fullName);

console.log(NewPerson.sig);
console.log(`Instances: ${NewPerson.getInstanceCount()}`);


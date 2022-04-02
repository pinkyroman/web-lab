class Program {
    static main(): number {
        console.log("Hello World!");
        return 0;
    }
}

Program.main();

interface User {
    name: string;
    id: number;
    // sayHello: () => void;
    sayHello(): void;
};

const user: User = {
    name: "John",
    id: 1,
    sayHello() {
        console.log(`I'm ${this.name}. Hello!`);
    },
};

user.sayHello();

// Unions
type Directions = "up" | "down" | "left" | "right";
let dir: Directions = "right";
console.log('dir: ', dir);
dir = "up-and-down";
console.log('dir: ', dir);

type Odds = 1 | 3 | 5 | 7 | 9;
let odd: Odds = 4;
console.log('odd: ', odd);

type Complex = true | false | "yes" | "no";
let complex: Complex = "yes";
console.log('complex: ', complex);
console.log('typeof complex: ', typeof complex);
complex = true;
console.log('complex: ', complex);
console.log('typeof complex: ', typeof complex);

function add(value: number | number[], dest: number[]) {
    if (Array.isArray(value)) {
        dest.push(...value);
    } else {
        dest.push(value);
    }
}

const numbers: number[] = [];
add(1, numbers);
console.log('numbers: ', numbers);
add([2, 3], numbers);
console.log('numbers: ', numbers);

function add2(first: number | string, second: number | string): number | string {
    if (typeof first === "number" && typeof second === "number") {
        return first + second;
    } if (typeof first === "string" && typeof second === "string") {
        return first + second;
    }
    return "invalid inputs";    
}

let result = add2(3, 5);
console.log('result: ', result);
result = add2("Hello ", "World");
console.log('result: ', result);
result = add2(3, "World");
console.log('result: ', result);

// Generics
interface Queuable<T> {
    enqueue(value: T): void;
    dequeue(): T | undefined;
}

class Queue<T> implements Queuable<T> {
    private data: T[] = [];
    enqueue(value: T) {
        this.data.push(value);
    }
    dequeue(): T | undefined {
        return this.data.shift();
    }
}

const stringQueue = new Queue<string>();
stringQueue.enqueue("Hello");
stringQueue.enqueue("World");
console.log('stringQueue: ', stringQueue);
console.log('first item: ', stringQueue.dequeue());
console.log('second item: ', stringQueue.dequeue());
console.log('third item: ', stringQueue.dequeue());

const m = "HELLO WORLD";
let lowered = m.toLocaleLowerCase();
console.log('lowered: ', lowered);
lowered = "THAT'S ALL I WANTED".toLocaleLowerCase();
console.log('lowered: ', lowered);

interface X {
    x: number;
}

interface X {
    xx: number;
}

const x: X = {
    x: 1,
    xx: 8,
};
console.log('')
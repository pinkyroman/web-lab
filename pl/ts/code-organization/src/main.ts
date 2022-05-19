import * as Shipping from './examples/shipping.js';
import Calculator from './examples/decorators.js';

export class Dock {
    private dockedShips: Shipping.Ship[] = [];

    arrival(ship: Shipping.Ship) {
        this.dockedShips.push(ship);
    }
}

const myDock = new Dock();
myDock.arrival(new Shipping.Ferry('Ferry', 'Port', 4000));

const calc = new Calculator();
calc.square(8);

function printMessage(message: string | undefined | null) {
    if (message) {
        console.log(`message: ${message.length}`);
    }
}

let myMessage = 'hello, world!';
printMessage(myMessage);


interface Student {
    id: string;
    name: string;
    age: number;
}

type Nullable<T> = T | null | undefined;

type NullableStudent = Nullable<Student>;

let s1: NullableStudent = {
    id: '1',
    name: 'John',
    age: 20,
};

function printStudentInfo(s: NullableStudent) {
    // console.log(s.id); // 에러: Object is possibly 'null' or 'undefined'.

    // 에러를 피하려면, 다음과 같이 null/undefined 체크를 하거나 ...
    // if (s) {
    //     console.log(s.id);
    // }

    // null 아님 단언 연산자(Non-null Assertion Operator, postfix !) 사용
    console.log(s!.id);
}

function readStudentInfo(checked: boolean) {
    return checked ? {
        id: '999',
        name: 'Shawn',
        age: 17,
    } : undefined;
}

printStudentInfo(s1);

s1 = readStudentInfo(true);
printStudentInfo(s1);

function funcReturnsVoid(): void {
    return ;
}

let z = funcReturnsVoid();
console.log(z);

function safeParse(s: string): unknown {
    return JSON.parse(s);
  }
   
// Need to be careful with 'obj'!
const obj = safeParse(`{
    "a": 1,
    "b": 2,
    "c": 3
}`);
console.log(obj);
// Error: obj 는 unknown 타입이므로, 프로퍼티 값 변경 등은 불가. 그 자체를 다른 타입으로 전환하는 등은 가능.
// obj.a = 88; 

type SomeObject = {
    c: number;
}

const obj2: SomeObject = obj as SomeObject;
console.log(obj2);
// obj2.c = 88;

console.log(`obj: ${JSON.stringify(obj)}, obj2: ${JSON.stringify(obj2)}`);

// const args = [8, 5];
// const angle = Math.atan2(...args);

type voidFunc = () => void;
 
const f1: voidFunc = () => {
  return true;
};
 
const f2: voidFunc = () => true;
 
const f3: voidFunc = function () {
  return true;
};

const v1 = f1();
const v2 = f2();
const v3 = f3();

console.log(v1, v2, v3);

function getProperty<Type extends object, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
}

getProperty(myDock, 'arrival');

// Generic에서 Class Type 사용하기
function createInstance<T>(c: new () => T): T {
    return new c();
}

const dock2 = createInstance(Dock);
dock2.arrival(new Shipping.Ferry('Ferry', 'Port', 4040));

/*
interface IdLabel {
    id: number;
}

interface NameLabel {
    name: string;
}

type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;

function createLabel<T extends number | string>(label: T): NameOrId<T> {
    throw "not implemented";
}

const label1 = createLabel(1);
const label2 = createLabel('label');
console.log(label1, label2);

// type MessageOf<T extends { message: unknown }> = T['message'];
type MessageOf<T> = T extends { message: unknown } ? T['message'] : never;

interface MyEvent {
    message: string;
}

type MyEventMessage = MessageOf<MyEvent>;
*/

/*
type PropEventSource<Type> = {
    on<Key extends string & keyof Type>(eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void): void;
}

declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;

const person = makeWatchedObject({
    firstName: "Saoirse",
    lastName: "Borroto",
    age: 42,
});

person.on('firstNameChanged', (newValue) => {
    console.log(`firstName changed to ${newValue}`);
});

person.on('ageChanged', (newValue) => {
    console.log(`age changed to ${newValue}`);
});
*/

class AClass {
    static #count= 0;

    constructor() {
        AClass.#count++;
    }

    get count() {
        return AClass.#count;
    }

    static {
        console.log(`static block called`);
    }
}

const ac1: AClass = new AClass();
console.log(ac1.count);
const ac2: AClass = new AClass();
console.log(ac2.count);

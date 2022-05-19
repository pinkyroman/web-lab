var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _AClass_count;
import * as Shipping from './examples/shipping.js';
import Calculator from './examples/decorators.js';
export class Dock {
    constructor() {
        this.dockedShips = [];
    }
    arrival(ship) {
        this.dockedShips.push(ship);
    }
}
const myDock = new Dock();
myDock.arrival(new Shipping.Ferry('Ferry', 'Port', 4000));
const calc = new Calculator();
calc.square(8);
function printMessage(message) {
    if (message) {
        console.log(`message: ${message.length}`);
    }
}
let myMessage = 'hello, world!';
printMessage(myMessage);
let s1 = {
    id: '1',
    name: 'John',
    age: 20,
};
function printStudentInfo(s) {
    // console.log(s.id); // 에러: Object is possibly 'null' or 'undefined'.
    // 에러를 피하려면, 다음과 같이 null/undefined 체크를 하거나 ...
    // if (s) {
    //     console.log(s.id);
    // }
    // null 아님 단언 연산자(Non-null Assertion Operator, postfix !) 사용
    console.log(s.id);
}
function readStudentInfo(checked) {
    return checked ? {
        id: '999',
        name: 'Shawn',
        age: 17,
    } : undefined;
}
printStudentInfo(s1);
s1 = readStudentInfo(true);
printStudentInfo(s1);
function funcReturnsVoid() {
    return;
}
let z = funcReturnsVoid();
console.log(z);
function safeParse(s) {
    return JSON.parse(s);
}
// Need to be careful with 'obj'!
const obj = safeParse(`{
    "a": 1,
    "b": 2,
    "c": 3
}`);
console.log(obj);
const obj2 = obj;
console.log(obj2);
// obj2.c = 88;
console.log(`obj: ${JSON.stringify(obj)}, obj2: ${JSON.stringify(obj2)}`);
const f1 = () => {
    return true;
};
const f2 = () => true;
const f3 = function () {
    return true;
};
const v1 = f1();
const v2 = f2();
const v3 = f3();
console.log(v1, v2, v3);
function getProperty(obj, key) {
    return obj[key];
}
getProperty(myDock, 'arrival');
// Generic에서 Class Type 사용하기
function createInstance(c) {
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
    constructor() {
        var _b, _c;
        __classPrivateFieldSet(_b = AClass, _a, (_c = __classPrivateFieldGet(_b, _a, "f", _AClass_count), _c++, _c), "f", _AClass_count);
    }
    get count() {
        return __classPrivateFieldGet(AClass, _a, "f", _AClass_count);
    }
}
_a = AClass;
_AClass_count = { value: 0 };
(() => {
    console.log(`static block called`);
})();
const ac1 = new AClass();
console.log(ac1.count);
const ac2 = new AClass();
console.log(ac2.count);

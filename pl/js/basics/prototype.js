// Circle 객체 생성자
function Circle(radius) {
    this.radius = radius;
    // 모든 Circle 객체가 소유하는 메서드. 즉, 모든 Circle 객체가 이 메서드를 생성하게 된다 ... 메모리 낭비지.
    this.perInstanceMethod = function () {
        console.log('this method is per instance method');
    }
}

// 모든 Circle 객체에 상속되는 메서드이며, 모든 Circle 객체에 대하여 하나의 인스턴스만 생성한다.
Circle.prototype.getArea = function () {
    return Math.PI * this.radius ** 2;
};

const c1 = new Circle(5);
const c2 = new Circle(10);

console.log(`c1.getArea === c2.getArea // ${c1.getArea === c2.getArea}`); // true
console.log(`c1.perInstanceMethod === c2.perInstanceMethod // ${c1.perInstanceMethod === c2.perInstanceMethod}`); // false

// 생성자 함수는 'prototype' 프로퍼티를 갖는다. 이 프로퍼티는 생성자 함수가 생성하는 객체에 상속되며, 객체의 __proto__ 접근자 프로퍼티로 접근할 수 있다.
console.log(Circle.hasOwnProperty('prototype')); // true
console.log(`Circle.prototype === c1.__proto__ // ${Circle.prototype === c1.__proto__}`); // true
console.log(`Circle.prototype === c2.__proto__ // ${Circle.prototype === c2.__proto__}`); // true

const c3 = new Circle.prototype.constructor(10);
const c4 = new c2.__proto__.constructor(15);

console.log(`Circle.prototype === c3.__proto__ // ${Circle.prototype === c3.__proto__}`); // true
console.log(`Circle.prototype === c4.__proto__ // ${Circle.prototype === c4.__proto__}`); // true

const point = {
    x: 10,
    y: 20,
};
console.log(`point.hasOwnProperty('__proto__') // ${point.hasOwnProperty('__proto__')}`); // false
console.log('point.constructor = ' + point.constructor.name);
console.log('c1 has own property "constructor" // ' + c1.hasOwnProperty('constructor')); // false
console.log('c1.__proto__ has own property "constructor" // ' + c1.__proto__.hasOwnProperty('constructor')); // true
console.log('c1 constructor = ' + c1.constructor.name);
/*
    객체 생성 방식에 따른 프로토타입의 결정
*/
// (1) 객체 리터럴
const obj1 = {
    name: 'obj1',
};
console.log(`obj1.constructor === Object.constructor // ${obj1.constructor === Object}`); // true

// (2) Object 생성자 함수
const obj2 = new Object();
obj2.name = 'obj2';
console.log(`obj2.constructor === Object.constructor // ${obj2.constructor === Object}`); // true

// (3) 생성자 함수
function Point(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

const pt = new Point(10, 20);
console.log(`pt.constructor === Point // ${pt.constructor === Point}`); // true

console.log(`Object.getPrototypeOf(pt) === Point.prototype // ${Object.getPrototypeOf(pt) === Point.prototype}`); // true
console.log(`Object.getPrototypeOf(Point.prototype) === Object.prototype // ${Object.getPrototypeOf(Point.prototype) === Object.prototype}`); // true
console.log('------------------------------------\n');

console.log(`pt.__proto__ === Point.prototype // ${pt.__proto__ === Point.prototype}`); // true
console.log(`Point.__proto__ === Function.prototype // ${Point.__proto__ === Function.prototype}`); // true
console.log(`Function.__proto__ === Object.__proto__ // ${Function.__proto__ === Object.__proto__}`); // true


function prototypeInfo(name, obj) {
    console.log('------------------------------------\n');
    console.dir(`Object.getPrototypeOf(${name}):`);
    console.log(Object.getPrototypeOf(obj));
    console.log(`${name}.prototype: `);
    console.log(obj.prototype);
    console.log(`${name}.__proto__: `);
    console.dir(obj.__proto__);
}

prototypeInfo('Point', Point);

prototypeInfo('Function', Function);

prototypeInfo('Object', Object);

console.log(`pt instanceof Point // ${pt instanceof Point}`); // true
console.log(`Point instanceof Function // ${Point instanceof Function}`); // true
console.log(`pt instanceof Function // ${pt instanceof Function}`); // false
console.log(`pt instanceof Object // ${pt instanceof Object}`); // true

const User = (function () {
    function User(name) {
        // private readonly variable
        const $id = parseInt(Date.now() % (Math.random() * 10000), 16);

        // private variable
        let $name = name;

        // define getter and setter for private variables
        Object.defineProperties(this, {
            id: {
                get() {
                    return $id;
                },
            },
            name: {
                get() {
                    return $name;
                },
                set(value) {
                    $name = value;
                },
            },
        });

        // public variable
        this.age = 0;
    }

    User.prototype.reportStatus = function () {
        console.log('REPORT STATUS: this prototype method can be accessed as an instance or a static method since it does not use "this" keyword');
    };

    // static property
    User.staticProperty = 'static property';

    // static method
    User.staticMethod = function () {
        console.log('static method called.');
    };

    return User; // 생성자 함수 객체를 반환
})();

let user = new User('Ozzy');
[
    user,
    new User('Jane'),
    new User('Jack'),
].forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}`);
});
console.log('user AGAIN: ');
console.log(user);

console.log(User.staticProperty);
User.staticMethod();
// user.staticMethod(); // Uncaught TypeError: user.staticMethod is not a function

User.prototype.reportStatus();
user.reportStatus();

console.log(`"id" in user: ${'id' in user}`); // true
console.log(`"name" in user: ${'name' in user}`); // true
console.log(`"reportStatus" in user: ${'reportStatus' in user}`); // true
console.log(`Reflect.has(user, 'xyz'): ${Reflect.has(user, 'xyz')}`); // false

console.log('\nDisplaying properties of user:');
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`${key} = ${user[key]}`);
    }
}

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

const Person = (function () {
    let _age = 0;

    function Person(name, age) {
        this.name = name;
        _age = age;
    }

    Person.prototype.sayHi = function () {
        console.log(`Hi, I'm ${this.name} and I'm ${_age} years old.`);
    };

    return Person;
}());

const me = new Person('Ozzy', 30);
const you = new Person('Jane', 25);
you.sayHi();
me.sayHi();

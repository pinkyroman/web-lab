let id = 0;

function Person(name, age) {
    // new.target은 ES6부터 지원되며, Person()이 new 키워드 없이 호출된 경우
    // undefined 값을 갖는다.
    if (!new.target) {
        // new 키워드 없이 호출 된 경우, new 키워드와 함께 재귀 호출 한다.
        console.warn('Person() constructor called without new.');
        return new Person(name, age);
    }

    let $id = ++id; // private variable

    this.name = name;
    this.age = age;
    this.getId = () => $id;

    Person.prototype.toString = function () {
        return this.name + ' is ' + this.age + ' years old';
    };
    Object.defineProperty(Person, 'id', {
        get() {
            return $id;
        }
    });
}
let f = Person;
console.log(f.prototype);

let p1 = new Person('ozzy', 88);
let p2 = Person('billy', 33); // this will cause warning message.

console.log('p2 info:');
console.log(p2);
console.log(p2.name);
console.log(p2.getId());
console.log(p2.id);

console.log('p1 info:');
console.log(p1);
console.log(p1.getId());

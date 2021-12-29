console.log('\n\n');

// 메서드 호출 /////////////////////////////////////////////////////////////////////
// 메서드 내부의 this에는 메서드를 호출한 객체가 바인딩 된다.
const person = {
    name: 'John',
    getName() {
        return this.name;
    }
};
console.log('person.getName(): ', person.getName()); // John

const getName = person.getName;
console.log('getName(): ', getName()); // getName() 호출한 객체는 전역 객체이다. 즉, window.getName()을 호출 한 것.

function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
};

const me = new Person('John');
console.log('me.getName(): ', me.getName()); // John
console.log('Person.prototype.getName(): ', Person.prototype.getName()); // John

Person.prototype.name = 'Ozzy';
console.log('Person.prototype.name: ', Person.prototype.name); // Ozzy
console.log('Person.prototype.getName(): ', Person.prototype.getName()); // Ozzy


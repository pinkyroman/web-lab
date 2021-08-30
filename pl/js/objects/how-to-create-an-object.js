// 객체 리터럴을 사용하여 생성하기
var personByObjectLiteral = {
    name: 'Object Literal',
    sayHello: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

console.log(typeof personByObjectLiteral);
console.log(personByObjectLiteral);
personByObjectLiteral.sayHello();

// Object 생성자 함수
var personByObjectConstructor = new Object();
personByObjectConstructor.name = 'Object Constructor';
personByObjectConstructor.sayHello = function () {
    console.log(`Hello, my name is ${this.name}.`);
};

console.log(typeof personByObjectConstructor);
console.log(personByObjectConstructor);
personByObjectConstructor.sayHello();

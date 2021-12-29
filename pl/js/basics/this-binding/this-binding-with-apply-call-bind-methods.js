console.log('\n\n');

// Function.prototype.apply/call/bind 메서드에 의한 간접 호출 ///////////////////////////
function doSomething() {
    console.log('arguments of doSomething: ', arguments);
    return this;
}

console.log('일반 함수 호출 시, doSomething() 함수의 this:\n', doSomething(1, 2, 3));

const thisArg = { a: 1 };
console.log('thisArg: ', thisArg);
console.log('thisArg 객체를 apply()의 인자로 전달한 경우, doSomething() 함수의 this:\n', doSomething.apply(thisArg, ['a', 'b', 'c', 'd']));

const thatArg = { b: 2 };
console.log('thatArg: ', thatArg);
console.log('thatArg 객체를 call()의 인자로 전달한 경우, doSomething() 함수의 this:\n', doSomething.call(thatArg, 4, 5));

const thisToBind = { c: 3 };
console.log('thisToBind: ', thisToBind);
console.log('thisToBind 객체를 bind()의 인자로 전달한 경우, doSomething() 함수의 this:\n', doSomething.bind(thisToBind, 6, 7));
// Function.prototype.bind() 함수는 apply()나 call()과 달리 바로 호출하지 않으므로, 직접 호출해 주어야 한다.
console.log('thisToBind 객체를 bind()의 인자로 전달한 경우, doSomething() 함수의 this:\n', doSomething.bind(thisToBind)('가', '나'));
console.log('thisToBind 객체를 bind()의 인자로 전달한 경우, doSomething() 함수의 this:\n', doSomething.bind(thisToBind, '가', '나')());

function doAnything(callback) {
    console.log('doAnything() 함수의 this: ', this);
    callback();
}

const student = {
    name: 'Alice',
    foo(callback) {
        console.log('student.foo() 함수의 this: ', this);

        console.log('bind() 사용하지 않고 doAnything() 호출한 결과: \n');
        doAnything(callback);

        console.log('bind() 사용하여 doAnything() 호출한 결과:\n');
        doAnything(callback.bind(this));
    },
};
student.foo(function () {
    console.log(`Hi, my name is ${this.name}.`);
});

/* [기본 규칙]    
    * this는 객체의 프로퍼티나 메서드를 참조하기 위한 "자기 참조 변수".
    * this 바인딩은 함수 호출 시점에 동적으로 결정 됨.
*/

// 일반 함수 호출 ///////////////////////////////////////////////////////////////////
function foo() {
    // 일반 함수는 객체를 생성하지 않으므로, "자기 참조"의 의미가 없다(즉, this가 필요 없다).
    // 따라서, 일반 함수로 호출하면 함수 내부의 this에는 전역 객체가 바인딩 된다.
    // strict mode 에서는 일반 함수 내부의 this에 undefined가 바인딩 된다.
    // 'use strict';

    console.log("foo's this: ", this); // window

    function bar() {
        console.log("bar's this: ", this); // window
    }
    bar();
}
foo();

var value = 1; // 전역 변수는 전역 객체의 프로퍼티가 된다.
console.log('global value: ', value); // 1

const obj = {
    value: 100,
    foo() {
        console.log("obj.foo's this: ", this);
        console.log("obj.foo's this.value: ", this.value);

        // 메서드 내에 정의된 중첩 "함수" 
        function bar() {
            console.log("bar's this: ", this);
            console.log("bar's this.value: ", this.value);
        }
        // 메서드 내에서 정의한 중첩 함수도 일반 함수로 호출되면 중첩 함수 내부의 this에는 전역 객체가 바인딩 된다.
        bar();
    }
};
obj.foo();

function doSomething(callback) {
    callback();
}

const obj2 = {
    value: 200,
    foo() {
        console.log("obj2.foo's this: ", this);
        console.log("obj2.foo's this.value: ", this.value);

        // 콜백 함수 내부의 this에는 전역 객체가 바인딩 된다.
        doSomething(function () {
            console.log('---------------------------------------------------------');
            console.log("callback's this: ", this);
            console.log("callback's this.value: ", this.value);
        });

        // 콜백 함수에 바인딩 되는 this 이슈 해결 방법 #1: 올바른 this 참조를 위한 변수 사용
        const self = this;
        doSomething(function () {
            console.log('---------------------------------------------------------');
            console.log("now, callback uses 'self' variable for referencing obj2");
            console.log("callback's self: ", self);
            console.log("callback's self.value: ", self.value);
        });

        // 콜백 함수에 바인딩 되는 this 이슈 해결 방법 #2: Function.prototype.bind() 사용
        doSomething(function () {
            console.log('---------------------------------------------------------');
            console.log("this time, callback uses Function.prototype.bind()");
            console.log("callback's this: ", this);
            console.log("callback's this.value: ", this.value);
        }.bind(this));

        // 화살표 함수를 콜백으로 사용하면, this는 상위 스코프의 this(obj2)가 바인딩 된다.
        doSomething(() => {
            console.log('---------------------------------------------------------');
            console.log("arrow function callback's this: ", this);
            console.log("arrow function callback's this.value: ", this.value);
        });
    },
};
obj2.foo();

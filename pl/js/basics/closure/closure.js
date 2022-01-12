// 함수의 상위 스코프는 어디에서 정의 되었는지에 따라 결정된다.
// 이를 렉시컬 스코프(정적 스코프)라 한다.
const x = 1;

function foo() { // foo()의 상위 스코프는 전역 스코프.
    const x = 10;
    bar();
}

function bar() { // bar()의 상위 스코프는 전역 스코프.
    console.log(x);
}

foo(); // 1
bar(); // 1

function foo2() {
    const x = 10;

    function bar2() { // bar2() 함수의 상위 스코프는 foo2().
        console.log(x);
    }

    bar2();
};

foo2(); // 10

function outer() {
    const x = 20;
    const inner = function () { console.log(x); };
    return inner;
}

const innerFn = outer();
// outer() 호출이 종료되면, outer 함수의 Execution Context가 실행 스택에서 제거된다.
// 하지만, outer 함수의 Lexical Environment는 GC에 의해 제거되지 않고 메모리에 남아있게 된다.
// 그 이유는 inner 함수 내에서 상위 스코프인 outer 함수에 정의된 상수 x를 사용하고 있고,
// 이는 곧 outer 함수의 Lexical Environment를 참조한다는 것을 의미한다. 
// 모든 객체는 자신에 대한 모든 참조가 제거되어야만 GC에 의해 제거될 수 있으므로,
// outer의 Lexical Environment는 여전히 메모리에 남아있게 된다.
// 외부 함수보다 중첩 함수가 더 오래 유지되는 경우, 중첩 함수는 이미 생명 주기가 종료한
// 외부 함수의 변수를 참조할 수 있다. 이러한 중첩 함수를 클러저라고 부른다.
// "클로저는 함수와 그 함수가 선언된 레시컬 환경과의 조합이다" (MDN의 클로저 정의)
innerFn(); // 20

var funct = [];

for (var i = 0; i < 3; i++) { // var 로 선언된 변수 i는 전역 스코프.
    funct[i] = function () {
        return i;  // 생성되는 클로저 반환하는 값은 전역 스코프 변수인 i의 값.
    };
}
// 이 시점에 i 값은 3이 되어있다.

for (var j = 0; j < 3; j++) {
    console.log(funct[j]()); // 결국 3만 출력하게 된다.
}

funct = [];
for (let i = 0; i < 3; i++) { // let 으로 선언된 변수 i의 스코프는 for 문의 블럭. 즉, 블럭 스코프.
    // 블록 스코프는 Block Lexical Environment 생성. 
    // 게다가, for 문의 Lexical Environment 는 반복 할 때 마다 새로 생성 됨.
    // 즉, 반복에 의해 아래의 코드로 클로저가 생성될 때마다, 자신이 참조하는 상위 Lexical Environment가 달라진다.
    funct[i] = function () {
        // 위의 이유에 의해, 클로저가 참조하는 변수 i는 서로 다른 변수라 할 수 있다.
        return i;
    }
}

for (var j = 0; j < 3; j++) {
    console.log(funct[j]());
}

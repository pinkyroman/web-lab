function foo() {
    const x = 1;
    const y = 2;

    // 일반적으로 클로저라고 하지 않는다.
    function bar() {
        const z = 3;
        // 상위 스코프의 식별자를 참조하지 않는다.
        console.log(z);
    }
    return bar;
}

const bar = foo();
bar();

function foo2() {
    const x = 1;

    // bar 함수는 클로저였지만 곧바로 소멸한다.
    // 이러한 함수는 일반적으로 클로저라고 하지 않는다.
    function bar2() {
        debugger;
        // 상위 스코프의 식별자를 참조한다.
        console.log(x);
    }
    bar2();
}

foo2();

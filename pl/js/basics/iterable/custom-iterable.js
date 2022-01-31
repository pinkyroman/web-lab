printTitle('사용자 정의 이터러블 (Custom Iterable)');

///////////////////////////////////////////////////////////////////////////////
// 피보나찌 수열을 구현한 사용자 정의 이터러블
const fibonacci = {
    // Symbol.iterator 메서드를 구현하여 이터러블 프로토콜을 준수한다.
    [Symbol.iterator]() {
        let [pre, cur] = [0, 1];
        const max = 10;

        // Symbol.iterator 메서드는 next 메서드를 소유한 이터레이터를 바환해야 하고
        // next 메서드는 Iterator Result 객체를 반환해야 한다.
        return {
            next() {
                [pre, cur] = [cur, pre + cur];
                return { value: cur, done: cur >= max };
            },
        };
    },
};

// 이터러블인 fibonacci 객체를 순회할 때마다 next 메서드가 호출된다.
for (const num of fibonacci) {
    console.log(`fib: ${num}`);
}

// 이터러블은 스프레드 문법의 대상이 될 수 있다.
const arr = [...fibonacci];
console.log(arr);

// 이터러블은 배열 디스트럭처링 할당의 대상이 될 수 있다.
[first, second, ...rest] = fibonacci;
console.log(`first: ${first}, second: ${second}, rest: ${rest}`);


///////////////////////////////////////////////////////////////////////////////
// 이터러블을 생성하는 함수
const fibonacciFunc = function (max) {
    let [pre, cur] = [0, 1];

    // Symbol.iterator 메서드를 구현한 이터러블을 반환한다.
    return {
        [Symbol.iterator]() {
            return {
                next() {
                    [pre, cur] = [cur, pre + cur];
                    return { value: cur, done: cur >= max };
                },
            };
        },
    };
};

// 이터러블을 반환하는 함수에 수열의 최대값을 인수로 전달하여 호출.
console.log(`fibonacciFunc(50): ${[...fibonacciFunc(50)]}`);
for (const num of fibonacciFunc(50)) {
    console.log(`fib: ${num}`);
}

///////////////////////////////////////////////////////////////////////////////
// 이터러블이면서 이터레이터인 객체
const fibonacciIterableObj = {
    max: 10,
    pre: 0,
    cur: 1,
    setMax(x) { 
        this.max = x;
        return this;
    },
    [Symbol.iterator]() { 
        [this.pre, this.cur] = [0, 1];
        return this; 
    },
    next() {
        [this.pre, this.cur] = [this.cur, this.pre + this.cur];
        return { value: this.cur, done: this.cur >= this.max };
    },
};

console.log(`fibonacciIterableObj: ${[...fibonacciIterableObj]}`);
for (const num of fibonacciIterableObj) {
    console.log(`fib: ${num}`);
}

console.log(`fibonacciIterableObj.setMax(50): ${[...fibonacciIterableObj.setMax(50)]}`);
for (const num of fibonacciIterableObj.setMax(50)) {
    console.log(`fib: ${num}`);
}


///////////////////////////////////////////////////////////////////////////////
// 이터러블이면서 이터레이터인 객체를 생성하는 함수
const fibonacciIterableFunc = function (max) {
    let [pre, cur] = [0, 1];

    return {
        [Symbol.iterator]() { return this; },
        next() {
            [pre, cur] = [cur, pre + cur];
            return { value: cur, done: cur >= max };
        },
    };
};

console.log(`fibonacciIterableFunc(50): ${[...fibonacciIterableFunc(50)]}`);
for (const num of fibonacciIterableFunc(50)) {
    console.log(`fib: ${num}`);
}


///////////////////////////////////////////////////////////////////////////////
// 무한 이터러블과 지연 평가
const infiniteFibonacciIterable = function () {
    let [pre, cur] = [0, 1];

    return {
        [Symbol.iterator]() { return this; },
        next() {
            [pre, cur] = [cur, pre + cur];
            return { value: cur }; // without done: true
        },
    };
};

console.log('infiniteFibonacciIterable:');
for (const num of infiniteFibonacciIterable()) {
    console.log(`fib: ${num}`);
    if (num > 1000) {
        break;
    }
}

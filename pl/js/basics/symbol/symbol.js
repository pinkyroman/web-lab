const mySymbol1 = Symbol();
const mySymbol2 = Symbol('mySymbol2');
console.log(mySymbol1);
console.log(mySymbol2);

// boolean 타입으로 암묵적 타입 변환 가능. 이를 통해 if 문에서 존재 확인 가능
console.log('!!mySymbol1: ', !!mySymbol1);
if (mySymbol2) {
    console.log('mySymbol2 is not empty!');
}

// 공유 가능한 심볼 생성/사용
const shared_key = 'shared_key';
const s1 = Symbol.for(shared_key); // 전역 심볼 레지스트리에 존재하지 않으면 생성 후 반환.
const s2 = Symbol.for(shared_key); // 전역 심볼 레지스트리에 존재하면 존재하는 심볼 반환.
console.log('s1 === s2: ', s1 === s2);
console.log(`shared_key === '${shared_key}' === Symbol.keyFor(s1): `, shared_key === Symbol.keyFor(s1));

// 심볼을 이용한 enum 구현
const Direction = Object.freeze({
    UP: Symbol.for('UP'),
    DOWN: Symbol.for('DOWN'),
    LEFT: Symbol.for('LEFT'),
    RIGHT: Symbol.for('RIGHT'),
});

const d = Direction.UP;
console.log('d: ', d);
console.log(`key: '${Symbol.keyFor(d)}'`);

// 객체 프로퍼티 키로 심볼 사용하기
const obj = {
    'normalKey': 'normalValue',
    [Symbol.for('foo')]: 1,
};

let symbolKey = Symbol.for('foo');
console.log('obj[symbolKey]: ', obj[symbolKey]);

// 심볼 값을 프로퍼티 키로 사용하면, for...in 문, Object.keys(),
// Object.getOwnPropertyNames() 메서드로 찾을 수 없다.
console.log("for...in: ");
for (const key in obj) {
    console.log(`key: ${key}, value: ${obj[key]}`);
}

console.log("Object.keys(): ");
console.log(Object.keys(obj));


console.log("Object.getOwnPropertyNames(): ");
console.log(Object.getOwnPropertyNames(obj));

// ES6에서 도입딘 Object.getOwnPropertySymbols() 메서드로 심볼 프로퍼티만 추출 가능
console.log("Object.getOwnPropertySymbols(): ");
console.log(Object.getOwnPropertySymbols(obj));

symbolKey = Object.getOwnPropertySymbols(obj)[0];
console.log('obj[symbolKey]: ', obj[symbolKey]);

// 표준 빌트인 객체 확장:
// 기본적으로는 권장하지 않음.
// 개발자가 확장을 위해 추가한 메서드의 이름이 추후 다른 개발자나 표준 사양이 
// 동일한 메서드 이름을 사용하여 확장될 수 있기 때문.

// sum() 메서드는 언제든지 재정의 될 수 있다.
Array.prototype.sum = function () {
    return this.reduce((a, b) => a + b, 0);
};
console.log(`[1, 2, 3].sum(): ${[1, 2, 3].sum()}`);

Array.prototype[Symbol.for('sum')] = function () {
    return this.reduce((a, b) => a + b, 0);
};
console.log(`[1, 2, 3][Symbol.for('sum')](): ${[1, 2, 3][Symbol.for('sum')]()}`);

// Well-known symbols
console.log('\n\n---------------------------------------------------------');
console.log('Well-known symbols: ');
console.dir(Symbol);

// obj 객체를 for...of 문에서 사용할 수 있도록 iterable 객체로 만들기
console.log("for...of: ");
// 다음은 오류가 발생한다.
// for (const key of obj) {
//     console.log(`key: ${key}, value: ${obj[key]}`);
// }

obj[Symbol.iterator] = function () {
    const keys = Object.keys(this);
    let i = 0;
    return {
        next: () => ({
            value: keys[i++],
            done: i > keys.length,
        })
    };
};

for (const key of obj) {
    console.log(`key: ${key}, value: ${obj[key]}`);
}

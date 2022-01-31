/* [이터러블 프로토콜]
    - Symbol.iterator 를 프로퍼티 키로 사용한 메서드를 직접 구현하거나 프로토타입 체인을 통해 제공하는 것.
    - 이터러블 프로토콜을 준수한 객체를 이터러블이라고 함.
    - for...of문으로 순회 할 수 있음.
    - 스프레드 문법의 대상으로 사용할 수 있음.
    - 디스트럭처링 할당의 대상으로 사용할 수 있음.

    [이터레이터 프로토콜]
    - Symbol.iterator 메서드를 호출하면, 다음의 규약을 준수하는 객체를 반환:
        -- next 메서드를 소유.
        -- next 메서드를 호출하면, value와 done 프로퍼티를 갖는 객체를 반환.
        -- value는 순환 시 반환되는 값.
        -- done은 순환의 종료 조건.
*/
function printTitle(title) {
    const width = 80;
    console.log(`\n${' '.repeat((width - title.length) / 2)}${title}`);
    console.log(`${'='.repeat(width)}`);
}

function isIterable(obj) {
    return obj != null && typeof obj[Symbol.iterator] === 'function';
}

printTitle('이터러블 (Iterable)');

// 배열, 문자열, Map, Set 등은 이터러블이다.
console.log(`isIterable([1, 2, 3]): ${isIterable([1, 2, 3])}`);
console.log(`isIterable('abc'): ${isIterable('abc')}`);
console.log(`isIterable(new Map()): ${isIterable(new Map())}`);
console.log(`isIterable(new Set()): ${isIterable(new Set())}`);

const src = [1, 2, 3, 4, 5];
const dest = [6, 7, 8];
console.log(`src: [${src}]`);
console.log(`dest: [${dest}]`);

// 이터러블은 for...of 문으로 순회할 수 있다.
console.log('\nfor...of:');
for (let value of src) {
    console.log('value of src:', value);
}

// 이터러블은 스프레드 문법의 대상이 될 수 있다.
console.log(`spreaded: [${[...src, ...dest]}]`);

// 이터러블은 디스트럭처링 할당의 대상이 될 수 있다.
let [first, second, ...rest] = src;
console.log(`const [first, second, ...rest] = src :::=> first = ${first}, second = ${second}, rest = [${rest}]`);

let obj = {
    a: 1,
    b: 2,
};

// 객체는 이터러블이 아니므로, for...of 문으로 순회할 수 없고, 
// 디스트럭처링 할당의 대상으로 사용할 수 없음.
console.log(`obj: ${JSON.stringify(obj)}`);
console.log(`isIterable(obj): ${isIterable(obj)}`);
try {
    console.log('for...of:');
    for (const item of obj) {
        console.log(`item: ${item}`);
    }        
} catch (error) {
    console.log(error);
}

try {
    console.log('destructuring obj:');
    const [a, b] = obj;
} catch (error) {
    console.log(error);
}

// 하지만, 스프레드 문법의 대상이 될 수 있다.
const merged = {...obj, ...{c: 3, d: 4}};
console.log(`merged: ${JSON.stringify(merged)}`);




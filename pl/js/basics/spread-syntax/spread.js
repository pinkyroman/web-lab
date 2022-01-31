// 스프레드 문법(ES6, 전개 문법)은 하나로 뭉쳐 있는 여러 값드의 집합을 펼쳐서 개별적인 값들의 목록으로 만든다.
console.log(...[1, 2, 3]);
console.log(...'Hello');

// 스프레드 문법의 결과는 값이 아니다. 즉, ...는 연산자가 아니다. 
// 따라서, 스프레드 문법의 결과는 변수에 할당할 수 없다.
// 스프레드 문법은 다음과 같은 문맥에서만 사용할 수 있다:
// (1) 함수 호출문의 인수 목록
// (2) 배열 리터럴의 요소 목록
// (3) 객체 리터럴의 프로퍼티 목록


///////////////////////////////////////////////////////////////////////////////
// 함수 호출문의 인수 목록에서 사용하는 경우
console.group('!!!!! 함수 호출문의 인수 목록에서 사용하는 경우');
let array = [1, 2, 3];
console.log(`Math.max(array) = ${Math.max(array)}`);
console.log(`Math.max.appy(null, array) = ${Math.max.apply(null, array)}`);
console.log(`Math.max(...array) = ${Math.max(...array)}`);

// 함수의 rest 파라미터와 비교
function foo(...rest) {
    console.log(`typeof rest = ${typeof rest}`);
    console.log('rest: ', rest);
}

foo(1, 2, 3);
foo([1, 2, 3]);
foo(...['apple', 'banana', 'orange']);

console.groupEnd();

///////////////////////////////////////////////////////////////////////////////
// 배열 리터럴 내부에서 사용하는 경우
console.group('!!!!! 배열 리터럴 내부에서 사용하는 경우');
////////// concat
console.group('concat example: ');
// ES5
console.log(`[1, 2].concat([3, 4, 5]) = [${[1, 2].concat([3, 4, 5])}]`);
// ES6
console.log(`[...[1, 2], ...[3, 4, 5]] = [${[...[1, 2], ...[3, 4, 5]]}]`);
console.groupEnd();

////////// splice
console.group('splice example:');
let a1 = [1, 4];
const a2 = [2, 3];
console.log(`a1 = [${a1}]`);
console.log(`a2 = [${a2}]`);

// 세 번째 인수 a2를 해체하여 전달해야 한다.
// 그렇지 않으면 a1에 a2 배열 자체가 추가된다.
a1.splice(1, 0, a2);
console.log(`a1.splice(1, 0, a2) = `, a1);

a1 = [1, 4];
Array.prototype.splice.apply(a1, [1, 0].concat(a2));
console.log(`Array.prototype.splice.apply(a1, [1, 0].concat(a2)): `, a1);
console.groupEnd(); // end of 'splice example: '

////////// slice (array copy)
console.group('slice example: ');
// ES5
const src = [1, 2, 3, 4, 5];
let dest = src.slice();
console.log(`src = [${src}]`);
console.log(`dest = src.slice(): [${dest}]`);

// ES6
console.log(`dest = [...src] = [${dest = [...src]}]`);
console.groupEnd();

////////// convert an iterable object to an array
console.group('convert an iterable object to an array: ');
const arrayLike = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
};
console.log(`arrayLike: ${JSON.stringify(arrayLike)}`);

// ES5
console.log('Array.prototype.slice.call(arrayLike): ', Array.prototype.slice.call(arrayLike));

// ES6
console.log('[...Array.from(arrayLike)] = ', [...Array.from(arrayLike)]);
console.groupEnd(); // end of 'convert an iterable object to an array: '
console.groupEnd(); // end of '!!!!! 배열 리터럴 내부에서 사용하는 경우'

///////////////////////////////////////////////////////////////////////////////
// 객체 리터럴 내부에서 사용하는 경우
console.group('!!!!! 객체 리터럴 내부에서 사용하는 경우');

////////// 객체 복사(shallow copy)
const srcObj = { x: 1, y: 2, z: 3 };
console.log(`srcObj = ${JSON.stringify(srcObj)}`);

let mergedObj = Object.assign({}, srcObj, { a: 4, b: 5 });
console.log(`mergedObj = Object.assign({}, srcObj, { a: 4, b: 5 }) = ${JSON.stringify(mergedObj)}`);

let destObj = {...srcObj};
console.log(`destObj = {...srcObj}: ${JSON.stringify(destObj)}`);
console.log(`srcObj === destObj: ${srcObj === destObj}`);

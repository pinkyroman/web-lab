// 문자열 타입으로의 암묵적 형 변환
console.log('10' + 1); // 101
console.log(10 + '1'); // 101
console.log(10 + '1' + 3); // 1013
console.log(0 + ''); // 0
console.log(-0 + ''); // 0
console.log(-1 + ''); // -1
console.log(NaN + ''); // NaN
console.log(null + ''); // null
console.log(Infinity + ''); // Infinity
console.log(-Infinity + ''); // -Infinity
console.log(true + ''); // true
console.log(undefined + ''); // undefined
console.log({} + ''); // [object Object]
console.log(Math + ''); // [object Math]
console.log([] + ''); // "" (empty string)
console.log([1, 2, 3] + ''); // 1,2,3
console.log(function () { } + ''); // function () {}
console.log(Array + ''); // function Array() { [native code] }

// 숫자 타입으로의 암묵적 형 변환
console.log(1 - '1'); // 0
console.log(1 * '10'); // 10
console.log(+''); // 0 (여기에서 + 연산자는 단항 연산자임에 주의)
console.log(+'0'); // 0
console.log(+'1'); // 1
console.log(+'string'); // NaN
console.log(+true); // 1
console.log(-false); // -0
console.log(+undefined); // NaN
console.log(+{}); // NaN
console.log(+[]); // 0
let arr = [];
console.log(+arr); // 0
console.log(+arr == 0 ? 'array is empty' : 'array is not empty'); // true
arr = [1];
console.log(+arr); // 1
console.log(+arr == 0 ? 'array is empty' : 'array is not empty'); // true

// 불리언 타입으로의 암묵적 형 변환
// JavaScript에서의 falsy 값: false, undefined, null, 0, -0, NaN, '' (empty string)
// falsy 값은 무조건 false를 반환한다.
console.log(Boolean('')); // false
console.log(Boolean(-0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(undefined)); // false

// 불리언 타입으로 강제 형 변환
// 불리언 타입이 아닌 값을 불리언 타입으로 변환하는 방법 두 가지:
// (1) Boolean() 생성자 함수를 사용하여 불리언 타입으로 변환
// (2) !! 연산자를 사용하여 불리언 타입으로 변환
// 특히, (2) 방법은 ...
console.log(!!'x'); // true
console.log(!!''); // false
console.log(!!'false'); // true
console.log(!!0); // false
console.log(!!1); // true
console.log(!!-1); // true
console.log(!!16); // true
console.log(!!NaN); // false
console.log(!!Infinity); // true
console.log(!!-Infinity); // true
console.log(!!null); // false
console.log(!!{}); // true
console.log(!![]); // true

// 단축 평가
console.log('cats' && 'dogs'); // dogs
console.log(undefined && 'dogs'); // undefined
console.log(null && 'dogs'); // null

console.log('cats' || 'dogs'); // cats
console.log(undefined || 'dogs'); // dogs
console.log(null || 'dogs'); // dogs
console.log(undefined || []); // []

// if (truthy) then .. 의 경우:
let done = true;
let msg = done && 'task completed';
console.log(msg); // task completed (done 이 false 이면 msg 는 false)

// if (falsy) then .. 의 경우:
let items = null;
let myItems = items || [];
console.log(myItems); // [] (items 가 null 이면 myItems 는 빈 배열)

let obj = null;
let value = obj && obj.value;
console.log(value); // undefined (obj 가 null 이면 value 는 null)

obj = {};
value = obj && obj.value;
console.log(value); // undefined (obj.value 가 존재하지 않으므로)

obj = null;
value = obj || { value: 'default' }.value;
console.log(value); // default (obj.value 가 존재하면 value 는 obj.value)

// 옵셔널 체이닝 연산자
msg = '';
let len = msg && msg.length;
console.log(!!len ? len : 'empty string'); // '' (msg의 값이 '' 이면, falsy 값이므로, len은 빈 문자열 값이 된다. 즉, 문자열 길이를 가져오려던 의도대로 수행되지 않는다)

len = msg?.length; // 옵셔널 체이닝 연산자를 사용하면, msg 값이 null이나 undefined가 아니면 값을 가져온다. 즉, msg 값이 null이나 undefined 값이면, len 값은 null 또는 undefined가 된다.
console.log(len); // 0

// null 병합 연산자
msg = '';
let foo = msg || 'wrong value';
console.log(!!foo ? foo : 'empty string'); // 'wrong value' (msg가 빈 문자열이므로 falsy 값이 되어, foo는 'wrong value' 값을 갖게 된다

msg = '';
foo = msg ?? 'default';
console.log(!!foo ? foo : 'empty string'); // default (msg 가 null이나 undefined가 아니므로, foo 는 빈 문자열 값을 갖는다)

msg = null;
foo = msg ?? 'default';
console.log(!!foo ? foo : 'empty string'); // default (msg 가 null이므로, foo는 'default' 값을 갖는다)


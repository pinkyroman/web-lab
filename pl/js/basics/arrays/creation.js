// 배열 리터럴
console.log(`[].length: ${[].length}`);
console.log(`[1, 2, 3].length: ${[1, 2, 3].length}`);
console.log(`[1,,3].length: ${[1, , 3].length}`); // 희소 배열

// Array 생성자
const a1 = new Array();
console.log(`const a1 = new Array(): [${a1}]`);
console.log(a1);

const a2 = new Array(10);
console.log(`const a2 = new Array(10): [${a2}]`);
console.log(a2);

const a3 = new Array(1, 2, 3,);
console.log(`const a3 = new Array(1, 2, 3): [${a3}]`);
console.log(a3);

// Array() 생성자 함수는 new.target을 내부적으로 확인하므로 new 키워드 없이 생성 가능.
const a4 = Array('a', 'b', 'c');
console.log(`const a4 = Array('a', 'b', 'c'): [${a4}]`);
console.log(a4);

// Array.of() 메서드(ES6)
const a5 = Array.of();
console.log(`const a5 = Array.of(): [${a5}]`);
console.log(a5);

const a6 = Array.of(1, 2, 3, 4, 5);
console.log(`const a6 = Array.of(1, 2, 3, 4, 5): [${a6}]`);
console.log(a6);

// Array.from() 메서드는 유사 배열 객체(array-like object) 또는 이터러블 객체(iterable object)를 배열 객체로 변환하여 반환한다.
const arrayLikeObj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};
console.log('arrayLikeObj: ', arrayLikeObj);
const a7 = Array.from(arrayLikeObj);
console.log(`const a7 = Array.from(arrayLikeObj): [${a7}]`);
console.log(a7);

const a8 = Array.from({ length: 3 });
console.log(`const a8 = Array.from({length: 3}): [${a8}]`);
console.log(a8);

const a9 = Array.from('this string can be transformed to an array');
console.log(`const a9 = Array.from('this string can be transformed to an array'): [${a9}]`);
console.log(a9);

const a10 = Array.from(arrayLikeObj, (value, index) =>
    !['a', 'e', 'i', 'o', 'u'].includes(value) ? value.toUpperCase() : value
);
console.log(`const a10 = Array.from(arrayLikeObj, (value, index) => {...}): [${a10}]`);
console.log(a10);




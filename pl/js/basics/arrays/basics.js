// 배열 리터럴을 이용한 배열 생성
var colors = ["red", "green", "blue"];
console.log(colors);
console.log(`colors: ${colors}`);

// 배열 요소 접근
console.log(`colors[2]: ${colors[2]}`);

// 배열 요소의 개수
console.log(`colors.length: ${colors.length}`);

// 배열의 순회
for (let i = 0; i < colors.length; i++) {
    console.log(`colors[${i}]: ${colors[i]}`);
}

// 배열의 타입
console.log(`typeof colors: ${typeof colors}`);

// 배열 생성을 위한 생성자 함수
const arr1 = new Array(1, 2, 3, 4, 5);
console.log(`arr1: ${arr1}`);
console.log(`arr1.constructor == Array: ${arr1.constructor == Array}`);
console.log(`Object.getPrototypeOf(arr1) == Array.prototype: ${Object.getPrototypeOf(arr1) == Array.prototype}`);

const arr2 = Array.of("korea", "us", "singapore", "brittany");
console.log(`arr2: ${arr2}`);
console.log(`arr2.constructor == Array: ${arr2.constructor == Array}`);

const arr3 = Array.from(colors);
console.log(`arr3: ${arr3}`);
console.log(`arr3.constructor == Array: ${arr3.constructor == Array}`);

const arr4 = Array.from("Hello, World!");
console.log(`arr4: ${arr4}`);
console.log(`arr4.constructor == Array: ${arr4.constructor == Array}`);

// array-like object
const arr5 = {
    0: "red",
    1: "green",
    2: "blue",
    length: 3,
};

console.log(arr5);
for (let i = 0; i < arr5.length; i++) {
    console.log(`arr5[${i}]: ${arr5[i]}`);
}
console.log(`arr5.constructor == Array: ${arr5.constructor == Array}`);



const testArr = [1, 2, 3, 4, 5];
console.log(`testArr: [${testArr}]`);
console.log(`testArr.length: ${testArr.length}`);

testArr.push(6);
console.log(`testArr.push(6): [${testArr}]`);
console.log(`testArr.length: ${testArr.length}`);

console.log(`testArr.pop(): ${testArr.pop()}`);
console.log(`testArr: [${testArr}]`);
console.log(`testArr.length: ${testArr.length}`);

// 현재 length 프로퍼티 값보다 작은 값을 할당하면 배열의 길이가 줄어든다.
testArr.length = 3;
console.log(`testArr.length = 3: [${testArr}]`);

// 현재 length 프로퍼티 값보다 큰 값을 할당해도 배열의 실제 길이가 증가하지는 않는다.
// 화면에 표시되는 empty x 5는 실제로 추가된 배열의 요소가 아님에 주의.
testArr.length = 8;
console.log(`testArr.length = 8: [${testArr}]`);
console.log('testArr: ', testArr);

// 희소 배열(sparse array)
const sparse = [, 2, , 4, , 6];
console.log(`sparse: [${sparse}]`);
console.log('sparse: ', sparse);
console.log(`sparse.length: ${sparse.length}`);


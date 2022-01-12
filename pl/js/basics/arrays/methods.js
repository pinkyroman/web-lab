///// isArray()
console.log(`Array.isArray([]): ${Array.isArray([])}`);
console.log(`Array.isArray([1, 2, 3]): ${Array.isArray([1, 2, 3])}`);
console.log(`Array.isArray(new Array()): ${Array.isArray(new Array())}`);


///// indexOf(), includes():ES7
let fruits = ['apple', 'banana', 'orange', 'strawberry', 'blueberry'];
console.log(`fruits: [${fruits}]`);
console.log(`fruits.indexOf('strawberry'): ${fruits.indexOf('strawberry')}`);
console.log(`fruits.indexOf('peach'): ${fruits.indexOf('peach')}`);
console.log(`fruits.indexOf('banana', 2): ${fruits.indexOf('banana', 2)}`);

if (fruits.indexOf('peach') === -1) {
    fruits.push('peach');
}
console.log(`fruits: [${fruits}]`);

if (!fruits.includes('pear')) {
    fruits.push('pear');
}
console.log(`fruits: [${fruits}], ${fruits.length} items.`);


///// push() 
console.log(`fruits.push('kiwi', 'mango'): ${fruits.push('peach', 'mango')}`);
console.log(`fruits: [${fruits}], ${fruits.length} items.`);

// 배열 마지막에 추가할 요소가 하나라면, 성능 상 length 프로퍼티 사용하는 방식이 낫다.
fruits[fruits.length] = 'grape';
console.log(`fruits: [${fruits}], ${fruits.length} items.`);

// 기존 배열을 유지하려면, 스프레드 문법을 사용하는 것이 좋다.
const newFruits = [...fruits, 'watermelon'];
console.log(`fruits: [${fruits}], ${fruits.length} items.`);
console.log(`newFruits: [${newFruits}], ${newFruits.length} items.`);


///// pop()
console.log(`fruits: [${fruits}], ${fruits.length} items.`);
console.log(`fruits.pop(): ${fruits.pop()}`);
console.log(`fruits: [${fruits}], ${fruits.length} items.`);


///// unshift() / shift()
console.log(`fruits.unshift('tomato', 'cherry'): ${fruits.unshift('tomato', 'cherry')}`);
console.log(`fruits: [${fruits}], ${fruits.length} items.`);
console.log(`fruits.shift(): ${fruits.shift()}`);
console.log(`fruits: [${fruits}], ${fruits.length} items.`);
console.log(`fruits.shift(): ${fruits.shift()}`);
console.log(`fruits: [${fruits}], ${fruits.length} items.`);


///// concat(source)
const firstGroup = [1, 2, 3];
console.log(`firstGroup: [${firstGroup}], ${firstGroup.length} items.`);
const secondGroup = [4, 5, 6];
console.log(`secondGroup: [${secondGroup}], ${secondGroup.length} items.`);
let result = firstGroup.concat(secondGroup);
console.log(`firstGroup.concat(secondGroup): [${result}], ${result.length} items.`);
result = secondGroup.concat(firstGroup);
console.log(`secondGroup.concat(firstGroup): [${result}], ${result.length} items.`);


///// splice(start, deleteCount, item1, item2, ...)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`numbers: [${numbers}], ${numbers.length} items.`);
console.log(`numbers.splice(5): [${numbers.splice(5)}]`);
console.log(`numbers: [${numbers}], ${numbers.length} items.`);
console.log(`numbers.splice(-3): [${numbers.splice(-3)}]`);
console.log(`numbers: [${numbers}], ${numbers.length} items.`);

console.log('rebuilding numbers...');
numbers.push(3, 4, 5, 6, 7, 8, 9, 10);
console.log(`numbers: [${numbers}], ${numbers.length} items.`);

console.log(`numbers.splice(3, 5): [${numbers.splice(3, 5)}]`);
console.log(`numbers: [${numbers}], ${numbers.length} items.`);
console.log(`numbers.splice(2, 2, 11, 12): [${numbers.splice(2, 2, 11, 12)}]`);
console.log(`numbers: [${numbers}], ${numbers.length} items.`);
console.log(`numbers.splice(1, 0, 101, 102, 103): [${numbers.splice(1, 0, 101, 102, 103)}]`);
console.log(`numbers: [${numbers}], ${numbers.length} items.`);


///// slice(start, end)
console.log('rebuilding numbers...');
numbers.splice(0, numbers.length, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`numbers: [${numbers}], ${numbers.length} items.`);

console.log(`numbers.splice(): [${numbers.slice()}]`); // shallow copy
console.log(`numbers.slice(3): [${numbers.slice(3)}]`);
console.log(`numbers.slice(-3): [${numbers.slice(-3)}]`);
console.log(`numbers.slice(3, 5): [${numbers.slice(3, 5)}]`);


///// join(separator)
const cities = ['Seoul', 'Busan', 'Daegu', 'Incheon', 'Daejeon', 'Ulsan'];
console.log(`cities: [${cities}], ${cities.length} items.`);
console.log(`cities.join(): ${cities.join()}`);
console.log(`cities.join(', '): ${cities.join(', ')}`);
console.log(`cities.join('-'): ${cities.join('-')}`);


///// reverse()
console.log(`cities.reverse(): [${cities.reverse()}]`);


///// fill(value, start, end): ES6
console.log('rebuilding numbers...');
numbers.splice(0, numbers.length, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`numbers: [${numbers}], ${numbers.length} items.`);

console.log(`numbers.fill(0): [${numbers.fill(0)}]`);
console.log(`numbers: [${numbers}], ${numbers.length} items.`);
console.log(`numbers.fill(88, 3): [${numbers.fill(88, 3)}]`);
console.log(`numbers: [${numbers}], ${numbers.length} items.`);
console.log(`numbers.fill(99, 3, 8): [${numbers.fill(99, 3, 8)}]`);
console.log(`numbers: [${numbers}], ${numbers.length} items.`);


///// includes(value, start): ES7
console.log(`cities: [${cities}], ${cities.length} items.`);
console.log(`cities.includes('Daejeon'): ${cities.includes('Daejeon')}`);
console.log(`cities.includes('Mokpo'): ${cities.includes('Mokpo')}`);
console.log(`cities.includes('Daegu'): ${cities.includes('Daegu')}`);
console.log(`cities.includes('Daegu', 4): ${cities.includes('Daegu', 4)}`);
console.log(`cities.includes('Incheon'): ${cities.includes('Incheon')}`);
console.log(`cities.includes('Incheon', -3): ${cities.includes('Incheon', -3)}`); // search from length - 3 (i.e. index 4)
console.log(`cities.includes('Incheon', -4): ${cities.includes('Incheon', -4)}`); // search from length - 4 (i.e. index 3)


///// flat(depth) : ES10
const nestedArray = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]];
console.log(`nestedArray: `, nestedArray, `${nestedArray.length} items.`);
console.log(`nestedArray.flat(): `, nestedArray.flat());
console.log(`nestedArray.flat(2): `, nestedArray.flat(2));
console.log(`nestedArray.flat(Infinity): `, nestedArray.flat(Infinity));
console.log(`nestedArray: `, nestedArray, `${nestedArray.length} items.`);


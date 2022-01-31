printTitle('이터레이터 (Iterator)');

const array = [1, 2, 3, 4, 5];
let arrayIterator = array[Symbol.iterator]();

console.log('arrayIterator:', arrayIterator);
console.log('for...of with arrayIterator:');
for (const value of arrayIterator) {
    console.log(`value: ${value}`);
}

arrayIterator = array[Symbol.iterator]();
console.log(`arrayIterator.next(): ${JSON.stringify(arrayIterator.next())}`);
console.log(`arrayIterator.next(): ${JSON.stringify(arrayIterator.next())}`);
console.log(`arrayIterator.next(): ${JSON.stringify(arrayIterator.next())}`);
console.log(`arrayIterator.next(): ${JSON.stringify(arrayIterator.next())}`);
console.log(`arrayIterator.next(): ${JSON.stringify(arrayIterator.next())}`);
console.log(`arrayIterator.next(): ${JSON.stringify(arrayIterator.next())}`);

// 프로퍼티 키를 오름차순 정렬하여 순회할 수 있도록 해주는 이터러블 객체
const orderedPropertyKeyIterator = function () {
    const keys = Object.keys(this).sort();
    let index = 0;
    return {
        next: () => ({
            value: keys[index++],
            done: index > keys.length,
        }),
    };
};

const myObj1 = {
    'id': 1234,
    'name': '홍길동',
    'age': 20,
    'gender': 'male',
    [Symbol.iterator]: orderedPropertyKeyIterator,
};
console.log(`myObj1: ${JSON.stringify(myObj1)} `, myObj1);

console.log('for...in:');
for (const key in myObj1) {
    console.log(`\t${key} = ${myObj1[key]}`);
}

console.log(`isIterable(myObj1): ${isIterable(myObj1)}`);
console.log('for...of:');
for (const key of myObj1) {
    console.log(`\t${key} = ${myObj1[key]}`);
}

// 유사 배열 객체
const myArrayLike = {
    0: 'abc',
    1: 'def',
    2: 'ghi',
    10: 'jkl',
    length: 3,
    [Symbol.iterator]: orderedPropertyKeyIterator,
};
console.log(`myArrayLike: ${JSON.stringify(myArrayLike)} `, myArrayLike);

console.log('for...of:');
for (const index of myArrayLike) {
    console.log(`\t[${index}]: ${myArrayLike[index]}`);
}

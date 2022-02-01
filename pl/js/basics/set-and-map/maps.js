console.group('Map Examples:');

// Map 객체 생성
let map = new Map();
console.log('map: ', map);

map = new Map([['id', 1], ['name', 'John']]);
console.log('map: ', map);

map.set('age', 30).set('id', 100); // 중복된 키는 값을 덮어쓴다.
console.log('map: ', map);

const objectKey = {
    'code': 'xyz',
    'publisher': 'abc'
};
map.set(objectKey, 'value with object key');
console.log('map: ', map);

console.log('map.get(objectKey): ', map.get(objectKey));
console.log(`map.has('name'): `, map.has('name'));
console.log(`map.has('code'): `, map.has('code'));

console.log('map: ', map);
console.log(`map.delete(objectKey): `, map.delete(objectKey));
console.log('map: ', map);
map.clear();
console.log('map: ', map);

map = new Map([['id', 99], ['firstName', 'John'], ['lastName', 'Doe']]);
console.log('map: ', map);
map.forEach((value, key, map) => {
    console.log(`\t[${key}, ${value}]`);
    console.log(`\t'${key}' has been deleted: ${map.delete(key)}`);
});
console.log('map: ', map);

map = new Map([
    ['id', 88],
    ['name', 'John'],
    ['age', 30],
    ['gender', 'male'],
    ['title', 'designer'],
]);
console.log('map: ', map);

console.log('for...of (map): ');
for (const entry of map) {
    console.log(`\tEntry: [${entry}]`);
}

console.log('for...of (keys): ');
for (const key of map.keys()) {
    console.log(`\tKey: '${key}'`);
}

console.log('for...of (values): ');
for (const value of map.values()) {
    console.log(`\tValue: '${value}'`);
}

console.log('for...of (entries): ');
for (const entry of map.entries()) {
    console.log(`\tEntry: [${entry}] (type: ${typeof entry}), `, entry);
}

console.groupEnd();
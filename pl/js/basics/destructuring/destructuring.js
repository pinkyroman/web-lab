///////////////////////////////////////////////////////////////////////////////
// 배열 디스트럭처링
const array = [1, 2, 3, 4, 5];
console.log(array);
let [a, b, c, d, e] = array;
console.log(`let [a, b, c, d, e] = array: a = ${a}, b = ${b}, c = ${c}, d = ${d}, e = ${e}`);

let [id, length, ...data] = array;
console.log(`let [id, length, ...data] = array: id = ${id}, length = ${length}, data = ${data}`);

const chars = ['a', 'b', 'c'];
console.log(chars);

[c] = chars;
console.log(`let [c] = chars: c = '${c}'`);

[, c] = chars;
console.log(`[, c] = chars: c = '${c}'`);

[a, b, c, d] = chars;
console.log(`[a, b, c, d] = array: a = '${a}', b = '${b}', c = '${c}', d = ${d}`);

[a, b = 'x', c, d = 'y'] = chars;
console.log(`[a, b = 'x', c, d = 'y'] = chars: a = '${a}', b = '${b}', c = '${c}', d = '${d}'`);

function parseURL(url = '') {
    const parsedURL = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
    console.log(JSON.stringify(parsedURL, null, 2));

    if (!parsedURL) return {};

    const [, protocol, host, path] = parsedURL;
    return { protocol, host, path };
}

console.log(parseURL('https://developer.mozilla.org/ko/docs/JavaScript'));


///////////////////////////////////////////////////////////////////////////////
// 객체 디스트럭처링
const user = {
    id: '4989',
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    [Symbol.iterator]() {
        const keys = Object.keys(this);
        let index = 0;
        return {
            next: () => ({
                value: this[keys[index++]],
                done: index > keys.length,
            })
        };
    },
};
console.log(JSON.stringify(user, null, 2));

const { firstName, lastName } = user;
console.log(`const { firstName, lastName } = user: firstName = ${firstName}, lastName = ${lastName}`);

// 프로퍼티 키와 다른 이름의 변수 사용하기
const { firstName: fn, lastName: ln } = user;
console.log(`const { firstName: fn, lastName: ln } = user: fn = ${fn}, ln = ${ln}`);

// 객체를 인수로 전달받는 함수에 사용
function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}
console.log(`getFullName(user): '${getFullName(user)}'`);


// 배열 요소가 객체인 경우, 배열 디스트럭처링과 객체 디스트럭처링 할당을 혼용
const todos = [
    { id: 1, title: 'first todo', state: 'completed' },
    { id: 2, title: 'second todo', state: 'in progress' },
    { id: 3, title: 'third todo', state: 'in progress' },
];
console.log(todos);
const [, { title }, ] = todos;
console.log(`const [, { title }, ] = todos: title = ${title}`);


console.log('\n===========================================================================\n\n');

///////////////////////////////////////////////////////////////////////////////
// String 생성자 함수
let strOjb = new String();
console.log(`const strOjb = new String() => strOjb: '${strOjb}', type: ${typeof strOjb}`);

strObj = new String('Hello');
console.log(`const strObj = new String('Hello') => strObj: `, strObj);

strObj = new String(null);
console.log(`const strObj = new String(null) => strObj: `, strObj);

strObj = new String(undefined);
console.log(`const strObj = new String(undefined) => strObj: `, strObj);

// new 연산자 없이 String() 함수를 사용하면 문자열 객체를 반환
console.log(`String(1): '${String(1)}', type: ${typeof String(1)}`);
console.log(`String(true): '${String(true)}', type: ${typeof String(true)}`);
console.log(`String({ a: 'abc' }): '${String({ a: 'abc' })}', type: ${typeof String({ a: 'abc' })}`);
console.log(`String(Nan): '${String(NaN)}', type: ${typeof String(NaN)}`);
console.log(`String(undefined): '${String(undefined)}', type: ${typeof String(undefined)}`);
console.log(`String(null): '${String(null)}', type: ${typeof String(null)}`);
console.log(`String(Infinity): '${String(Infinity)}', type: ${typeof String(Infinity)}`);


///////////////////////////////////////////////////////////////////////////////
// String.prototype.indexOf(searchString, position)
// searchString: 검색할 문자열
// position: 검색 시작 위치
const str = 'Hello World';
console.log(`str: '${str}'`);

console.log(`str.indexOf('o'): ${str.indexOf('o')}`);
console.log(`str.indexOf('or'): ${str.indexOf('or')}`);
console.log(`str.indexOf('x'): ${str.indexOf('x')}`);


///////////////////////////////////////////////////////////////////////////////
// String.prototype.includes(searchString, position):ES6
console.log(`str.includes('o'): ${str.includes('o')}`);
console.log(`str.includes('or'): ${str.includes('or')}`);
console.log(`str.includes('x'): ${str.includes('x')}`);


///////////////////////////////////////////////////////////////////////////////
// String.prototype.search(regexp)
console.log(`str.search(/o/): ${str.search(/o/)}`);
console.log(`str.search(/or/): ${str.search(/or/)}`);
console.log(`str.search(/x/): ${str.search(/x/)}`);


///////////////////////////////////////////////////////////////////////////////
// String.prototype.match()
// 정규 표현식을 사용하여 문자열을 패턴에 맞춰 찾아 배열로 반환
regexp = new RegExp(/010/);
pattern = '00011101110010011010110';
console.log(`regexp: ${regexp}, pattern: '${pattern}', result: `, pattern.match(regexp));

regexp = new RegExp(/010/g);
console.log(`regexp: ${regexp}, pattern: '${pattern}', result: `, pattern.match(regexp));

///////////////////////////////////////////////////////////////////////////////
// startsWith():ES6, endsWith():ES6, charAt(), substring(), slice(), 
// toUpperCase(), toLowerCase(), trim(), repeat():ES6
// tripStart():2021/Stage4, trimEnd():2021/Stage4
// replace(), split()

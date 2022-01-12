console.log('\n\n============================================== High-Order Functions\n');

///// sort(callback)
console.log('\n!!!!! sorting string-array !!!!!');
console.log(`fruits: [${fruits}], ${fruits.length} items`);
console.log(`fruits.sort(): [${fruits.sort()}], ${fruits.length} items`);

const countries = ['한국', '미국', '영국', '프랑스', '독일', '인도', '체코', '스페인', '이탈리아', '노르웨이', '네덜란드'];
console.log(`countries: [${countries}], ${countries.length} items`);
console.log(`countries.sort(): [${countries.sort()}], ${countries.length} items`);
console.log(`contries.sort().reverse(): [${countries.sort().reverse()}], ${countries.length} items`);

console.log('\n!!!!! sorting number-array !!!!!');
const scores = [40, 100, 76, 89, 65, 74, 99, 100, 88, 92, 91, 75, 55, 61, 79];
console.log(`scores: [${scores}], ${scores.length} items`);
console.log(`scores.sort(): [${scores.sort()}], ${scores.length} items`);
/*
    비교 함수의 기능: 
    - 매개변수 a, b 는 배열 위치 상, 앞에 위치한 요소와 다음 요소.
    - 반환 값이 음수이면 함수의 첫 번째 인수를 우선하여 정렬.
    - 반환 값이 0이면 정렬하지 않음.
    - 반환 값이 양수이면 함수의 두 번째 인수를 우선하여 정렬.
*/
console.log(`scores.sort((a, b) => a - b): [${scores.sort((a, b) => a - b)}], ${scores.length} items`); // 오름차순 정렬을 위해서는 첫 번째 인수(앞에 위치한 요소)가 더 작은 값이어야 함.
console.log(`scores.sort((a, b) => b - a): [${scores.sort((a, b) => b - a)}], ${scores.length} items`); // 내림차순 정렬을 위해서는 두 번째 인수(다음 요소)가 더 작은 값이어야 함.


///// forEach(callback, thisArg)
console.log('\n!!!!! forEach !!!!!');
console.log(`scores: [${scores}], ${scores.length} items`);

const doubleScores = [];
scores.forEach(score => doubleScores.push(score * 2));
console.log(`scores.forEach(score => doubleScores.push(score * 2)):`);
console.log(`doubleScores: [${doubleScores}], ${doubleScores.length} items`);

scores.forEach((score, index, scores) => scores[index] = score * 2);
console.log(`scores.forEach((score, index, scores) => scores[index] = score * 2):`);
console.log(`scores: [${scores}], ${scores.length} items`);

const multipliers = {
    result: null,
    doubler(array) {
        this.result = [];
        array.forEach(function (item) {
            this.result.push(item * 2);
        }, this); // forEach 함수의 callback 은 일반 함수 호출. 즉, this 는 전역 객체를 가리킴(strict mode 에서는 undefined).
        return this.result;
    },
    tripler(array) {
        this.result = [];
        array.forEach(item => this.result.push(item * 3)); // 화살표 함수를 사용하면, this가 상위 스코프의 this를 참조한다.
        return this.result;
    },
};

console.log(`multipliers.doubler(scores): [${multipliers.doubler(scores)}], ${multipliers.result.length} items`);
console.log(`multipliers.tripler(scores): [${multipliers.tripler(scores)}], ${multipliers.result.length} items`);


///// map(callback, thisArg)
console.log('\n!!!!! map !!!!!');
console.log(`scores: [${scores}], ${scores.length} items`);
console.log(`scores.map(score => score / 2): [${scores.map(score => score / 2)}]`);


///// filter(callback, thisArg)
console.log('\n!!!!! filter !!!!!');
console.log(`scores: [${scores}], ${scores.length} items`);
console.log(`scores.filter(score => score >= 140): [${scores.filter(score => score >= 140)}]`);


///// reduce(callback, initialValue)
console.log('\n!!!!! reduce !!!!!');
let values = [1, 2, 3, 3, 3, 4, 5, 5, 5, 5, 5, 6, 6, 7, 7, 7, 8, 9, 10];
console.log(`values: [${values}], ${values.length} items`);

// Summation
console.log(`values.reduce((accumulator, currentValue) => accumulator + currentValue, 0): ${values.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}`);

// Average
console.log(`values.reduce((accumulator, currentValue, currentIndex, { length }) => (currentIndex + 1) < length ? accumulator + currentValue : (accumulator + currentValue) / length, 0): ${values.reduce((accumulator, currentValue, currentIndex, { length }) => (currentIndex + 1) < length ? accumulator + currentValue : (accumulator + currentValue) / length, 0)}`);

// Maximum
console.log(`values.reduce((acc, cur) => acc > cur ? acc : cur, 0): ${values.reduce((acc, cur) => acc > cur ? acc : cur, 0)}`);

// count redunant values
let r = values.reduce((acc, cur, index, items) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
}, {});
console.log('redundant values:', r);

// remove redundant values
r = values.reduce((acc, cur, index, items) => {
    if (items.indexOf(cur) === index) acc.push(cur);
    return acc;
}, []);
console.log('redundant values removed:', r);

///// 기타
///// some()
///// every()
///// find()
///// findIndex()
///// flatMap()

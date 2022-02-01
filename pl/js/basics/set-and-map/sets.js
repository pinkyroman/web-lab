console.groupCollapsed('Set Examples:');

// Set 객체 생성하기
const s = new Set();
console.log('Set s:', s);

// 중복 요소는 저장되지 않음.
const src = [1, 2, 3, 3, 3, 3, 4, 5, 'a', 'b', 'c', 'a', 'b', 'd', 'e', 'f'];
console.log('src: ', src);

// Array.prototype.filter() 메서드를 사용한 배열 중복 요소 제거
const unique = src.filter((v, i, a) => a.indexOf(v) === i);
console.log('unique: ', unique);

// Set을 사용한 중복 요소 제거
const unique2 = [...new Set(src)];
console.log('unique2: ', unique2);

// 요소 추가
s.add(1).add(2).add(1).add(3);
console.log('s.add(1): ', s);

// 요소 존재 확인
console.log('s.has(1): ', s.has(1));
console.log('s.has(4): ', s.has(4));

// 요소 삭제
console.log('s.delete(1): ', s.delete(1));
console.log('s.delete(4): ', s.delete(4));

// 요소 일괄 삭제
console.log('s: ', s);
s.clear();
console.log('s.clear(): ', s);

const s2 = new Set(src);
console.log('s2: ', s2);

console.log('s2 contains ...');
s2.forEach((value, alsoValue, set) => {
    console.log('\tvalue: ', value);
});

console.log('for...of:')
for (const v of s2) {
    console.log('\tvalue: ', v);
}

console.log('spread syntax: ', [...s2]);

const [d1, d2, d3, d4, d5, ...chars] = s2;
console.log('numbers: ', d1, d2, d3, d4, d5);
console.log('chars: ', chars);

///////////////////////////////////////////////////////////////////////////////
// 집합 연산

const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([2, 4, 6, 8, 10]);
const setC = new Set([1, 3, 5, 7, 9]);

console.log('setA: ', setA);
console.log('setB: ', setB);
console.log('setC: ', setC);

// 교집합 (intersection)
Set.prototype.intersect = function (set) {
    return new Set([...this].filter(v => set.has(v)));
};

console.log('setA.intersect(setB): ', setA.intersect(setB));
console.log('setA.intersect(setC): ', setA.intersect(setC));

// 합집합 (union)
Set.prototype.union = function (set) {
    return new Set([...this, ...set]);
};

console.log('setA.union(setB): ', [...setA.union(setB)]);
console.log('setA.union(setC): ', [...setA.union(setC)]);

// 차집합 (difference)
Set.prototype.difference = function (set) {
    return new Set([...this].filter(v => !set.has(v)));
};

console.log('setA.difference(setB): ', [...setA.difference(setB)]);
console.log('setA.difference(setC): ', [...setA.difference(setC)]);

// 상위 집합 (superset)
Set.prototype.isSuperset = function (set) {
    return [...set].every((v) => this.has(v));
};

const setD = new Set([2, 3, 5]);
console.log('setD: ', setD);
console.log('setA.isSuperset(setB): ', setA.isSuperset(setB));
console.log('setA.isSuperset(setC): ', setA.isSuperset(setC));
console.log('setA.isSuperset(setD): ', setA.isSuperset(setD));

// 하위 집합 (subset)
Set.prototype.isSubset = function (set) {
    return [...this].every((v) => set.has(v));
};

console.log('setA.isSubset(setB): ', setA.isSubset(setB));
console.log('setD.isSubset(setA): ', setD.isSubset(setA));

console.groupEnd();

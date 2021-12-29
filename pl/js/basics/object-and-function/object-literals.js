// 키: 빈 문자열을 포함한 모든 문자열 및 심볼
let obj = { '': 'empty string key' };
console.log(obj);
let v = obj[''];
console.log(v);

// 숫자 리터럴 키 => 문자열로 자동 변환
obj = { 0: 'zero key' };
console.log(obj);

// 동적 프로퍼티
obj.dynamicallyCreatedKey = 'dinamically created key';
console.log(obj);
obj['anotherDynamicallyCreatedKey'] = 'another dynamically created key';
console.log(obj);

// 프로퍼티 삭제
console.log('DELETING PROPERTIES ...');
delete obj.dynamicallyCreatedKey;
delete obj.anotherDynamicallyCreatedKey;
console.log(obj);

// 프로퍼티 축약 표현
let a = 1, b = 2, c = 3;
let obj2 = { a, b, c };
console.log(obj2);

// 계산된 프로퍼티 이름
let prefix = 'prop';
let i = 0;
let obj3 = {
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
};
console.log(obj3);


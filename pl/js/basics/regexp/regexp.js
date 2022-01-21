///////////////////////////////////////////////////////////////////////////////
// 정규 표현식 리터럴 사용
const phoneNumberRegExp = /^\d{3}-\d{4}-\d{4}$/;
const testPattern1 = '010-1234-5678';
const testPattern2 = '010-12e4-5678';

console.log(`regexp: ${phoneNumberRegExp}, phoneNumber1: ${testPattern1}, result: ${phoneNumberRegExp.test(testPattern1)}`);
console.log(`regexp: ${phoneNumberRegExp}, phoneNumber2: ${testPattern2}, result: ${phoneNumberRegExp.test(testPattern2)}`);


///////////////////////////////////////////////////////////////////////////////
// RegExp 생성자 함수 사용

// RegExp(pattern[, flags])
// pattern: 정규 표현식 리터럴
// flags: 정규 표현식 플래그(g, i, m, u, y)
// - g: 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색
// - i: 대소문자 구분 없음
// - m: 멀티 라인 패턴 검색 허용
// - u: 유니코드 정규 표현식
// - y: 정규 표현식 연속 사용 가능
let regexp = new RegExp('is', 'i');
// let regexp = new RegExp(/is/i); // 위와 동일한 의미의 코드
let pattern = 'Is this all there is?';
console.log(`regexp: ${regexp}, pattern: '${pattern}', result: ${regexp.test(pattern)}`);


///////////////////////////////////////////////////////////////////////////////
// RegExp.prototype.exec()
// 정규 표현식을 사용하여 문자열을 패턴에 맞춰 찾아 배열로 반환
// /g 플래그를 지정해도, 첫 번째 매칭 결과만 반환함에 주의
regexp = new RegExp(/010/g);
pattern = '00011101110010011010110';
console.log(`regexp: ${regexp}, pattern: '${pattern}', result: `, regexp.exec(pattern));


///////////////////////////////////////////////////////////////////////////////
// RegExp.prototype.test()
// 정규 표현식을 사용하여 문자열을 패턴에 맞춰 찾아 참(true) 또는 거짓(false)을 반환
console.log(`regexp: ${regexp}, pattern: '${pattern}', result: ${regexp.test(pattern)}`);


var person = {
    firstName: 'Ozzy',          // 식별자 네이밍 규칙을 따르는 키
    'last-name': 'Osbourne',    // 식별자 네이밍 규칙을 따르지 않는 키
    '': 'empty',                // 빈 문자열 키. 의미가 없으므로 권장하지 않음.
    0: true,                    // 숫자 리터럴 키 (문자열로 변환 됨)
    function: 'keyword',        // 예약어도 키 이름으로 사용 가능. 권장하지 않음.
    age: 73,
    age: 83,                    // 동일 키 중복 선언 허용. 단, 나중에 선언된 값으로 오버라이트.
    test1() {                   // test1 (함수 객체)의 name 속성 값은 'test1'이 된다.
        return "TEST2";
    },
    test2: function abc() {     // test2 (함수 객체)의 name 속성 값은 'abc'가 된다. ** 그 외 또 다른 차이점은?
        return "TEST1";
    }
};

console.log(person);

console.log(person.firstName);          // 식별자 네이밍 규칙을 따르는 경우, 마침표/대괄호 프로퍼티 접근 연산자 모두 사용가능.
console.log(person['last-name']);       // 식별자 네이밍 규칙을 따르지 않는 경우, 대괄호 프로퍼티 접근 연산자만 사용 가능.

console.log(person[0]);                 // 대괄호 프로퍼티 접근 연산자만 사용 가능. true
console.log(person['0']);               // [0]과 ['0']은 동일하게 취급 됨.

console.log(person.test1.name);
console.log(person.test2.name);

// 프로퍼티 삭제
delete person[''];
console.log('빈 문자열 키를 삭제 함.');
console.log(person);

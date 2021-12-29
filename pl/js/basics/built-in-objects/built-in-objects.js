const str = "this is a string created by literal form.";
const strObj = new String("this is a string created by String() constructor function.");
console.log('str:\n', str);
console.log('strObj:\n', strObj);
console.log('typeof str:', typeof str);
console.log('typeof strObj:', typeof strObj);
console.log('prototype of str:', Object.getPrototypeOf(str));
console.log('prototype of strObj:', Object.getPrototypeOf(strObj));

/*
    원시 문자열 타입을 객체처럼 사용하는 경우, 임시 String 객체를 생성한다
    (이를 래퍼 객체라고 함).
    아래의 코드는 이 래퍼 객체에 name 프로퍼티를 추가하는 것이다.
    연산이 끝나면, str은 다시 원래의 원시 문자열 타입으로 복원된다.
    따라서, str.name 은 undefined 가 된다.
*/
str.name = 'my name';
console.log('str.name:', str.name); // undefined

strObj.name = 'my name';
console.log('strObj.name:', strObj.name); // my name


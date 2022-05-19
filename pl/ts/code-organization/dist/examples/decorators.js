/*
    데코레이터는 로깅, 권한 부여 또는 유효성 검사와 같은 cross-cutting 문제를 처리하는 데 사용할 수 있다.
    이 Aspect-oriented 스타일의 프로그래밍을 올바르게 사용하면, 이러한 shared responsibilities 를
    충족하는 데 필요한 코드를 최소화 할 수 있다.

    데코레이터는 다음 모두에 적용될 수 있다:
    - 클래스
    - 접근자
    - 프로퍼티
    - 메서드
    - 파라미터

    각 종류 별 데코레이터는 서로 다른 함수 시그니쳐를 필요로 한다.
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log(target, key, descriptor) {
    console.log(`target: ${JSON.stringify(target)}`);
    const original = descriptor.value;
    descriptor.value = function (...args) {
        // Call the original method
        const result = original.apply(this, args);
        // Log the call, and the result
        console.log(`${key} with args ${JSON.stringify(args, null, 2)} returned ${JSON.stringify(result, null, 2)}`);
        // Return the result
        return result;
    };
    return descriptor;
}
export default class Calculator {
    // Using the decorator 
    square(num) {
        return num ** 2;
    }
}
__decorate([
    log
], Calculator.prototype, "square", null);

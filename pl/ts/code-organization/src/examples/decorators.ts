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

function log(target: any, key: string, descriptor: any) {
    console.log(`target: ${JSON.stringify(target)}`);
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
        // Call the original method
        const result = original.apply(this, args);

        // Log the call, and the result
        console.log(`${key} with args ${JSON.stringify(args, null, 2)} returned ${JSON.stringify(result, null, 2)}`);

        // Return the result
        return result;
    }

    return descriptor;
}

export default class Calculator {
    // Using the decorator 
    @log
    square(num: number): number {
        return num ** 2;
    }
}

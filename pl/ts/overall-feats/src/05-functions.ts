// Optional Parameters
function getAverage(a: number, b: number, c?: number): string {
    // ...

    // Optional parameter 체크 방법
    if (typeof c !== 'undefined') {
        // ....
    }

    // ...
    return '';
}


// default parameters
function concatenate(items: string[], separator: string = ',', beginAt: number = 0, endAt: number = items.length): string {
    let result = '';

    // ...

    return result;
}


// rest parameters
function getSum(...a: number[]): string {
    // ...
    return '';
}

function getTotal(mandatory: number, ...optional: number[]): string {
    // ...
    return '';
}


/////////////////////////////////////////////////////////////////////////////////
// OVERLOADS
function getAve(a: string, b: string, c: string): string;
function getAve(a: number, b: number, c: number): string;
// IMPLEMENTATION SIGNATURE
function getAve(a: any, b: any, c: any): string {
    const total = parseInt(a, 10) + parseInt(b, 10) + parseInt(c, 10);
    const average = total / 3;
    return `The average is ${average}`;
}

let r = getAve(4, 3, 8);
console.log(r);
r = getAve('4', '3', '8');
console.log(r);

// Specialized overload signatures example
/*
    1. 최소한 하나의 일반 서명(nonspecialized signature)이 있어야 한다.
    2. 각 특수 서명(specialized signature)은 일반 서명의 하위 타입을 반환해야 한다.
    3. 구현 서명(implementation signature)은 모든 서명과 호환 되어야한다.

class HandlerFactory {
    getHandler(type: 'Random'): RandomHandler;
    getHandler(type: 'Reversed'): ReversedHandler;
    getHandler(type: string): Handelr; // non-specialized signature
    getHandler(type: string): Handler { // implementation signature
        switch (type) {
            case 'Random':
                return enw RandomHandler();
            case 'Reversed':
                return new ReversedHandler();
            default:
                return new DefaultHandler();                
        }
    }
}

특별 서명의 가장 일반적인 사용법은 일반 서명이 수퍼 클래스를 반환하고, 
각 오버로드는 수퍼 클래스로부터 상속 받은(혹은 수퍼 클래스와 구조적으로 호환되는) 
더욱 특화된 서브 클래스를 반환하는 것이다.

// This example does not list all variations...
getElementsByTagName(name: "a"): NodeListOf<HTMLAnchorElement>;
getElementsByTagName(name: "blockquote"): NodeListOf<HTMLQuoteElement>;
getElementsByTagName(name: "body"): NodeListOf<HTMLBodyElement>;
getElementsByTagName(name: "button"): NodeListOf<HTMLButtonElement>;
getElementsByTagName(name: "form"): NodeListOf<HTMLFormElement>;
getElementsByTagName(name: "h1"): NodeListOf<HTMLHeadingElement>;
getElementsByTagName(name: string): NodeList; // Non-specialized signature
getElementsByTagName(name: string): NodeList { // implementation signature
    return document.getElementsByTagName(name);
}

*/


/////////////////////////////////////////////////////////////////////////////////
// FUNCTION CURRYING with Arrow Functions
/*
    Currying 은 여러 매개변수가 있는 함수가 각각 단일 매개변수를 사용하는 여러 함수로 분해되는 프로세스.
    결과적인 기능 체인은 단계적으로 호출될 수 있으며, 부분적으로 적용된 단계는 결합된 기능 및 값의 재사용
    가능한 구현이 된다.
*/
// Currying
const multiply = (a: number) => (b: number) => a * b;
// Pass both arguments in sequence: 30
const numA = multiply(5)(6);
// Pass just the first argument and re-use
const orderOfMagnitude = multiply(10);
// 10
const deca = orderOfMagnitude(1);
// 100
const hecta = orderOfMagnitude(deca);
// 1,000
const kilo = orderOfMagnitude(hecta);


// Currying with Overloads
function oMultiply(a: number): (b: number) => number;
function oMultiply(a: number, b: number): number;
function oMultiply(a: number, b?: number) {
    if (typeof b === 'undefined') {
        return (b: number) => a * b;
    }
    return a * b;
}

const oNumA = oMultiply(5, 6);
console.log(oNumA);

const orderOfMag = oMultiply(10);
const oDeca = orderOfMag(1);
console.log(oDeca);
const oHecta = orderOfMag(deca);
console.log(oHecta);
const oKilo = orderOfMag(hecta);
console.log(oKilo);


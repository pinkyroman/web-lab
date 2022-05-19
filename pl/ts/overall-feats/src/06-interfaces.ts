/*
    TypeScript 에서의 인터페이스 용도:
    1. 클래스에 의해 구현되는 추상 타입
    2. 구조체 정의
    3. TypeScript로 작성되지 않은 써드 파티 라이브러리 및 프레임워크가 사용할 수 있는 계약(contracts)을 정의하기 위한 빌딩 블럭

    인터페이스 정의 자체는 어떠한 JavaScript 코드도 생성하지 않는다. 인터페이스는 개발 시 자동완성을 제공하기 위해, 
    컴파일 타임에 타입 체킹을 위해 사용된다.

    인터페이스는 enum과 마찬가지로 여러 블럭에서 중복 정의 가능(모든 정의가 합쳐진다). 
    하지만, 이러한 방식의 사용은 일반적으로 특별히 유용하지 않다.

    단, 내장 기능 또는 외부 코드를 확장하는 측면에서, 이 기능은 매우 값지다.

    TypeScript 의 interface는 클래스로부터 상속 받을 수도 있다. 이때, 클래스의 구현은 제거되고 모든 멤버만 추가된다.

*/

interface Point {
    // Properties
    x: number;
    y: number;
}

interface Passenger {
    // Properties
    name: string;
}

interface Vehicle {
    // Constructor
    new(): Vehicle;

    // Properties
    currentLocation: Point;

    // Methods
    travelTo(point: Point): void;
    addPassenger(passenger: Passenger): void;
    removePassenger(passenger: Passenger): void;
}

/* Extending the NodeList interface

interface NodeList {
    onclick: (event: MouseEvent) => any;
}

const nodeList = document.getElementsByTagName('div');
nodeList.onclick = function (event: MouseEvent) {
    alert('Clicked');
};

*/

// HYBRID TYPES: function/object hybrid type example
/*
interface SimpleDocument {
    (selector: string): HTMLElement;
    notify(message: string): void;
}

const prepareDocument = function (): SimpleDocument {
    let doc = <SimpleDocument>function (selector: string) {
        return document.getEmementById(selector);
    };
    doc.notify = function (message: string) {
        alert(message);
    }
    return doc;
}

const $ = prepareDocument();

// Call $ as a function
const elem = $('myId');

// Use $ as an object
$.notify(elem.id);
*/
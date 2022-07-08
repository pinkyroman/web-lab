"use strict";
/* 메서드 데코레이터:
    메서드 선언 직전에 선언. 메서드의 프로퍼티 설명자(Property Descriptor)에 적용된다.
    메서드 정의를 관찰, 수정 또는 대체하는데 사용된다.
    메서드 데코레이터는 선언 파일, 오버로드 또는 기타 주변 컨텍스트에서 사용할 수 없다.

    메서드 데코레이터의 표현식은 런타임에 다음 세 개의 인수와 함께 함수로 호출된다.
    1. 정적 멤버에 대한 클래스의 생성자 함수 또는 인스턴스 멤버에 대한 클래스의 프로토타입
    2. 멤버의 이름
    3. 멤버의 프로퍼티 설명자

    메서드 데코레이터가 값을 반환하면, 메서드의 프로퍼티 설명자로 사용된다.

    주의:
    - 컴파일 대상이 'ES5' 보다 낮은 버전으로 설정 된 경우, Property Descriptor는 undefined 값을 갖는다.
    - 컴파일 대상이 'ES5' 보다 낮은 버전으로 설정 된 경우, 반환 값은 무시 된다.
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.example_2_2 = exports.example_2_1 = void 0;
function enumarable(state) {
    return function (target, propertyKey, descriptor) {
        console.log('[Target]: ', target);
        console.log(`[PropertyKey]: ${propertyKey}`);
        console.log('[Descriptor]: ', descriptor);
        descriptor.enumerable = state;
    };
}
class Greeter {
    static StaticMember() {
        return 'Static Member';
    }
    greeting;
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return 'Hello, ' + this.greeting;
    }
}
__decorate([
    enumarable(false),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Greeter.prototype, "greet", null);
__decorate([
    enumarable(false),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Greeter, "StaticMember", null);
function example_2_1() {
    const greeter = new Greeter('world');
    console.log(greeter.greet());
    console.log(greeter);
}
exports.example_2_1 = example_2_1;
function translate(target, propertyKey, descriptor) {
    const orig = descriptor.value();
    descriptor.value = function () {
        console.log(`${orig} ... 라는 말을 번역하면, {...} 입니다.`);
    };
}
class Cat {
    name;
    constructor(name) {
        this.name = name;
    }
    say() {
        return `Meow, I'm ${this.name}`;
    }
}
__decorate([
    translate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Cat.prototype, "say", null);
function example_2_2() {
    const cat = new Cat('나비');
    cat.say();
}
exports.example_2_2 = example_2_2;
//# sourceMappingURL=2.method.decorator.js.map
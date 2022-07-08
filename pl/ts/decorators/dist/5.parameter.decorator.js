"use strict";
/* 매개변수 데코레이터(Parameter Decorator):
    매개변수 선언 직전에 선언. 매개변수 데코레이터는 클래스 생성자 또는 메서드 선언의 함수에 적용된다.
    매개변수가 메서드에서 선언되었을 때에만 관찰하는데 사용할 수 있다.
    매개변수 데코레이터의 표현식은 런타임시 다음 세 개의 인수와 함께 호출된다:
    1. 정적 멤버에 대한 클래스의 생성자 함수 또는 인스턴스 멤버에 대한 클래스의 프로토타입
    2. 멤버의 이름
    3. 함수의 매개변수 목록에 있는 매개변수의 서수 색인(ordinal index)
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.example_5_1 = void 0;
// paraemer decorator
function paramdeco(target, propertyKey, paramIndex) {
    console.log(`${target.name}.${propertyKey}(${paramIndex})`);
}
let Task = class Task {
    _name;
    constructor(name) {
        this._name = name;
    }
    doSomething(target, action) {
        // console.log(`${this._name} ${target} ${action}`);
    }
};
__decorate([
    __param(0, paramdeco),
    __param(1, paramdeco),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], Task.prototype, "doSomething", null);
Task = __decorate([
    __param(0, paramdeco),
    __metadata("design:paramtypes", [String])
], Task);
function example_5_1() {
    const t = new Task('my-task');
    t.doSomething('pool', 'dive');
}
exports.example_5_1 = example_5_1;
//# sourceMappingURL=5.parameter.decorator.js.map
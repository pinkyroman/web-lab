"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* 데코레이터:
    데코레이터는 클래스 선언, 메서드, 접근자, 프로퍼티 또는 메서드의 매개 변수에 첨부할 수 있는 특수한 종류의 "선언".
    데코레이터는 @expression 형식을 사용. expression은 테코레이팅  된ㅓㄴ언에 대한 정보와 함께 런타임에 호출되는 함수.
*/
function mydeco(target) {
    console.log('mydeco called');
    console.log(`The target class name is ${target.name}.`);
}
let Cat = class Cat {
    nameOfCat;
    constructor(nameOfCat = 'Navi') {
        this.nameOfCat = nameOfCat;
    }
    get name() {
        return this.nameOfCat;
    }
};
Cat = __decorate([
    mydeco,
    __metadata("design:paramtypes", [String])
], Cat);
function color(c) {
    return function (target) {
        console.log('decorator factory:color called');
        console.log(`The color of ${target.name} is ${c}!`);
    };
}
let Glass = class Glass {
    color = 'white';
};
Glass = __decorate([
    color('blue')
], Glass);
/* 데코레이터 합성:
      여러 데코레이터를 적용할 수 있다. 이때, 단일 행으로 적용할 데코레이터들을 나열하거나, 한 행에 하나씩 명시 할 수 있다.
      적용 순서는 위(좌)에서 아래(우)로 평가한 후, 아래에서 위로 함수가 호출된다.
  */
function f() {
    console.log('f(): 평가 됨');
    return function (target, propertyKey, descriptor) {
        console.log('f(): 호출됨');
    };
}
function g() {
    console.log('g(): 평가 됨');
    return function (target, propertyKey, descriptor) {
        console.log('g(): 호출됨');
    };
}
class Ragdoll extends Cat {
    constructor(name) {
        super(name);
    }
    get name() {
        return this.nameOfCat;
    }
    printName() {
        console.log(this.name);
    }
}
__decorate([
    f(),
    g(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Ragdoll.prototype, "name", null);
__decorate([
    g(),
    f(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Ragdoll.prototype, "printName", null);
//# sourceMappingURL=0.basic.js.map
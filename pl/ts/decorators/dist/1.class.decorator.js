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
Object.defineProperty(exports, "__esModule", { value: true });
exports.example_1_1 = void 0;
function additionalProperties(props) {
    return function (constructor) {
        return class extends constructor {
            additionalProperties = props;
        };
    };
}
let Person = class Person {
    _name;
    constructor(_name) {
        this._name = _name;
    }
    get name() {
        return this._name;
    }
};
Person = __decorate([
    additionalProperties({
        age: 30,
        gender: 'male',
    }),
    __metadata("design:paramtypes", [String])
], Person);
function example_1_1() {
    const p = new Person('John Doe');
    console.log(p);
}
exports.example_1_1 = example_1_1;
//# sourceMappingURL=1.class.decorator.js.map
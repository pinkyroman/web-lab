console.log('\n\n');

// 생성자 함수 호출 //////////////////////////////////////////////////////////////////
function Circle(radius) {
    // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

const c1 = new Circle(5);
const c2 = new Circle(10);

console.log(c1.getDiameter()); // 10
console.log(c2.getDiameter()); // 20

// new 키워드 없이 생성자 함수를 호출하면 일반 함수로 동작.
// 즉, Circle() 함수 내 this는 전역 객체가 된다.
const c3 = Circle(15);
console.log('c3: ', c3); // 일반 함수로서의 Circle()은 반환 값이 없으므로 c3은 undefined.
console.log('window.radius: ', window.radius); // 하지만, this.radius = radius 할당문 실행으로, 전역 객체에 radius 프로퍼티가 추가 되었다.
console.log('window.getDiameter(): ', window.getDiameter()); // 또한, getDiameter() 함수 역시 추가 됨.

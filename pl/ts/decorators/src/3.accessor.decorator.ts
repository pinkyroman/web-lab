/* 접근자 데코레이터:
    접근자 선언 바로 전에 선언. 접근자 데코레이터는 접근자의 프로퍼티 설명자에 적용되며
    접근자의 정의를 관찰, 수정, 교체하는 데 사용할 수 있다.

    접근자 데코레이터의 표현식은 다음 세 가지 인수와 함께 호출된다:
    1. 정적 멤버에 대한 클래스의 생성자 함수 또는 인스턴스 멤버에 대한 클래스 프로토타입
    2. 멤버의 이름
    3. 멤버의 프로퍼티 설명자

    접근자 데코레이터가 값을 반환하면 멤버의 프로퍼티 설명자로 사용된다.

    주의:
    - 단일 멤버에 대해 getter/setter 모두 제공되는 경우, 이들 각각에 대하여 데코레이팅 하지 않는다.
      get/set 접근자를 결합한 프로퍼티 설명자가 접근자 데코레이터 표현식에 전달되기 때문.
      소스 코드 상, 먼저 등장하는 접근자에 데코레이터를 적용하면 된다.
    - 컴파일 대상이 'ES5' 보다 낮은 버전으로 설정 된 경우, Property Descriptor는 undefined 값을 갖는다.
    - 컴파일 대상이 'ES5' 보다 낮은 버전으로 설정 된 경우, 반환 값은 무시 된다.
*/

function configurable(state: boolean) {
  return function (target: any, name: string, descriptor: PropertyDescriptor) {
    console.log(descriptor);
    descriptor.configurable = state;
    return descriptor;
  };
}

class Point {
  private _x: number;
  private _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  @configurable(false)
  get x() {
    return this._x;
  }
  set x(value) {
    this._x = value;
  }

  get y() {
    return this._y;
  }
  set y(value) {
    this._y = value;
  }
}

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

function enumarable(state: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('[Target]: ', target);
    console.log(`[PropertyKey]: ${propertyKey}`);
    console.log('[Descriptor]: ', descriptor);
    descriptor.enumerable = state;
  };
}

class Greeter {
  @enumarable(false)
  static StaticMember() {
    return 'Static Member';
  }

  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  @enumarable(false)
  greet() {
    return 'Hello, ' + this.greeting;
  }
}

export function example_2_1() {
  const greeter = new Greeter('world');
  console.log(greeter.greet());
  console.log(greeter);
}

function translate(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const orig = descriptor.value();
  descriptor.value = function () {
    console.log(`${orig} ... 라는 말을 번역하면, {...} 입니다.`);
  };
}

class Cat {
  constructor(public name: string) {}

  @translate
  say() {
    return `Meow, I'm ${this.name}`;
  }
}

export function example_2_2() {
  const cat = new Cat('나비');
  cat.say();
}

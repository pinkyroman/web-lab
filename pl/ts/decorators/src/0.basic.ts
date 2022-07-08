/* 데코레이터:
    데코레이터는 클래스 선언, 메서드, 접근자, 프로퍼티 또는 메서드의 매개 변수에 첨부할 수 있는 특수한 종류의 "선언".
    데코레이터는 @expression 형식을 사용. expression은 테코레이팅  된ㅓㄴ언에 대한 정보와 함께 런타임에 호출되는 함수.
*/
function mydeco(target: any) {
  console.log('mydeco called');
  console.log(`The target class name is ${target.name}.`);
}

@mydeco
class Cat {
  constructor(protected nameOfCat: string = 'Navi') {}

  get name() {
    return this.nameOfCat;
  }
}

/* 데코레이터 팩토리:
      데코레이터 팩토리는 데코레이터를 생성하는 함수를 정의하는 것이다.
      데코레이터에 임의의 파라미터를 전달하여 데코레이터의 동작을 변경하고 싶을 때 사용.
  */
type Colors =
  | 'white'
  | 'black'
  | 'red'
  | 'green'
  | 'blue'
  | 'purple'
  | 'cyan'
  | 'yellow'
  | 'gray';
function color(c: Colors) {
  return function (target: any) {
    console.log('decorator factory:color called');
    console.log(`The color of ${target.name} is ${c}!`);
  };
}

@color('blue')
class Glass {
  public color: Colors = 'white';
}

/* 데코레이터 합성:
      여러 데코레이터를 적용할 수 있다. 이때, 단일 행으로 적용할 데코레이터들을 나열하거나, 한 행에 하나씩 명시 할 수 있다.
      적용 순서는 위(좌)에서 아래(우)로 평가한 후, 아래에서 위로 함수가 호출된다.
  */
function f() {
  console.log('f(): 평가 됨');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('f(): 호출됨');
  };
}

function g() {
  console.log('g(): 평가 됨');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('g(): 호출됨');
  };
}

class Ragdoll extends Cat {
  constructor(name: string) {
    super(name);
  }

  @f()
  @g()
  get name() {
    return this.nameOfCat;
  }

  @g()
  @f()
  printName() {
    console.log(this.name);
  }
}

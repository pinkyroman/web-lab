/* 클래스 데코레이터:
    클래스를 선언 직전에 사용하는 데코레이터. 클래스의 "생성자"에 적용되어 클래스 정의를 읽거나 수정 또는 교체 할 수 있다.
    데코레이팅된 클래스의 생성자를 유일한 인수로 하여 런타임에 호출된다.
    클래스 데코레이터가 값을 반환하면, 선언을 제공하는 생성자 함수로 클래스가 바뀐다.

    선언 파일(.d.ts) 및 선언 클래스(declare class) 내에서는 사용 불가.    
*/
type Properties = {
  [key: string]: any;
};

function additionalProperties(props: Properties) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      additionalProperties = props;
    };
  };
}

@additionalProperties({
  age: 30,
  gender: 'male',
})
class Person {
  constructor(private _name: string) {}

  get name() {
    return this._name;
  }
}

export function example_1_1() {
  const p = new Person('John Doe');
  console.log(p);
}

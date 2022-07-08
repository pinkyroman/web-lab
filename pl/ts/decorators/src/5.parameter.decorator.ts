/* 매개변수 데코레이터(Parameter Decorator):
    매개변수 선언 직전에 선언. 매개변수 데코레이터는 클래스 생성자 또는 메서드 선언의 함수에 적용된다.
    매개변수가 메서드에서 선언되었을 때에만 관찰하는데 사용할 수 있다.
    매개변수 데코레이터의 표현식은 런타임시 다음 세 개의 인수와 함께 호출된다:
    1. 정적 멤버에 대한 클래스의 생성자 함수 또는 인스턴스 멤버에 대한 클래스의 프로토타입
    2. 멤버의 이름
    3. 함수의 매개변수 목록에 있는 매개변수의 서수 색인(ordinal index)
*/

// paraemer decorator
function paramdeco(target: any, propertyKey: string, paramIndex: number) {
  console.log(`${target.name}.${propertyKey}(${paramIndex})`);
}

class Task {
  private _name: string;

  constructor(@paramdeco name: string) {
    this._name = name;
  }

  doSomething(@paramdeco target: string, @paramdeco action: string) {
    // console.log(`${this._name} ${target} ${action}`);
  }
}

export function example_5_1() {
  const t = new Task('my-task');
  t.doSomething('pool', 'dive');
}

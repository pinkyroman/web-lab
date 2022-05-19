/*
    객체의 형태(shape)를 선언하는 두 가지 주요 도구(main tools), type alias 와 interface 가 있다.
    이 둘은 매우 비슷하고, 대부분의 일반적인 경우 동일하게 동작한다.
*/

type BirdType = {
    wings: number;
};

interface BirdInterface {
    wings: number;
};

const bird1: BirdType = { wings: 2 };
const bird2: BirdInterface = { wings: 3};

// TypeScript 는 구조적 타입 시스템(Structural Type System)이기 때문에, 위 두 개의 타입을 섞어서 사용할 수 있다.
const bird3: BirdInterface = bird1;

interface Chicken extends BirdInterface {
    colorful: boolean;
};

const chicken: Chicken = { wings: 2, colorful: false };

/* 
    type alias 보단 interface 사용을 권장. 특히, 더 나은 오류 메시지를 제공하기 때문.
    type alias 와 interface의 큰 차이점 중 하나는 interface는 개방적이고, type aliase는 폐쇄적이라는 점.
    이는 인터페이스를 한 번 더 선언하여 기존 인터페이스를 확장할 수 있음을 의미한다.
*/
interface Kitten {
    purrs: boolean;
}

interface Kitten {
    color: string;
}

const kitten1: Kitten = { purrs: true, color: 'white' };

/*
    Inteface 는 extends 또는 implements 절에서 사용될 수 있다. 즉, 다른 Interfaces 와 Classes를 정의할 때 명시적으로 사용할 수 있다.
    또한, Interface는 타입 인자를 사용하여 제네릭 인터페이스를 만들 수 있다.
    Type alias는 이 모든 것이 불가능 하다.
*/



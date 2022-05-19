// Tuple Types
// 배열을 사용. 위치를 기반으로 엘리먼트의 타입을 명시.
let poem: [number, boolean, string];
poem = [1, true, 'hello'];
poem = ['hello', false, 1]; // 경고
poem = [1, true, 'hello', 'world']; // 경고

// Dictionary Types
// index 타입을 사용하여 딕셔너리를 나타낼 수 있다.
interface Cephalopod {
    hasInk: boolean;
    arms: number;
    tentacles: number;
}

interface CephalopodDictionary {
    [index: string]: Cephalopod;
}

let dic: CephalopodDictionary = {};
dic['octopus vulgaris'] = { hasInk: true, arms: 8, tentacles: 0 };
dic['loligo vulgaris'] = { hasInk: true, arms: 8, tentacles: 2 };

delete dic['octopus vulgaris'];



// Mapped Types
interface Options {
    material: string;
    backlight: boolean;
}

type ReadOnly<T> = { readonly [k in keyof T]: T[k] };
type Optional<T> = { [k in keyof T]?: T[k] };
type Nullable<T> = { [k in keyof T]: T[k] | null };

type ReadOnlyOPtions = ReadOnly<Options>;
type OptionalOptions = Optional<Options>;
type NullableOptions = Nullable<Options>;

const options1: ReadOnlyOPtions = {
    material: 'plastic',
    backlight: true,
}

options1.backlight = false; // 경고


// Type Assertions
interface House {
    bedrooms: number;
    bathrooms: number;
}

interface Mansion {
    bedrooms: number;
    bathrooms: number;
    butlers: number;
}

function getProperty() : House | Mansion {
    return {
        bedrooms: 2,
        bathrooms: 1,
        butlers: 1,
    }
}

const property = getProperty();
const bedrooms = property.bedrooms;
const butlers = property.butlers; // 경고: butlers는 'House | Mansion' 타입에 존재하지 않음. Masion 타입에만 존재.
const workingButlers = (<Mansion>property).butlers; // Type Assertion으로 경고 제거.

// Forced Type Assertions
const name: string = 'Avenue Road';
const bedroomCount: number = <number>name; // Error: Type 'string' cannot be converted to type 'number'.
const workingBedroomCount: number = <number><any>name; // 일단 <any>로 type assertion 후에, 이를 다시 <number>로 type assertion 수행.


// Type Guards
// 확장 타입 정의(wide type definition) 시, 타입 검사를 하는 것이 좋다.
// 타입 가드는 타입의 범위를 좁히는(narrowing) 것.
function typeGuardExample(stringNumber: string | number) {
    // Error: Property does not exist
    const a = stringNumber.length;
    const b = stringNumber.toFixed();

    // Type Guard
    if (typeof stringNumber === 'string') {
        return stringNumber.length;
    } else {
        return stringNumber.toFixed();
    }
}

// Custom Type Guard
interface SpeedControllable {
    increaseSpeed(): void;
    decreaseSpeed(): void;
    stop(): void;
}

interface InclineControllable {
    lift(): void;
    drop(): void;
}

function isSpeedControllable(treadmill: SpeedControllable | any) 
    : treadmill is SpeedControllable {
    if (treadmill.increaseSpeed && treadmill.decreaseSpeed && treadmill.stop) {
        return true;
    }
    return false;
}

function customTypeGuardExample(treadmill: SpeedControllable | InclineControllable) {
    // Error: property does not exist
    const a = treadmill.increaseSpeed();
    const b = treadmill.lift();

    // Type Guard
    if (isSpeedControllable(treadmill)) {
        treadmill.increaseSpeed();
    } else {
        treadmill.lift();
    }
}


/* 
    식별된 공용체(discriminated union) 또는 태그된 공용체(tagged union)를 사용하면
    공용체 타입, type aliases 및 타입 가드를 결합하여 완전한 자동 완성
    (full autocompletion)을 제공받을 수 있고, 공통 문자열 리터럴 속성이 있는 타입을 
    검사할 수 있다. 식별된 공용체를 구성하는 요소는 다음과 같다:
    1. 판별식(discriminant)라 불리는 공통 문자열 리터럴 속성을 공유하는 여러 타입
    2. 이러한 타입들의 union에 대한 type alias (union 이라 부름)
    3. 판별식을 확인하는 타입 가드
*/

interface Cube {
    kind: 'cube'; // 판별식(discriminant)
    size: number;
}

interface Cuboid {
    kind: 'cuboid'; // 판별식(discriminant)
    width: number;
    depth: number;
    height: number;
}

// Union
type Prism = Cube | Cuboid;

function volume(prism: Prism): number {
    // Type Guard
    switch (prism.kind) {
        case 'cube':
            return prism.size ** 3;
        case 'cuboid':
            return prism.width * prism.depth * prism.height;
        default:
            assertNever(prism);
    }
}

function assertNever(arg: never): never {
    throw new Error('Pssible new tagged type: ' + arg);
}

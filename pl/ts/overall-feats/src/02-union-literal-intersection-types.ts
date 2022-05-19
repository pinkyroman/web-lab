// Type annotation for a union type (Union Type은 하나 이상의 타입을 지정한 것)
let union: string | number;
union = 5;
union = 'hello';

type StringOrError = string | Error;
let result: StringOrError;
result = "hello";
console.log(`result: ${result}`);
result = new Error('Some error found');
console.log(`result: `, result);


// Literal Types
// 타입의 부분 집합으로 허용 가능한 값들의 범위를 설정.
type Kingdom = 'Bacteria' | 'Protozoa' | 'Chromista' | 'Plantae' | 'Fungi' | 'Animalia';
let kingdom: Kingdom;
kingdom = 'Bacteria';
kingdom = 'Protista'; // 경고


// 하이브리드 uniton/literal type
type Randoms = 'Text' | 10 | false;


// Intersection Types
// 여러 타입을 하나의 수퍼타입으로 결합.
interface Skier {
    slide(): void;
}

interface Shooter {
    shoot(): void;
}

type Biathelete = Skier & Shooter;
let biathelete: Biathelete = {
    slide: () => console.log('sliding ...'),
    shoot: () => console.log('shooting ...'),
};
biathelete.shoot();
biathelete.slide();


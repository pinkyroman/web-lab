enum VehicleType {
    PedalCycle,
    MotorCycle,
    Car,
    Van,
    Bus,
    Lorry,    
}

const vt = VehicleType.Lorry;
console.log(vt);

const vtName = VehicleType[vt];
console.log(vtName);

enum VehicleType {
    AutonomousCar = Lorry + 1,
};

console.log(`${VehicleType[VehicleType.AutonomousCar]}: ${VehicleType.AutonomousCar}`);

// Bit Flags
enum DiscFlags {
    None                = 0b0000,
    Drive               = 0b0001,
    Influence           = 0b0010,
    Steadiness          = 0b0100,
    Conscientiousness   = 0b1000,
};

const personality = DiscFlags.Drive | DiscFlags.Conscientiousness;

const hasDrive = (personality & DiscFlags.Drive) === DiscFlags.Drive;
console.log(`hasDrive: ${hasDrive}`);
const hasInfluence = (personality & DiscFlags.Influence) === DiscFlags.Influence;
console.log(`hasInfluence: ${hasInfluence}`);

// 열거형의 모든 멤버가 리터럴 열거형 값을 가지면 특별한 의미로 사용될 수 있다.
// (1) 열거형 멤버를 타입처럼 사용. 즉, 특정 멤버의 값이 오직 지정한 열거형 값만 갖도록 할 수 있음.
enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

const c: Circle = {
    kind: ShapeKind.Circle, // ShapeKind.Square를 지정하면 오류 발생
    radius: 100,
};

// (2) 열거형 타입 자체가 각각의 열거형 멤버의 Union이 된다.
// 덕분에 아래와 같은 비교문과 같은 오류를 코드 정적 분석으로 잡아낼 수 있다.
enum SomeEnum {
    Foo,
    Bar,
}

function someFunc(x: SomeEnum) {
    if (x !== SomeEnum.Foo || x !== SomeEnum.Bar) {
        // SomeEnum 타입은 Foo, Bar 둘 중 하나이기 떄문에, 이 조건은 항상 true를 반환.
    }
}

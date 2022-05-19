// >> vs >>>
const bits = 0x80_00_00_08;
console.log(bits.toString(2));
console.log((bits >> 2).toString(2));
console.log((bits >>> 3).toString(2));

let vx;
if (vx) {
    // 여기에 들어왔다는 것은 ...
    // vx는 null 이 아니다.
    // vx는 undefined 가 아니다.
    // vx는 false 가 아니다.
    // vx는 빈 문자열이 아니다.
    // vx는 0 이 아니다.
    // vx는 NaN 이 아니다.
    console.log('vx is truthy');
} else {
    console.log('vx is falsy');
}

console && console.log('Console is available');

const errorMessage = '';
let response = errorMessage || 'No error found';
console.log(response);


// Destructuring
let values = [1, 3, 6, 10, 15];
let [first, second, third, ...remaining] = values;
console.log(first, second, third, remaining);

let obj = {
    p1: 1,
    p2: 2,
    p3: 3,
    p4: 4,
    p5: 5,
};
let { p1, p2, p3, ...restProperties} = obj;
console.log(p1, p2, p3, restProperties);

let { p1: firstProperty, p2: secondProperty, p3: thirdProperty} = obj;
console.log(firstProperty, secondProperty, thirdProperty);

// Variable Swapping
console.log(`p1: ${p1}, p3: ${p3}`);
[p1, p3] = [p3, p1];
console.log(`[SWAPPED] p1: ${p1}, p3: ${p3}`);


// destructuring past available values with default values
const [v1, v2, v3 = -99, v4 = -99, v5 = -99, v6 = -99] = values;
console.log(v1, v2, v3, v4, v5, v6);


// Tuples and Destructuring
function getThreeLandmarks(): [string, string, string] { // returning  a tuple
    return ['Golden Gate Bridge', 'Palace of Westminster', 'Colosseum'];
}

// Destructuring the tuple into named variables
const [sanFransisco, london, rome] = getThreeLandmarks();
console.log(sanFransisco, london, rome);


// Spread Operator
const squares = [1, 4, 9, 16, 25];
const powers = [2, 4, 8, 16, 32];

// Array spreading
const squaresAndPowers = [...squares, ...powers];
console.log(squaresAndPowers);

// Object spreading
const emergencyService = {
    police: 'Chase',
    fire: 'Marshall',
};

const utilityService = {
    recycling: 'Rocky',
    construction: 'Rubble'
};

const patrol = {...emergencyService, ...utilityService};
console.log(patrol);


// Spread operator in function calls
function addX(a: number, b: number, c: number): number {
    return a + b + c;
}

let resultX = addX(1, 2, 3);
console.log(resultX);

const hexagons = [1, 6, 15];
// resultX = addX(...hexagons);  // 왜 이게 에러지??

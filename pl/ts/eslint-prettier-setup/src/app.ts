enum ABrandId {
  _ = '',
}
type ABrand = ABrandId & string;

enum BBrandId {
  _ = '',
}
type BBrand = BBrandId & string;

let a: ABrand = 'abc' as ABrandId;
let b: BBrand = 'abc' as BBrandId;

console.log(`type of a: ${typeof a}`);
console.log(`value of a: ${a}`);

console.log(`type of b: ${typeof b}`);
console.log(`value of b: ${b}`);

console.log(`a === b: ${a === b}`);

// function calculateTax(amount) {
//   return amount * 1.2;
// }
// function calculateTax(amount, discount?) {
//   return amount * 1.2 - (discount || 0);
// }
// function calculateTax(amount, discount = 0) {
//   return amount * 1.2 - discount;
// }
// function calculateTax(amount, discount = 0, ...extraFees) {
//   return amount * 1.2 - discount + extraFees.reduce((total, b) => total + b, 0);
// }
// function calculateTax(
//   amount: number,
//   discount: number = 0,
//   ...extraFees: number[]
// ) {
//   return amount * 1.2 - discount + extraFees.reduce((total, b) => total + b, 0);
// }
// function calculateTax(
//   amount: number | null,
//   discount: number = 0,
//   ...extraFees: number[]
// ): number | undefined {
//   if (amount !== null) {
//     return (
//       amount * 1.2 - discount + extraFees.reduce((total, b) => total + b, 0)
//     );
//   } else {
//     return undefined;
//   }
// }
// function calculateTax(
//   amount: number,
//   discount: number = 0,
//   ...extraFees: number[]
// ): number {
//   return amount * 1.2 - discount + extraFees.reduce((total, b) => total + b, 0);
// }
function check(expression) {
    if (!expression) {
        throw new Error('Expression is false');
    }
}
function checkNumber(val) {
    if (typeof val !== 'number') {
        throw new Error('Expected a number');
    }
}
function calculateTax(amount, discount = 0, ...extraFees) {
    checkNumber(amount);
    return amount * 1.2 - discount + extraFees.reduce((total, b) => total + b, 0);
}
function writeValue(label, value) {
    console.log(`${label}: ${value}`);
}
writeValue('Tax Value', calculateTax(100, 0));
let taxValue = calculateTax(100, 0);
console.log(`2 args: ${taxValue}`);
taxValue = calculateTax(100);
console.log(`1 arg: ${taxValue}`);
taxValue = calculateTax(100, 10, 20);
console.log(`3 args: ${taxValue}`);
taxValue = calculateTax(100, 10, 20, 1, 30, 7);
console.log(`6 args: ${taxValue}`);
let taxValueWithNull = calculateTax(null, 0);
console.log(`Null Tax value: ${taxValueWithNull}`);

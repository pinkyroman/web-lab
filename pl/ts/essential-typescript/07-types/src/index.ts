console.log('Hello, TypeScript!');

let myVar;
console.log(`${myVar} = ${typeof myVar}`);
myVar = 12;
console.log(`${myVar} = ${typeof myVar}`);
myVar = 'Hello';
console.log(`${myVar} = ${typeof myVar}`);
myVar = true;
console.log(`${myVar} = ${typeof myVar}`);

// Creating a Static Type with a Type Annotation
function calculateTax(amount: number, format: boolean): string | number | null {
  if (amount === 0) {
    return null;
  }
  const calcAmount = amount * 1.2;
  return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}

// let taxNumber = calculateTax(100, false) as number;
// let taxString = <string>calculateTax(100, true);
// let taxBoolean = calculateTax(100, false) as any as boolean;
// let taxBoolean = <boolean>(<any>calculateTax(100, false));

// console.log(`Number Value: ${taxNumber.toFixed(2)}`);
// console.log(`String Value: ${taxString.charAt(0)}`);
// console.log(`Boolean Value: ${taxBoolean}`);

// let taxValue = calculateTax(0, false)!;
let taxValue!: string | number | null;
taxValue = calculateTax(100, false);

// if (typeof taxValue === 'number') {
//   console.log(`Number Value: ${taxValue.toFixed(2)}`);
// } else {
//   console.log(`String Value: ${taxValue.charAt(0)}`);
// }

if (taxValue !== null) {
  const nonNullTaxValue = taxValue;
  switch (typeof nonNullTaxValue) {
    case 'number':
      console.log(`Number Value: ${nonNullTaxValue.toFixed(2)}`);
      break;
    case 'string':
      console.log(`String Value: ${nonNullTaxValue.charAt(0)}`);
      break;
    // default:
    //   if (taxValue === null) {
    //     console.log('Value is null');
    //   } else {
    //     console.log(typeof taxValue);
    //     let value: never = taxValue;
    //     console.log(`Unexpected type for value: ${value}`);
    //   }
  }
} else {
  console.log('Value is null');
}

// let newResult: unknown = calculateTax(200, false);
// let myNumber: number = newResult as number;
// console.log(`Number Value: ${myNumber.toFixed(2)}`);

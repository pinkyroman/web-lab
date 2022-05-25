function calculateTax(amount: number): number {
  return amount * 1.2;
}

function writePrice(product: string, price: number): void {
  console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

// let hatPrice = 100;
// let glovesPrice = 75;
// let umbrellaPrice = 42;

// writePrice('Hat', calculateTax(hatPrice));
// writePrice('Gloves', calculateTax(glovesPrice));
// writePrice('Umbrella', calculateTax(umbrellaPrice));

// let prices: number[] = [100, 75, 42];
// let prices = [100, 75, 42]; // inferring types
// let names = ['Hat', 'Gloves', 'Umbrella'];
// let prices = [100, 75, 42, '20']; // mixing types of elements
/*
  the inferred type of an empty array is any[] if 'strictNullChecks' is false.
  however, it is never[] if 'strictNullChecks' is true.
*/
// let prices = [];
// prices.push(...[100, 75, 42, '20']);

// let names: Array<string> = ['Hat', 'Gloves', 'Umbrella'];
// let names = ['Hat', 'Gloves', 'Umbrella', 'Sunglasses'];

// writePrice(names[0], calculateTax(prices[0]));
// writePrice(names[1], calculateTax(prices[1]));
// writePrice(names[2], calculateTax(prices[2]));

// prices.forEach((price: number, index: number) => {
// prices.forEach((price, index) => {
//   writePrice(names[index], calculateTax(price));
// });

// let hat: [string, number] = ['Hat', 100];
// let gloves: [string, number] = ['Gloves', 75];

// writePrice(hat[0], calculateTax(hat[1]));
// writePrice(gloves[0], calculateTax(gloves[1]));

// hat.forEach((h: string | number) => {
//   if (typeof h === 'string') {
//     console.log(`String: ${h}`);
//   } else {
//     console.log(`Number: ${h.toFixed(2)}`);
//   }
// });

// let [hatname, hatprice] = hat;
// console.log(`Name: ${hatname}`);
// console.log(`Price: ${hatprice.toFixed(2)}`);

// let products: [string, number][] = [
//   ['Hat', 100],
//   ['Gloves', 75],
//   ['Umbrella', 42],
// ];
// let tupleUniton: ([string, number] | boolean)[] = [
//   true,
//   false,
//   hat,
//   ...products,
// ];

// tupleUniton.forEach((elem: [string, number] | boolean) => {
//   if (elem instanceof Array) {
//     let [str, num] = elem;
//     console.log(`Name: ${str}`);
//     console.log(`Price: ${num.toFixed(2)}`);
//   } else if (typeof elem === 'boolean') {
//     console.log(`Boolean Value: ${elem}`);
//   }
// });

// let hat: [string, number, number?] = ['Hat', 100];
// let gloves: [string, number, number?] = ['Gloves', 75, 10];

// [hat, gloves].forEach((tuple) => {
//   let [name, price, taxRate] = tuple;
//   if (taxRate != undefined) {
//     price += price * (taxRate / 100);
//   }
//   writePrice(name, price);
// });

// let hat: [string, number, number?, ...number[]] = [
//   'Hat',
//   100,
//   10,
//   1.2,
//   3,
//   0.95,
// ];
// let gloves: [string, number, number?, ...number[]] = ['Gloves', 75, 10];

// [hat, gloves].forEach((tuple) =>
//   let [name, price, taxRate, ...coupons] = tuple;
//   if (taxRate != undefined) {
//     price += price * (taxRate / 100);
//   }
//   coupons.forEach((c) => (price -= c));
//   writePrice(name, price);
// });

// enum Product {
//   Hat,
//   Gloves,
//   Umbrella,
// }

// [Product.Hat, Product.Gloves, Product.Umbrella].forEach((val) => {
//   console.log(`Name: ${Product[val]}, Value: ${val}`);
// });

// let products: [Product, number][] = [
//   [Product.Hat, 100],
//   [Product.Gloves, 75],
//   [Product.Umbrella, 42],
// ];

// products.forEach((prod: [Product, number]) => {
//   switch (prod[0]) {
//     case Product.Hat:
//       writePrice('Hat', calculateTax(prod[1]));
//       break;
//     case Product.Gloves:
//       writePrice('Gloves', calculateTax(prod[1]));
//       break;
//     case Product.Umbrella:
//       writePrice('Umbrella', calculateTax(prod[1]));
//       break;
//   }
// });

// enum City {
//   London = 'London',
//   Paris = 'Paris',
//   NY = 'New York',
// }
// console.log(`City: ${City.London}`);

enum OtherEnum {
  First = 10,
  Two = 20,
}
const enum Product {
  Hat = OtherEnum.First + 1,
  Gloves = 20,
  Umbrella = Hat + Gloves,
}

let productValue: Product = Product.Hat;
if (typeof productValue === 'number') {
  console.log(`Value is a number`);
}

let unionValue: number | Product = Product.Hat;
if (typeof unionValue === 'number') {
  console.log(`Value is a number`);
}

// function getRandomValue(): 1 | 2 | 3 | 4 {
//   return (Math.floor(Math.random() * 4) + 1) as 1 | 2 | 3 | 4;
// }

enum City {
  London = 'LON',
  Paris = 'PAR',
  Chicago = 'CHI',
}

// function getMixedValue(): 1 | 'Hello' | true | City.London {
//   switch (getRandomValue()) {
//     case 1:
//       return 1;
//     case 2:
//       return 'Hello';
//     case 3:
//       return true;
//     case 4:
//       return City.London;
//   }
// }

// console.log(`Value: ${getMixedValue()}`);

function getMixedValue(input: 1): 1;
function getMixedValue(input: 2 | 3): 'Hello' | true;
function getMixedValue(input: number): 1 | 'Hello' | true | City.London {
  switch (input) {
    case 1:
      return 1;
    case 2:
      return 'Hello';
    case 3:
      return true;
    case 4:
    default:
      return City.London;
  }
}

let first = getMixedValue(1);
let second = getMixedValue(2);
let third = getMixedValue(3);
console.log(`${first} ${second} ${third}`);

// function getCityString(
//   city: 'London' | 'Paris' | 'Chicago'
// ): `City: ${'London' | 'Paris' | 'Chicago'}` {
//   return `City: ${city}` as `City: ${'London' | 'Paris' | 'Chicago'}`;
// }

let str = getCityString('London');
console.log(str);

type numVals = 1 | 2 | 3 | 4;

function getRandomValue(): numVals {
  return (Math.floor(Math.random() * 4) + 1) as numVals;
}

type cities = 'London' | 'Paris' | 'Chicago';
type cityResponse = `City: ${cities}`;

function getCityString(city: cities): cityResponse {
  return `City: ${city}` as cityResponse;
}

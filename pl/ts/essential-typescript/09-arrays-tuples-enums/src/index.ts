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

let hat: [string, number, number?, ...number[]] = [
  'Hat',
  100,
  10,
  1.2,
  3,
  0.95,
];
let gloves: [string, number, number?, ...number[]] = ['Gloves', 75, 10];

[hat, gloves].forEach((tuple) => {
  let [name, price, taxRate, ...coupons] = tuple;
  if (taxRate != undefined) {
    price += price * (taxRate / 100);
  }
  coupons.forEach((c) => (price -= c));
  writePrice(name, price);
});

let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);

let bootsPrice = '100';
console.log(`Boots price: ${bootsPrice}`);

if (hatPrice == bootsPrice) {
    console.log('Prices are the same');
} else {
    console.log('Prices are different');
}

// let totalPrice = Number(hatPrice) + Number(bootsPrice); // hatPrice + bootsPrice;
// console.log(`Total price: ${totalPrice}`);

// function sumPrices(first, second, third) {
//     return first + second + third;
// }

// function sumPrices(...numbers) {
//     return numbers.reduce((total, val) => {
//         return total + (Number.isNaN(Number(val)) ? 0 : Number(val));
//     }, 0);
// }

let sumPrices = (...numbers) => numbers.reduce((total, val) => total + (Number.isNaN(Number(val)) ? 0 : Number(val)), 0);

let totalPrice = sumPrices(hatPrice, bootsPrice);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);

totalPrice = sumPrices(100, 200, 300);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);

totalPrice = sumPrices(100, 200, undefined, false, 'hello');
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);

let myVariable = "Adam";
console.log(`Type: ${typeof myVariable}`);

myVariable = 100;
console.log(`Type: ${typeof myVariable}`);

let firstCity;
let secondCity = firstCity || 'London'; // null and undefined values are treated as false.
console.log(`City: ${secondCity}`);

let taxRate; // no tax rate has been defined
console.log(`Tax rate: ${taxRate || 10}%`);
taxRate = 0; // value 0 is also falsy in the logical operations
console.log(`Tax rate: ${taxRate || 10}%`); // intended 'taxRate' to be 0.

let taxRate2;
console.log(`Tax rate: ${taxRate2 ?? 10}%`);
taxRate2 = 0;
console.log(`Tax rate: ${taxRate2 ?? 10}%`); // ??, the nullish coalescing operator is working for this case.


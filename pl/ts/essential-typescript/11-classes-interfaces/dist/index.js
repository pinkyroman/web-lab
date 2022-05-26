// type Person = {
//   id: string;
//   name: string;
//   city: string;
// };
class Employee {
    name;
    company;
    constructor(name, company) {
        this.name = name;
        this.company = company;
    }
    getDetails() {
        return `${this.name} works for ${this.company}`;
    }
}
class SportsProduct {
    name;
    category;
    price;
    constructor(name, category, price) {
        this.name = name;
        this.category = category;
        this.price = price;
    }
}
let data = [
    new Employee('Bob Smith', 'Acme'),
    new SportsProduct('Running Shoes', 'Running', 90.5),
    new Employee('Dora Peters', 'BigCo'),
];
data.forEach((item) => {
    if ('getDetails' in item) {
        console.log(`Person: ${item.getDetails()}`);
    }
    else {
        console.log(`Product: ${item.name}, ${item.price}`);
    }
});
class ProductGroup {
    constructor(...initialProducts) {
        initialProducts.forEach((p) => (this[p[0]] = p[1]));
    }
}
let group = new ProductGroup(['shoes', new SportsProduct('Shoes', 'Running', 90.5)], ['basket', new SportsProduct('Basket', 'Basketball', 20.5)]);
group.hat = new SportsProduct('Hat', 'Skiing', 20);
Object.keys(group).forEach((k) => console.log(`Property Name: ${k}`));
let total = group.hat.price + (group.boots?.price ?? 0);
console.log(`Total: ${total}`);

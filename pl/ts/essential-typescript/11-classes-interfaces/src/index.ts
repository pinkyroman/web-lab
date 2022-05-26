// type Person = {
//   id: string;
//   name: string;
//   city: string;
// };

// let data: Person[] = [
//   { id: 'bsmith', name: 'Bob Smith', city: 'London' },
//   { id: 'ajones', name: 'Alice Jones', city: 'Paris' },
//   { id: 'dpeters', name: 'Dora Peters', city: 'New York' },
// ];

// data.forEach((item) => {
//   console.log(`${item.id} ${item.name} ${item.city}`);
// });

// type Employee = {
//   id: string;
//   name: string;
//   dept: string;
//   city: string;
//   writeDept: () => void;
// };

// let Employee = function (id: string, name: string, dept: string, city: string) {
//   this.id = id;
//   this.name = name;
//   this.dept = dept;
//   this.city = city;
// };

// Employee.prototype.writeDept = function () {
//   console.log(`${this.name} works in ${this.dept}`);
// };

// let salesEmployee = new Employee('fvega', 'Fidel Vega', 'Sales', 'Paris');
// let data: (Person | Employee)[] = [
//   { id: 'bsmith', name: 'Bob Smith', city: 'London' },
//   { id: 'ajones', name: 'Alice Jones', city: 'Paris' },
//   { id: 'dpeters', name: 'Dora Peters', city: 'New York' },
//   salesEmployee,
// ];

// data.forEach((item) => {
//   if ('dept' in item) {
//     item.writeDept();
//   } else {
//     console.log(`${item.id} ${item.name} ${item.city}`);
//   }
// });

// class Person {
//   constructor(public id: string, public name: string, public city: string) {}
// }

// class Employee {
//   //   public id: string;
//   //   public name: string;
//   //   private dept: string;
//   //   public city: string;

//   //   constructor(id: string, name: string, dept: string, city: string) {
//   //     this.id = id;
//   //     this.name = name;
//   //     this.dept = dept;
//   //     this.city = city;
//   //   }

//   constructor(
//     public readonly id: string,
//     public name: string,
//     private dept: string,
//     public city: string
//   ) {}

//   writeDept() {
//     console.log(`${this.name} works in ${this.dept}`);
//   }
// }

// abstract class Person {
//   constructor(public id: string, public name: string, public city: string) {}

//   getDetails(): string {
//     return `${this.name}, ${this.getSpecificDetails()}`;
//   }

//   abstract getSpecificDetails(): string;
// }

// interface Person {
//   name: string;
//   getDetails(): string;
// }

// interface DogOwner extends Person {
//   dogName: string;
//   getDogDetails(): string;
// }

// interface Person {
//   name: string;
//   getDetails(): string;

//   dogName?: string;
//   getDogDetails?(): string;
// }

// abstract class AbstractDogOwner implements Person {
//   abstract name: string;
//   abstract dogName?: string;

//   abstract getDetails(): string;

//   getDogDetails(): string {
//     // if (this.dogName) {
//     return `${this.name} has a dog called ${this.dogName}`;
//     // }
//   }
// }

// class DogOwningCustomer extends AbstractDogOwner {
//   constructor(
//     public readonly id: string,
//     public name: string,
//     public city: string,
//     public creditLimit: number,
//     public dogName: string
//   ) {
//     super();
//   }

//   getDetails(): string {
//     return `${this.name} has ${this.creditLimit} limit`;
//   }
// }

// class Employee /* extends */ implements Person {
//   constructor(
//     public readonly id: string,
//     public name: string,
//     private dept: string,
//     public city: string
//   ) {
//     // super(id, name, city);
//   }

//   // writeDept() {
//   //   console.log(`${this.name} works in ${this.dept}`);
//   // }

//   // getSpecificDetails(): string {
//   //   return `works in ${this.dept}`;
//   // }

//   getDetails(): string {
//     return `${this.name} works in ${this.dept}`;
//   }
// }

// class Customer /* extends */ implements Person {
//   constructor(
//     public readonly id: string,
//     public name: string,
//     public city: string,
//     public creditLimit: number,
//     public dogName: string
//   ) {
//     // super(id, name, city);
//   }

//   // getSpecificDetails(): string {
//   //   return `has ${this.creditLimit} credit limit`;
//   // }

//   getDetails(): string {
//     return `${this.name} has ${this.creditLimit} credit limit`;
//   }

//   getDogDetails(): string {
//     return `${this.name} has a dog named ${this.dogName}`;
//   }
// }

// class Supplier /* extends */ implements Person {
//   constructor(
//     public readonly id: string,
//     public name: string,
//     public city: string,
//     public companyName: string
//   ) {
//     // super(id, name, city);
//   }

//   // getSpecificDetails(): string {
//   //   return `works for ${this.companyName}`;
//   // }

//   getDetails(): string {
//     return `${this.name} works for ${this.companyName}`;
//   }
// }

// let salesEmployee = new Employee('fvega', 'Fidel Vega', 'Sales', 'Paris');
// console.log(`Dept Value: ${salesEmployee.dept}`);

// let data: (Person | Employee)[] = [
//   { id: 'bsmith', name: 'Bob Smith', city: 'London' },
//   { id: 'ajones', name: 'Alice Jones', city: 'Paris' },
//   { id: 'dpeters', name: 'Dora Peters', city: 'New York' },
//   salesEmployee,
// ];

// data.forEach((item) => {
//   if (item instanceof Employee) {
//     item.writeDept();
//   } else {
//     console.log(`${item.id} ${item.name} ${item.city}`);
//   }
// });

// let data = [
//   new Person('bsmith', 'Bob Smith', 'London'),
//   new Employee('fvega', 'Fidel Vega', 'Sales', 'Paris'),
// ];

// data.forEach((item) => {
//   console.log(`Person: ${item.name}, ${item.city}`);
//   if (item instanceof Employee) {
//     item.writeDept();
//   }
// });

// let alice = new Customer('ajones', 'Alice Jones', 'Paris', 1000, 'Fido');
// let dogOwners: DogOwner[] = [alice];
// dogOwners.forEach((item) => console.log(item.getDogDetails()));

// let alice = new DogOwningCustomer(
//   'ajones',
//   'Alice Jones',
//   'Paris',
//   1000,
//   'Fido'
// );
// if (alice.getDogDetails) {
//   console.log(alice.getDogDetails());
// }

// let data: Person[] = [
//   new Employee('fvega', 'Fidel Vega', 'Sales', 'Paris'),
//   alice,
//   new Supplier('dpeters', 'Dora Peters', 'New York', 'Acme'),
// ];

// data.forEach((item) => {
//   console.log(`Person: ${item.name}, ${item.city}`);
//   if (item instanceof Employee) {
//     item.writeDept();
//   } else if (item instanceof Customer) {
//     console.log(`Customer ${item.name} has ${item.creditLimit} limit`);
//   } else if (item instanceof Supplier) {
//     console.log(`Supplier ${item.name} works for ${item.companyName}`);
//   }
// });

// data.forEach((item) => console.log(item.getDetails()));

// data.forEach((item) => {
//   console.log(item.getDetails());
//   if (item.getDogDetails) {
//     console.log(item.getDogDetails());
//   }
// });

interface Person {
  name: string;
  getDetails(): string;
}

interface Product {
  name: string;
  price: number;
}

class Employee implements Person {
  constructor(public name: string, public company: string) {}

  getDetails(): string {
    return `${this.name} works for ${this.company}`;
  }
}

class SportsProduct implements Product {
  constructor(
    public name: string,
    public category: string,
    public price: number
  ) {}
}

let data: (Person | Product)[] = [
  new Employee('Bob Smith', 'Acme'),
  new SportsProduct('Running Shoes', 'Running', 90.5),
  new Employee('Dora Peters', 'BigCo'),
];

data.forEach((item) => {
  if ('getDetails' in item) {
    console.log(`Person: ${item.getDetails()}`);
  } else {
    console.log(`Product: ${item.name}, ${item.price}`);
  }
});

class ProductGroup {
  constructor(...initialProducts: [string, Product][]) {
    initialProducts.forEach((p) => (this[p[0]] = p[1]));
  }

  [propertyName: string]: Product;
}

let group = new ProductGroup(
  ['shoes', new SportsProduct('Shoes', 'Running', 90.5)],
  ['basket', new SportsProduct('Basket', 'Basketball', 20.5)]
);

group.hat = new SportsProduct('Hat', 'Skiing', 20);
Object.keys(group).forEach((k) => console.log(`Property Name: ${k}`));

let total = group.hat.price + (group.boots?.price ?? 0);
console.log(`Total: ${total}`);

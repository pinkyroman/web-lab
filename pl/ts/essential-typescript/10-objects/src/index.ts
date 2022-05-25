enum Feature {
  Waterproof,
  Insulated,
}

// type Product = {
//   name: string;
//   price?: number;
//   //  hasFeature?: (feature: Feature) => boolean; // 아래 선언과 동일
//   hasFeature?(feature: Feature): boolean;
// };

// let hat = { name: 'Hat', price: 100 };
// let gloves = { name: 'Gloves', price: 75 };
// let umbrella = { name: 'Umbrella' };
// let umbrella = { name: 'Umbrella', price: 30, waterproof: true };
// let umbrella = {
//   name: 'Umbrella',
//   price: 30,
//   hasFeature: (feature) => feature === Feature.Waterproof,
// };

// let mirrorShades = { name: 'Sunglasses', price: 54, finish: 'mirrored' };
// let darkShades: Product = { name: 'Sunglasses', price: 54, finish: 'flat' };

// let products: { name: string; price?: number; waterproof?: boolean }[] = [
//   hat,
//   gloves,
//   umbrella,
// ];

// let products: {
//   name: string;
//   price?: number;
//   hasFeature?(Feature): boolean;
// }[] = [hat, gloves, umbrella];

// let products: Product[] = [hat, gloves, umbrella];
// let products: Product[] = [hat, gloves, umbrella, mirrorShades, darkShades];

// products.forEach((prod) =>
//   console.log(
//     `${prod.name}: ${prod.price} ` +
//       `Waterproof: ${
//         prod.hasFeature ? prod.hasFeature(Feature.Waterproof) : false
//       }`
//   )
// );

type Product = {
  id: number;
  name: string;
  price?: number;
};

// type Person = {
//   id: string;
//   name: string;
//   city: string;
// };

// type UnionType = {
//   id: number | string;
//   name: string;
// };

// let hat = { id: 1, name: 'Hat', price: 100 };
// let gloves = { id: 2, name: 'Gloves', price: 75 };
// let umbrella = { id: 3, name: 'Umbrella', price: 30 };
// // let bob = { id: 'bsmith', name: 'Bob', city: 'London' };
// let bob = {
//   id: 'bsmith',
//   name: 'Bob',
//   city: 'London',
//   company: 'ACME Co.',
//   dept: 'Sales',
// };

// let dataItems: (Product | Person)[] = [hat, gloves, umbrella, bob];
// let dataItems: UnionType[] = [hat, gloves, umbrella, bob];

// dataItems.forEach((item) => console.log(`ID: ${item.id}, Name: ${item.name}`));

// dataItems.forEach((item) => {
//   // type guarding by checking properties
//   if ('city' in item) {
//     console.log(`Person: ${item.name} lives in ${item.city}`);
//   } else {
//     console.log(`Product: ${item.name} costs ${item.price}`);
//   }
// });

// a type predicate
// function isPerson(testObj: any): testObj is Person {
//   return testObj.city !== undefined;
// }

// dataItems.forEach((item) => {
//   // type guarding with a type predicate function
//   if (isPerson(item)) {
//     console.log(`Person: ${item.name} lives in ${item.city}`);
//   } else {
//     console.log(`Product: ${item.name} costs ${item.price}`);
//   }
// });

// type Employee = {
//   company: string;
//   dept: string;
// };

// let dataItems: (Person & Employee)[] = [bob];

// dataItems.forEach((item) => {
//   console.log(`Person: ${item.id}, ${item.name}, ${item.city}`);
//   console.log(`Employee: ${item.id}, ${item.company}, ${item.dept}`);
// });

// type Employee = {
//   id: string;
//   company: string;
//   dept: string;
// };

// type EmployedPerson = Person & Employee;

// function correlateData(
//   peopleData: Person[],
//   staff: Employee[]
// ): EmployedPerson[] {
//   const defaults = { company: 'None', dept: 'None' };
//   return peopleData.map((p) => ({
//     ...p,
//     ...(staff.find((e) => e.id === p.id) || { ...defaults, id: p.id }),
//   }));
// }

// let people: Person[] = [
//   { id: 'bsmith', name: 'Bob Smith', city: 'London' },
//   { id: 'ajones', name: 'Alice JOnes', city: 'Paris' },
//   { id: 'dpeters', name: 'Dora Peters', city: 'New York' },
// ];

// let employees: Employee[] = [
//   { id: 'bsmith', company: 'Acme Co', dept: 'Sales' },
//   { id: 'dpeters', company: 'Acme Co', dept: 'Development' },
// ];

// let dataItems: EmployedPerson[] = correlateData(people, employees);

// dataItems.forEach((item) => {
//   console.log(`Person: ${item.id}, ${item.name}, ${item.city}`);
//   console.log(`Employee: ${item.id}, ${item.company}, ${item.dept}\n`);
// });

// function writePerson(p: Person): void {
//   console.log(`Person: ${p.id}, ${p.name}, ${p.city}`);
// }

// function writeEmployee(e: Employee): void {
//   console.log(`Employee: ${e.id}, ${e.company}, ${e.dept}`);
// }

// dataItems.forEach((item) => {
//   writePerson(item);
//   writeEmployee(item);
//   console.log('----------------------------');
// });

type Person = {
  id: string;
  name: string;
  city: string;
  //   contact: {
  //     phone: number;
  //   };
  getContact(field: string): string;
};

type Employee = {
  id: string;
  company: string;
  dept: string;
  //   contact: {
  //     name: string;
  //   };
  getContact(field: number): number;
};

type EmployedPerson = Person & Employee;
// let typeTest = ({} as EmployedPerson).contact;

// let person1: EmployedPerson = {
//   id: 'bsmith',
//   name: 'Bob Smith',
//   city: 'London',
//   company: 'Acme Co',
//   dept: 'Sales',
//   contact: {
//     name: 'Alice',
//     phone: 6512345643,
//   },
// };

// let person2: EmployedPerson = {
//   id: 'dpeters',
//   name: 'Dora Peters',
//   city: 'New York',
//   company: 'Acme Co',
//   dept: 'Development',
//   contact: {
//     name: 'Alice',
//     phone: 6512345643,
//   },
// };

let person: EmployedPerson = {
  id: 'bsmith',
  name: 'Bob Smith',
  city: 'London',
  company: 'Acme Co',
  dept: 'Sales',
  getContact(field: string | number): any {
    return typeof field === 'string' ? 'Alice' : 6512345643;
  },
};

let typeTest = person.getContact;
let stringParamTypeTest = person.getContact('Alice');
let numberParamTypeTest = person.getContact(123);

console.log(`Contact: ${person.getContact('Alice')}`);
console.log(`Contact: ${person.getContact(12)}`);

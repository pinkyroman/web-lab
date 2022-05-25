var Feature;
(function (Feature) {
    Feature[Feature["Waterproof"] = 0] = "Waterproof";
    Feature[Feature["Insulated"] = 1] = "Insulated";
})(Feature || (Feature = {}));
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
let person = {
    id: 'bsmith',
    name: 'Bob Smith',
    city: 'London',
    company: 'Acme Co',
    dept: 'Sales',
    getContact(field) {
        return typeof field === 'string' ? 'Alice' : 6512345643;
    },
};
let typeTest = person.getContact;
let stringParamTypeTest = person.getContact('Alice');
let numberParamTypeTest = person.getContact(123);
console.log(`Contact: ${person.getContact('Alice')}`);
console.log(`Contact: ${person.getContact(12)}`);

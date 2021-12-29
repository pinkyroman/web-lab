import * as deep from "./deepClone.mjs";

const obj = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    equipments: [
        {
            name: 'sword',
            type: 'weapon',
            stats: {
                damage: 10,
                range: 1,
            },
        },
        {
            name: 'shield',
            type: 'armor',
            stats: {
                defense: 5,
            },
        }
    ]
};

Object.defineProperty(obj, 'equipments', {
    configurable: false,
    enumerable: false,
    writable: false,
});

console.log(Object.keys(obj));

const clonedObj = deep.clone(obj);
console.log(`obj: `, obj);
console.log(`clonedObj: `, clonedObj);
console.log(`equals(obj, clonedObj): `, deep.equals(obj, clonedObj));

console.log(`....................................................................`);


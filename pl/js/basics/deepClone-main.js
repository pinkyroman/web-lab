const Person = (function () {
    function Person(firstName, lastName) {
        // private variables for each instance
        let $firstName = firstName;
        let $lastName = lastName;

        // private variable accessors for each instance
        Object.defineProperties(this, {
            firstName: {
                get() {
                    return $firstName;
                }
            },
            lastName: {
                get() {
                    return $lastName;
                }
            },
        });
    }

    // inherited accessors
    Object.defineProperties(Person.prototype, {
        fullName: {
            get() {
                return `${this.firstName} ${this.lastName}`;
            },
        },
    });

    return Person;
})();

const alice = new Person('Alice', 'Cooper');
const ozzy = new Person('Ozzy', 'Osbourne');

console.log(ozzy);
console.log(ozzy.firstName);
console.log(ozzy.lastName);
console.log(ozzy.fullName);
console.log(alice.fullName);


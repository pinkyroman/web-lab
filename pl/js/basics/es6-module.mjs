var staticId = 0;

export const Person = (function (firstName, lastName, age) {
    let $id = staticId++;
    let $firstName = firstName;
    let $lastName = lastName;
    let $age = age;
    return {
        setFirstName: function (firstName) {
            $firstName = firstName;
        },
        getFirstName: function () {
            return $firstName;
        },
        getId: function () {
            return $id;
        },
    }
});

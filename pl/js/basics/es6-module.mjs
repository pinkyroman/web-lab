var staticId = 0;

export function Person(firstName, lastName, age) {
    // new.target은 ES6부터 지원되며, Person()이 new 키워드 없이 호출된 경우
    // undefined 값을 갖는다.
    if (!new.target) {
        // new 키워드 없이 호출 된 경우, new 키워드와 함께 재귀 호출 한다.
        console.warn('Person() constructor called without new.');
        return new Person(firstName, lastName, age);
    }
    let $id = staticId++;
    let $firstName = firstName;
    let $lastName = lastName;
    let $age = age;

    this.setFirstName = function (firstName) {
        $firstName = firstName;
    };
    this.getFirstName = function () {
        return $firstName;
    };
    this.getId = function () {
        return $id;
    };
};

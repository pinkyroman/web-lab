const obj = {
    funcBeforeES6: function () {
        console.log('funcBeforeES6');
    },
    funcAfterES6() {
        console.log('funcAfterES6');
    },
};

const r1 = new obj.funcBeforeES6();
console.log(r1);
// const r2 = new obj.funcAfterES6(); // obj.funcAfterES6 is not a constructor

console.dir(obj.funcBeforeES6);
console.dir(obj.funcAfterES6);

console.log(`funcBeforeES6 has 'prototype' property: ${obj.funcBeforeES6.hasOwnProperty('prototype')}`);
console.log(`funcAfterES6 has 'prototype' property: ${obj.funcAfterES6.hasOwnProperty('prototype')}`);

const base = {
    name: 'Lee',
    sayHi() {
        return `Hi, ${this.name}`;
    },
    sayLow() {
        return `Low your head, ${this.name}`;
    }
};

const derived = {
    __proto__: base,
    sayHi() {
        return `${super.sayHi()}. How are you doing?`;
    }
};

console.log(derived.sayHi());
console.log(derived.sayLow());

function foo(...args) {
    console.log(`arguments: ${args}`);
}

foo(1, 2, 3, 4, 5);
foo(["abc", "def"]);

function bar(mandatory, ...optional) {
    console.log(`mandatory: ${mandatory}`);
    console.log(`optional: ${optional}`);
}

bar(1, 2, 3, 4, 5);
bar(["abc", "def", "ghi"], ["jkl", "mno"]);

function sum(x, y) {
    console.log('default value for x: ' + x);
    console.log('default value for y: ' + y);
}
sum();

function sum2(x = 0, y = 0) {
    console.log('default value for x: ' + x);
    console.log('default value for y: ' + y);
}
sum2();
sum2(undefined, undefined);
sum2(8, undefined);
sum2(8);
sum2(undefined, null);

var Counter = (function () {
    let privateCounter = 0;
    return {
        increment: function () {
            return privateCounter++;
        },
        decrement: function () {
            return privateCounter--;
        },
        get: function () {
            return privateCounter;
        }
    }
});

let counter1 = Counter();
let counter2 = Counter();

counter1.increment();
counter1.increment();
counter1.increment();
console.log(`Counter 1: ${counter1.get()}`);

console.log(`Counter 2: ${counter2.get()}`);


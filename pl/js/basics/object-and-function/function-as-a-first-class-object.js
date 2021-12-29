function executor(f) {
    console.log('caller of executer: ' + executor?.caller?.name);
    console.log('executor arguements: ');
    console.dir(arguments);

    let exitCode = 0;
    return function innerExecutor() {
        exitCode = f();
        return exitCode;
    }
}

let f = function () {
    console.log('name of this function: ' + f.name);
    console.log('caller of x: ' + f.caller.name);
    console.log('Hello world');
    return 1;
}

console.log(executor(f)());

console.dir(executor);
console.log('Object.getOwnPeopertyDescriptors(executor):');
console.log(Object.getOwnPropertyDescriptors(executor));
console.log(Object.getOwnPropertyDescriptors(executor.__proto__));
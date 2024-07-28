"use strict";
// literal types
let myName;
let userName;
userName = "Amy";
// function in typescript
const logMsg = (message) => {
    console.log(message);
};
// interface mathFunction { (a: number, b: number): number };
const add = (a, b) => {
    return a + b;
};
const substract = (a, b) => {
    return a - b;
};
const multiply = (a, b) => {
    return a * b;
};
logMsg(add(5, 5));
logMsg(substract(10, 7));
logMsg(multiply(10, 7));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined")
        return a + b + c;
    return a + b;
};
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
// Rest Operators
const total = (...nums) => {
    return nums.reduce((acc, curr) => acc + curr, 0);
};
logMsg(total(1, 2, 3, 4));
// never type use when function nevere return and always throw error
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        // if (i > 100) break;
    }
};
// custom type guard
const isNumber = (value) => {
    return (typeof value === "number") ? true : false;
};
//use of never type
const numberORStrig = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happen!");
};
logMsg(numberORStrig(5));
logMsg(numberORStrig("5"));

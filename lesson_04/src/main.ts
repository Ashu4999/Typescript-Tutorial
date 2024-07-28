// Type Aliases
type stringORNumber = string | number;
type stringORNumberArray = (string | number)[];

type Person = {
    name: string,
    age: number,
    education: stringORNumberArray
}

type userID = stringORNumber;

// literal types
let myName: "Dave";

let userName: "Dave" | "John" | "Amy";
userName = "Amy";


// function in typescript
const logMsg = (message: any): void => {
    console.log(message);
};

type mathFunction = (a: number, b: number) => number;
// interface mathFunction { (a: number, b: number): number };

const add: mathFunction = (a, b) => {
    return a + b;
};

const substract: mathFunction = (a, b) => {
    return a - b;
};

const multiply: mathFunction = (a, b) => {
    return a * b;
};

logMsg(add(5, 5));
logMsg(substract(10, 7));
logMsg(multiply(10, 7));


// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== "undefined")
        return a + b + c;

    return a + b;
};

const sumAll = (a: number = 10, b: number, c: number = 2) => {
    return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));

// Rest Operators
const total = (...nums: number[]) => {
    return nums.reduce((acc, curr) => acc + curr, 0);
};

logMsg(total(1, 2, 3, 4));

// never type use when function nevere return and always throw error
const createError = (errMsg: string) => {
    throw new Error(errMsg);
};

const infinite = () => {
    let i: number = 1;
    while (true) {
        i++;
        // if (i > 100) break;
    }
};

// custom type guard
const isNumber = (value: any): boolean => {
    return (typeof value === "number") ? true : false;
};

//use of never type
const numberORStrig = (value: number | string): string => {
    if (typeof value === "string") return "string";
    if (isNumber(value)) return "number";
    return createError("This should never happen!");
};

logMsg(numberORStrig(5));
logMsg(numberORStrig("5"));

let stringArr = ["one", "two", "three"];
let guitars = ["start", "les paul", 5150];
let mixedData = ["EVH", 1984, true];

stringArr[0] = "12";
guitars = stringArr;
mixedData = guitars;

let test = [];
let brands: string[] = [];
brands.push("Nike");
brands.unshift("Puma");

//Tuples
let myTuple: [string, number, boolean] = ["one", 2, false];
let mixedData1 = ["two", 3, true];


myTuple[2] = true;
myTuple[1] = 3;

let myObj: object;
myObj = [];
myObj = brands;
myObj = {};
console.log(typeof myObj);
console.log(myObj);

const exampleObj = {
    name: "ashutosh",
    age: 24
};

type Person = {
    name: string,
    age?: number,
    education: (string | number)[]
}

let person1: Person = {
    name: "Ashutosh",
    age: 24,
    education: ["MCA", "BBA(CA)", 12, 10]
}

let person2: Person = {
    name: "Prathmesh",
    education: ["BBA(CA)", 12, 10]
}

const greetPerson = (giverPerson: Person) => {
    if (giverPerson.age) {
        return `Hello ${giverPerson.name} !!!\nYour are ${giverPerson.age.toString()} old.`;
    }

    return `Hello ${giverPerson.name}`;
};

console.log(greetPerson(person1));
console.log(greetPerson(person2));


enum Grade {
    U,
    D,
    C,
    B,
    A
}

console.log(Grade);

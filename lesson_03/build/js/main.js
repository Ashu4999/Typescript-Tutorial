"use strict";
let stringArr = ["one", "two", "three"];
let guitars = ["start", "les paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "12";
guitars = stringArr;
mixedData = guitars;
let test = [];
let brands = [];
brands.push("Nike");
brands.unshift("Puma");
//Tuples
let myTuple = ["one", 2, false];
let mixedData1 = ["two", 3, true];
myTuple[2] = true;
myTuple[1] = 3;
let myObj;
myObj = [];
myObj = brands;
myObj = {};
console.log(typeof myObj);
console.log(myObj);
const exampleObj = {
    name: "ashutosh",
    age: 24
};
let person1 = {
    name: "Ashutosh",
    age: 24,
    education: ["MCA", "BBA(CA)", 12, 10]
};
let person2 = {
    name: "Prathmesh",
    education: ["BBA(CA)", 12, 10]
};
const greetPerson = (giverPerson) => {
    if (giverPerson.age) {
        return `Hello ${giverPerson.name} !!!\nYour are ${giverPerson.age.toString()} old.`;
    }
    return `Hello ${giverPerson.name}`;
};
console.log(greetPerson(person1));
console.log(greetPerson(person2));
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade);

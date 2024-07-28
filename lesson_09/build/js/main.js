"use strict";
// Utility Types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignmnet = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentID: "comp1",
    title: "Final Project",
    grade: 0
};
console.log(updateAssignmnet(assign1, { grade: 86 }));
const assignGraded = updateAssignmnet(assign1, { grade: 95 });
console.log(assignGraded);
// Required and Readonly
const recordAssignment = (assign) => {
    // perform operation
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// Record
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
};
const finalGrades = {
    Sara: "A",
    Kelly: "C"
};
const gradeData = {
    Sara: { assign1: 100, assign2: 60 },
    Kelly: { assign1: 100, assign2: 60 }
};
const score = { studentID: "K12", grade: 100 };
const preview = { studentID: "k23", title: "Final Project" };
// ReturnType
// type newAssign = { title: string, points: number };
const createNewAssign = (title, points) => {
    return { title, points };
};
const tAssign = createNewAssign("Utility", 150);
console.log(tAssign);
const assignArgs = ["Generics", 100];
const tAssign2 = createNewAssign(...assignArgs);
console.log(tAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then(users => console.log(users));

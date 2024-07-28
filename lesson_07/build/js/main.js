"use strict";
const todayTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
let keyName = "Books";
console.log(todayTransactions[keyName]);
const todaysNet = (transactions) => {
    let total = 0;
    for (let transaction in transactions) {
        total = total + transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todayTransactions));
const student = {
    name: "Doug",
    gpa: 3.5,
    classes: [100, 200]
};
// console.log(student.test);
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}
// if you don't know interface
Object.keys(student).map(key => {
    console.log(`${key}: ${student[key]}`);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "gpa");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehusle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}

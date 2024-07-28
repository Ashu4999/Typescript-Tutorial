// Index Signatures
// interface TransactionObj {
//     readonly [index: string]: number,
// }
interface TransactionObj {
    readonly [index: string]: number,
    Pizza: number,
    Books: number,
    Job: number
}

const todayTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
}

let keyName: string = "Books";
console.log(todayTransactions[keyName]);

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0;
    for (let transaction in transactions) {
        total = total + transactions[transaction];
    }
    return total;
};

console.log(todaysNet(todayTransactions));

// todayTransactions.Pizza = 50;
// console.log(todayTransactions["Pizza"]);

///////////////////////////////////////////////////////

interface Student {
    // [key: string]: string | number | number[] | undefined
    name: string,
    gpa: number,
    classes?: number[]
}

const student: Student = {
    name: "Doug",
    gpa: 3.5,
    classes: [100, 200]
}

// console.log(student.test);

for (let key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`);
}

// if you don't know interface
Object.keys(student).map(key => {
    console.log(`${key}: ${student[key as keyof typeof student]}`);
});

const logStudentKey = (student: Student, key: keyof Student) => {
    console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "gpa");

////////////////////////////////////////////////////////

// interface Incomes {
//     [key: "salary"]: number
// }

// literal type or generic type not work with interfase so used Record
// drawback is type will be applicable for all keys
type Streams = 'salary' | 'bonus' | 'sidehusle';
type Incomes = Record<Streams, number>;

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehusle: 250
};

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof typeof monthlyIncomes]);
}
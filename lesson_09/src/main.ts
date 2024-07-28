// Utility Types

// Partial

interface Assignment {
    studentID: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignmnet = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return { ...assign, ...propsToUpdate };
}

const assign1: Assignment = {
    studentID: "comp1",
    title: "Final Project",
    grade: 0
}

console.log(updateAssignmnet(assign1, { grade: 86 }));
const assignGraded: Assignment = updateAssignmnet(assign1, { grade: 95 });
console.log(assignGraded);

// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // perform operation
    return assign;
};


const assignVerified: Readonly<Assignment> = {
    ...assignGraded,
    verified: true
};


recordAssignment({ ...assignGraded, verified: true });


// Record
const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "A",
    Kelly: "C"
}

interface Grades {
    assign1: number,
    assign2: number
}

const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 100, assign2: 60 },
    Kelly: { assign1: 100, assign2: 60 }
}

// Pick and Omit

type AssignResult = Pick<Assignment, "studentID" | "grade">;
const score: AssignResult = { studentID: "K12", grade: 100 };

type AssignPreview = Omit<Assignment, "grade" | "verified">;
const preview: AssignPreview = { studentID: "k23", title: "Final Project" };

// Exclude and Extract (Not work with interface)

type adjustedGrades = Exclude<LetterGrades, "U">;
type higherGrades = Extract<LetterGrades, "A" | "B">;

// NonNullable
type AllPossibleGraders = "Dave" | "John" | null | undefined;

type NamesOnly = NonNullable<AllPossibleGraders>;

// ReturnType
// type newAssign = { title: string, points: number };

const createNewAssign = (title: string, points: number) => {
    return { title, points };
}

type NewAssign = ReturnType<typeof createNewAssign>;

const tAssign: NewAssign = createNewAssign("Utility", 150);
console.log(tAssign);

// Parameters

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generics", 100];
const tAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tAssign2);

// Awaited - helps us with ReturnType of a Promise.

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}

type FetchUserReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then(users => console.log(users));

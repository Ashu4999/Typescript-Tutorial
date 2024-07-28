class Coder {

    //not initializing so used assersions
    secondLang!: string

    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected language: string = "Typescript"
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.language = language
    }

    public getAge() {
        return `Hello, I'm ${this.age}.`;
    }
}

const Ashutosh = new Coder("Ashutosh", "Rock", 25);
console.log(Ashutosh.getAge());
// console.log(Ashutosh.age);
// console.log(Ashutosh.language);

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ) {
        super(name, music, age);
        this.computer = computer;
    }

    public getLanguage() {
        return `I write ${this.language}`;
    }
}

const Arun = new WebDev("Mac", "Arun", "Lofi", 29);
console.log(Arun.getLanguage());
// console.log(Arun.age);

////////////////////////////////////////////////////////

interface Musician {
    name: string
    instrument: string
    play(action: string): string
}

class Guitarist implements Musician {
    name: string
    instrument: string

    constructor(
        name: string,
        instrument: string
    ) {
        this.name = name
        this.instrument = instrument
    }

    public play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}

const Page = new Guitarist("Page", "Guitar");
console.log(Page.play("stumps"));

/////////////////////////////////////////////////////////

class Peeps {
    static count: number = 0;

    static getCount(): number {
        return Peeps.count;
    }

    public id: number
    constructor(public name: string) {
        this.name = name;
        this.id = ++Peeps.count;
    }
}

const Dave = new Peeps("Dave");
const John = new Peeps("John");
const Amy = new Peeps("Amy");

console.log(Amy.id);
console.log(John.id);
console.log(Dave.id);
console.log(Peeps.count);

//////////////////////////////////////////////////////////

class Bands {
    private bands: string[];

    constructor() {
        this.bands = [];
    }

    public get data(): string[] {
        return this.bands;
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(item => typeof item === "string"))
            this.bands = value
        else
            throw new Error("Given parameter is not array of string.");
    }
}

const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZ Top"];
console.log(MyBands.data);
// MyBands.data = ["Neil Young", 55];
// console.log(MyBands.data);

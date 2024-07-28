"use strict";
class Coder {
    constructor(name, music, age, language = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.language = language;
        this.name = name;
        this.music = music;
        this.age = age;
        this.language = language;
    }
    getAge() {
        return `Hello, I'm ${this.age}.`;
    }
}
const Ashutosh = new Coder("Ashutosh", "Rock", 25);
console.log(Ashutosh.getAge());
// console.log(Ashutosh.age);
// console.log(Ashutosh.language);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLanguage() {
        return `I write ${this.language}`;
    }
}
const Arun = new WebDev("Mac", "Arun", "Lofi", 29);
console.log(Arun.getLanguage());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Page", "Guitar");
console.log(Page.play("stumps"));
/////////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Dave = new Peeps("Dave");
const John = new Peeps("John");
const Amy = new Peeps("Amy");
console.log(Amy.id);
console.log(John.id);
console.log(Dave.id);
console.log(Peeps.count);
//////////////////////////////////////////////////////////
class Bands {
    constructor() {
        this.bands = [];
    }
    get data() {
        return this.bands;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(item => typeof item === "string"))
            this.bands = value;
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

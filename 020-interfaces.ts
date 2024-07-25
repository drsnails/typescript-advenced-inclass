
// describe the param structure explicitly
// function printLabel1(labelledObj: { label: string, size: number }) {
//     console.log(labelledObj.label.toUpperCase());
// }


// var myObj = { size: 10, label: "This is a label", nunu: true };
// printLabel1(myObj);
// // printLabel1('Bla');

// function printLabelToo(p: { label: string, size: number }) {
//     console.log(p.label);
// }


// var obj = {}
// obj.a = 32

// Switch to an interface:
type Label = string | null
interface LabelledValue {
    label: Label
    size: number
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

function printLabelToo(p: LabelledValue) {
    console.log(p.label);
}

// printLabel(myObj);
// printLabelToo(myObj)




// More Advanced Interfaces Below (ITP)
// --------------------------------- Function Types -------------------------------------------------------------------
interface SearchFunc {
    (source: string, subString: string): boolean;
}

var mySearch: SearchFunc;
mySearch = (src: string, sub: string) => {
    var result = src.search(sub);
    return (result !== -1);
}

console.log('Found? ', mySearch('puki', 'k'));


// --------------------------------- Array Types ---------------------------------------------------------------------

interface StringArray {
    [index: number]: string;
}

// var myArray: StringArray;
var myArray: string[];
myArray = ["Bob", "Fred"];


// --------------------------------- Index Signature ---------------------------------


interface StringMap {
    [key: string]: number
}

var obj: StringMap = {}
obj.a = 100
obj.b = 200
// obj.c = '300'

// --------------------------------- extends ---------------------------------

interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    position: string;
    startDate: Date;
}

interface Computer {
    title: string,
    memory: number
}

const employee: Employee = {
    name: 'Raul',
    age: 24,
    position: 'Junior',
    startDate: new Date()
}


// type Type1 = { name: string }
// type Type2 = { id: number }

// type Type3 = Type1 & Type2

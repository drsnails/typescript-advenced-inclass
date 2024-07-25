
console.log('Starting Up!!')

var isDone: boolean = false
// isDone = 'popo'
var height: number = 6
var petName: string = 'Charli'
// petName = 'Charma'


// Assignment in deceleration set the type
var isDone1 = false
var height1 = 6
var petName1 = 'Charli'



// ---------------------- ARRAYS ----------------------------------------------------
var nums: number[] = [1, 2, 3]
var nums1 = [1, 2, 3]
// nums1.push(true)


var nums2: Array<number> = nums
// nums = ['puki', 'muki']

// var prm = Promise.resolve(5)


// ---------------------- DUCK TYPING ----------------------------------------------------

var users: { id: number, name?: string }[] = [{ id: 1, name: "muki" }, { id: 2 }]
users.push({ id: 9, name: 'ddd' })
users.push({ id: 9 })
// users.push({})

// ---------------------- ANY and CASTING ----------------------------------------------------

var x; // x is ANY forever
x = 8
x = 'as'

var notSure: any = 4
notSure = "maybe a string instead"
notSure = false; // okay, a boolean

var item1 = { id: 1, name: "Shpandrak" }
var item2 = item1
// item2.lala = '6'

// CASTING
// var any1 = item2
// var any1 = item2 as any
// var any1 = <any>item2
// any1.lala = 1000


// (<any>item2).lala = '6'

////////////////////////////////////////////////////

var num: number = 5
// var str = num as string
// var str = (num as unknown) as string

////////////////////////////////////////////////////

// type Item = { title: string, lastUpdated: number, id: string }
// const item = { title: 'radio', id: 'i101' }

// updateItem(item as Item)

// function updateItem(item: Item) {
// }


// ---------------------- FUNCTION SIGNATURE TYPE ----------------------------------------------------

function cb(text: string): void {
    console.log("inside myCallback " + text)
}


function callingFunction(txt: string, cb: (text: string) => void) {
    cb(txt)
}
// callingFunction("muki", "I am not a function I'm a free string")
callingFunction("puki", cb)
callingFunction("puki", alert)
callingFunction("puki", console.log)
// callingFunction("puki", Math.max)
// callingFunction("puki", (a: string) => 'string')





// ---------------------- TYPE INFERENCE ----------------------------------------------------

var arr = [{ fullName: 'Puki' }, { fullName: 'Muki' }]
var smaller = arr.slice(0)
smaller.sort((x, y) => x.fullName.localeCompare(y.fullName))


// ---------------------- UNION TYPES ----------------------------------------------------

type numNumsOrFuncReturnsNum = number | number[] | (() => number)


function add7(p: numNumsOrFuncReturnsNum): number | number[] | void {
    // return p.map(i => i+7)
    // return p + 7
    // p.push(43)
    // These are called Type guards:
    //   if (p instanceof Array) return p.map(i => i+7)
    if (Array.isArray(p)) return p.map(i => i + 7)
    else if (typeof p === 'number') return p + 7
    else if (typeof p === 'function') return p() + 7
}

console.log('add7(9) : ', add7(9))
console.log('add7([1, 2]) : ', add7([1, 2]))
console.log('add7(func()) : ', add7(() => 11))
// console.log('add7(9) : ', add7('9'))






// -------------------- Literal Types -------------------------------------------------

// const str = 'Hello'

type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
const digits: Digit[] = []
digits.push(2)
digits.push(8)
// digits.push(31)


type Option = 'all' | 'date' | 'age'
function boo(value: Option) {

}

boo('date')


//* -------------------- Non-Null Assertion --------------------------------

let myName: string | undefined
// let ans = prompt('')!

testFunc(myName!)
function testFunc(str: string) {
}


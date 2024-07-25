// -------------------- The Identity -------------------------------------------------

// Accept only Strings

// function identity(arg: string): string {
//     return arg;
// }

// let str = identity('10')

// Loose the type defense
// function identity(arg: any): any {
//    return arg;
// }

// let res = identity(34)
// let res2 = identity('hey')

// Generic function: T is a TYPE-ARG
function identity<T>(arg: T): T {
    return arg;
}

// Usually, the type param can be inferred:
var nn = identity(44);
var ss = identity('Samba');
// console.log('First letter: ' + ss.charAt(0));

// var f = identity({ foo: () => console.log('ffffooo!') });
// f.foo()
// var d = identity(new Date());

////////////////////////////////////////////////////

function mix<T1, T2>(arg1: T1, arg2: T2): T2 {
    return arg2;
}

// const rex = mix(7, 'Bamia')

////////////////////////////////////////////////////

interface Pet {
    name: string
    age: 5
}

interface Car {
    speed: number
    vendor: string
}

query<Car>('').then(res => res)


async function query<T>(storageKey: string): Promise<T[]> {
    const items: T[] = []
    return items
}





// --------------------------------- Mapped types ---------------------------------

interface User {
    id: string
    name: string
    age: number
    isAdmin: boolean
}


const user1: User = {
    id: 'p101',
    name: 'Hugh',
    age: 34,
    isAdmin: true
}


// let myKeys: keyof User
let myKeys: 'id' | 'name' | 'age' | 'isAdmin'


////////////////////////////////////////////////////

interface UserReadonly {
    readonly id: string
    readonly name: string
    readonly age: number
    readonly isAdmin: boolean
}


const user2: Readonly<User> = {
    id: 'p102',
    name: 'Bobo',
    age: 35,
    isAdmin: false
}

type _Readonly<T> = {
    readonly [Key in keyof T]: T[Key]
}

// user2.name = 'Mo'
// user2.age = 40


////////////////////////////////////////////////////
interface PartialUser {
    id?: string
    name?: string
    age?: number
    isAdmin?: boolean
}

const fieldsToUpdate: Partial<User> = {
    name: 'Momo',
    age: 40
}



type _Partial<T> = {
    [P in keyof T]?: T[P]
}

////////////////////////////////////////////////////

type Optional<T, P extends keyof T> = {
    [K in keyof Omit<T, P>]: T[K]
} & {
    [F in P]?: T[F]
}



function saveUser(user: Optional<User, 'id' | 'name'>) {
    // alert('id length: ' + user.id.length)
    if (user.id) alert('id length: ' + user.id.length)
    user.age.toFixed()
}



// ////////////////////////////////////////////////////

let val: unknown
// let val: string | number | undefined


if (isString(val)) {
    val.includes('d')
}


function isString(val: unknown): val is string {
    return typeof val === 'string'
}

////////////////////////////////////////////////////


interface Action {
    sayHello: () => string
}


let response: unknown = { sayHello: () => 'hello' }

if (isAction(response)) {
    response.sayHello()
}



function isAction(obj: any): obj is Action {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        'sayHello' in obj &&
        typeof obj.sayHello === 'function'
    )
}

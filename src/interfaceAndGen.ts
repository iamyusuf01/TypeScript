//Interface
interface Chai {
    flavor: string;
    price: number;
    milk?: boolean
}

const masala: Chai = {
    flavor: 'masal',
    price: 30
}


interface Shop {
    readonly id: number,
    name: string
}

const s: Shop = { id: 1, name: 'Chaicode Caffe' }

interface DiscountCalculator {
    (price: number): number
}

const apply50: DiscountCalculator = (p) => p * 0.5

interface TechMachine {
    start(): void,
    stop(): void
}

const machine: TechMachine = {
    start() {
        console.log('start');
    },
    stop() {
        console.log('stop')
    }
}

interface ChaiRating { [flavor: string]: number }

const ratings: ChaiRating = {
    masala: 4.5,
    ginger: 4.2
}

interface User {
    name: string
}

interface User {
    age: number
}

const u: User = {
    name: 'hitesh',
    age: 42
}

interface A { a: string }
interface B { b: string }

interface C extends A, B { }

//Generics 

function wrapInArray<T>(item: T): T[] {
    return [item]
}

wrapInArray('masala')
wrapInArray(42)
wrapInArray({ flavor: 'Ginger' })

function pair<A, B>(a: A, b: B): [A, B] { 
    return [a, b]
}

pair('masala', 20)

interface Box<T> {
    content: T
}

const numberBox: Box<number> = {content: 10}
const numberBoxCup: Box<string> = {content: "10"}
const Chai = {
    name: 'Masala chai',
    price: 20,
    isHot: true
}

let tea: {
    name:string,
    price: number,
    isHot: true
}

tea = {
    name: 'Ginger Tea',
    price: 25,
    isHot: true
}

type Tea = {
    name: string,
    price: number,
    ingredient: string[]
}

const adrakChai: Tea = {
    name: 'Adrak Chai',
    price: 25,
    ingredient: ['ginger', 'tea leaves']
}

type Cup = {size: string};
let smallCup: Cup = {size: '200ml'}

let bigCup = {size: '500ml', material: 'steel'}

smallCup = bigCup

type Brew = {brewTime: number}
const coffee = {brewTime: 5, beans: 'Arabica'}

const chaiBrew: Brew = coffee

type Item= {name:string, quantity:number }
type Address={street: string, pin: number}

type Order = {
    id:string;
    items: Item;
    address: Address
}

type Chai = {
    name: string;
    price: number;
    isHot: boolean
}

const updateChai = (updates: Partial<Chai>) => {
    console.log('Updating chai with', updates)
}

updateChai({price: 24})
updateChai({isHot: false})

type ChaiOrder = {
    name?:string;
    quantity?:number
}

const palceOrder = (order: Required<ChaiOrder>) => {
    console.log(order)
}

palceOrder({
    name: 'masala chai',
    quantity:2
})

type ChaiNew = {
    name: string;
    price: number;
    isHot: true;
    secretIngredient: string
}

type PublicChai = Omit<Chai, 'secretIngredient'>
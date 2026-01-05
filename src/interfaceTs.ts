type chaiOder = {
    type: string;
    sugar: number,
    strong: boolean;
};

function makeChai(order: chaiOder) {
    console.log(order)
}

function serveChai(order: chaiOder) {
    console.log(order)
}

type TeaRecipe = {
    water: number;
    milk: number
}

// class MasalaChai implements TeaRecipe {
//     water = 100;
//     milk = 50;
// }

interface CupSize {
    size: 'small' | 'large'

}

class Chai implements CupSize{
    size: "small" | "large" = 'large';
}

type BaseChai = {teaLeaves: number}
type Extra = {masala: number}

type MasalaChai = BaseChai & Extra

const cup: MasalaChai = {
    teaLeaves: 2,
    masala: 1
}

type User = {
    username: string;
    bio?: string
}

const u1: User = {username: 'Yusuf'}
const u2:User = {username: 'Yusuf', bio: 'yusuf.ai'}

type Config = {
    readonly appName: string
    version: number
}

const cfg: Config = {
    appName: 'Masterji',
    version: 1
}

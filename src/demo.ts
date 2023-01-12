
// Some stuff we have talked about
// Type alias, Union, Narrowing, Literal

// option + 7 makes |

let x: 50 | 100 = 50;

type WorkTitle = string;
let myJob: WorkTitle = "Educator";
let ourJobs: WorkTitle[] = ["Educator", "Student"];

type Hobby = string | undefined;

type NumberOfSomething = 50 | 100;
let y: NumberOfSomething = 50;


type Monster = {
    name: string,
    arms: number,
}

const arrMonster: Monster[] = [
    {
        name: "Bob",
        arms: 12
    },
    {
        name: "Karen",
        arms: 3
    }
];

function createMonster(name: string, arms: number): Monster {
    const m: Monster = {
        name: name,
        arms: arms
    }
    return m;
}

arrMonster.push(createMonster("Nisse", 13));

type Hero = {
    name: string,
    hp: number,
    takeDamage: (damage: number) => void
}

let h: Hero = {
    name: "Gugge",
    hp: 100,
    takeDamage: (damage: number) => {
        h.hp -= damage;
    }
}

let monsterDB: {
    monsters: Monster[],
    addMonster: (n: string, a: number) => void
} = {
    monsters: [
        {
            name: "Bob",
            arms: 12,
        },
        {
            name: "Karen",
            arms: 3
        }
    ],
    addMonster: function (name: string, arms: number): void {
        const m: Monster = {
            name: name,
            arms: arms
        }
        this.monsters.push(m);
    }
}

console.log(monsterDB.monsters);

monsterDB.addMonster("Benny", 33);

console.log(monsterDB.monsters);


/*
const buttonAddElement = document.querySelector("button") as HTMLButtonElement;
buttonAddElement.addEventListener("click", (e) => {
    e.preventDefault();

    const iElement = document.querySelector("#evilScientistName") as HTMLInputElement;
    const sElement = document.querySelector("section:last-child") as HTMLElement;
    sElement.append(iElement.value);

});
*/

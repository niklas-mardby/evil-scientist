/*
const arrScientists: scientists[] = [
    {
    name: true,
    age: 36,
    henchmen: 2,
    description: "Stark som fan",
    },
    {
    name: "Ollof",
    age: 14,
    henchmen: 2,
    description: "Number1234", 
    },
];

const numberArr: number[] = [1, "x", 3, 4];
*/


type scientists = {
    name: string,
    age: number,
    henchmen: number,
    description: string,
}

function addScientist(name: string, age: number, henchmen: number, description: string): scientists {
    const test: scientists = {
        name: name,
        age: age,
        henchmen: henchmen,
        description: description,
    }
    return test;
}


type Monster = {
    name: string,
    arms: number,
}

function createMonster(name: string, arms: number): Monster {
    const m: Monster = {
        name: name,
        arms: arms
    }
    return m;
}


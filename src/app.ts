
type EvilScientist = {
    name: string,
    age: number,
    henchmen: number,
    description: string
}

const evilScientists: EvilScientist[] = [];

const getScientist = function (name: string): EvilScientist | undefined {
    return evilScientists.find(o => o.name === name);
}

const addNameDiv = function (name: string): void {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = name;
    newDiv.addEventListener("click", function (event) {
        event.preventDefault();
        const chosenName = this.innerHTML;
        const chosenScientist = getScientist(chosenName);

        if (chosenScientist) {
            const spanName = document.querySelector("span#name") as HTMLElement;
            const spanAge = document.querySelector("span#age") as HTMLElement;
            const spanHenchmen = document.querySelector("span#henchmen") as HTMLElement;
            const spanDescription = document.querySelector("span#description") as HTMLElement;

            spanName.innerHTML = chosenScientist.name;
            spanAge.innerHTML = String(chosenScientist.age);
            spanHenchmen.innerHTML = String(chosenScientist.henchmen);
            spanDescription.innerHTML = chosenScientist.description;
        }
    });

    (document.querySelector("section#list-names") as HTMLElement).append(newDiv);
}

const addButton = document.querySelector("button");
addButton?.addEventListener("click", (event) => {
    event.preventDefault();

    const nameElement = document.querySelector("input#evilScientistName") as HTMLInputElement;
    const ageElement = document.querySelector("input#evilScientistAge") as HTMLInputElement;
    const henchmenElement = document.querySelector("input#evilScientistHenchmen") as HTMLInputElement;
    const descriptionElement = document.querySelector("input#evilScientistDescription") as HTMLInputElement;

    if (nameElement.value !== "") {
        if (descriptionElement.value === "")
            descriptionElement.value = "-";

        evilScientists.push({
            name: nameElement.value,
            age: Number(ageElement.value),
            henchmen: Number(henchmenElement.value),
            description: descriptionElement.value
        });
        addNameDiv(nameElement.value);

        nameElement.value = "";
        ageElement.value = "";
        henchmenElement.value = "";
        descriptionElement.value = "";
    }
});

// ========= Test Data Related Code ============================
// comment out to start app without any data

const testData = [
    {
        "name": "Evil Bob",
        "age": 44,
        "henchmen": 44,
        "description": "Is very evil"
    },
    {
        "name": "Evil Kim",
        "age": 12,
        "henchmen": 200,
        "description": "Tiny but evil"
    },
    {
        "name": "Evil Alex",
        "age": 23,
        "henchmen": 2,
        "description": "Tries to be evil"
    },
    {
        "name": "Evil Mindy",
        "age": 72,
        "henchmen": 5000,
        "description": "The evilest"
    },
    {
        "name": "Mad X",
        "age": 42,
        "henchmen": 0,
        "description": "Mad for real"
    }
];

const addTestData = function (data: EvilScientist[]): void {
    data.forEach(element => {
        evilScientists.push(element);
    });
}
const addTestDivs = function (): void {
    testData.forEach(scientist => {
        addNameDiv(scientist.name);
    });
}
//addTestData(testData);
//addTestDivs();

const evilScientistList = {
    evilScientists: [
        {
            nickname: "Victor Frankenstein",
            age: 37,
            henchmen: 7,
            description: "Likes to write poetry."
        },
        {
            nickname: "Alfred Nobel",
            age: 26,
            henchmen: 2,
            description: "Killed his brother in a factory accident."
        },
    ],
    loadScientists: function (arr) {
        arr.forEach(scientist => {
            const scientistList = document.querySelector('.scientist-list') as HTMLElement;

            const scientistCard = document.createElement('section')
            scientistCard.className = 'scientist-card';
            scientistList.append(scientistCard)

            const scientistName = document.createElement('h2')
            scientistName.textContent = scientist.nickname;
            scientistCard.append(scientistName);

            const scientistAge = document.createElement('p')
            scientistAge.textContent = `${scientist.nickname} is ${scientist.age} years old`;
            scientistCard.append(scientistAge)

            const henchmen = document.createElement('p')
            henchmen.textContent = `They have ${scientist.henchmen} henchmen working for them.`;
            scientistCard.append(henchmen)

            const description = document.createElement('p')
            description.textContent = scientist.description;
            scientistCard.append(description)
        });
    }
}

evilScientistList.loadScientists(evilScientistList.evilScientists);
var evilScientistList = {
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
        arr.forEach(function (scientist) {
            var scientistList = document.querySelector('.scientist-list');
            var scientistCard = document.createElement('section');
            scientistCard.className = 'scientist-card';
            scientistList.append(scientistCard);
            var scientistName = document.createElement('h2');
            scientistName.textContent = scientist.nickname;
            scientistCard.append(scientistName);
            var scientistAge = document.createElement('p');
            scientistAge.textContent = "".concat(scientist.nickname, " is ").concat(scientist.age, " years old");
            scientistCard.append(scientistAge);
            var henchmen = document.createElement('p');
            henchmen.textContent = "They have ".concat(scientist.henchmen, " henchmen working for them.");
            scientistCard.append(henchmen);
            var description = document.createElement('p');
            description.textContent = scientist.description;
            scientistCard.append(description);
        });
    }
};
evilScientistList.loadScientists(evilScientistList.evilScientists);

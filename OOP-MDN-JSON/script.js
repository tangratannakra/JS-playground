const header = document.querySelector('header');
const section = document.querySelector('section');

let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    const superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}

function populateHeader(jsonObj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
}

class Hero {
    constructor(name, age, secretIdentity, powers) {
        this.name = name;
        this.age = age;
        this.secretIdentity = secretIdentity;
        this.powers = powers;
    }

    renderOnSreen() {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');

        myH2.textContent = this.name;
        myPara1.textContent = 'Secret identity: ' + this.secretIdentity;
        myPara2.textContent = 'Age: ' + this.age;
        myPara3.textContent = 'Superpowers:';

        const superPowers = this.powers;
        for (const power of superPowers) {
            const listItem = document.createElement('li');
            listItem.textContent = power;
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}

function showHeroes(jsonObj) {
    const heroes = jsonObj['members'];
    for (const hero of heroes) {
        const newHero = new Hero(hero.name, hero.age, hero.secretIdentity, hero.powers);
        newHero.renderOnSreen();
    }
}
const pokemon = Object.freeze([
    {
        "id": 1,
        "name": "Bulbasaur",
        "types": ["poison", "grass"]
    },
    {
        "id": 5,
        "name": "Charmeleon",
        "types": ["fire"]
    },
    {
        "id": 9,
        "name": "Blastoise",
        "types": ["water"]
    },
    {
        "id": 12,
        "name": "Butterfree",
        "types": ["bug", "flying"]
    },
    {
        "id": 16,
        "name": "Pidgey",
        "types": ["normal", "flying"]
    },
    {
        "id": 23,
        "name": "Ekans",
        "types": ["poison"]
    },
    {
        "id": 24,
        "name": "Arbok",
        "types": ["poison"]
    },
    {
        "id": 25,
        "name": "Pikachu",
        "types": ["electric"]
    },
    {
        "id": 37,
        "name": "Vulpix",
        "types": ["fire"]
    },
    {
        "id": 52,
        "name": "Meowth",
        "types": ["normal"]
    },
    {
        "id": 63,
        "name": "Abra",
        "types": ["psychic"]
    },
    {
        "id": 67,
        "name": "Machamp",
        "types": ["fighting"]
    },
    {
        "id": 72,
        "name": "Tentacool",
        "types": ["water", "poison"]
    },
    {
        "id": 74,
        "name": "Geodude",
        "types": ["rock", "ground"]
    },
    {
        "id": 87,
        "name": "Dewgong",
        "types": ["water", "ice"]
    },
    {
        "id": 98,
        "name": "Krabby",
        "types": ["water"]
    },
    {
        "id": 115,
        "name": "Kangaskhan",
        "types": ["normal"]
    },
    {
        "id": 122,
        "name": "Mr. Mime",
        "types": ["psychic"]
    },
    {
        "id": 133,
        "name": "Eevee",
        "types": ["normal"]
    },
    {
        "id": 144,
        "name": "Articuno",
        "types": ["ice", "flying"]
    },
    {
        "id": 145,
        "name": "Zapdos",
        "types": ["electric", "flying"]
    },
    {
        "id": 146,
        "name": "Moltres",
        "types": ["fire", "flying"]
    },
    {
        "id": 148,
        "name": "Dragonair",
        "types": ["dragon"]
    }
]);

//1
const Divsible = pokemon.filter(p=>p.id%3==0);
console.log(Divsible);

//2
const fireType = pokemon.filter(p=>p.types.includes("fire"));
console.log(fireType);


3//
const names = pokemon.map(p=>p.name);
console.log(names);


4//
const moreThan = pokemon.filter(p=>p.types.length>1);
console.log(moreThan);


5//
const idGreater = pokemon.filter(p=>p.id>99).map(p=>p.name);
console.log(idGreater);


6//
const onlyType = pokemon.filter(p => p.types.includes("poison")).map(p=> p.name);
console.log(onlyType);


7//
const firstType = pokemon.filter(p=> p.types[1]==("flying")).map(p=>p.types[0]);
console.log(firstType);


//8
const Count = pokemon.filter(p=> p.types.includes("normal")).length;
console.log(Count);



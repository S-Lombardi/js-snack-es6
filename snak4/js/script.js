"use strict"
function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min +1) + min);
}

//Array di squadre
const teams = [
    {
        name: "Grifondoro",
        score: 0,
        fouls: 0,
    },
    {
        name: "Tassorosso",
        score: 0,
        fouls: 0,
    },
    {
        name: "Serpeverde",
        score: 0,
        fouls: 0,
    },
    {
        name: "Corvonero",
        score: 0,
        fouls: 0,
    }
];


let teamsNameFouls = [];

teams.forEach((item) =>{
    
    //Assegno a punti e falli numeri casuali
    let score_random= generateRandomNumber(0, 1000);
    let fouls_random = generateRandomNumber(0, 20);
    
    //Sostiuisco i numeri settati a 0
    item.score = score_random;
    item.fouls = fouls_random;

    //Prendo dall'array solo nomi e falli
    let {name, fouls} = item;

    //inserisco nell'array vuoto le due proprietà
    teamsNameFouls.push({ name, fouls});
    
});

console.log(teamsNameFouls);
    
    


"use strict"

const bikes=[
    {
        name: "SAVA Phantom",
        kg: 8.1,
    },
    {
        name: "Trek Emonda SLR",
        kg: 4.65,
    },
    {
        name: "Cannondale SuperSix",
        kg: 8.0,
    },
    {
        name: "Wilier 0 SLR",
        kg: 6.5,
    }
];

//variabile di controllo
let bikeLight = bikes[0];


bikes.forEach(({name, kg}) =>{
 
    if(kg < bikeLight.kg){

        bikeLight = {name};
    }

})

console.log( `La bici che pesa meno è ${bikeLight.name}`);




"use strict"

const guests =[
    
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
];

console.log(guests)

const placeHolderList = guests.map((item, index,) => {

    let object ={
        table_name: "Tavolo Vip",
        guests_name: item,
        seat : index +1, 
    }

    return object

})

console.log(placeHolderList)
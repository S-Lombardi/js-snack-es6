"use strict"

//Creo la lista degli studenti con un array di oggetti
const students = [
    { 
        'id': 213,
        'name':'Marco della Rovere',
        'grades': 78,
    },
    { 
        'id': 110,
        'name':'Paola Cortellessa',
        'grades': 96,
    },
    { 
        'id': 250,
        'name':'Andrea Mantegna',
        'grades': 48,
    },
    { 
        'id': 145,
        'name':'Gaia Borromini',
        'grades': 74,
    },
    { 
        'id': 196,
        'name':'Luigi Grimaldello',
        'grades': 68,
    },
    { 
        'id': 102,
        'name':'Piero della Francesca',
        'grades': 50,
    },
    { 
        'id': 120,
        'name':'Francesca da Polenta',
        'grades': 84,
    },
];


//Creazione nuova lista con i nomi degli studenti in maiuscolo
const uppercaseStudents = students.map((item) => {
    return  item.name.toUpperCase() ;
});

console.log(uppercaseStudents)

//Creazione lista studenti che hanno il voto superiore a 70
const gradesStudents = students.filter((item) => {

    if(item.grades > 70){

        return item.name
    }

});
console.log(gradesStudents)

//Creazione lista studenti che hanno il voto superiore a 70 e id superiore a 120
const gradesIdStudents = students.filter((item) => {

    if(item.grades > 70  &&  item.id > 120){

        return true
    }
    return false

});
console.log(gradesIdStudents)
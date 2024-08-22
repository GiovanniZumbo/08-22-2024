// PLANNING


/*
Generare un numero random da 1 a 5
Chiedere all'utente di scegliere tra pari e dispari
Chiedere all'utente di scegliere un numero da 1 a 5
Sommare i due numeri
Stabilire se la somma è pari o dispari
Stampare il risultato

*/

// # STAGING
function getRandomNumber(min = 1, max = 5, isMaxIncluded = true) {

    if (isMaxIncluded) max++;
    return Math.floor(Math.random() * (max - min)) + min;

}

// # DATA GATHERING

// * Chiedere all'utente di scegliere tra pari e dispari
const userChoice = prompt("Scegli tra pari o dispari", pari).trim();

//* Chiedere all'utente di scegliere un numero da 1 a 5
const userNumeber = parseInt(prompt("Dammi un numero da 1 a 5", 3));

// # PROCESSING


// # OUTPUT

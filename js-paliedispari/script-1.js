/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

// PLANNING

/*
Prendo gli elementi dal DOM
Leggi la parola da destra verso sinistra
Confronta i due risultati
Se sono uguali, la parola sarà palindroma
*/

// # STAGING

// # DATA GATHERING

const userWord = prompt("Vuoi sapere se la tua parola è palindroma? Scrivila qui sotto.", 'Pottetto').trim();
let reversedWord = '';
let message = '';

//* Leggi la parola da destra verso sinistra

function mirrorWord(userWord) {
    // * Leggi la parola da destra verso sinistra
    reversedWord = userWord.split("").reverse().join("");
    return reversedWord;
}

console.log(mirrorWord(userWord));

//Confronta i due risultati e logga

message = (userWord === reversedWord) ? "La tua parola è un palindromo." : "La tua parola non è un palindromo.";

console.log(message);


// # EVENT HANDLING

// # PROCESSING


// # OUTPUT
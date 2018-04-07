/*
  La tombola magica
  Scrivi un programma che dichiari un array di 5 elementi e
  vi inserisca casualmente i valori da 1 a 90 senza ripetizioni.

  Permetti all’utente di effettuare una partita scegliendo 5
  numeri a suo piacimento e verifica quanti sono presenti nella array principale,
  restituisci un risultato del tipo:
    1 numero uguale => estratto
    2 numeri uguali => ambo
    3 numeri uguali => terno
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina

  In caso di vittoria dovrà essere stampato un messaggio adeguato a tua scelta,
  in caso di perdita dovrà essere concesso un nuovo tentativo senza una nuova
  estrazione.

  Hint: Per generare un numero casuale utlizza la funzione javascript random,
  che restituisce un intervallo compreso tra 0 e 1 e che necessita di essere
  convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/
var arr1 = new Array(5);
var arr2 = [24, 55, 46, 88, 13];
var arr3 = [];
var arr4 = [46, 55, 89, 1, 5];

for (let i = 0; i < 5; i++) {
    arr1[i] = Math.round(Math.random() * 90 + 1);
}

console.log(`I numeri estratti sono: ${arr1}`);
console.log(`I numeri della tua cartella 1 sono: ${arr2}`);
console.log(`I numeri estratti presenti nella tua cartella 1 sono: ${getMatch(arr1, arr2)}`);

if (arr3.length == 1) {
    console.log(`Estratto.`);
} else if (arr3.length == 2) {
    console.log(`Ambo`);
} else if (arr3.length == 3) {
    console.log(`Terno.`);
} else if (arr3.length == 4) {
    console.log(`Quaterna.`);
} else if (arr3.length == 5) {
    console.log(`Tombola!`);
} else {
    console.log(`Hai perso! Ritenta!`);
    console.log(`Ecco i numeri della tua nuova cartella 2: ${arr4}`);
    console.log(`I numeri estratti presenti nella tua cartella 2 sono: ${getMatch1(arr1, arr4)}`);
    if (arr4.length == 1) {
        console.log(`Estratto.`);
    } else if (arr4.length == 2) {
        console.log(`Ambo`);
    } else if (arr4.length == 3) {
        console.log(`Terno.`);
    } else if (arr4.length == 4) {
        console.log(`Quaterna.`);
    } else if (arr4.length == 5) {
        console.log(`Tombola!`);
    }
}




function getMatch(a, b) {

    for (var i = 0; i < a.length; i++) {
        for (var e = 0; e < b.length; e++) {
            if (a[i] === b[e]) {
                arr3.push(a[i]);
            }
        }
    }
    return arr3;
}


function getMatch1(a, b) {

    for (var i = 0; i < a.length; i++) {
        for (var e = 0; e < b.length; e++) {
            if (a[i] === b[e]) {
                arr3.push(a[i]);
            }
        }
    }
    return arr3;
}

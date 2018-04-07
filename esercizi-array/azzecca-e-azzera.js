/*
  Azzecca e azzera
  Scrivi un programma che dichiari un array di 100 elementi interi
  e lo riempia con numeri casuali da 1 a 50.

  Permetti all'utente di inserire una serie di numeri e azzera tutti
  i numeri nell'array principale che contengono un multiplo del numero inserito.

  Il programma termina quando tutti gli elementi dell'array principale
  sono uguali a zero.

  Hint: Per generare un numero casuale utlizza la funzione javascript
  random, che restituisce un intervallo compreso tra 0 e 1 che necessita
  di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/
var arr1 = new Array(100);
var arr2 = [18, 16, 14, 5, 28, 3, 2, 4, 5, 7, 8, 9, 10, 11, 6, 12, 13, 14, 44];
var arr3 = [];

for (let i = 0; i < 100; i++) {
    arr1[i] = Math.round(Math.random() * 100 + 1);
}

arr1 = arr1.sort((a, b) => a - b);
arr2 = arr2.sort((a, b) => a - b);
console.log(arr1);
azzera(arr1, arr2);
console.log(arr3);



var zero = 0;
for (i = 0; i < arr3.length; ++i) {
    if (arr3[i] !== 0) {
        zero = 1;
        break;
    }
}

if (zero) {
  console.log(`Devi riprovare o aggiungere un numero all'array 2. Non sei riuscito ad azzerare l'array 1.`);
} else {
        console.log(`Il programma termina! Tutti i numeri sono stati azzerati.`);
}





function azzera(a, b) {
    for (var i = 0; i < a.length;) {
        for (var e = 0; e < b.length; e++) {
            if (a[i] % b[e] === 0) {
                arr3.push(0);
                i++;
                break;
            } else {
                arr3.push(a[i]);
                i++;
                break;
            }
        }
    }
    return arr3;
}

/*
  Operazioni tra array
  Scrivi un programma che dichiari 2 array di 10 elementi interi e
  li riempia con numeri casuali da 1 a 10.
  Il programma prende in input dall'utente il tipo di operazione
  aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Ed esegue il calcolo tra ogni elemento dei due array salvando
  ciascun risultato in un terzo array di appoggio.

  Hint: Per generare un numero casuale utlizza la funzione javascript
  random, che restituisce un intervallo
  compreso tra 0 e 1 che necessita di essere convertito per il tuo
  intervallo.
  http://www.imparareaprogrammare.it
*/

var arr1 = new Array(10);
var arr2 = new Array(10);
var arr3 = [];
var operazione = 'moltiplicazione';
var calcolo;
var risultato;

for (let i = 0; i <= 10; i++)
{  arr1[i] = Math.round(Math.random() * 10 + 1);  }


for (let i = 0; i <= 10; i++)
{  arr2[i] = Math.round(Math.random() * 10 + 1);  }


for (let i = 0; i <= 10; i++) {
    if (operazione === 'addizione') {
        risultato = arr1[i] + arr2[i];
        arr3[i] = risultato;
    } else if (operazione === 'sottrazione') {
        risultato = arr1[i] - arr2[i];
        arr3[i] = risultato;
    } else if (operazione === 'moltiplicazione') {
        risultato = arr1[i] * arr2[i];
        arr3[i] = risultato;
    } else if (operazione === 'addizione') {
        risultato = arr1[i] / arr2[i];
        arr3[i] = risultato.toFixed(2);
    } else
        console.log(`L'operazione ${operazione} non esiste o non la conosco.`)
}


console.log(`Il primo array é composto dai seguenti numeri: ${arr1}`);
console.log(`Il primo array é composto dai seguenti numeri: ${arr2}`);
console.log(`Il terzo array é composto dai seguenti numeri: ${arr3}, dato che hai scelto l'operazione ${operazione}`);

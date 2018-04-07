/*
  Tanti numeri
  Scrivi un programma che dato un insieme di valori in un array, calcolai la media dei valori e restituisca in output tutti i valori minori della media.
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.
  http://www.imparareaprogrammare.it
*/



var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
var somma = 0;
var sottoMedia = ' ';
var sopraMedia = ' ';
var lunghezzaArray = numbers.length;

for (var i =0; i<numbers.length; i++) { // finchè il contatore è minore della lunghezza dell'array
  somma += numbers[i]; // aggiungiamo a somma ciascun valore dell'array
}

var media = somma/numbers.length; // per ottenere la media, dividiamo la somma degli
                                  // elementi dell'array per la lunghezza dell'array


var i = 0; // contatore impostato a 0
do {
  sottoMedia += numbers[i] + ' '; // aggiungiamo a sottoMedia ciascun valore dell'array
  i++; // e incrementiamo di 1 il contatore
}
while (numbers[i]<media); // finchè, scorrendo ciascun valore dell'array, non ne incontriamo uno
                          // che sia uguale o maggiore della media



do {
  sopraMedia += numbers[i] + ' '; // aggiungiamo a sopraMedia ciascun valore dell'array
  i++; // e incrementiamo il contatore
}
while (numbers[i]>media); // finchè, scorrendo ciascun valore dell'array, non ne incontriamo uno
                          // che sia uguale o minore della media



var quantiSotto = sottoMedia.replace(/ /g, ''); // per calcolare la lunghezza effettiva dell'array,
                                                // eliminiamo gli spazi tra elementi
var quantiSottoMedia = quantiSotto.length; // otteniamo il numero dei valori sotto la media
var quantiSopra = lunghezzaArray-quantiSottoMedia; // quello che resta sarà il numerio di valori sopra la media


console.log('Media valori array: ' + media);
console.log('Valori minori della media: ' + sottoMedia);
console.log('Numero totale valori sotto la media: ' + quantiSottoMedia);
console.log('Valori maggiori della media: ' + sopraMedia);
console.log('Numero totale valori sopra la media: ' + quantiSopra);

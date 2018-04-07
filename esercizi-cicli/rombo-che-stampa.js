/*
  Rombo che stampa!
  Scrivi un programma che riceva in input un numero dispari e stampi un rombo di lettere partendo dal valore, in questo modo:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X
  Hint: per indentare puoi usare il tab con '\t'.
  http://www.imparareaprogrammare.it
*/

/*
  Rombo che stampa!
  Scrivi un programma che riceva in input un numero dispari e
  stampi un rombo di lettere partendo dal valore, in questo modo:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X
  Hint: per indentare puoi usare il tab con '\t'.
  http://www.imparareaprogrammare.it
*/


var n = 7; // rappresenta il numero di input
var i = 1; // contatore parte da 1
var empty = ' '; // riempitivo della stringa del rombo
var full = 'X';
var emptySpace;
var fullSpace;

while (i < n) { // finchè il contatore è minore del numero in input
  var j  = ((n - i) / 2); // sottraiamo i(1) a n(7) e lo dividiamo per due
  fullSpace = full.repeat(i); // ripeti la variabile full(X) per i volte
  emptySpace = empty.repeat(j); // ripeti lo spazio (empty) per j volte (che è (7 - 1) / 2)
  console.log(emptySpace + fullSpace + emptySpace); // stampa gli spazi + le X + gli spazi
  i = i+2; // alla fine del ciclo, incrementa la i di 2
}


while (i >= 1) { // fincheè la i è maggiore o uguale di 1
  var j  = Math.abs((n - i) / 2); // ritorna l'assoluto (positivo) di n(7)-i(1) diviso 2
  fullSpace = full.repeat(i); // ripeti la variabile full(X) per i volte
  emptySpace = empty.repeat(j); // ripeti lo spazio (empty) per j volte (che è (7 - 1) / 2)
  console.log(emptySpace + fullSpace + emptySpace); // stampa gli spazi + le X + gli spazi
  i = i-2; // alla fine del ciclo, decrementa la i di 2
}

/*
  Invertimi
  Scrivi un programma che prenda in input un numero N che
  generi una serie di N numeri all'interno di un array,
  stampa la serie di numeri ma invertendola.

  Variante
  Non utilizzare array di appoggio per inversione.
  http://www.imparareaprogrammare.it
*/


var numero = 10; // numero di volte da cui genereremo i numeri da inserire nell'array
var numeri = []; // creiamo un array vuoto
var i = 0; // contatore parte da 0

while (i <= numero) { // finchè il contatore che incrementeremo di 1 è minore del numero
  numeri[i] = Math.floor(Math.random() * 17); // inseriamo nell'array un numero qualsiasi tra 0 e 1 moltiplicato per 17
  i++; // incrementiamo la i di 1 finchè non sarà uguale al numero(10)
}

console.log(numeri);
console.log(numeri.reverse());

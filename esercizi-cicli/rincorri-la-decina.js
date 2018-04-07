/*
  Rincorri la decina
  Scrivi un programma che che stampi i numeri da 1 a 100 andando a capo ogni 10.
  Hint: per andare a capo stampa '\n'.
  http://www.imparareaprogrammare.it
*/

var result = '\n'; // variabile result contiene il vai a capo
var i = 1; // variabile i che parte da 1

while (i < 100) { // finchè i è minore di 100
    for (var j = 1; j <= 10; j++) { // riga della tabella: finchè j che parte da 1 è minore di 10
        result += (i++) + ' '; // incrementa la i di 1 e aggiungi alla variabile risultato la i incrementata di 1 più uno spazio
      }
        result += '\n' // quando j è maggiore di 10, invece, aggiungi a capo alla variabile result
}

console.log(result);

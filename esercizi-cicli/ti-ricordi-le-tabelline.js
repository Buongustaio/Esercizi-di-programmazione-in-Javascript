/*
  Ti ricordi le tabelline?
  Scrivi un programma che stampi che prenda in input un numero e stampi la tabellina corrispondente.
  http://www.imparareaprogrammare.it
*/

var result = ''; // variabile result che fungerà da contenitore nel ciclo
var numero = 9; // numero da moltiplicare per ottenere la sua tabellina

for (var i = 1; i <= 10; i++) { // finchè i, che parte da 1, è minore di 10
        result += (numero*i) + ' '; // aggiungi alla variabile result il numero deciso (9) e moltiplicalo per la i incrementata e aggiungi uno spazio
}

console.log(result);

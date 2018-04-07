/*
  Pari o dispari?
  Scrivi un programma che prenda in input un numero intero e restituisca 0 se è pari o 1 se è dispari.
  http://www.imparareaprogrammare.it
*/

function pariDispari(numero) {
  if (numero%2===0) {
  console.log('Il numero che hai inserito è pari');
}
  else {
    console.log('Il numero che hai inserito è dispari');
  }
}

pariDispari(5);

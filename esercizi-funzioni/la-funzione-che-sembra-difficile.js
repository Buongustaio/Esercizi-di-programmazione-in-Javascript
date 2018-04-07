/*
  La funzione che sembra difficile

  Scrivi una funzione che prenda in input due numeri N e K e
  restituisca la k-esima cifra (partendo da destra) di N.

  Se K è maggiore del numero delle cifre di N, la funzione restituirà 0.
    Input : 123456, 3
    Output:
            4
  http://www.imparareaprogrammare.it
*/



console.log(esima(123456789,3));

function esima(N,K){
  var stringa = N.toString().split(''); //convertiamo prima in numero e poi in array
  return stringa[stringa.length-K]; // la lunghezza della stringa trasformata in array meno la variabile K
}

/*
  Somma e media
  Scrivi un programma che prenda in input 5 numeri a tua scelta e restituisca in output la somma e la media.
  http://www.imparareaprogrammare.it
*/

function sum_average(n1, n2, n3, n4, n5) {
  var totale = n1+n2+n3+n4+n5;
  var media = (n1+n2+n3+n4+n5)/5;
  console.log(`la somma dei numeri che hai inserito è: ${totale}`);
  console.log(`la media matematica dei numeri che hai inserito è: ${media}`);
}

sum_average(5,7,10,10,12);

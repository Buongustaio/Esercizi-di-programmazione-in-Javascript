/*
  Primo e ultimo
  Scrivi due funzioni, una che prenda in input tre numeri e
  restituisca il maggiore, l'altra che restituisca il minore.

  Variante
  Scrivi due funzioni che prendano in input un array di numeri,
  una funzione deve restituire il valore maggiore contenuto nell'array, l'altra il valore minore.
  http://www.imparareaprogrammare.it
*/


console.log(maggiore([123,144,125]));
console.log(minore([120, 44, 7]));


function maggiore(array) {
  return Math.max(...array);
}

function minore(array) {
  return Math.min(...array);
}

/*
function maggiore(a,b,c,) {
  if (a>b && a>c){
    return a;
  } else if (b>a && b>c) {
    return b;
  } else {
    return c;
  }
}

function minore(a,b,c,) {
  if (a<b && a<c){
    return a;
  } else if (b<a && b<c) {
    return b;
  } else {
    return c;
  }
}
*/

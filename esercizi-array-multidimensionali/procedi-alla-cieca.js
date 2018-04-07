/*
  Procedi alla cieca
  Scrivi un programma che stampi il contenuto di una matrice
  i cui valori interi sono generati casualmente nel range di 0 e 100.

  http://www.imparareaprogrammare.it
*/

var array = [];
array[0] = [];

for (let i=0; i<=10; i++) {
  array[0][i] = Math.round(Math.random() * 100);
}


console.log(array[0]);

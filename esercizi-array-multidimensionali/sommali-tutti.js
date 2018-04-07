/*
  Sommali tutti
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali da 1 a 100.
    - Stampi la matrice e la somma di tutti i valori contenuti.

    Input :
      2 3
    Output:
      [
        [1, 50, 100],
        [1, 20, 40],
      ]
      212

  http://www.imparareaprogrammare.it
*/

var N = 3;
var M = 4;
var arr1 = [];
var arr2 = [];
var somma = 0;

for (let i = 0; i < N; i++) { // arr2[[x]]....arr2[[x][x]]...
    arr2 = [i];
    for (let i = 0; i < M; i++) {
        arr2[i] = Math.ceil(Math.random() * 100); // arr2[x]...arr2[x,x]...arr2[x,x,x]...
    }
    arr1[i] = arr2; // arr1[[arr2]]...arr1[[arr2][arr2]]...
}

console.log(arr1);



for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        somma += arr1[i][j]; // arr1[0][0]...arr1[0][1]...arr1[1][0]...arr1[1][1]...
    }
}
console.log(somma);

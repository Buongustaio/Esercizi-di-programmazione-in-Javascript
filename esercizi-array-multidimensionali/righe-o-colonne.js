/*
  Righe o colonne?
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali da 1 a 100.
    - Dichiari due array, l'array R di N elementi e l'array C di M elementi.
    - Salvi, nell'array R le somme di ogni riga della matrice e nell'array
      C le somme di tutte le colonne.
    - Stampi la matrice e le due array.

    Input :
      2 3
    Output:
      [
        [1, 50, 100],
        [1, 20, 40],
      ]

      Array R
        [152, 61]
      Array C
        [2, 70, 140]

  http://www.imparareaprogrammare.it
*/

var N = 2;
var M = 3;
var arr1 = [];
var arr2 = [];
var R = [];
var C = [];
var somma = 0;

for (let i=0; i<N; i++) { // arr2[[x]]....arr2[[x][x]]...
  arr2 = [i];
  for (let i=0; i<M; i++) {
    arr2[i] = Math.round(Math.random() * 100 + 1); // arr2[x]...arr2[x,x]...arr2[x,x,x]...
  }
  arr1[i] = arr2; // arr1[[arr2]]...arr1[[arr2][arr2]]...
}
console.log(`Il primo array è composto dai seguenti numeri:`);
console.log(arr1.join('\n'));



for (let i=0; i<N; i++) { // R[[x]]....R[[x][x]] => N=2
  R[i] = 0; // definisco i numeri all'interno dell'array vuoto, altrimenti riceviamo undefined
  for (let j=0; j<M; j++) {
    R[i] += arr1[i][j]; // all'array R aggiungiamo il valore degli elementi in ciascuna riga dell'arr1
  }
}
console.log(`Ecco le somme di ciascuna delle righe del primo array:`);
console.log(R.join('\n'));



for (let i=0; i<M; i++) {
  C[i] = 0; // definisco i numeri all'interno dell'array vuoto, altrimenti riceviamo undefined
  for (let j=0; j<N; j++) {
    C[i] += arr1[j][i]; // all'array C aggiungiamo il valore degli elementi in ciascuna colonna dell'arr1
  }
}

console.log(`Ecco le somme di ciascuna delle colonne del primo array:`);
console.log(C.join('\n'));

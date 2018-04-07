/*
  Le tabelline nel tabellone

  Scrivi un programma che stampi il tabellone delle tabelline, da 0 a 10.
  In questo modo:
    x | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0
    1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    2 | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20
    ...
    10 | 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100

  http://www.imparareaprogrammare.it
*/
var array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var array2 = [];
var array3 = [];

console.log(`x || ${array1.join(' | ')}`);

for (var i = 0; i <= (array1.length)-1; i++) {
    for (var j = 0; j <= (array1.length)-1; j++) {
        array2[j] = array1[i] * array1[j];
        array3[j] = array2[j] + ' | ';
    }
    console.log(`${array1[i]} || ${array3.join('')}`);
}

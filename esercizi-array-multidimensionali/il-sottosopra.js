/*
  Il sottosopra
  Scrivi un programma che prenda in input un array multidimensionale e stampi in
  output la sua trasposta, in questo modo:

    Input :
      [
        [1, 2],
        [3, 4],
        [5, 6]
      ]

    Output:
      [
        [1, 3, 5],
        [2, 4, 6],
      ]

  http://www.imparareaprogrammare.it
*/


var arr1 = [ [1,2], [3,4], [5,6], [7,8], [9,10] ];
var arr2 = new Array(3);
var arr3 = [];

for (let i=0; i<arr1.length; i++) {
  arr2[i] = arr1[i][0];
  arr3[i] = arr1[i][1];
}

console.log(arr2);
console.log(arr3);

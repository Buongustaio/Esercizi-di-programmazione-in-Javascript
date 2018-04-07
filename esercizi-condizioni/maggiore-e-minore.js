/*
  Maggiore e minore
  Scrivi un programma che prenda quattro numeri in input, stampi in output il maggiore e il minore.
  http://www.imparareaprogrammare.it
*/


var num = Math.floor((Math.random() * 100) + 1);
console.log(`Il numero sorteggiato è ${num}`);

var primo = 68;
var secondo = 44;

if (primo==secondo) {
  console.log(`I due utenti hanno scelto lo stesso numero!`);
  if (primo==num) {
    console.log(`Complimenti a tutti e due! Il numero estratto è ${num} come avete detto voi!!`);
  } else {
    console.log(`Peccato per entrambi! Mancavano ${num-primo} per fare ${num}!`);
  }
} else if (primo==num) {
console.log(`Complimenti primo utente, hai indovinato! Il numero sorteggiato è esattamente ${primo}!`);
} else if (primo==num) {
console.log(`Complimenti secondo utente, hai indovinato! Il numero sorteggiato è esattamente ${secondo}!`);
} else if (Math.abs(num-primo)<Math.abs(num-secondo)) {
console.log(`Bravo primo utente, avevi detto ${primo} e ti sei avvicinato di piú dell'secondo utente! (${num-primo} per fare ${num}!)`);
}
else {
console.log(`Bravo secondo utente, avevi detto ${secondo} e ti sei avvicinato di piú dell'primo utente! (${num-secondo} per fare ${num}!)`);
}

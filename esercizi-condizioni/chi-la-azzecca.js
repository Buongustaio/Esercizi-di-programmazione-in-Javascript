/*
  Chi l'azzecca?
  Scrivi un programma che generi un numero casuale compreso tra 1 e 100 (zero escluso).
  Successivamente prendi in input altri due numeri di due ipotetici utenti, e comunica se uno dei due ha azzeccato il numero casuale, in caso contrario quale dei due si è avvicinato di più al numero.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/

var num = Math.floor((Math.random() * 100) + 1);
console.log(`Il numero sorteggiato è ${num}`);

var primo = 44;
var secondo = 91;


if (num == primo) {
  console.log('Complimenti primo utente, hai indovinato! Il numero sorteggiato è esattamente ${primo}!');
} else if (primo-num>num-secondo) {
  console.log(`Bravo primo utente, avevi detto ${primo} e ti sei avvicinato molto! (${num-primo} per fare ${num}!)`);
}
  else {
    console.log('Mi dispiace primo utente, ci è andato più vicino il secondo utente!');
  }


if (num == secondo) {
  console.log('Complimenti secondo utente, hai indovinato! Il numero sorteggiato è esattamente ${secondo}!');
} else if (secondo-num<num-primo) {
  console.log(`Bravo secondo utente, avevi detto ${secondo} e ti sei avvicinato molto! (${num-secondo} per fare ${num}!)`)
}
  else {
    console.log('Mi dispiace secondo utente, ci è andato più vicino il primo utente!')
  }

/*
  I primi numeri… primi!

  Scrivi una funzione che prenda in input un numero e restituisca TRUE
  se è un numero primo, FALSE altrimenti.

  Scrivi una seconda funzione, che prenda in input un numero N e stampi i
  primi N numeri primi. Per farlo puoi richiamare la prima funzione.

    Input : 5
    Output:
            2
            3
            5
            7
            11
  http://www.imparareaprogrammare.it
*/


console.log(numeroPrimo(5));


function numeroPrimo(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) { // se il numero inserito è divisibile per 2, non è un numero primo
      return false;
    }
  return num !== 1; // se non entri nel ciclo if, numero è diverso da 1
}

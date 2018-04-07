/*
  La difficoltà del fattoriale
  Scrivi una funzione che calcoli in maniera iterativa (usando un ciclo)
  il fattoriale di un numero preso in input.
    Input : 5
    Output:
            120
  Hint: 5! = 5*4*3*2*1
  http://www.imparareaprogrammare.it
*/

console.log(fattoriale(5));

function fattoriale(numero){
  var risultato = numero; // risultato = 5
  for (let i=numero; i>1; i--) { // il contatore parte da 5 e finchè è maggiore di 1, lo diminiuiamo di 1
    risultato = risultato * (i-1); // il risultato è uguale a se stesso moltiplicato per il contatore diminuito meno 1
  }
  return risultato;
}

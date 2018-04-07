/*
  Tick, tack, timer!

  Scrivi un programma che dato un numero in input, stampi il conto
  alla rovescia a partire dal numero acquisito.

    Input : 5

    Output:
            4
            3
            2
            1
            0
  http://www.imparareaprogrammare.it
*/

console.log(conta(300));

function conta(numero) {
  var contatore = '';
  for (let i=1; i<=numero; i++){
    contatore += numero - i + '\n';
  }
  return contatore;
}

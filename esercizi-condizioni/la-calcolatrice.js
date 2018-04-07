/*
  La calcolatrice
  Scrivi un programma che prenda tre input:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Le operazioni supportate sono le suguenti:
    somma => +
    sottrazione => -
    moltiplicazione => *
    divisione => /
    modulo (solo tra interi) => %
    potenza => ^
    media => m
  Utilizza il costrutto Switch-Case mediante acquisizione di caratteri.
  http://www.imparareaprogrammare.it
*/

var a = 41;
var b = 35;
var operazione = 'divisione';

console.log(`I numero da te inseriti sono A:${a} e B:${b}. L'operazione da te selezionata è ${operazione}`);

switch (operazione) {
  case 'somma':
    console.log(`La somma di A e B è ${a+b}`);
    break;
  case 'sottrazione':
    console.log(`La sottrazione di A meno B è ${a-b}`);
    break;
  case 'moltiplicazione':
    console.log(`La moltiplicazione di A per B è ${a*b}`);
    break;
  case 'divisione':
     console.log(`La divisione di A e B è ${(a/b).toFixed(2)}`);
     break;
  case 'modulo':
      console.log(`Il resto della divisione tra A e B è ${Math.round(a%b)}`);
      break;
  case 'potenza':
      console.log(`A elevato a B fa ${a^b}`);
      break;
  case 'media':
      console.log(`La media di A e B è ${a+b/2}`);
      break;
}

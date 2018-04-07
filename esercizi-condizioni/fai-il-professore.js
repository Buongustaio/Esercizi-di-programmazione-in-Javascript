/*
  Fai il professore
  Scrivi un programma che converte un voto numerico in un giudizio seguendo questi parametri:
    v < 18:  insufficiente
    18 < = v <21:  sufficiente
    21 < = v <24:  buono
    24 < = v <27:  distinto
    27 < = v <29:  ottimo
    v = 30:  eccellente
  Utilizza costrutto If.

  Variante
  Realizzare una versione con il costrutto Switch-Case.
  http://www.imparareaprogrammare.it
*/

var voto = 24;
console.log(`Punti totalizzati: ${voto}.`)

if (voto<18) {
  console.log('Voto finale: Insufficiente');
} else if (voto<=21) {
    console.log('Voto finale: Sufficiente');
} else if (voto<=24) {
    console.log('Voto finale: Buono');
} else if (voto<=27) {
    console.log('Voto finale: Distinto');
} else {
  console.log('Voto finale: Ottimo');
}


var voto = 29;
console.log(`Punti totalizzati: ${voto}.`)

switch(voto) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
      console.log('Voto finale: Insufficiente');
      break;
    case 18:
    case 19:
    case 20:
    case 21:
      console.log('Voto finale: Sufficiente');
      break;
    case 22:
    case 23:
    case 24:
      console.log('Voto finale: Buono');
      break;
    case 25:
    case 26:
    case 27:
      console.log('Voto finale: Distinto');
      break;
    case 28:
    case 29:
    case 30:
      console.log('Voto finale: Ottimo');
      break;
}

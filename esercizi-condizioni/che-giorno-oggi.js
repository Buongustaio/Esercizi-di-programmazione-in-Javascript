/*
  Che giorno è oggi?
  Scrivi un programma che accetti in ingresso un numero intero compreso tra 1 a 7 e visualizzi il corrispondente giorno della settimana, esempio:
    1 => lunedì
    2 => martedì
    3 => mercoledì
    ...
    6 => domenica
  Utilizza il costrutto Switch-case, prevedi anche il caso in cui il valore immesso non sia valido, e stampare un messaggio di errore a tua scelta.

  Variante
  Scriverne una versione che anziché i giorni della settimana, visualizzi i nomi dei mesi.
  http://www.imparareaprogrammare.it
*/


var giorno = 5;
console.log(`Hai scelto il numero ${giorno}`);


switch (giorno) {
  case 1:
        console.log('1 corrisponde a Lunedì');
        break;
  case 2:
        console.log('2 corrisponde a Martedì');
        break;
  case 3:
        console.log('3 corrisponde a Mercoledì');
        break;
  case 4:
        console.log('4 corrisponde a Giovedì');
        break;
  case 5:
        console.log('5 corrisponde a Venerdì');
        break;
  case 6:
        console.log('6 corrisponde a Sabato');
        break;
  case 7:
        console.log('7 corrisponde a Domenica');
        break;
 default:
        console.log('Hai inserito un numero che non corrisponde a un giorno della settimana.');}




var mese = 8;
console.log(`Hai scelto il numero ${giorno}`);


switch (mese) {
  case 1:
        console.log('1 corrisponde a Gennaio');
        break;
  case 2:
        console.log('2 corrisponde a Febbraio');
        break;
  case 3:
        console.log('3 corrisponde a Marzo');
        break;
  case 4:
        console.log('4 corrisponde a Aprile');
        break;
  case 5:
        console.log('5 corrisponde a Maggio');
        break;
  case 6:
        console.log('6 corrisponde a Giugno');
        break;
  case 7:
        console.log('7 corrisponde a Luglio');
        break;
   case 8:
        console.log('7 corrisponde a Agosto');
        break;
   case 9:
        console.log('7 corrisponde a Settembre');
        break;
   case 10:
        console.log('7 corrisponde a Ottobre');
        break;
   case 11:
        console.log('7 corrisponde a Novembre');
        break;
   case 12:
        console.log('7 corrisponde a Dicembre');
        break;
 default:
        console.log('Hai inserito un numero che non corrisponde a un giorno della settimana.');}

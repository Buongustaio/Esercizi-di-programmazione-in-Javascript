/*
  Menu dei dolci
  Scrivi un programma stampi il seguente menu:
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia
  Inoltre, prenda in input il valore numerico della scelta.
  Se la scelta non è tra quelle elencate verrà stampata la scritta 'Dolce non disponibile' altrimenti verrà visualizzata la scelta effettuata 'Hai scelto il dolce X'.
  http://www.imparareaprogrammare.it
*/


var menu = ["1. Tiramisù", "2. Torta della nonna", "3. Cheesecake alla nutella", "4. Macedonia" ];
var i;
var testo = '';


for ( i = 0; i < menu.length; i++ ) {
  testo += menu[i] + '\n';
}
console.log('MENU : \n' + testo);



function scelta(dolce) {

 switch(dolce) {
  case 1 :
   console.log('Hai scelto il Tiramisù');
    break;
  case 2:
   console.log('Hai scelto la Torta della nonna');
    break;
  case 3 :
    console.log('Hai scelto la Cheesecake alla nutella');
    break;
  case 4 :
    console.log('Hai scelto la Macedonia');
    break;
  default:
     console.log('Dolce non disponibile');
 }
}

scelta(3);

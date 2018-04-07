/*
  Un bel garage
  Scrivi un programma per la gestione di un garage:

  - Definisci un oggetto che rappresenti un automobile, dovrà
  contenere almeno marca del veicolo e nome del modello.

  - Scrivi una funzione che prenda in input una marca e stampi
  i modelli presenti nel garage di quella stessa marca.
​
  Hint: puoi usare un array come base per salvare le automobili.
​
  http://www.imparareaprogrammare.it
*/
​
​
var modelli = [];
var filtrato;
​
var garage = [
    {marca: 'Audi', modello: 'A4' },
    {marca: 'Audi', modello: 'A2' },
    {marca: 'Fiat', modello: 'Bravo'},
    {marca: 'Audi', modello: 'A3' },
    {marca: 'Alfa Romeo', modello: 147},
    {marca: 'Volkswagen', modello: 'Golf'}
];
​
​
auto('Alfa Romeo');
​
​
function auto(make) {
  for (var i=0; i < garage.length; i++) {
    if (garage[i].marca == make) {
      modelli[i] = garage[i].modello;
      filtrato = modelli.filter(function(val){ return val!==undefined; });
    }
}
  console.log(`Ecco i modelli di ${make} che ho in garage: ${filtrato.join(', ')}`);
}

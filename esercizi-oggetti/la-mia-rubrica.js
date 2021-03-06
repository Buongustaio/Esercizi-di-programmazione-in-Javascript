/*
  La mia rubrica

  Scrivi un programma per la gestione di una rubrica telefonica.

  - Definisci un oggetto che rappresenti un contatto e, visto che stai
    diventando bravo/a, le proprietà dell'oggetto sono a tua discrizione.
    L'unico vincolo che hai è di inserire almeno il nome e il numero di
    telefono come stringhe.

  - Definisci un altro oggetto che rappresenti la lista dei contatti,
    quindi sarà formato da un array di contatti.

    Implementa i metodi dell'oggetto per le seguenti operazioni:
      - Visualizzazione dell'intera lista contatti
      - Inserimento di un nuovo contatto
      - Modifica di uno contatto passando in input l'indice dell'array
      - Cancellazione di un contatto passando in input l'indice dell'array
      - Ricerca passando il nome e restituendo il singolo contatto.

      Gestire quindi un array di oggetti prevedendo la possibileà di:
      inserire, modificare, visualizzare, ricercare e cancellare contatti della
      rubrica.
​
  Variante
  Migliora i metodi di Modifica e Cancellazione, al posto di prendere in
  input l'indice dell'array passa in input il nome e ricava l'indice sul
  quale applicare l'operazione.
​
  http://www.imparareaprogrammare.it
*/
​
​
​
var Simonetta = {
  nome: 'Mattia',
  numero: '3381234567',
  indirizzo: 'Via del Porto'
}
​
var Porreca = {
  nome: 'Daniele',
  numero: '3381234568',
  indirizzo: 'Via Roma'
}
​
var Mazzola = {
  nome: 'Alessandro',
  numero: '3381234569',
  indirizzo: 'Via Torino'
}
​
var contatti = [Simonetta, Porreca, Mazzola];
​
​
​
inserisci('Berrino', 'Diego', '3381234561', 'Via del Vaschetto');
cancella('Simonetta');
visualizza(contatti, 'nome');
ricerca('Ales');
​
​
function visualizza(lista, x, y, z) {
  for (var i=0; i<lista.length; i++) {
    if(x=='nome'){
    console.log(`${lista[i].nome}`);
    }
    else if (x=='numero'){
      console.log(`${lista[i].numero}`);
    }
    else {
      console.log(`${lista[i].indirizzo}`);
    }
  }
}
​
​
function inserisci(contatto, n, m, i) {
  contatti.push(contatto = {
    nome: n,
    numero: m,
    indirizzo: i
  });
}

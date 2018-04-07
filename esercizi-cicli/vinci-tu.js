/*
  Vinci tu!
  Scrivi un programma che simula un gioco di dadi tra due utenti, prendi in input il numero
  di quanti tiri effettuare per ciascun giocatore (N), dopodiché ogni utente tira N volte un dado a sei facce.
  Stampa il vincitore che ha totalizza più punti.
  http://www.imparareaprogrammare.it
*/
var turni = 10; // numero di turni
var risultato1 = ''; // contenitore del risultato del giocatore2 per il ciclo do-while
var i = 0; // contatore che parte da 0
var tiro1 = 0; // variabile che conterrà ogni risultato del tiro del dado con il metodo Math.random()
var giocatore1 = 0; // variabile che conterrà il totale dei punti effettuati con i tiri del dado


do {
    tiro1 = (Math.floor(Math.random() * 6) + 1); // esegui il tiro random => (da 0 a 1) + 6 + 1 e arrotonda per difetto
    risultato1 += tiro1 + ' '; // alla variabile risultato1, aggiungi il numero che è uscito e aggiungi uno spazio
    i++; // incrementa il contatore i per contare il numero di tiri, che deve essere inferiore al numero di turni (10)
    giocatore1 += tiro1; // somma il tiro del dado alla variabile giocatore1
} while (i < turni);

console.log(`Giocatore 1: \nGiocate: ${risultato1} \nTotale di: ${giocatore1} punti`);


var risultato2 = ''; // contenitore del risultato del giocatore2 per il ciclo do-while
var i = 0; // contatore che parte da 0
var tiro2 = 0; // variabile che conterrà ogni risultato del tiro del dado con il metodo Math.random()
var giocatore2 = 0; // variabile che conterrà il totale dei punti effettuati con i tiri del dado

do {
    tiro2 = (Math.floor(Math.random() * 6) + 1); // esegui il tiro random => (da 0 a 1) + 6 + 1 e arrotonda per difetto
    risultato2 += tiro2 + ' '; // alla variabile risultato2, aggiungi il numero che è uscito e aggiungi uno spazio
    i++; // incrementa il contatore i per contare il numero di tiri, che deve essere inferiore al numero di turni (10)
    giocatore2 += tiro2; // somma il tiro del dado alla variabile giocatore2
} while (i < turni);

console.log(`Giocatore 2:\nGiocate: ${risultato2} \nTotale di: ${giocatore2} punti`);


if (giocatore1 > giocatore2) // se la somma dei punti del giocatore1 è maggiore di quella del giocatore2
    {  console.log(`Giocatore 1 vince!`);  }
else if (giocatore1 == giocatore2)
    { console.log(`Avete fatto gli stessi punti!`);  }
else
    {  console.log(`Giocatore 2 vince!`);  }

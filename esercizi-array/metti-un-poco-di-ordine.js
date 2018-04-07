/*
  Metti un po' d'ordine
  Scrivi un programma che data un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.
  Variante
  Prova ad ordinali in modo crescente.
  http://www.imparareaprogrammare.it
*/


var numeri = []; // array dichiarato vuoto

for (var i = 0; i <= 10; i++) { // finchè il contatore è inferiore o uguale a 10
    numeri[i] = Math.floor(Math.random() * 90 + 1); // inseriamo un numero casuale tra 1 e 90 nell'array
}
console.log(`L'array generato con numeri random è: ${numeri}`);


numeri.sort(function(a, b)
            {  return b - a;  }); // Per comparare numeri invece che stringhe
                                  // la funzione espressione sottrae a da b
                                  // il che vuol dire che la funzione ordina
                                  // l'array in modo decrescente

console.log(`Array ordinato in modo descrescente ${numeri}`);


numeri.sort(function(a, b) // Per comparare numeri invece che stringhe
                           // la funzione espressione sottrae b da a
                           // il che vuol dire che la funzione ordina
                           // l'array in modo crescente
            {  return a - b;  });

console.log(`Array ordinato in modo crescente ${numeri}`);

/*
  Conta il tempo
  Scrivi un programma che prenda in input un numero di secondi e calcoli la quantità di ore, minuti e secondi corrispondenti, poi stampa il risultato. L'output avrà solo numeri interi.
  Esempio
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.
  http://www.imparareaprogrammare.it
*/

function conversione(totSecondi) {
  var ore = Math.floor(totSecondi/3600);  //numero di ore totali con arrotondamento
  var mancanti = totSecondi - (ore*3600);  //numero di secondi mancanti, escludendo le ore
  var minuti = Math.floor(mancanti/60);  //numero di minuti totali con arrotondamento
  var secondi = mancanti - (minuti*60);  //numero rimanente di secondi

    //Se il totale dei secondi è maggiore o uguale a 3600, significa che il calcolo include i giorni
    if (totSecondi>=3600) {
        console.log(`${totSecondi} secondi corrispondono a ${ore} ore, ${minuti} minuti e ${secondi} secondi`);
    }
    //Se il totale dei secondi è minore di 3600 e maggiore di 60, significa che il calcolo esclude i giorni
   else if (totSecondi<3600 && totSecondi>60) {
    console.log(`${totSecondi} secondi corrispondono a ${minuti} minuti e ${secondi} secondi`);
  }
   //Se il totale dei secondi è minore di 60, significa che il calcolo include solo i secondi
  else {
    console.log(`${totSecondi} secondi corrispondono a ${secondi} secondi`);
  }
}


conversione(78000);

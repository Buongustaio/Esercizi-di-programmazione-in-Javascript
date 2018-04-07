/*
  Verifica la data

  Scrivi un programma che definisca un oggetto per la rappresentazione di una data,
  l'oggetto sarà composto da giorno, mese e anno (input a piacere).

  Adesso, scrivi una funzione che prenda in input la data e verifichi se è valida o meno, in questo modo:

    Input:
      day: 18
      month: 19
      year: 2016

    Output:
      "La data non è valida!"

  http://www.imparareaprogrammare.it
*/


var data = {};


controllo(26,12,2016);

function controllo(d,m,y) {
  if (d > 31 || m > 12 || y > 2018){
    console.log('La data non è valida!')
  } else {
    data = {
      day: d,
      month: m,
      year: y
    }
    console.log(`La data che hai inserito è corretta ed è la seguente: ${data.day} ${data.month} ${data.year}`);
  }
}

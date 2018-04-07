/*
  Quanti anni ha?
  Scrivi un programma che prenda in input un anno di nascita e determini l'età della persona, calcola anche quanti anni sono necessari per raggiungere i 100. Stampa in output entrambi i risultati.
  http://www.imparareaprogrammare.it
*/

function anno(year) {
  var anno = new Date();
  var annoCorrente = anno.getFullYear();
  var età = annoCorrente - year;
  var cento = 100 - età;
  console.log(`Ciao! Grazie per l'Input! Ora so che hai ${età} anni!`)
  console.log(`Ti mancano ancora ${cento} anni per raggiungere i 100!`)
}

anno(1918);

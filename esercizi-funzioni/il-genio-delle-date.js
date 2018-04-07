/*
  Il genio delle date
  Scrivi una funzione che prenda in input due argomenti, il Giorno e il Mese.
  La funzione deve restituire il numero del giorno compreso tra 1 e 366.
    Input : 5, 2
    Output:
            36

  Hint: puoi definire un array con i giorni di ogni mese e ciclarlo.
  http://www.imparareaprogrammare.it
*/


console.log(contaGiorni(3,12));


function contaGiorni(giorno, mese){
  var giorniMese = [31,28,31,30,31,30,31,31,30,31,30,31];
  var giorni = 0;
  for (let i=0; i<mese-1; i++){
    giorni = giorni + giorniMese[i];
  }
  return giorni + giorno;
}

/*
  Gatti in fila
  Scrivi un programma che prenda in input:
    - Un numero totale di gatti
    - Il numero dei gatti presenti in ogni fila
  Restituisca in output:
   - Il numero di file risultanti
   - Nel caso l'ultima fila risulti incompleta, il numero di gatti mancanti
  Esempio
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4
  Hint: Se vuoi usare l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su) ma utilizza Math.ceil (arrotonda sempre all'intero superiore).
  http://www.imparareaprogrammare.it
*/


var gatti = 44;
var gattiPerFila = 6;

var numeroFile = Math.ceil(gatti/gattiPerFila);

var gattiMancanti = (numeroFile*gattiPerFila)-gatti;

console.log(`${gatti} gatti in fila per ${gattiPerFila} si unirono compatti in ${numeroFile}. Nell'ultima fila rimasero ${gattiMancanti} posti gatto disponibili.`).

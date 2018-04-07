/*
  Pa-pa-pa lindromo

  Scrivi una funzione che prenda in input una stringa e restituisca TRUE
  se è palindroma, FALSE se non lo è.

  Nel controllo scarta gli spazi e i segni di punteggiatura.
    Input : i topi non avevano nipoti
    Output:
            TRUE
  Hint: puoi eliminare spazi e segni di punteggiatura usando le espressioni
  regolarie e il metodo del tipo stringa chiamato replace, in questo modo:
  str.replace(/\W/g, "")
  http://www.imparareaprogrammare.it
*/



console.log(palindromo('i topi non avevano nipoti'));

function palindromo(input) {
    var parola = input.replace(/\W/g, "");
    return parola == parola.split('').reverse().join('');
}

/*
  Fai il sensitivo

  Scrivi una funzione che calcoli la vicinanza tra tre argomenti numerici,
  A, B e N, e restituisca:
    - 0 Se A e B sono equidistanti da N
    - 1 Se B è più vicino a N rispetto ad A
    - -1 Se A è più vicino a N rispetto a B: restituis

  Variante
  Utilizza questa funzione per creare un programma che simuli un gioco tra
  due utenti: vince chi indovina per primo il numero N che verrà generato
  casualmente tra 1 e 100.
  http://www.imparareaprogrammare.it
*/



console.log(vicinanza(1,9,5));


function vicinanza(A,B,N) {
  if (Math.abs(A-N) == Math.abs(B-N)) {
    return 0;
  }
  else if (Math.abs(B-N) > Math.abs(A-N)) {
    return 1;
  }
  else if (Math.abs(A-N) > Math.abs(B-N)){
    return -1;
  }
  else {
    return 'Numeri non validi';
  }
}

/*
  Il calendario mediocre
  Scrivi un programma che stampi il calendario di un mese, ricevi in input:
    - Il numero di giorni nel mese
    - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)

  Variante
  Piuttosto che passarein input i giorni del mese passa
  direttamente il mese e calcola tu i giorni corrispondenti.
  http://www.imparareaprogrammare.it
*/

var mese = 'Febbraio';
var numeroDelGiorno = 6;
var giorni;
var giornoDellaSettimana;
var data = new Date();
var annoCorrente = data.getFullYear();

// in base al nome del mese, giorni avrà un valore differente
switch (mese) {
    case 'Gennaio':
    case 'Marzo':
    case 'Maggio':
    case 'Luglio':
    case 'Agosto':
    case 'Ottobre':
    case 'Dicembre':
        giorni = 31;
        break;
    case 'Febbraio':
        giorni = 28;
        break;
    case 'Aprile':
    case 'Giugno':
    case 'Settembre':
        giorni = 30;
}

for (var i = 1; i <= giorni; i++) { // finchè il contatore (i) è minore o uguale del numero di giorni
    // il mese inizierà in base al numeroDelGiorno inserito dall'utente
    switch (numeroDelGiorno) {
        case 0:
            giornoDellaSettimana = 'Lunedí';
            break;
        case 1:
            giornoDellaSettimana = 'Martedí';
            break;
        case 2:
            giornoDellaSettimana = 'Mercoledí';
            break;
        case 3:
            giornoDellaSettimana = 'Giovedí';
            break;
        case 4:
            giornoDellaSettimana = 'Venerdí';
            break;
        case 5:
            giornoDellaSettimana = 'Sabato';
            break;
        case 6:
            giornoDellaSettimana = 'Domenica';
            break;
    }

    console.log(giornoDellaSettimana + " " + i + " " + mese + " " + annoCorrente);


    if (numeroDelGiorno < 6) { // se la variabile numeroDelGiorno è inferiore a 6
        numeroDelGiorno++; // aumenta di 1 il numeroDelGiorno
    } else {
        numeroDelGiorno = 0; // altrimenti, il numeroDelGiorno è uguale a 0
    }

}

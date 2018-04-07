/*
  Caldo o freddo
  Scrivi un programma che prenda in input sette valori relativi alle temperature della settimana e stabilisca la giornata più calda e quella più fredda.
  http://www.imparareaprogrammare.it
*/

var Lun = 28;
var Mar = 22;
var Mer = 14;
var Gio = 30;
var Ven = -14;
var Sab = 5;
var Dom = -26;
var giornataCalda = '';
var giornataFredda = '';

//gg + freddo

if ( Lun<Mar && Lun<Mer && Lun<Gio && Lun<Ven && Lun<Sab && Lun<Dom) {
giornataFredda = 'Lunedì'
}
else if (Mar<Lun && Mar<Mer && Mar<Gio && Mar<Ven && Mar<Sab && Mar<Dom ) {
giornataFredda = 'Martedì'
}
else if (Mer<Lun && Mer<Mar && Mer<Gio && Mer<Ven && Mer<Sab && Mer<Dom) {
giornataFredda = 'Mercoledì'
}
else if (Gio<Lun && Gio<Mar && Gio<Mer && Gio<Ven && Gio<Sab && Gio<Dom) {
giornataFredda = 'Giovedì'
}
else if (Ven<Lun && Ven<Mar && Ven<Mer && Ven<Gio && Ven<Sab && Ven<Dom) {
giornataFredda = 'Venerdì'
}
else if (Sab<Lun && Sab<Mar && Sab<Mer && Sab<Gio && Sab<Ven && Sab<Dom) {
giornataFredda = 'Sabato'
}
else if (Dom<Lun && Dom<Mar && Dom<Mer && Dom<Gio && Dom<Ven && Dom<Sab) {
giornataFredda = 'Domenica'
};

//gg + caldo

if ( Lun>Mar && Lun>Mer && Lun>Gio && Lun>Ven && Lun>Sab && Lun>Dom) {
giornataCalda = 'Lunedì'
}
else if (Mar>Lun && Mar>Mer && Mar>Gio && Mar>Ven && Mar>Sab && Mar>Dom ) {
giornataCalda = 'Martedì'
}
else if (Mer>Lun && Mer>Mar && Mer>Gio && Mer>Ven && Mer>Sab && Mer>Dom) {
giornataCalda = 'Mercoledì'
}
else if (Gio>Lun && Gio>Mar && Gio>Mer && Gio>Ven && Gio>Sab && Gio>Dom) {
giornataCalda = 'Giovedì'
}
else if (Ven>Lun && Ven>Mar && Ven>Mer && Ven>Gio && Ven>Sab && Ven>Dom) {
giornataCalda = 'Venerdì'
}
else if (Sab>Lun && Sab>Mar && Sab>Mer && Sab>Gio && Sab>Ven && Sab>Dom) {
giornataCalda = 'Sabato'
}
else if (Dom>Lun && Dom>Mar && Dom>Mer && Dom>Gio && Dom>Ven && Dom>Sab) {
giornataCalda = 'Domenica'
};

console.log(`La giornata più fredda della settimana è: ${giornataFredda}`);
console.log(`La giornata più calda della settimana è: ${giornataCalda}`);

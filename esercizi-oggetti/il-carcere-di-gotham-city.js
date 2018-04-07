/*
  Il carcere di Gotham City

  Sei appena stato nominato direttore presso il carcere di Gotham City.

  Hai l'arduo compito di scrivere un programma che gestisca:
  - I dati anagrafici delle guardie
  - I dati anagrafici dei detenuti

  - I fascioli personali dei detenuti, che devono contenere almeno queste informazioni:
      - Un identificativo del criminale
      - La data di carcerazione
      - La data di scarcerazione
      - Il crimine commesso

  Visto che sei tu il capo, decidi se usare lo stesso oggetto per gestire
  sia le guardie che i criminali.

  In ogni caso dovrai definire la banca dati della prigione: crea un array
  di guardie, una di detenuti e una per i fascicoli.

  Prevedi la possibilià di:
    - Assumere nuove guardie
    - Schedare nuovi carcerati
    - Aggiungere nuovi fascicoli
    - Visualizzare l'elenco per ciascuna categoria (guardie, criminali, fascicoli)
    - Effettuare ricerche nei fascicoli per nome del detenuto

  Nel carcere di Gotham City non tutti i detenuti arrivano alla data di scarcerazione,
  gestisci l’eventualità in cui un detenuto sia evaso e quella in cui sia deceduto.

  Scrivi una funzione di riepilogo dell'andamento del carcere e che stampi il
  numero delle guardie, il numero di detenuti totali, il numero di detenuti evasi
  e il numero di detenuti deceduti all’interno della struttura.
  http://www.imparareaprogrammare.it
*/
var guardie = {
    tipo: 'guardia',
    nome: ['Batman', 'Robin', 'Superman', 'Spiderman'],
    distintivo: ['987', '654', '321', '012'],
    abilita: ['mimetizzazione', 'astuzia', 'volo', 'arrampicata']
}

var detenuti = {
    tipo: 'detenuto',
    nome: ['Lupin', 'Gigen', 'Gemon', 'Diabolik'],
    tag: ['ladro', 'cecchino', 'spadaccino', 'notturno'],
    abilita: ['astuzia', 'mira', 'rapidita', 'mimetizzazione']
}

var fascicoli = {
    identificativo: [
        ['Lupin', '123'],
        ['Gigen', '456'],
        ['Gemon', '789'],
        ['Diabolik', '321']
    ],
    carcerazione: ['17/10/2017', '22/12/2017', '01/04/2017', '15/07/2017'],
    scarcerazione: ['15/01/2018', '16/01/2018', '17/01/2018', '20/01/2018'],
    crimine: ['furto', 'omicidio', 'scasso', 'sequestro']
}

/*Legenda:
assumi(stringa='nomeGuardia', intero='Numero distintivo', stringa='abilita') => assumi nuova guardia nel carcere
carcerato(stringa='nomeCarcerato', stringa='tagName', stringa='abilita') => nuovo carcerato
schedario(stringa='nomeCarcerato', intero='identificativo', stringa='dataCarcerazione(gg/mm/aa)', stringa='dataScarcerazione(gg/mm/aa)', stringa='crimineCommesso')
elencoGuardie() => elenco di tutte le guardie
elencoCriminali() => elenco di tutti i detenuti
elencoFascicoli() => elenco di tutti i detenuti con le loro informazioni
ricercaDetenuto(stringa='nomeDetenuto') => informazioni per detenuto
numeroPersone(stringa='guardia o detenuto') => quante guardie/detenuti al momento in carcere
*/


assumi('Capitan America', '777', 'forza');
carcerato('Joker', '111', 'doppiogioco');
schedario('Joker', '111', '17/01/2018', 'N/A', 'rapina');
elencoFascicoli();
ricercaDetenuto('Gemon');
numeroPersone('detenuto');
numeroPersone('guardia');


function assumi(n, d, a) {
    guardie.nome.push(n);
    guardie.distintivo.push(d);
    guardie.abilita.push(a);
}


function carcerato(n, t, a) {
    detenuti.nome.push(n);
    detenuti.tag.push(t);
    detenuti.abilita.push(a);
}

function schedario(i, a, c, s, c) {
    fascicoli.identificativo.push([i, a]);
    fascicoli.carcerazione.push(c);
    fascicoli.scarcerazione.push(s);
    fascicoli.crimine.push(c);
}

function elencoGuardie() {
    console.log(guardie.nome);
}

function elencoCriminali() {
    console.log(detenuti.nome);
}

function elencoFascicoli() {
    console.log(`Schedario fascicoli:`);
    for (let i = 0; i < fascicoli.identificativo.length; i++) {
        console.log(`Criminale ${i+1}: \n Nome e codice identificativo: ${fascicoli.identificativo[i].join(': ')}, \n Data carcerazione: ${fascicoli.carcerazione[i]},\n Data scarcerazione: ${fascicoli.scarcerazione[i]},\n Crimine commesso: ${fascicoli.crimine[i]}`);
    }
}

function ricercaDetenuto(nomeDetenuto) {
    for (let i = 0; i < fascicoli.identificativo.length; i++) {
        if (fascicoli.identificativo[i][0] === nomeDetenuto) {
            console.log(`Nome detenuto e identificativo: ${fascicoli.identificativo[i].join(': ')}, \n Data carcerazione: ${fascicoli.carcerazione[i]},\n Data scarcerazione: ${fascicoli.scarcerazione[i]},\n Crimine commesso: ${fascicoli.crimine[i]}`);
            break;
        }
    }
}

function numeroPersone(type) {
    if (type == 'guardia') {
        console.log(guardie.nome.length);
    } else {
        console.log(detenuti.nome.length);
    }
}

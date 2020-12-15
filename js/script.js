// inizio var per conferma 
var conferma = document.getElementById('btnConferma');

conferma.addEventListener('click', function(){

    // nomino var 
    var nomeInput = document.getElementById('nome').value;
    var primaLettera = nomeInput.charAt(0).toUpperCase();
    var restoNome = nomeInput.substring(1).toLowerCase();
    var nomeFinale = primaLettera + restoNome;

    var distanza = document.getElementById('km').value;
    var eta = document.getElementById('eta').value;
    var prezzo = distanza * 0.2;
    var tariffaAppl = 'Tariffa standard, ti tocca pagare di più';
    var numCarrozza = Math.floor(Math.random()*6) +1;
    var cod = Math.floor(Math.random()*9999) +90000;

    // inizio if sconto
    if (eta == 'minorenne') {
    prezzo -=  prezzo * 20 / 100;
    tariffaAppl = 'Tariffa Minorenne'
    } else if(eta == 'senior'){
    prezzo -= prezzo * 40 / 100;
    tariffaAppl = 'Tariffa Senior'
    }
    //  fine if sconto

    // stampa
    document.getElementById('nomeScelto').innerHTML = nomeFinale;
    document.getElementById('offerta').innerHTML = tariffaAppl;
    document.getElementById('carrozza').innerHTML = numCarrozza;
    document.getElementById('codiceCp').innerHTML = cod;
    document.getElementById('costo').innerHTML = prezzo.toFixed(1) + '€';
    document.getElementById('biglietto').className = 'stampa-biglietto';
    // fine esercizio
})
// fine var per conferma

// inizio var per annulla
var annulla = document.getElementById('btnAnnulla');

annulla.addEventListener('click', function(){

    // stampa con annulla (cioe cancella il biglietto e i parametri indicati) 
    document.getElementById('nome').value = '';
    document.getElementById('km').value = '';

    document.getElementById('nomeScelto').innerHTML = '';
    document.getElementById('offerta').innerHTML = '';
    document.getElementById('carrozza').innerHTML = '';
    document.getElementById('codiceCp').innerHTML = '';
    document.getElementById('costo').innerHTML = '';
    document.getElementById('biglietto').className = 'cancella-biglietto';
})
// fine var per annulla
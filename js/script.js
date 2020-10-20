// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65

// chiedo l'età & i km all'utente

var eta = parseInt( prompt( " Quanti anni hai? " ));
var km = parseInt( prompt( " Quanti km vuoi percorrere? " ));

// prezzo biglietto ( 0.21€ per km * km inseriti dall'utente)

var prezzoBiglietto = ( km * 0.21 );

// prezzo biglietto scontato 20% ( prezzo intero - prezzo percentuale = prezzo scontato)

var prezzoScontato20 = ( prezzoBiglietto - ( prezzoBiglietto * 0.20 ));

// prezzo biglietto scontato 40% ( prezzo intero - prezzo percentuale = prezzo scontato)

var prezzoScontato40 = ( prezzoBiglietto - ( prezzoBiglietto * 0.40 ));

// Stabilire condizione di età

if (eta <= 17) {
  document.getElementById('biglietto').innerHTML = (" prezzo scontato al 20% = " + prezzoScontato20.toFixed(2) + "€") ;
} else if (eta >= 66) {
   document.getElementById('biglietto').innerHTML = (" prezzo scontato al 40% = " + prezzoScontato40.toFixed(2) + "€" ) ;
} else {
   document.getElementById('biglietto').innerHTML = (" prezzo intero = " + prezzoBiglietto.toFixed(2) + "€") ;
}

//.toFixed per arrotondare il prezzo scontato in difetto/eccesso.

// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65

// chiedo l'età all'utente

var eta = parseInt( prompt( " Quanti anni hai? " ));

console.log("età", eta);

// chiedo i km all'utente

var km = parseInt( prompt( " Quanti km vuoi percorrere? " ));

console.log( "chilometri", km );

// prezzo biglietto

var prezzoBiglietto = ( km * 0.21 );

console.log( "prezzo biglietto", prezzoBiglietto );

// prezzo biglietto scontato 20%

var prezzoScontato20 = ( prezzoBiglietto - ( prezzoBiglietto * 0.20 ));

console.log( prezzoScontato20 );

// prezzo biglietto scontato 40%

var prezzoScontato40 = ( prezzoBiglietto - ( prezzoBiglietto * 0.40 ));

console.log ( prezzoScontato40 );

// Stabilire condizione di età

if (eta <= 17) {
  document.getElementById('biglietto').innerHTML = (" prezzo scontato al 20% = " + prezzoScontato20.toFixed(2) + "€") ;
} else if (eta >= 66) {
   document.getElementById('biglietto').innerHTML = (" prezzo scontato al 40% = " + prezzoScontato40.toFixed(2) + "€" ) ;
} else {
   document.getElementById('biglietto').innerHTML = (" prezzo intero = " + prezzoBiglietto.toFixed(2) + "€") ;
}

//.toFixed per arrotondare il prezzo scontato in difetto/eccesso.

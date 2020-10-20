// bonus - mettiamo in display none le icone e a seconda del comando di output si visualizzerà un'icona.

document.getElementById("over65").style.display = "none";
document.getElementById("under18").style.display = "none";
document.getElementById("standard").style.display = "none";

// chiedo l'età & i km all'utente e creo le varie variabili di sconto.

var eta = parseInt( prompt( " Quanti anni hai? " ));
var km = parseInt( prompt( " Quanti km vuoi percorrere? " ));
var prezzoBiglietto = ( km * 0.21 );
var prezzoScontato20 = ( prezzoBiglietto - ( prezzoBiglietto * 0.20 ));
var prezzoScontato40 = ( prezzoBiglietto - ( prezzoBiglietto * 0.40 ));

// Stabilire condizione di età

if (eta <= 17) {
  document.getElementById('biglietto').innerHTML = ( prezzoScontato20.toFixed(2) + "€") ;
  document.getElementById('titolo-prezzo').innerHTML = ("Tariffa under 18 applicata, il totale del biglietto è : ");
  document.getElementById("under18").style.display = "block";

} else if (eta >= 66) {
   document.getElementById('biglietto').innerHTML = ( prezzoScontato40.toFixed(2) + "€" ) ;
   document.getElementById('titolo-prezzo').innerHTML = ("Tariffa over 65 applicata, il totale del biglietto è : ");
   document.getElementById("over65").style.display = "block";
} else {
   document.getElementById('biglietto').innerHTML = ( prezzoBiglietto.toFixed(2) + "€") ;
   document.getElementById('titolo-prezzo').innerHTML = ("Tariffa standard applicata, il totale del biglietto è : ");
   document.getElementById("standard").style.display = "block";
}

//.toFixed per arrotondare il prezzo scontato in difetto/eccesso.

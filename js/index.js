


// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.


let kmUtente = parseInt(prompt("quanti km vuoi percorrere?"));
let etaUtente = parseInt(prompt("quanti anni hai?"));
let maggiorenne = 18;
let over65 = 65;

let euroKm = 0.21;
let prezzoKm = euroKm * kmUtente;

let sc20 = prezzoKm * 0.2;
let sc30 = prezzoKm * 0.3;
let sc40 = prezzoKm * 0.4;


let textTitle = document.getElementById("text-title").innerText = "Calcolatore prezzo Treni"

if(!isNaN(kmUtente) && !isNaN(etaUtente)){
    if(etaUtente < maggiorenne){
        sc40 = 0;
        sc30 = 0;
    } else if (etaUtente > over65) {
        sc20 = 0;
        sc30 = 0;
    } else {
        sc20 = 0;
        sc40 = 0;

    }

} else {
    textBody = document.getElementById("text-body").innerHTML = "I dati inseriti non sono corretti"
    textInput = document.getElementById("text-input").style.display = "none"
    textH3 = document.getElementById("text-h3").style.display = "none"
    
}

let prezzoTotale = prezzoKm - sc20 - sc40 - sc30;


let textBody = document.getElementById("text-body").innerHTML = `il prezzo totale è: ${prezzoTotale}`
let textH3 = document.getElementById("text-h3").innerText = "I dati che hai inserito..."
let textInput = document.getElementById("text-input").innerHTML = `<ul id="text-input">
                                                        <li><span>Età inserita:</span>${etaUtente}</li>
                                                        <li><span>KM inseriti:</span>${kmUtente}</li>
                                                        <li><span>Hai diritto ad unno sconto del 20%:</span>${sc20}</li>
                                                        <li><span>Hai diritto ad unno sconto del 40%:</span>${sc40}</li>
                                                        <li><span>Hai diritto ad unno sconto del 30%:</span>${sc30}</li>
                                                    </ul>` 







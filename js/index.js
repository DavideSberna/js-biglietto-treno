


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
let sc40 = prezzoKm * 0.4;



let textTitle = document.getElementById("text-title").innerText = "Calcolatore prezzo Treni"


let textH3 = document.getElementById("text-h3").innerText = "I dati che hai inserito..."


let textInput = document.getElementById("text-input");
let textLi_1 = document.getElementById("li-1").innerText = `- Età inserita: ${etaUtente}`;
let textLi_2 = document.getElementById("li-2").innerText = `- KM inseriti: ${kmUtente}`;

sc20 = parseFloat(sc20).toFixed(2)
let textLi_3 = document.getElementById("li-3").innerText = `- Hai diritto ad unno sconto del 20%: ${sc20} Euro`;
sc40 = parseFloat(sc40).toFixed(2)
let textLi_4 = document.getElementById("li-4").innerText = `- Hai diritto ad unno sconto del 40%: ${sc40} Euro`;

let textLi_5 = document.getElementById("li-5").innerText = `- Non hai diritto a sconti`;

if(!isNaN(kmUtente) && !isNaN(etaUtente)){
    if(etaUtente < maggiorenne){
        sc40 = 0;
        textLi_4 = document.getElementById("li-4").style.display = "none"
        textLi_5 = document.getElementById("li-5").style.display = "none"

    } else if (etaUtente > over65) {
        sc20 = 0;
        textLi_3 = document.getElementById("li-3").style.display = "none"
        textLi_5 = document.getElementById("li-5").style.display = "none"
    } else {
        sc20 = 0;
        sc40 = 0;
        textLi_3 = document.getElementById("li-3").style.display = "none"
        textLi_4 = document.getElementById("li-4").style.display = "none"
    }

} else {
    textBody = document.getElementById("text-body").innerHTML = "I dati inseriti non sono corretti"
    textInput = document.getElementById("text-input").style.display = "none"
    textH3 = document.getElementById("text-h3").style.display = "none"
    
}

let prezzoTotale = prezzoKm - sc20 - sc40;
prezzoTotale = parseFloat(prezzoTotale).toFixed(2);
let textBody = document.getElementById("text-body").innerHTML = `<span>il prezzo totale è:</span> ${prezzoTotale} Euro`








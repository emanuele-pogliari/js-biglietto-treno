const kilometers = prompt("inserisci distanza in km");
const age = prompt("Iserisci età");

let priceTicket = kilometers * 0.21;

if (!isNaN(age) && !isNaN(kilometers)) {
    if (age < 18) {
        priceTicket = Math.round((priceTicket - (priceTicket / 100) * 20) * 1000) / 100;
        console.log(priceTicket)
    }
    if (age >= 65) {
        priceTicket = Math.round((priceTicket - (priceTicket / 100) * 40) * 1000) / 100;
        console.log(priceTicket)
    }
    document.getElementById("price").innerHTML = priceTicket;

} else {
    document.getElementById("price").innerHTML = "Hai inserito dei valori non validi";
}







const kilometers = 34;
const age = -67;

let priceTicket = kilometers * 0.21;

if (!isNaN(age) && !isNaN(kilometers) && (age > 0 && age < 110) && (kilometers > 0) && (age % 1 === 0 && kilometers % 1 === 0)) {
    if (age < 18) {
        priceTicket = priceTicket - (priceTicket / 100) * 20
    }
    if (age >= 65) {
        priceTicket = priceTicket - (priceTicket / 100) * 40
    }
    document.getElementById("price").innerHTML = priceTicket.toFixed(2);
} else {
    document.getElementById("price").innerHTML = "Hai inserito dei valori non validi";
}







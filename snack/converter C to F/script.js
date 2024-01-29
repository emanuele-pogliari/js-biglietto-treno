let userDegrees = Number(prompt(" Inserisci i gradi da convertire"));

while (isNaN(userDegrees)) {
    userDegrees = prompt("Errore. Inserisci i gradi da convertire");
}

let conversion = (userDegrees * 9 / 5) + 32;

document.getElementById("result").innerHTML = `La coversione di ${userDegrees} °C è ${conversion} °F`;

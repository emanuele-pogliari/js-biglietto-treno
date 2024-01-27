
const kilometers = 100;
const age = 65;
let priceTicket = kilometers * 0.21;

if (!isNaN(age) && !isNaN(kilometers) && (age > 0 && age < 110) && (kilometers > 0) && (age % 1 === 0 && kilometers % 1 === 0)) {
    if (age < 18) {
        priceTicket = priceTicket - (priceTicket / 100) * 20;
        document.getElementById("disc_applied").innerHTML = "20%"
    }
    if (age >= 65) {
        priceTicket = priceTicket - (priceTicket / 100) * 40;
        document.getElementById("disc_applied").innerHTML = "40%"
    }
    document.getElementById("age_entered").innerHTML = `${age} anni`
    document.getElementById("km_run").innerHTML = `${kilometers} km`;
    // 
    document.getElementById("price").innerHTML = `${priceTicket.toFixed(2)} €`;
} else {
    document.getElementById("price").innerHTML = "Hai inserito dei valori non validi";
}


// todo
// 2. inserire tutte le voci sul container
// 3. aggiungere le voci richiesta da daniele ed eventualmente ricontrollare i calcoli



// 6. aggiungere le animazioni una per volta





// 8. se resta tempo e voglia inserire l'ora esatta in tempo reale.
// spare time
// 9. provare la soluzione con while.



// 4. aggiungere animazione logo con effetto glow FATTO MA DA RICONTROLLARE


let kilometers;
let age;

setTimeout(function () {
    kilometers = prompt("1");
    age = prompt("2");

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
        if (age >= 18 && age < 65) {
            document.getElementById("disc_applied").innerHTML = "Nessuno sconto applicabile"
        }
        document.getElementById("age_entered").innerHTML = `${age} anni`
        document.getElementById("km_run").innerHTML = `${kilometers} km`;
        document.getElementById("price").innerHTML = `${priceTicket.toFixed(2)} €`;
    } else {
        let check_age;
        let check_km;
        if (isNaN(age) || (age < 0 && age > 110) || (age % 1 != 0)) {
            document.getElementById("price").innerHTML = "Hai inserito un valore non valido per l'età";
            check_age = 1;
        } if (isNaN(kilometers) || kilometers < 0 || (kilometers % 1 != 0)) {
            document.getElementById("price").innerHTML = "Hai inserito un valore non valido per i chilometri";
            check_km = 1;
        } if (check_age + check_km === 2) {
            document.getElementById("price").innerHTML = "Hai inserito un valore non valido per età e km";
        }
    }

}, 200)

// todo
// 3. aggiungere le voci richiesta da daniele ed eventualmente ricontrollare i calcoli



// 6. aggiungere le animazioni una per volta
// 8. se resta tempo e voglia inserire l'ora esatta in tempo reale.
// spare time
// 9. provare la soluzione con while.

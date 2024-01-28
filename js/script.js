
let kilometers;
let age;

// a timeout of 200ms that will load js code after loading the page
setTimeout(function () {

    kilometers = prompt("Inserisci chilometri da percorrere");
    age = prompt("Inserisci la tua età");

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
        document.getElementsByClassName("data")[0].classList.toggle("visible");
    } else {
        // create 2 variables that will have value equals to one when the condition are true.
        let check_age;
        let check_km;
        document.getElementsByClassName("data_error")[0].classList.toggle("visible");
        if (isNaN(age) || (age < 0 && age > 110) || (age % 1 != 0)) {
            document.getElementsByClassName("text_error")[0].innerHTML = "Hai inserito un valore non valido per l'età. Ricarica la pagina con un click sul bottone qui sotto";
            check_age = 1;
        }
        if (isNaN(kilometers) || kilometers < 0 || (kilometers % 1 != 0)) {
            document.getElementsByClassName("text_error")[0].innerHTML = "Hai inserito un valore non valido per i chilometri. Ricarica la pagina con un click sul bottone qui sotto";
            check_km = 1;
        }
        // if the sum of check variable are two, both condition are true, user insert some invalid information, therefore, the condition below will inform user of a double error input
        if (check_age + check_km === 2) {
            document.getElementsByClassName("text_error")[0].innerHTML = "Hai inserito un valore non valido per ETA' e KM. Ricarica la pagina con un click sul bottone qui sotto";
        }
        // this function will wait for a click from user on the reload button. When this button will be clicked, the page will reload.
        document.getElementsByClassName("btn_reload")[0].addEventListener("click", function () {
            window.location.reload();
        })
    }
}, 200)
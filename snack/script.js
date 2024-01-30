let menu = document.getElementById("menu");
let converterApp = document.getElementById("converter");
let avarageApp = document.getElementById("average");
let roSciPa = document.getElementById("ro-sci-pa");

// function that if called will start the game

function rockScissorPaper() {
    menu.style.display = "none";
    roSciPa.style.display = "block"

    setTimeout(function () {
        let userChoice = prompt("Inserisci una scelta: 1: Sasso, 2: Forbice, 3: Carta").toLowerCase();


        while (userChoice != "sasso" && userChoice != "forbice" && userChoice != "carta") {
            userChoice = prompt("Scelta non valida. Inserisci : 1: Sasso, 2: Forbice, 3: Carta").toLowerCase();
        }

        let computerVal;
        let computerChoice = Math.floor(Math.random() * 3 + 1);

        if (computerChoice === 1) {
            computerVal = "sasso";
        }
        else if (computerChoice === 2) {
            computerVal = "forbice";
        }
        else {
            computerVal = "carta";
        }

        document.getElementById("user-choice").innerHTML = userChoice;
        document.getElementById("computer-choice").innerHTML = computerVal;

        if (userChoice === computerVal) {
            document.getElementById("result").innerHTML = "pareggio";
        } else if (userChoice == "sasso" && computerVal == "forbice" || userChoice == "forbice" && computerVal == "carta" || userChoice == "carta" && computerVal == "sasso") {
            document.getElementById("result").innerHTML = "vittoria utente";
        }
        else {
            document.getElementById("result").innerHTML = "vittoria computer";
        }
    }, 200)
}

// function that if called will start the game
function avarage() {
    menu.style.display = "none";
    avarageApp.style.display = "block"

    setTimeout(function () {
        let num_1 = Number(prompt("Inserisci primo numero"));
        let num_2 = Number(prompt("Inserisci secondo numero"));
        let num_3 = Number(prompt("Inserisci terzo numero"));

        let average = (num_1 + num_2 + num_3) / 3;
        document.getElementById("numero-1").innerHTML = num_1;
        document.getElementById("numero-2").innerHTML = num_2;
        document.getElementById("numero-3").innerHTML = num_3;
        document.getElementById("result_average").innerHTML = `La media tra i numeri è: ${average}`;
    }, 200)
}

// function that if called will start the game
function converter() {
    menu.style.display = "none";
    converterApp.style.display = "block";
    setTimeout(function () {
        let userDegrees = Number(prompt(" Inserisci i gradi da convertire"));

        while (isNaN(userDegrees)) {
            userDegrees = prompt("Errore. Inserisci i gradi da convertire");
        }

        let conversion = (userDegrees * 9 / 5) + 32;

        document.getElementById("user-degrees").innerHTML = `${userDegrees} °C`;
        document.getElementById("converted").innerHTML = `${conversion} °F`;
    }, 200)
}

// function that if called will reload the page
function reload() {
    window.location.reload();
}

//function calls
document.getElementById("uno").addEventListener("click", converter);
document.getElementById("due").addEventListener("click", avarage);
document.getElementById("tre").addEventListener("click", rockScissorPaper);

document.getElementById("btn_reload").addEventListener("click", reload);


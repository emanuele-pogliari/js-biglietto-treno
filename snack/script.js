let menu = document.getElementById("menu");
let converter = document.getElementById("converter");

// function that if called will start the game

function rockScissorPaper() {
    menu.style.display = "none";

    // document.getElementById("sceltagioco").style.display = "none";
    // document.getElementById("pincopallo1").style.display = "block";
    let userChoice = prompt("Inserisci una scelta: 1: Sasso, 2: Forbice, 3: Carta").toLowerCase();

    while (userChoice != "sasso" && userChoice != "forbice" && userChoice != "carta") {
        userChoice = prompt("Scelta non valida. Inserisci : 1: Sasso, 2: Forbice, 3: Carta").toLowerCase();
    }

    let user_val;

    if (userChoice === "sasso") {
        user_val = 1;
    } else if (userChoice === "forbice") {
        user_val = 2;
    } else {
        user_val = 3;
    }

    let computerChoice = Math.floor(Math.random() * 3 + 1);

    if (user_val === computerChoice) {
        document.getElementById("result").innerHTML = "pareggio";
    } else {
        if (user_val === 1 && computerChoice === 2 || user_val === 2 && computerChoice === 3 || user_val === 3 && computerChoice === 1) {
            document.getElementById("result").innerHTML = "vittoria utente";
        }
        else {
            document.getElementById("result").innerHTML = "vittoria computer";
        }
    }
    return 0;
}

// function that if called will start the game
function avarage() {
    menu.style.display = "none";
    let num_1 = Number(prompt("Inserisci primo numero"));
    let num_2 = Number(prompt("Inserisci secondo numero"));
    let num_3 = Number(prompt("Inserisci terzo numero"));

    let average = (num_1 + num_2 + num_3) / 3;

    document.getElementById("result").innerHTML = `La media tra ${num_1}, ${num_2} e ${num_3} è ${average}`;
}

// function that if called will start the game
function converter() {
    menu.style.display = "none";
    let userDegrees = Number(prompt(" Inserisci i gradi da convertire"));

    while (isNaN(userDegrees)) {
        userDegrees = prompt("Errore. Inserisci i gradi da convertire");
    }

    let conversion = (userDegrees * 9 / 5) + 32;

    document.getElementById("result").innerHTML = `La coversione di ${userDegrees} °C è ${conversion} °F`;
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


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

let rock = 1;
let scissor = 2;
let paper = 3;

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




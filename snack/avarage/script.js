let num_1 = Number(prompt("Inserisci primo numero"));
let num_2 = Number(prompt("Inserisci secondo numero"));
let num_3 = Number(prompt("Inserisci terzo numero"));

let average = (num_1 + num_2 + num_3) / 3;

document.getElementById("result").innerHTML = `La media tra ${num_1}, ${num_2} e ${num_3} è ${average}`;
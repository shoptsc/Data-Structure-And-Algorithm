const beast = ["Centaur", "Godzilla", "Mosura", "Minotaur", "Hydra", "Nessie"]

const check1 = beast.indexOf("Godzilla");
console.log(check1)

const check2 = beast.findIndex(item => item === "Minotaur")
console.log(check2);

const check3 = beast.find(item => item === "Hydra")
console.log(check3);

const check4 = beast.includes("Nessie")
console.log(check4)
const numeros = [];
let total = 0;

for (i = 0; i <10; i++) {
    numeros[i] = Number (prompt("Digite o " + (i + 1) + "º número:"));
}

for (let i = 0; i < 10; i++) {
    if (numeros[i] % 2 === 0) {
        total = total + numeros[i];
    }
}

alert("A soma dos números pares é: " + total);
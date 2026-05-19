const listaNumeros = [];
const listaSemDuplicados = [];

// Ler 10 números
for (let i = 0; i < 10; i++) {
    listaNumeros.push(Number(prompt(`Digite o ${i + 1}º número:`)));
}

// Remover duplicados
for (let i = 0; i < listaNumeros.length; i++) {

    let numero = listaNumeros[i];

    if (listaSemDuplicados.indexOf(numero) === -1) {
        listaSemDuplicados.push(numero);
    }
}

// Mostrar resultado
alert(
    "Vetor Original: " + listaNumeros.join(", ") +
    "\nVetor Sem Duplicatas: " + listaSemDuplicados.join(", ")
);
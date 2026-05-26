const listaNumeros = [];
const listaSemDuplicados = [];

for (let i = 0; i < 10; i++) {
    listaNumeros.push(Number(prompt(`Digite o ${i + 1}º número:`)));
}


for (let i = 0; i < listaNumeros.length; i++) {

    let numero = listaNumeros[i];

    if (listaSemDuplicados.indexOf(numero) === -1) {
        listaSemDuplicados.push(numero);
    }
}


alert(
    "Vetor Original: " + listaNumeros.join(", ") +
    "\nVetor Sem Duplicatas: " + listaSemDuplicados.join(", ")
);

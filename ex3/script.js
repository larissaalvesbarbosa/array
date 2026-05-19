const listaNumeros = [];
let contadorOcorrencias = 0;

for (let i = 0; i < 10; i++) {
    listaNumeros[i] = Number(prompt(`Digite o ${i + 1}º número:`));
}

const numeroBusca = Number(prompt("Digite um número para verificar quantas vezes ele aparece:"));

for (let i = 0; i < 10; i++) {
    if (listaNumeros[i] === numeroBusca) {
        contadorOcorrencias++;
    }
}

alert(`O número ${numeroBusca} aparece ${contadorOcorrencias} vez(es) no vetor.`);
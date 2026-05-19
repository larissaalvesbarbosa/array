# Atividade de Vetores (Arrays) em JavaScript

Este repositório contém a resolução de 4 exercícios práticos de lógica de programação utilizando JavaScript. O objetivo principal foi manipular vetores (arrays).

## 📋 Exercícios Desenvolvidos

1. **Soma de Pares:** Lê 10 números inteiros e calcula a soma apenas dos números que são pares.
```
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
```

2. **Gerador Automático:** Preenche automaticamente um vetor com 7 números baseados em uma lógica matemática.
```
const numerosAleatorios = [];

for (let i = 0; i < 7; i++) {
    numerosAleatorios[i] = (i * 5) + 7;
}

alert(`Os 7 números gerados foram: ${numerosAleatorios}`);
```
3. **Contador de Ocorrências:** Guarda 10 números, pede para o usuário buscar um número e conta quantas vezes ele aparece.
```
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
```
4. **Remover Duplicados:** Lê 10 números, cria um novo vetor removendo as duplicadas e mostra a lista original e a limpa.
```
const listaNumeros = [];
const listaSemDuplicados = [];

// Ler 10 números
for (let i = 0; i < 10; i++) {
    listaNumeros.push(Number(prompt(Digite o ${i + 1}º número:)));
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
```
## 🛠️ Tecnologias Utilizadas

* JavaScript (ES6)
* Git e GitHub (para controle de versão)
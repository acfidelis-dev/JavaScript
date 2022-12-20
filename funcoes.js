/* Crie um programa que contenha os seguintes tipos de funções:

1. uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro;
2. uma função tradicional com parâmetros e um retorno de valor;
3. uma arrow function com parâmetros e que retorne um valor.

Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora.*/

function calculadora(){
    console.log('Vamos calcular?');
}

function soma(nota1, nota2) {
	return parseFloat(nota1) + parseFloat(nota2);
}

const media = (nota1, nota2) => (nota1 + nota2)/2;

calculadora();
console.log(`Notas (soma): ${soma(8, 9)}`);
console.log(`Notas (média): ${media(8, 9)}`);

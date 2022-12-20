/* Crie dois códigos de sistema de notas para uma escola:

- O primeiro código deve ser um programa que informa se o aluno reprovou, ou não, com base nas três notas que ele adicionou ao programa. Utilize, no mínimo, um operador de atribuição e um operador ternário. 
- O segundo código é um programa que o aluno deve escrever duas notas e o retorno informa a nota mínima que ele deve tirar na próxima prova para poder passar com nota sete. */


//PRIMEIRO CÓDIGO

//lê a primeira nota
var nota1 = Number (prompt("Nota 1: "))

//lê a segunda nota
var nota2 = Number (prompt("Nota 2: "))

//lê a terceira nota
var nota3 = Number (prompt("Nota 3: "))

//calcula a média do aluno
var media = ((nota1 + nota2 + nota3)/3).toFixed(2)

//Resultado
media >= 7 ?
alert('Sua média é: ' + media + '. Você está APROVADO') : alert('Sua média é: ' + media + '. Você está REPROVADO');


//SEGUNDO CÓDIGO

//lê a primeira nota
var nota1 = Number (prompt("Nota 1: "))

//lê a segunda nota
var nota2 = Number (prompt("Nota 2: "))

//calcula o valor mínimo da terceira nota
var nota3 = Number (21 - (nota1 + nota2))

//Resultado
nota3 <= 10 ?
alert('Você precisa tirar ' + nota3 + ' para ser APROVADO!') : alert('Você precisaria tirar ' + nota3 + ' para ser aprovado, o que é impossível. Então, você já está REPROVADO!');
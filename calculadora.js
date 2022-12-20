/* Com os conceitos aprendidos, crie um programa de calculadora que:

- Receba dois valores, que devem ser salvos em variáveis; 
- O usuário deve colocar qual operador ele vai utilizar por meio dos símbolos aritméticos; 
- Com os dois valores e o operador definido, o programa deve fazer a operação e retornar o resultado; 
- Se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma. */

//lê o primeiro dado de entrada
var num1 = Number (prompt("Número 1: "))

//lê o segundo dado de entrada
var num2 = Number (prompt("Número 2: "))

//lê o operador a ser utilizado
var operador = prompt("Qual o operador (soma '+', subtração '-', multiplicação '*' ou divisão '/')? ")

if ((num2 == 0) && (operador == '/')) {
    window.alert('Divisor deve ser diferente de zero.\nAtribua outro valor para a realização da operação.')
}

switch (operador) {
    case '+':
        var resultado = num1 + num2
        alert(`Resultado: ${resultado}.`)
        break
    case '-':
        var resultado = num1 - num2
        alert(`Resultado: ${resultado}.`)
        break
    case '*':
        var resultado = num1 * num2
        alert(`Resultado: ${resultado}.`)
        break
    case '/':
        if ( num1 > num2) {
            var resultado = Number.parseInt(Number.parseInt(num1) / Number.parseInt(num2))
            var resto = num1 % num2
            if (resto != 0) {
                alert(`O quociente é ${resultado} e o resto é ${resto}.`)
            } else {
                alert(`Resultado: ${resultado}.`)
            }
        } 
        break
    default:
        alert(`Erro com o operador "${operacao}".`)
}
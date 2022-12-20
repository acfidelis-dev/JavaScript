/* Desenvolva um código e crie nele:

- um objeto com, no mínimo, três propriedades;
- um array de tamanho três no mínimo;
- duas funções, a primeira lista as propriedades do objeto e a segunda, os elementos do array. */

let computador = {
    processador: 'Intel® Core™ i5-10300H (10ª Ger. até 4.5 GHz)',
    memoriaRAM: '16GB',
    armazenamento: '1TB',
    placaVideo: 'GeForce® RTX 3070 (8GB GDDR6)',
};

let fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

function listaEspecificacoes(objeto){
    console.log('\nEspecificações do computador:\n');

    for (especificacoes in objeto){
        console.log(especificacoes);
    }
}

function sequenciaFibonacci (array){
    console.log('\nSequência de Fibonacci:\n');

    for (sequencia of array){
        console.log(sequencia);
    }
}

listaEspecificacoes(computador);
sequenciaFibonacci(fibonacci);
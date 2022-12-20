/* Crie um código com um objeto chamado “Banco”.
Ele deverá ter propriedades que incluem conta, saldo, tipo de conta e agência e os seus métodos devem ser: buscar saldo, depósito, saque e número da conta.

Observações:
- buscar saldo deve retornar o valor atual do saldo;
- para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto;
- para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
- o número da conta deve retornar o número da conta. */

const Banco = {
    //propriedades
	Nconta: '00000000-0',
	saldo: 1000000,
	tipoConta: 'Conta Corrente',
	agencia: 0001,

    //métodos

	buscarSaldo: function() {
		console.log(`Saldo (atual) da conta: ${this.saldo}`);
	},

    deposito: function(valorDeposito){
        this.saldo += valorDeposito;
        console.log(`Deposito confirmado! Saldo (atual) da conta: ${this.saldo}`);
    },

    saque: function(valorSaque){
        if (valorSaque <= this.saldo){
            this.saldo -= valorSaque;
            console.log(`Saque realizado! Saldo (atual) da conta: ${this.saldo}`)
        }
    },
    
    conta: function(){
        console.log(`Conta: ${this.Nconta}`);
    }
}

Banco.buscarSaldo();
Banco.deposito(500000);
Banco.saque(1000);
Banco.conta();
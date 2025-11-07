
//o construtor determina o que cada class representa
class Pessoa {
    constructor(nome, cpf, dataNascimento,qtddoaçoes) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.qtddoaçoes = qtddoaçoes
    }
    //imprimi cada class do contrutor
    imprimirDetalhes() {
        console.log("---------------------");
        console.log(`Nome: ${this.nome}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Data de Nascimento: ${this.dataNascimento}`);
        console.log("---------------------");
    }
}

module.exports = Pessoa;
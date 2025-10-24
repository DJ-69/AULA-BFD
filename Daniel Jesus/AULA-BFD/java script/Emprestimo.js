


//o construtor determina o que cada class representa
class Emprestimo {
    constructor(livro, pessoa, dias_emprestimo) {
        this.livro = livro;
        this.pessoa = pessoa;
        this.dias_emprestimo = dias_emprestimo;
        this.livro.qtdEstoque -= 1;
    }
    //imprimi cada class do contrutor
    imprimirDetalhes() {
        console.log("---------------------");
        console.log(`Livro: ${this.livro.titulo}`);
        console.log(`Pessoa: ${this.pessoa.nome}`);
        console.log(`Dias de Empréstimo: ${this.dias_emprestimo}`);
        console.log("---------------------");
    }
    //a funçao calcularMulta retorna um valor calculado com a qtd de dias demorados
    calcularMulta(demoraDias) {
        if (demoraDias <= this.dias_emprestimo) {
            return 0.0;
        }
        return (demoraDias - this.dias_emprestimo) * Math.ceil(this.livro.numeroPaginas / 100) * 2.0;
    } 

}

module.exports = Emprestimo;
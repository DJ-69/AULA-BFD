
//o construtor determina o que cada class representa
class Obra {
    constructor(titulo, autor, anoPublicacao, qtdEstoque) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.DataDeLançamento = this.DataDeLançamento;
        this.qtdEstoque = qtdEstoque;
    }
    //imprimi cada class do contrutor
    imprimirDetalhes() {
        console.log("---------------------");
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Ano de Publicação: ${this.anoPublicacao}`);
        console.log(`Quantidade em Estoque: ${this.qtdEstoque}`);
        console.log(`Data de lançamento: ${this.DataDeLançamento}`);
    }

    }

module.exports = Obra;
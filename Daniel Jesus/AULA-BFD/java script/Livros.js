//o construtor determina o que cada class representa
class Livro extends Obra {
    constructor(titulo, autor, anoPublicacao, qtdEstoque, numeroPaginas) {
        super(titulo, autor, anoPublicacao, qtdEstoque);
        this.numeroPaginas = numeroPaginas;
    }
    //imprimi cada class do contrutor
    imprimirDetalhes() {
        console.log(`Número de Páginas: ${this.numeroPaginas}`);
        

    }

}

module.exports = Livro;
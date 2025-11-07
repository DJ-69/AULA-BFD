const entrada = require("./entrada");



//o construdor determina o que cada class representa
class Compra extends entrada {
    constructor() {
        super(livro, preco, vendedor, data_venda, qtd);
        
    }
    //a funçao CalcularPreçoUnitario serve para retorna um valor 

    calcularPrecoUnitario() {
        return this.preco / this.qtd;
    }
    //imprimi cada class do contrutor
    imprimirDetalhes(){}}

module.exports = Compra;
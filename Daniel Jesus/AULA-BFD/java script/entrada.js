const Compra = require("./Compra");

//o construdor determina o que cada class representa
class Entrada extends Compra {
    constructor(livro, preco, vendedor, data_venda, qtd) {
        this.livro = livro;
        this.preco = preco;
        this.vendedor = vendedor;
        this.data_venda = data_venda;
        this.qtd = qtd;
        this.precoUnitario = this.calcularPrecoUnitario();
        this.livro.qtdEstoque += qtd;
    }
    //a funçao CalcularPreçoUnitario serve para retorna um valor 

    calcularPrecoUnitario() {
        return this.preco / this.qtd;
    }
    //imprimi cada class do contrutor
    imprimirDetalhes() {
        console.log("---------------------");
        console.log(`Livro: ${this.livro.titulo}`);
        console.log(`Preço Total: R$ ${this.preco.toFixed(2)}`);
        console.log(`Vendedor: ${this.vendedor}`);
        console.log(`Data da Venda: ${this.data_venda}`);
        console.log(`Quantidade: ${this.qtd}`);
        console.log(`Preço Unitário: R$ ${this.precoUnitario.toFixed(2)}`);
        console.log("---------------------");
    }
}

module.exports = Entrada;
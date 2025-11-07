const entrada = require("./entrada");

class Doaçoes extends entrada {
    constructor(ObraDoada,DataDoacao,Pessoa){
        super(livro, preco, vendedor, data_venda, qtd);
        this.ObraDoada=ObraDoada;
        this.DataDoacao=DataDoacao;
        this.Pessoa = Pessoa;
    }
     imprimirDetalhes() {
        console.log(`nome da pessoa:${this.Pessoa}`);
        console.log(`Data da doaçao:${this.DatadaDoacao}`);
        console.log(`obra doada${this.ObraDoada}`)
        
     }
}
module.exports=Doaçoes
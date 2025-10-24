const entrada = require("./entrada");

class Doaçoes extends entrada {
    constructor(vendedor,DatadaDoacao){
        this.vendedor=vendedor;
        this.DatadaDoacao=DatadaDoacao
    }
     imprimirDetalhes() {
        console.log(`nome do vendedor:${this.vendedor}`);
        console.log(`Data da doaçao:${this.DatadaDoacao}`);
     }
}
module.exports=Doaçoes
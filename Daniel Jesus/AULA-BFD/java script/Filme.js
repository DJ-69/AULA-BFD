class filme extends Obra {
    constructor(duraçao,DatadeLançamento) {
        this.duraçao = duraçao;
        this.DatadeLançamento=DatadeLançamento;

    }
    imprimirDetalhes() {
        console.log(`Duraçao do filme: ${this.duraçao}`);
        console.log(`Data de lançamento: ${this.DataDeLançamento}`);
}
}
module.exports=filme
class Guardainformaçao{
    private info:string

    constructor(info:string){
        this.info=info
    }

    guardainfor(info:string):void{
        this.info= info
    }

    falarinfor(info:string):void{
        console.log(`a informaçao é ${this.info}`)
    }
}


class GuardaSegredo extends Guardainformaçao{
    protected senha:number;

    constructor(info:string, senha:number){
        super(info)
        this.senha = senha
    }
}

const gi = new Guardainformaçao("Meu Segredo");

gi.guardainfor("novo seg")

const gs = new GuardaSegredo("Meu Segredo",123123);
gs.guardainfor("novo segredo")



//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

abstract class Bebidas {
    abstract preparaçao(): void

}

class alcoolicos extends Bebidas{
    preparaçao(): void {
        prompt("Vc é maior de 18?")
        console.log("a bebida é feita com gin");
    }
}

class naoalcoolicos extends Bebidas{
    preparaçao(): void{
        console.log()
    }
}
import promptSync from "prompt-sync";
const prompt = promptSync();

class nota{
    tom:string;
    oitava:number;
    tons_validos = "CDEFGAB";

    constructor(tom:string,oitava:number) {
        if(!this.tons_validos.includes(tom)){
            throw new Error("Tom inválido!");
        }
        this.tom=tom
        this.oitava=oitava
    }
}

class GerenciadorDeNotas{
    notas:Array<nota>

    constructor(){
        this.notas=[];
    }

    PerguntarNota():void{
        const t = prompt("qual é o tom?")+"";
        const o = Number(prompt("qual é a oitava?"));
        try {
            const n= new nota(t,o);
            this.notas.push(n);
        } catch (error:any) {
            console.log("Ocorreu um erro ",error.message )
        }
        
    }

}

const g = new GerenciadorDeNotas();
while(true){
    g.PerguntarNota();
    console.log(g.notas);
}

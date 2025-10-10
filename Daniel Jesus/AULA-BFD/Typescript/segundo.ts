class Estudante{
    nome: string;
    matricula: number;
    media:number;

    constructor(nome:string,matricula:number){
        this.matricula=matricula
        this.nome=nome
        this.media=0
    }

    calcularmedia(g1:number,g2:number){
        this.media = (g1+2*g2)/3
    }

    imprimir():void{
        console.log(`${this.media}`)
    }

}

class turma{
    nome: string;
    alunos: Array<Estudante>;
    
    constructor(nome:string,alunos:Array<Estudante>){
        this.nome=nome
        this.alunos=alunos
    }

    notaleatoria():number{
        return Math.random()*10;
        
    }
    notasMalucas():void{
        this.alunos.forEach( aluno=> {
            const g1 = this.notaleatoria();
            const g2 = this.notaleatoria();
            aluno.calcularmedia(g1,g2);
            console.log(`NOta nova de ${aluno.nome} é ${aluno.media}`)
        })  
    }
}
    
const a1 = new Estudante("Daniel",13221332);
const a2 = new Estudante("Fernanda",213312312);

const t1 = new turma("React BFD",[a1,a2]);

t1.notasMalucas();



    
    //const numAlkea=Math.random()
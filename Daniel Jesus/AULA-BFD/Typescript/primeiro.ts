const calcularcubo = (a:number):number =>{
    return a*a;
}

console.log(calcularcubo(3));

const primeiraouultimaletra = (a:string,b:boolean) =>{
    if (b == true){
        console.log(a[0]);
    }
    else{
        console.log(a[a.length-1])
    }
}

primeiraouultimaletra("Olá",true);

//

type Aluno ={
    nome: string;
    matricula: number;
    nota: number;
}

const alEx:Aluno = {
    nome:"Daniel Jesus",
    matricula:231231321,
    nota:10
};

type Turma={
    materia: string;
    codigo: number;
    alunos:Array<Aluno>;
}


const turEx: Turma = {
    materia:"React ",
    codigo:1321321,
    alunos:[alEx]
}


const imprimirpresença = (t:Turma) => {
    console.log(t.alunos);
}

imprimirpresença(turEx)

const calcularmedia = (t:Turma):number => {
    let acc =0.0;
    t.alunos.forEach((al)=>{
        acc+=al.nota;
    });
    return acc/t.alunos.length;
};

console.log(calcularmedia(turEx))
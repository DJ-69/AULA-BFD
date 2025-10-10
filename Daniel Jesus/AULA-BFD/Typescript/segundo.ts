class GerenciadorFormas{
    formas:Array<Forma>

    constructor(formas:Array<Forma>){
        this.formas=formas
    }

    CalcularSomaArea() {
        let acc = 0;
        this.formas.forEach(form => {
            acc+= form.calcularArea();
        })
        return acc;
    }
}

abstract class Forma{
    poli:number

    constructor(poli:number){
        this.poli = poli
    }

    abstract calcularArea(): number;
    
}



class Circulo extends Forma {
    calcularArea(): number {
        return Math.PI
    }
}



class Triangulo extends Forma {
    public altura:number
    public comprimento:number

    constructor(altura:number,comprimento:number){
        super(3)
        this.altura=altura
        this.comprimento=comprimento
    }

    calcularArea(): number {
    return this.comprimento*this.altura/2
        
    }
}



class Retangulo extends Forma{
    public altura:number
    public comprimento:number

    constructor(altura:number,comprimento:number){
        super(4)
        this.altura=altura
        this.comprimento=comprimento
    }

    calcularArea(): number {
    return this.altura*this.comprimento
    }
    
}

const t = new Triangulo(10,10);
const r = new Retangulo(10,10);

const ger =new GerenciadorFormas([t,r])

console.log(ger.CalcularSomaArea());
const criardono = (nome,celular) => {
    return {
        nome,
        celular
        
        }
    }



const dono1=criardono("arthur","219936127612","21")
const dono2=criardono("jaco pastorius","219936143487","25")


console.log(dono2)

const criapet= (nome,especie,raca,idade,dono) =>{
    return{
        nome,
        especie,
        raca,
        idade,
        dono,
        consulta:["10/12"],
             aniversario(){
        this.idade ++;
        }
    }
    
}

const pet1 = criapet("michael","gato","SRD",231,dono1) 
const pet2 = criapet("PPMME","gato","SRD",12,dono2) 


console.log(pet1,pet2)

pet2.aniversario();
pet1.aniversario()

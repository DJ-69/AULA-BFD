export const criapet= (nome,especie,raca,idade,dono) =>{
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
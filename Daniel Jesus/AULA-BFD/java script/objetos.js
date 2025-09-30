//exercicio 


const pet = {
    nome: "fumaça",
    especie:"gato",
    raça:"siames",
    idade:10,
    dono:{ nome: "daniel", cel:"(21) 96442-9900" },
    consultas: ["13/09","13/10"],
    verificarConsultas (){ 
        if(this.consultas.length >0) {console.log(`data da consulta`);
            this.consultas.forEach((Element) => {
                console.log(Element)
            })

        } else {console.log(`não tem consulta`)

        }
    }
};

pet.verificarConsultas()

for(key in pet){
    console.log(`chave: ${}`)
}

//Object.keys       Object.values
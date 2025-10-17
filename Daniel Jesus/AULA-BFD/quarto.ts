async function Dadosip(id:number):Promise<any> {
    const resposta =await fetch(`https://meowfacts.herokuapp.com/${id}`);
    if(!resposta.ok) {
        throw new Error("nao encontrei esse dados no IP");
        
    }
    return resposta.json();
}
Dadosip(3);
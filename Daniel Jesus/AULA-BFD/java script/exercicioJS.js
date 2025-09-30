const prompt = require('prompt-sync')();

function perguntaridade(){
    
    const idade = prompt('qual é o sua idade? ');
    return idade;
} 

const resul = perguntaridade();


console.log(`a idade é igual a ${resul}`)






function calcular(idadeOrig){

    const verdade = idadeOrig*7;

    return verdade
}
const d = calcular(resul);

console.log(`a idade do animal é ${d}`)

const arr = [];



arr.push(perguntaridade());
arr.push(3)
arr.push(7)
arr.push(13)
arr.push(50)
arr.pop()


arr.forEach(el=>{
    const resul = calcular(el);
    console.log(resul)
})
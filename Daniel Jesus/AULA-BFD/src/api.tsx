import './App.css'
import { useEffect, useState } from 'react';

function Fetch(){
    const [idade, setIdade] = useState(0);
    const [nome,setNome] = useState("");
    const [genero,setGenero] = useState("")

    const atualizarNome = (e) => {
        setNome(e.target.value)
    }

    const pegarDados = async () => {
        const res = await fetch(`https://api.agify.io?name=${nome}`);
        const data = await res.json();
        setIdade(data.age);

        const resGen = await fetch(`https://api.genderize.io?name=${nome}`)
        const gen = await resGen.json();
        setGenero(gen.gender)
    }

    return (
        <div>
            <input type='text' onChange={atualizarNome}/>
            <button onClick={pegarDados}>Pesquisa</button>
            <h2>{idade}</h2>
            <br />
            <h2>{genero}</h2>
        </div>
    );
}

export default Fetch;
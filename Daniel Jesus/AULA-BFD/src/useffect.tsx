import { useEffect, useState } from 'react';
import './App.css'

function Contador() {
  const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `tentativa ${count}`;
    }, [count]);

      const diminuir = ()=> setCount(c =>c -1)
      const aumentar = () => setCount(c => c + 2);
        
    useEffect(()=>{
        alert("Alo!");
        return ()=> {console.log("Tchau!")}
    },[])
      
      
      return(<>
        <div>
            <h1>const {count}</h1>
            <button onClick={aumentar}>
            +
            </button>
        </div> 

        <div>

            <button onClick={diminuir}>
                -
            </button>
        </div>
      </>);


  }

  export default Contador;

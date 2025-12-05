import axios from "axios";
import { useEffect, useState } from "react";


async function pegarAlbum() {
    try{    
        const response = await axios.get("http://192.168.137.1:3000/albums/1")
        console.log('data',response.data);
        return response.data
    } catch(error) {
        console.error('erro',error);
        throw error;
    }
} 

export default function MostraAlbums() {
    const [data, setData] = useState(null);
    const [error,setError] = useState(null)
    
    useEffect(()=>{
        pegarAlbum()
            .then(result =>{
                setData(result);
            })
            .catch(err => {
            setError(err);
            });  
    },  []);
    
    if (error) return <>error loading
        </>;
        return <>{JSON.stringify(data)}</>;
}


async function fetchAlbum(id) {
    try{    
        const response = await axios.post("http://192.168.137.1:3000/albums/1")
        console.log('data',response.data);
        return response.data
    } catch(error) {
        console.error('erro',error);
        throw error;
    }
} 
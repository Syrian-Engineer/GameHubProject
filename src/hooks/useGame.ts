import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface Game{
    id:number,
    name:string
}


interface FetchGamesRespons{
    count:number,
    results:Game[],
}


const useGame = () => {
    const[games,setGames] = useState<Game[]>([]);
    const[error,setError] = useState('');

    useEffect(()=>{
    const controlller = new AbortController();
        
    apiClient
    .get<FetchGamesRespons>('/games',{signal:controlller.signal})
    .then(res=> setGames(res.data.results))
    .catch(err=>{
        if(err instanceof CanceledError) return null
        setError(err.message)
    });

    return ()=> controlller.abort();
},[])

    return {games,error};
}

export default useGame
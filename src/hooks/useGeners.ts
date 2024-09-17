import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"


interface Genre{
    id:number,
    name:string
}

interface fetchGenresRespons{
    count:number,
    results:Genre[]
}

const useGeners = ()=>{
    const[genres,setGenres] = useState<Genre[]>([]);
    const[error,setError] = useState('');
    const[isLoading,setLoading]=useState(false)

useEffect(() => {
    const controller = new AbortController();
   
    setLoading(true)
    apiClient
    .get<fetchGenresRespons>('/genres',{signal:controller.signal})
    .then((res)=>{
        setGenres(res.data.results)
        setLoading(false)
    })
    .catch((err)=>{
        if(err instanceof CanceledError) return null
        setError(err.message)
        setLoading(false)
    })
    return controller.abort();
}, []);

return {genres,error,isLoading};

};
export default useGeners

// https://api.rawg.io/api/genres
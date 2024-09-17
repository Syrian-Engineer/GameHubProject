import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"




interface fetchResponse<T> {
    count:number,
    results: T[]
}

const useData = <T>(endPoint:string) => {
    const[Data,setData] = useState<T[]>([]);
    const[error,setError] = useState("");
    const[isLoading,setLoading]=useState(false)

useEffect(() => {
    const controller = new AbortController();
   
    setLoading(true)
    apiClient
    .get<fetchResponse<T>>(endPoint ,{signal:controller.signal})
    .then((res)=>{
        setData(res.data.results)
        setLoading(false)
    })
    .catch((err)=>{
        if(err instanceof CanceledError) return null
        setError(err.message)
        setLoading(false)
    })

    return()=> controller.abort();

}, [endPoint]);

return {Data,error,isLoading};

};
export default useData

// https://api.rawg.io/api/genres
import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { AxiosRequestConfig, CanceledError } from "axios"




interface fetchResponse<T> {
    count:number,
    results: T[]
}


const useData = <T>(endPoint:string ,requestConfig ?: AxiosRequestConfig ,deps?:(number|undefined)[] ) => { // We Passed Genre As A String Query
    const[Data,setData] = useState<T[]>([]);
    const[error,setError] = useState("");
    const[isLoading,setLoading]=useState(false)

useEffect(() => {
    const controller = new AbortController();
   
    setLoading(true)
    apiClient
    .get<fetchResponse<T>>(endPoint,{signal:controller.signal , ...requestConfig})
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

}, deps ? [...deps] : []);  // Because if Any Dependecies is Changed the UseEffect Will rerun and refresh data from the server

return {Data,error,isLoading};

};
export default useData

// https://api.rawg.io/api/genres
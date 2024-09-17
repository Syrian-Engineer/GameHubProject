import useData from "./useData"

export interface Genre{
    id:number,
    name:string,
    image_background:string
}

const useGeners = ()=> useData<Genre>('/genres')

export default useGeners

// https://api.rawg.io/api/genres
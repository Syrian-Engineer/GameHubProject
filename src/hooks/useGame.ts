import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform{
    id:number,
    name:string,
    slug:string,
}

export interface Game{
    id:number,
    name:string,
    background_image:string,
    parent_platforms:{platform:Platform}[],
    metacritic:number,
    rating_top:number
}




const useGame = (gameQuery:GameQuery) => 
    useData<Game>(
        '/games',   
        {
            params:         // Parma Object That We Are Sending To The Server
            {                  
            genres:gameQuery.genre?.id,
            platform:gameQuery.platform?.id,
            ordering:gameQuery.sortOrder,
            search:gameQuery.searchText
             }
        },
        [gameQuery]
    )

export default useGame
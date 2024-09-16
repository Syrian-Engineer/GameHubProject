import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'b824966fb6bd4f15aad058eea7b60a99'
    }
})
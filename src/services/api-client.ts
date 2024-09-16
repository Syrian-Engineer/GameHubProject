import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'69ed80074af448bdb241d209f79c6689'
    }
})
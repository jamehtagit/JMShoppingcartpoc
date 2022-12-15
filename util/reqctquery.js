
import { useQuery } from "react-query";
import axios from 'axios'
const useBestquery = () => useQuery(["cart"],async ()=>{
    //return await axios.get("https://dummyjson.com/products").then((res)=>res.data)})
    return await axios.get("http://localhost:3001/api/productsapi").then((res)=>res.data)
})
export default useBestquery
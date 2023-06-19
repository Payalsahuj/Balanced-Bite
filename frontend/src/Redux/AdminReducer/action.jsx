import { LOADING} from "./actionType"
import axios from "axios"

export const adminlogin=(data)=>(dispatch)=>{
    // console.log(data)
   
    dispatch({type:LOADING})

    return axios.post("https://frail-toad-sunglasses.cyclic.app/admin-auth/login",data)
    
}

export const getallusersdata=(dispatch)=>{
    dispatch({type:LOADING})

    return axios.get("https://frail-toad-sunglasses.cyclic.app/users/allusers") 
}

export const getallproducts=(dispatch)=>{
    dispatch({type:LOADING})

    return axios.get("https://frail-toad-sunglasses.cyclic.app/adminproducts",{
        headers:{
            Authorization: localStorage.getItem("admintoken")
        }
    })   
}

export const addproduct=(data)=>(dispatch)=>{
    dispatch({type:LOADING})
    return axios.post("https://frail-toad-sunglasses.cyclic.app/adminproducts/add",data)
}

export const updateproduct=(id,data)=>(dispatch)=>{
    dispatch({type:LOADING})
    return axios.patch(`https://frail-toad-sunglasses.cyclic.app/adminproducts/update/${id}`,data)
}

export const deleteproduct=(id)=>(dispatch)=>{
    dispatch({type:LOADING})
    return axios.delete(`https://frail-toad-sunglasses.cyclic.app/adminproducts/delete/${id}`) 
}
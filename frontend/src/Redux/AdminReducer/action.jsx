import { POST_ADMINLOGIN_SUCCESS } from "./actionType"
import axios from "axios"

export const adminlogin=(data)=>(dispatch)=>{
    // console.log(data)
   
    dispatch({type:POST_ADMINLOGIN_SUCCESS})

    return axios.post("https://frail-toad-sunglasses.cyclic.app/admin-auth/login",data)
    
}

export const getallusersdata=(dispatch)=>{
    dispatch({type:POST_ADMINLOGIN_SUCCESS})

    return axios.get("https://frail-toad-sunglasses.cyclic.app/users/allusers") 
}

export const getallproducts=(dispatch)=>{
    dispatch({type:POST_ADMINLOGIN_SUCCESS})

    return axios.get("https://frail-toad-sunglasses.cyclic.app/adminproducts",{
        headers:{
            Authorization: localStorage.getItem("admintoken")
        }
    })   
}
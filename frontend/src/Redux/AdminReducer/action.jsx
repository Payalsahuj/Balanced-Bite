import { LOADING} from "./actionType"
import axios from "axios"

export const adminlogin=(data)=>(dispatch)=>{
    // console.log(data)
   
    dispatch({type:LOADING})

    return axios.post("https://balanced-bite.onrender.com/admin-auth/login",data)
    
}

export const getallusersdata=(dispatch)=>{
    dispatch({type:LOADING})

    return axios.get("https://balanced-bite.onrender.com/users/allusers") 
}

export const getallproducts=(dispatch)=>{
    dispatch({type:LOADING})

    return axios.get("https://balanced-bite.onrender.com/adminproducts",{
        headers:{
            Authorization: localStorage.getItem("admintoken")
        }
    })   
}

export const addproduct=(data)=>(dispatch)=>{
    dispatch({type:LOADING})
    return axios.post("https://balanced-bite.onrender.com/adminproducts/add",data)
}

export const updateproduct=(id,data)=>(dispatch)=>{
    dispatch({type:LOADING})
    return axios.patch(`https://balanced-bite.onrender.com/adminproducts/update/${id}`,data)
}

export const deleteproduct=(id)=>(dispatch)=>{
    dispatch({type:LOADING})
    return axios.delete(`https://balanced-bite.onrender.com/adminproducts/delete/${id}`) 
}

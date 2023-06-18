import { Navigate } from "react-router-dom";



const PrivateRoute = ({children})=>{
   
 let token =localStorage.getItem("admintoken")
 let name=localStorage.getItem("name")
 if(token && name){
    return children
 }
 alert("First Login to Admin account Please")
 return  <Navigate to = "/"/>
 
    
 
}
export default PrivateRoute;
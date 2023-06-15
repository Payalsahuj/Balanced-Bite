import { Routes,Route } from "react-router-dom"
import Home from "../Pages/Home"
import { Registration } from "../Pages/Registration"
import { Login } from "../Pages/Login"
import { Adminlogin } from "../Pages/AdminLogin"

export const AllRoutes=()=>{
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Registration/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/adminlogin' element={<Adminlogin/>}/>
            </Routes>
        </div>
    )
}


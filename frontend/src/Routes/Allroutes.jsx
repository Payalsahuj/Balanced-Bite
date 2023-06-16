import { Routes,Route } from "react-router-dom"
import Home from "../Pages/Home"
import { Registration } from "../Pages/Registration"
import { Login } from "../Pages/Login"
import { Adminlogin } from "../Pages/AdminLogin"

import Wine from "../Pages/Wine"

import Products from "../Pages/Products"
import SingleProduct from "../Pages/SingleProduct"
import { Admin } from "../Pages/Admin"

export const AllRoutes=()=>{
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Registration/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/adminlogin' element={<Adminlogin/>}/>
                <Route path="/wine" element={<Wine/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/products/:id" element={<SingleProduct/>}/>
                <Route path="/admin" element={<Admin/>}/>
            </Routes>
        </div>
    )
}


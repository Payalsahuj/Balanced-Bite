import { Routes,Route } from "react-router-dom"
import Home from "../Pages/Home"
import { Registration } from "../Pages/Registration"
import { Login } from "../Pages/Login"
import { Adminlogin } from "../Pages/AdminLogin"

import Wine from "../Pages/Wine"

import Products from "../Pages/Products"
import SingleProduct from "../Pages/SingleProduct"

import { Admin } from "../Pages/Admin"


import Gift from "../Pages/Gift"

import Pricing from "../Pages/Pricing"
import Dashboard from "../Pages/Dashboard"

import PrivateRoute from "../AdminPrivateRoute/privateroute"
import { Updateproductadmin } from "../Components/updateproductadmin"
import Loading from "../Pages/loading"

import PersonalDetails from "../Pages/Payment/PersonalDetails"
import Card from "../Pages/Payment/Card"
import Summary from "../Pages/Payment/Summary"
import Complete from "../Pages/Payment/Complete"





export const AllRoutes=()=>{
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Registration/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/adminlogin' element={<Adminlogin/>}/>
                <Route path="/wine" element={<Wine/>}/>

                <Route path="/gift" element={<Gift/>}/>
                <Route path="/payment" element={<PersonalDetails/>}/>
                <Route path="/payment/card" element={<Card/>}/>
                <Route path="/payment/summary" element={<Summary/>}/>
                <Route path="/payment/complete" element={<Complete/>}/>

                <Route path="/products" element={<Products/>}/>
                <Route path="/products/:id" element={<SingleProduct/>}/>


                <Route path="/admin" element={<PrivateRoute><Admin/></PrivateRoute>}/>
                <Route path="/admin/:place" element={<PrivateRoute><Admin/></PrivateRoute>}/>
                <Route path="/admin/handlestocks/:id" element={<PrivateRoute><Updateproductadmin/></PrivateRoute>}/>


                <Route path="/pricing" element={<Pricing/>}/>
                <Route path="/loading" element={<Loading/>}/>
            </Routes>
        </div>
    )
}


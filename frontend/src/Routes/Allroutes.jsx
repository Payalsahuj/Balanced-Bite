import { Routes,Route } from "react-router-dom"
import Home from "../Pages/Home"

import Wine from "../Pages/Wine"

import Products from "../Pages/Products"
import SingleProduct from "../Pages/SingleProduct"
import Pricing from "../Pages/Pricing"


export const AllRoutes=()=>{
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>

                <Route path="/wine" element={<Wine/>}/>


                <Route path="/products" element={<Products/>}/>
                <Route path="/products/:id" element={<SingleProduct/>}/>
                <Route path="/pricing" element={<Pricing/>}/>

            </Routes>
        </div>
    )
}


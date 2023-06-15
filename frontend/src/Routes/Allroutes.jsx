import { Routes,Route } from "react-router-dom"
import Home from "../Pages/Home"

import Wine from "../Pages/Wine"

import Products from "../Pages/Products"
import SingleProduct from "../Pages/SingleProduct"
import Gift from "../Pages/Gift"
import Payment from "../Pages/Payment/Payment"


export const AllRoutes=()=>{
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>

                <Route path="/wine" element={<Wine/>}/>
                <Route path="/gift" element={<Gift/>}/>
<Route path="/payment" element={<Payment/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/products/:id" element={<SingleProduct/>}/>

            </Routes>
        </div>
    )
}


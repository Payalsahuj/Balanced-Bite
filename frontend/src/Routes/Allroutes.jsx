import { Routes,Route } from "react-router-dom"
import Home from "../Pages/Home"
import Wine from "../Pages/Wine"

export const AllRoutes=()=>{
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/wine" element={<Wine/>}/>

            </Routes>
        </div>
    )
}


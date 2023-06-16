const express=require('express')
const app=express()
const {connection}=require("./db")
require("dotenv").config()
const cors=require('cors')
app.use(cors())

app.use(express.json())
const {userRouter}=require("./routes/user.route")
// const { productRouter } = require('./routes/product_sign.route')
// const {productVegRouter} = require('./routes/product_veg.route')
// const {productWellRouter}=require("./routes/product_well.route")
const { cartRouter } = require('./routes/cart.routes')
const { orderRouter } = require('./routes/order.routes')
const { productRouter } = require('./routes/product.routes')
const { auth } = require('./middleware/auth.middleware')

app.use("/users",userRouter)
app.use("/product",productRouter)
// app.use("/products_signature",productRouter)
// app.use("/products_veg",productVegRouter)
// app.use("/products_well",productWellRouter)

app.use(auth)
app.use("/cart",cartRouter)
app.use("/order",orderRouter)



app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log(`running at port ${process.env.port} `)
    }catch(err){
        console.log(err)
        console.log("something went wrong")
    }

})
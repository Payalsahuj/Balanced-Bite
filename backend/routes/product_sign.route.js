const express=require("express")
const {productModel}=require("../model/products.model")
//const {auth}=require("../middleware/auth.middleware")

const productRouter=express.Router()
//noteRouter.use(auth)


productRouter.get("/",async(req,res)=>{
    try{
        const products=await productModel.find()
        res.send(products)
    }catch(err){
        res.json({error:err.message})
    }
})



module.exports={
    productRouter
}
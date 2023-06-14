const express=require("express")
const {productVegModel}=require("../model/products_veg.model")
//const {auth}=require("../middleware/auth.middleware")

const productVegRouter=express.Router()
//noteRouter.use(auth)


productVegRouter.get("/",async(req,res)=>{
    try{
        const products=await productVegModel.find()
        res.send(products)
    }catch(err){
        res.json({error:err.message})
    }
})



module.exports={
    productVegRouter
}
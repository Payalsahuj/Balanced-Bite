const express=require("express")
const {productWellModel}=require("../model/products_well.model")
//const {auth}=require("../middleware/auth.middleware")

const productWellRouter=express.Router()
//noteRouter.use(auth)


productWellRouter.get("/",async(req,res)=>{
    try{
        const products=await productWellModel.find()
        res.send(products)
    }catch(err){
        res.json({error:err.message})
    }
})



module.exports={
    productWellRouter
}
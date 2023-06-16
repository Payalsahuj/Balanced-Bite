const express=require("express")
const {ProductModel}=require("../model/product.model")
const productRouter=express.Router()


//get product for product page
productRouter.get("/signature",async(req,res)=>{
    const payload=req.query
    try{
        let product=await ProductModel.find({category:"signature"})
        res.status(200).send(product)

    }catch(err){
        res.status(400).send(err)
    }
})

productRouter.get("/vegetarian",async(req,res)=>{
    const payload=req.query
    try{
        let product=await ProductModel.find({category:"vegetarian"})
        res.status(200).send(product)

    }catch(err){
        res.status(400).send(err)
    }
})

productRouter.get("/wellness",async(req,res)=>{
    const payload=req.query
    try{
        let product=await ProductModel.find({category:"wellness"})
        res.status(200).send(product)

    }catch(err){
        res.status(400).send(err)
    }
})



//singalproduct page
productRouter.get("/singleproduct/:productID",async(req,res)=>{
    const {productID}=req.params;
    try{
        const user=await ProductModel.findOne({_id:productID})
        res.status(200).send(user)

    }catch(err){
        res.status(400).send({"msg":err.message})
    }

})



module.exports={productRouter}
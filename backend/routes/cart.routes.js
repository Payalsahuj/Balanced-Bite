const express=require("express")
const {CartModel}=require("../model/cart.model")
const {ProductModel}=require("../model/product.model")
const jwt=require("jsonwebtoken")
const cartRouter=express.Router()

cartRouter.post("/add",async(req,res)=>{
    const token=req.headers.authorization;
    const decoded = jwt.verify(token, 'masai');
    
    const payload=req.body;
    let user=await CartModel.find()
    try{
        if(decoded){
            
            let flag=false;
            for(let i=0; i<=user.length-1; i++){
                if(user[i].title==payload.title){
                    flag=true
                }
            }
            if(flag==true){
                res.status(200).send({msg:"product already exist!"})
            }else{
                let user=new CartModel(payload)
                await user.save()
                res.status(200).send({msg:"product added in a cart"})
            }
            
        }else{
            res.status(400).send({msg:"please Login first!"})
        }
    }catch(err){
        res.status(400).send({msg:err})
    }
})



cartRouter.get("/",async(req,res)=>{
    const token=req.headers.authorization;
    const decoded = jwt.verify(token, 'masai');
    try{
        if(decoded){
            let user=await CartModel.find({userID:decoded.userID})
            res.status(200).send(user)
        }else{
            res.status(400).send({msg:"please Login first!"})
        }

    }catch(err){
        res.status(400).send({msg:err})
    }
})

cartRouter.patch("/update/:cartID",async(req,res)=>{
    const token=req.headers.authorization
    const decoded=jwt.verify(token,"masai")
    const req_id=decoded.userID
    //console.log(req_id)
    const {cartID}=req.params;
    const cart=await CartModel.findOne({_id:cartID})
    const userID_in_cart=cart.userID
    const payload=req.body;
    try{
        if(req_id==userID_in_cart){
            await CartModel.findByIdAndUpdate({_id:cartID},payload)
            res.status(200).send({msg:"cart product updated successfully!"})
        }else{
            res.status(400).send({msg:"Please login first!"})
        }
       
    }catch(err){
        res.status(400).send({msg:err})
    }

})

cartRouter.delete("/delete/:cartID",async(req,res)=>{
    const token=req.headers.authorization
    const decoded=jwt.verify(token,"masai")
    const req_id=decoded.userID
    console.log(req_id)
    //console.log(req_id)
    const {cartID}=req.params;
    const cart=await CartModel.findOne({_id:cartID})
    const userID_in_cart=cart.userID
    console.log(userID_in_cart)
    
    try{
        if(req_id==userID_in_cart){
            await CartModel.findByIdAndDelete({_id:cartID})
            res.status(200).send({msg:"cart product deleted successfully!"})
        }else{
            res.status(400).send({msg:"Please login first!"})
        }
       
    }catch(err){
        res.status(400).send({msg:err})
    }

})

cartRouter.delete("/deleteallcart",async(req,res)=>{
    const token=req.headers.authorization
    const decoded=jwt.verify(token,"masai")
    try{
        if(decoded){
            await CartModel.deleteMany({userID:decoded.userID})
            res.status(200).send({msg:"cart allproduct deleted successfully!"})
        }else{
            res.status(400).send({msg:"Please login first!"})
        }

    }catch(err){
        res.status(400).send({msg:err})
    }
})

module.exports={cartRouter}
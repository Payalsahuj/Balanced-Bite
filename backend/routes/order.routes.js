const express=require("express")
const jwt=require("jsonwebtoken")
const {OrderModel}=require("../model/order.model")
const {CartModel}=require("../model/cart.model")

const orderRouter=express.Router()

orderRouter.post("/add",async(req,res)=>{
    const token=req.headers.authorization;
    const decoded = jwt.verify(token, 'masai');
    //const payload=await CartModel.find({userID:decoded.userID});
    const payload=req.body;
    try{
        if(decoded){
            for(let i=0; i<=payload.length-1; i++){
                payload[i].date=new Date().toDateString()
            }
            await OrderModel.insertMany(payload)
            res.status(200).send({msg:"product added in order successfully"})
        }else{
            res.status(400).send({msg:"Please login first!"})
        }

    }catch(err){
        res.status(400).send({msg:err})
    }
})

orderRouter.get("/",async(req,res)=>{
    const token=req.headers.authorization;
    const decoded = jwt.verify(token, 'masai');
    try{
        if(decoded){
            let user=await OrderModel.find({userID:decoded.userID})
            res.status(200).send(user)
        }else{
            res.status(400).send({msg:"please Login first!"})
        }
    }catch(err){
        res.status(400).send({msg:err})
    }
})

module.exports={orderRouter}
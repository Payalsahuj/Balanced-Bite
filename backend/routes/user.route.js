const express=require("express")
const {userModel}=require("../model/users.model")

const userRouter=express.Router()
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const dataBase=[]

userRouter.post("/register",async(req,res)=>{
    const {name,email,pass,age,nation}=req.body
    const existingUser = dataBase.find((user) => user.email === email);
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists, Please Login !!' });
        }
    const password = /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password.test(pass)) {
        return res.status(400).json({ error: 'Invalid password. It should contain at least one number, one special character, and be at least 8 characters long.' });
    }
    try{
        bcrypt.hash(pass, 5, async(err, hash)=> {
            // Store hash in your password DB.
            if(err){
                res.status(400).json({error:err.message})
            }else{
                const user=new userModel({name,email,pass:hash,age,nation})
                dataBase.push(user)
                await user.save()
                res.status(200).json({msg:"new user added",updatedUser:req.body})
            }
        });
        
       
    }catch(err){
        res.status(400).json({err:err.message})
    }

})


userRouter.post("/login",async(req,res)=>{
const {email,pass}=req.body
    try{
        const user=await userModel.findOne({email})
        
        if(user){
            bcrypt.compare(pass, user.pass, (err, result)=> {
                // result == true
                if(result){
                    let token=jwt.sign({userID:user._id,user:user.name},'masai')
                    res.status(200).json({msg:"Login Successfull!!",token:token})
                }else{
                    res.status(200).json({msg:"Wrong Credential!!"})
                }
            });
           
        }else{
            res.status(200).json({msg:"Wrong Credential!!"})
        }
    }catch(err){
        res.status(400).json({error:err.message})
    }
})


module.exports={
    userRouter
}
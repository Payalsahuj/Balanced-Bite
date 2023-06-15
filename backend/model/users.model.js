const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    pass:String,
    age:Number,
    nation:String
},{
    versionKey:false
})

const userModel=mongoose.model("user",userSchema)

module.exports={
    userModel
}
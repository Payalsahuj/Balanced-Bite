const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    image:String,
    name:String,
    title:String,
    time:Number,
    price:Number,
    about_dish:String,
    highlight:String,
    calories:Number,
    ingredients_image:String,
    ingredients_detail:Array,
    instruction_image:Array,
    instruction_detail:Array
},{
    versionKey:false
})

const productWellModel=mongoose.model("product_well",productSchema)

module.exports={
    productWellModel
}
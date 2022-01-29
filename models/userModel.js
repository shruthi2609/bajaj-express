const express=require("express")
const app=express()
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://cram_js:atlasdb@cluster0.zdsqd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true})
const User=mongoose.model("Customer",{
   email:{
    type:String,
    unique:true,
    required:[true,"please enter the email"],
   },
   password:{
       type:String,
       required:[true,"enter your pasword"],
   }
   ,
   mobile:{
        type:Number,
        required:[true,"enter your mobile number"],
        minlength:10,
        maxlenghth:10,
   },
   country:{
       type:String,
       default:"IND",
       required:true
   },
   area:String,
   pincode:{
        type:Number,
        required:true
   },
   address:String
})

module.exports=User
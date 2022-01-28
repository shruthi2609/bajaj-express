const express=require("express")
const app=express()
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://cram_js:atlasdb@cluster0.zdsqd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true})
const User=mongoose.model("publications",{
   email:{
    type:String,
    unique:true,
    required:[true,"please enter the email"],
   },
   userName:{
    type:String,
    minlength:[5,"please enter atleast 5 characters"],
    maxlength:15
   },
   interest:{
    type:[String],
    enum:["react","node","express"],
    required:true
   }
})
const user1=new User(
    {
        email:"test123@gmail.com",
        userName:"test12",
        interest:["node"]
    }
)
user1.save().then(()=>console.log("user added successfully"))

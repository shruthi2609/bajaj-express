const express=require("express")
const app=express()
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://cram_js:atlasdb@cluster0.zdsqd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true})
const User=mongoose.model("publications",{
    author:String,
    password:String,
    userName:String
})
const user1=new User(
    {
        author:"authorabc",
        password:"pass234",
        userName:"testauthor"
    }
)
user1.save().then(()=>console.log("user added successfully"))

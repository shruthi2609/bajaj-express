const express=require("express")
const app=express()
app.set("view engine","hbs")
app.get("/home",(req,res)=>{
    res.status(200).render("home",{username:"peter"})
})
app.listen(3001,()=>{
    console.log("server started")
})
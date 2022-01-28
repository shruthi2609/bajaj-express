const express=require("express")
const app=express()
app.set("view engine","jade")
app.get("/index",(req,res)=>{
    res.status(200).render("index",{heading:"Index Page"})
})
app.listen(3001,()=>{
    console.log("server started")
})
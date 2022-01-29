const express=require("express")
const router=express.Router()
router.get("/home/products",(req,res)=>{
    console.log(req.query)
     const querydata=req.query
     if(querydata.prname){
         res.send("products fetched")
     }
     res.send("products")
 })
 router.get("/home",(req,res)=>{
     res.status(200).send("home")
 })
 module.exports=router
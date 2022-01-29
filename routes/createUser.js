const express=require("express")
const router=express.Router()
const User=require("../models/userModel")
router.post("/signup",(req,res)=>{
console.log(req.body)
})
module.exports=router
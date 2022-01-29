const express=require("express")
const router=express.Router()
const logger=require("../middleware/logger")
const User=require("../models/userModel")
router.post("/signup",logger,(req,res)=>{
console.log(req.body)
res.send("test")
})
module.exports=router
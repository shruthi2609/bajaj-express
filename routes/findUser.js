const express=require("express")
const router=express.Router()
const logger=require("../middleware/logger")
const User=require("../models/userModel")
const authorize=require("../middleware/authorize")
router.get("/findall",authorize,async (req,res)=>{
   const result= await User.find()
   console.log(result)
   res.send(result)
})
module.exports=router
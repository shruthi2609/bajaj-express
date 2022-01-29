const express=require("express")
const router=express.Router()
const logger=require("../middleware/logger")
const User=require("../models/userModel")
router.get("/findall",async (req,res)=>{
   const result= await User.find()
   console.log(result)
   res.send(result)
})
module.exports=router
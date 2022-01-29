const express=require("express")
const router=express.Router()
const logger=require("../middleware/logger")
const User=require("../models/userModel")
router.post("/delete",async (req,res)=>{
    try{
    const data=req.body
    const result=await User.remove({email:data.email})
    console.log(result)
    res.send("deleted successfully")}
    catch(err){
        res.send(err)
    }
})
module.exports=router
const express=require("express")
const router=express.Router()
const logger=require("../middleware/logger")
const User=require("../models/userModel")
const bcrypt=require("bcrypt")
const { findOne } = require("../models/userModel")
router.post("/signin",async (req,res)=>{
    try{
    const data=req.body
    //data.email data.password
    const user=await User.findOne({email:data.email})
    console.log(user.password)
    const authenticate=await bcrypt.compare(data.password,user.password)
    if(authenticate){
        res.send("signed in successfully")
    }
    else{
        res.send("Incorrect Password")
    }
    res.send("fetched")
}
catch(err){
    res.send(err)
}

})
module.exports=router
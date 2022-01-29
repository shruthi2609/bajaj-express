const express=require("express")
const router=express.Router()
const logger=require("../middleware/logger")
const User=require("../models/userModel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const { findOne } = require("../models/userModel")
router.post("/signin",async (req,res)=>{
    try{
    const data=req.body
    //data.email data.password
    const user=await User.findOne({email:data.email})
    console.log(user.password)
    const authenticate=await bcrypt.compare(data.password,user.password)
    if(authenticate){
        const token=jwt.sign({email:user.email},"jamesbond")
        console.log(token)
        const signinInfo={
            msg:"successfuly signedin",
            jwttoken:token
        }
        res.send(signinInfo)
    }
    else{
        res.send("Incorrect Password")
    }
}
catch(err){
    res.send(err)
}

})
module.exports=router
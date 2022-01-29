const express=require("express")
const router=express.Router()
const logger=require("../middleware/logger")
const User=require("../models/userModel")
router.post("/signup",logger,(req,res)=>{
const data=req.body
const user1=new User(
    {
        email:data.email,
        password:data.password,
        mobile:data.mobile,
        area:data.area,
        pincode:data.pincode,
       
        address:data.area+data.pincode+data.country,
        country:data.country,
    }
)
user1.save().then(()=>res.send("user added successfully"))
})
module.exports=router
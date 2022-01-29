const express=require("express")
const router=express.Router()
const logger=require("../middleware/logger")
const User=require("../models/userModel")
router.post("/signup",logger,async (req,res)=>{
const data=req.body
try{
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
await user1.save().then(()=>res.send("user added"))
}
catch(err){
res.send(err)
}
/*user1.save( (err,data)=>{
if(err){
  res.send(err)
}
else{
    res.send("user added successfully")
}
})*/
})
module.exports=router
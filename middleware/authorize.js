
const jwt=require("jsonwebtoken")
const User = require("../models/userModel")
async function authorize(req,res,next){
try{
    const authheader=req.headers["authorization"]
    const token=authheader.replace("Bearer ","")
    const decodedtoken=jwt.verify(token,"jamesbond")
    console.log(decodedtoken)
    const user=await User.findOne({email:decodedtoken.email})
    req.user=user
    next()
}
catch(err){
res.send(err)
}
}
module.exports=authorize
